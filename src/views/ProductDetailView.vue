<template>
    <div class="product-detail">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.price }} €</p>
      <p>{{ product.description }}</p>
  
      <div v-if="isFitnessClothing(product)">
        <button v-if="!sizeSelectorVisible" @click="showSizeSelector">Pridaj do košíka</button>
        <SizeSelector
          v-else :product="product"  @size-selected="addToCart"
        />
      </div>
      <div v-else>
        <button @click="addToCart(product)">Pridaj do košíka</button>
      </div>
    </div>
  </template>
  
  <script>
  import data from "../data.json";
  import { useCartStore } from "../stores/CartStore";
  import SizeSelector from "../components/SizeSelector.vue";
  
  export default {
    data() {
      return {
        product: {},
        sizeSelectorVisible: false, 
      };
    },
    computed: {
      products() {
        const cartStore = useCartStore();
        return cartStore.products;
      },
    },
    created() {
      const slug = this.$route.params.slug;
      this.product = this.findProductBySlug(slug);
    },
    methods: {
      findProductBySlug(slug) {
        for (const category of data.categories) {
          for (const subcategory of category.subcategories) {
            const product = subcategory.products.find((prod) => prod.slug === slug);
            if (product) return product;
          }
        }
        return null;
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
      showSizeSelector() {
        this.sizeSelectorVisible = true;
      },
      addToCart(productWithSize) {
        const cartStore = useCartStore();
        cartStore.addToCart(productWithSize);
        this.sizeSelectorVisible = false; 
      },
    },
    components: {
      SizeSelector,
    },
  };
  </script>
  
  
  