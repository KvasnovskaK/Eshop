<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div class="back_button">
         <button @click="goback()"> << </button>
    </div>

  <header>    
    <nav id="nav">      
      <TheNavigation />
    </nav>
  </header>

  <div class="container">
    <div class="main-content">
      <RouterView :key="$route.fullPath" />
    </div>
    <div class="cart-container">
      <CartComponent />
    </div>
  </div>

</template>

<script>
import CartComponent from "./components/Cart.vue";

import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
    CartComponent,
  },
  methods: {
     goback() { 
      if (this.$route.name !== 'home') {
      this.$router.go(-1);
    }
    }
  },
};
</script>

