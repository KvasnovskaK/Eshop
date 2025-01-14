import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SupplementsView from '../views/SupplementsView.vue';
import ClothingView from '../views/ClothingView.vue';
import AccessoriesView from '../views/AccessoriesView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/supplements',
      name: 'supplements',
      component: SupplementsView
    },
    {
      path: '/clothing',
      name: 'clothing',
      component: ClothingView
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: AccessoriesView
    },
    {
      path: '/product/:slug',
      name: 'product-detail',
      component: ProductDetailView
    },
  ],
})

export default router;