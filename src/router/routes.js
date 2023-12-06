const requireAuth = (to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // Check if there is a token in session storage
    const token = sessionStorage.getItem("token");
    const userRole = sessionStorage.getItem("user_role");

    if (!token && !userRole) {
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

const requireAdmin = (to, from, next) => {
  // Check if the route requires admin role
  if (to.meta.requiresAdmin) {
    // Check if the user has the admin role in session storage
    const userRole = sessionStorage.getItem("user_role");

    if (!userRole || userRole !== "admin") {
      // Redirect to login if not authenticated or not an admin
      next("/login");
    } else {
      // Continue to the route if authenticated and has the admin role
      next();
    }
  } else {
    // Continue to the route if it doesn't require admin role
    next();
  }
};

const requireCashier = (to, from, next) => {
  // Check if the route requires cashier role
  if (to.meta.requiresCashier) {
    // Check if the user has the cashier role in session storage
    const userRole = sessionStorage.getItem("user_role");

    if (!userRole || userRole !== "cashier") {
      // Redirect to login if not authenticated or not a cashier
      next("/login");
    } else {
      // Continue to the route if authenticated and has the cashier role
      next();
    }
  } else {
    // Continue to the route if it doesn't require cashier role
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
    // for admin with token only
    path: "/dashboar",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true, requiresAdmin: true },
    beforeEnter: requireAdmin,
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/Admin/Dashboard.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      {
        path: "/inventory",
        component: () => import("pages/Admin/Inventory.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      {
        path: "/restock",
        component: () => import("pages/Admin/Restock.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      {
        path: "/userManagement",
        component: () => import("pages/Admin/UserManagement.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      { path: "/mapping", component: () => import("pages/Admin/Mapping.vue") },
      {
        path: "/settings",
        component: () => import("pages/Admin/Settings.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      { path: "/message", component: () => import("pages/Admin/Message.vue") },
      {
        path: "/notifications",
        component: () => import("pages/Admin/Notification.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      {
        path: "/scanner",
        component: () => import("pages/Admin/Scanner.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      {
        path: "/pointofsale",
        component: () => import("pages/Admin/PointOfSale.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      {
        path: "/convo",
        component: () => import("pages/Admin/Convo.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
    ],
  },
  {
    // for cashier with token only
    path: "/POS",
    component: () => import("layouts/POS.vue"),
    meta: { requiresAuth: true, requiresCashier: true },
    beforeEnter: requireCashier,
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
