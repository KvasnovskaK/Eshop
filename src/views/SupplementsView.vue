<template>
  <div class="category">
    <h1>Výživové doplnky</h1>
    <div class="subcategory-list">
      <button
        v-for="subcategory in categories"
        :key="subcategory.id"
        @click="selectSubcategory(subcategory)"
        class="subcategory-button"
      >
        {{ subcategory.name }}
      </button>
    </div>
    <CategoryCard v-if="selectedSubcategory" :subcategory="selectedSubcategory" />
  </div>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue";
import data from "../data.json";

export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      categories: [],
      selectedSubcategory: null,
    };
  },
  created() {
    const supplementsCategory = data.categories.find(cat => cat.name === "Výživové doplnky");
    if (supplementsCategory) {
      this.categories = supplementsCategory.subcategories;
    }
  },
  methods: {
    selectSubcategory(subcategory) {
      this.selectedSubcategory = subcategory;
    },
  },
};
</script>

