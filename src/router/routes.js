const routes = [
  {
    path: "/login",
    component: () => import("layouts/UserAuth.vue"),

    children: [
      {
        path: "/login",
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
    meta: { requiresAuth: true },
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
        path: "/restock",
        component: () => import("pages/Admin/Restock.vue"),
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
        path: "/pointofsale",
        component: () => import("pages/Admin/PointOfSale.vue"),
      },
      {
        path: "/convo",
        component: () => import("pages/Admin/Convo.vue"),
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: "/POS",
    component: () => import("layouts/POS.vue"),
    children: [
      {
        path: "/POS",
        component: () => import("pages/POS/HomePOS.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
// router.beforeEach((to, from, next) => {
//   const isLoggedIn = checkUserLogin();

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isLoggedIn) {
//       next("/login");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

// function checkUserLogin() {
//   const userToken = sessionStorage.getItem("token");
//   return !!userToken;
// }

export default routes;
