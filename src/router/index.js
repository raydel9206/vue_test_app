import { createRouter, createWebHashHistory  } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory (),
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
        {
          path: "/product_detail/:id",
          name: "product_detail",
          component: () => import("@/views/Catalog/DetailView.vue"),
        },
      ],
    },
  ],
});
export default router;
