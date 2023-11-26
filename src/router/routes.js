const routes = [
  {
    path: "/",
    component: () => import("layouts/UserAuth.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/UserAuth/Login.vue"),
      },
      {
        path: "register",
        component: () => import("pages/UserAuth/Register.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/Admin/Dashboard.vue"),
      },
      {
        path: "/inventory",
        component: () => import("pages/Admin/Inventory.vue"),
      },
      {
        path: "/userManagement",
        component: () => import("pages/Admin/UserManagement.vue"),
      },
      { path: "/mapping", component: () => import("pages/Admin/Mapping.vue") },
      {
        path: "/settings",
        component: () => import("pages/Admin/Settings.vue"),
      },
      { path: "/message", component: () => import("pages/Admin/Message.vue") },
      {
        path: "/notifications",
        component: () => import("pages/Admin/Notification.vue"),
      },
      {
        path: "/scanner",
        component: () => import("pages/Admin/Scanner.vue"),
      },
      {
        path: "/convo",
        component: () => import("pages/Admin/Convo.vue"),
      },
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
