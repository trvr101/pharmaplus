const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/indexPage",
        component: () => import("pages/Admin/IndexPage.vue"),
      },
      {
        path: "/inventory",
        component: () => import("pages/Admin/Inventory.vue"),
      },
      {
        path: "/userManagement",
        component: () => import("pages/Admin/UserManagement.vue"),
      },
      { path: "/sales", component: () => import("pages/Admin/Sales.vue") },
      {
        path: "/settings",
        component: () => import("pages/Admin/Settings.vue"),
      },
      { path: "/message", component: () => import("pages/Admin/Message.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
