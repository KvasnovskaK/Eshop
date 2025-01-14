import { defineStore } from "pinia";
import data from "../data.json";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    products: data.categories.flatMap(category =>
      category.subcategories.flatMap(subcategory => subcategory.products)
    ),
    cart: [],
    total: 0
  }),
  getters: {
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
  actions: {
    async loadProducts() {
      this.products = data.categories.flatMap(category =>
        category.subcategories.flatMap(subcategory => subcategory.products)
      );
    },
    addToCart(product) {
      const existingProduct = this.cart.find(
        (item) => item.name === product.name && item.size === product.size
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    
    removeFromCart(productName) {
      this.cart = this.cart.filter((item) => item.name !== productName);
    },
    clearCart() {
      this.cart = [];
      
    },
  },
});
