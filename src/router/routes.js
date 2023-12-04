const requireAuth = (to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // Check if there is a token in session storage
    const token = sessionStorage.getItem("token");

    if (!token) {
      // Redirect to login if not authenticated
      next("/login");
    } else {
      // Continue to the route if authenticated
      next();
    }
  } else {
    // Continue to the route if it doesn't require authentication
    next();
  }
};

const routes = [
  {
    // open for all even no login
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
    // for login only
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
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
    // for login only
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

export default routes;
