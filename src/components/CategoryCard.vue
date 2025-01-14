<template>
    <div class="subcategory-products">
      <h3>{{ subcategory.name }}</h3>
      <ul class="product-list">
        <li v-for="product in subcategory.products" :key="product.id">
          <img :src="product.image" :alt="product.name" @click="goToProductPage(product.slug)" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }} €</p>
          
          <div v-if="isFitnessClothing(product)">
            <button v-if="!selectedProduct || selectedProduct.id !== product.id" @click="showSizeSelector(product)">
              Pridať do košíka
            </button>
            <SizeSelector
              v-else
              :product="product"
              @size-selected="addToCart"
            />
          </div>
          <div v-else>
            <button @click="addToCart(product)">Pridaj do košíka</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useCartStore } from "../stores/CartStore";
  import SizeSelector from "./SizeSelector.vue";
  import data from "../data.json"; 
  
  export default {
    props: {
      subcategory: Object,
    },
    data() {
      return {
        selectedProduct: null, 
      };
    },
    methods: {
      goToProductPage(slug) {
        this.$router.push({ name: "product-detail", params: { slug } });
      },
      showSizeSelector(product) {
        this.selectedProduct = product;
      },
      addToCart(productWithSize) {
        const cartStore = useCartStore();
        cartStore.addToCart(productWithSize);
        this.selectedProduct = null;
      },
      isFitnessClothing(product) {
        for (const category of data.categories) {
          if (category.name === "Fitness oblečenie") {
            for (const subcategory of category.subcategories) {
              if (subcategory.products.find((p) => p.id === product.id)) {
                return true;
              }
            }
          }
        }
        return false;
      },
    },
    components: {
      SizeSelector,
    },
  };
  </script>
  
  
  

  