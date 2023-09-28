import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: "",
          name: "products",
          component: () => import("@/views/Catalog/ListView.vue"),
        },
      ],
    },
  ],
});
export default router;
