<template>
    <div class="size-selector">
      <p>Vyber veľkosť:</p>
      <div class="size-buttons">
        <button
          v-for="size in sizes"
          :key="size"
          @click="selectSize(size)"
          class="size-button"
        >
          {{ size }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
    data() {
      return {
        sizes: ["XS", "S", "M", "L"],
      };
    },
    methods: {
      selectSize(size) {
        this.$emit("size-selected", { ...this.product, size });
      },
    },
  };
  </script>
