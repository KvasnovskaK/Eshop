<template>
  <div class="cart-component">
    <h2>Košík</h2>
    <div v-if="cart.length === 0">
      <p>Tvoj košík je prázdny!</p>
    </div>
    <div v-else>
      <ul class="cart-list">
        <li v-for="item in cart" :key="item.name" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-item-image" />
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p>Cena: €{{ item.price }}</p>
            <p>Počet: {{ item.quantity }}</p>
            <p v-if="item.size">Size: {{ item.size }}</p>
            <p>Spolu: €{{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
          <p>
          <button @click="removeFromCart(item.name)">Odstrániť</button>
          </p>
        </li>
      </ul>
      <div class="cart-total">
        <h3>Spolu: €{{ cartTotal }}</h3>
      </div>
      <button class="clear-cart-button" @click="clearCart">Vymazať košík</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/CartStore";
import { computed } from "vue";

export default {
  name: "CartComponent",
  setup() {
    const cartStore = useCartStore();
    const cart = computed(() => cartStore.cart);
    const cartTotal = computed(() => cartStore.cartTotal);

    const removeFromCart = (productName) => {
      cartStore.removeFromCart(productName);
    };

    const clearCart = () => {
      cartStore.clearCart();
      location.reload();
    };

    return {
      cart,
      cartTotal,
      removeFromCart,
      clearCart,
    };
  },
};
</script>
