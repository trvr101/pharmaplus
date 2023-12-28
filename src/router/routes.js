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
const requireBranchAdmin = (to, from, next) => {
  // Check if the route requires admin role
  if (to.meta.requiresAdmin) {
    // Check if the user has the admin role in session storage
    const userRole = sessionStorage.getItem("user_role");

    if (!userRole || userRole !== "branch_admin") {
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
    path: "/",
    component: () => import("layouts/RegularUser.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/RegularUser/Mapping.vue"),
      },
    ],
  },
  {
    // open for all even no login
    path: "/login",
    component: () => import("layouts/UserAuth.vue"),
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
      {
        path: "/branch",
        component: () => import("pages/Admin/BranchManagement.vue"),
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
        path: "/sales",
        component: () => import("pages/Admin/Sales.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      {
        path: "/convo",
        component: () => import("pages/Admin/Convo.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireAdmin,
      },
      {
        path: "/UserProfile/:token",
        component: () => import("pages/Admin/UserProfile.vue"),
      },
      {
        path: "/ProductAudit/:token/:product_id",
        component: () => import("pages/Admin/ProductAudit.vue"),
      },
    ],
  },
  {
    // Branch Admin
    path: "/Branch_Dashboar",
    component: () => import("layouts/Branch.vue"),
    meta: { requiresAuth: true, requiresAdmin: true },
    beforeEnter: requireBranchAdmin,
    children: [
      {
        path: "/Branch_dashboard",
        component: () => import("pages/Branch/Dashboard.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_inventory",
        component: () => import("pages/Branch/Inventory.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_restock",
        component: () => import("pages/Branch/Restock.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_userManagement",
        component: () => import("pages/Branch/UserManagement.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_mapping",
        component: () => import("pages/Branch/Mapping.vue"),
      },
      {
        path: "/Branch_settings",
        component: () => import("pages/Branch/Settings.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_branch",
        component: () => import("pages/Branch/BranchManagement.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_message",
        component: () => import("pages/Branch/Message.vue"),
      },
      {
        path: "/Branch_notifications",
        component: () => import("pages/Branch/Notification.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_scanner",
        component: () => import("pages/Branch/Scanner.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_sales",
        component: () => import("pages/Branch/Sales.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/Branch_convo",
        component: () => import("pages/Branch/Convo.vue"),
        meta: { requiresAuth: true, requiresAdmin: true },
        beforeEnter: requireBranchAdmin,
      },
      {
        path: "/BranchUserProfile/:token",
        component: () => import("pages/Branch/UserProfile.vue"),
      },
      {
        path: "/branch/productAudit/:token/:product_id",
        component: () => import("pages/Branch/ProductAudit.vue"),
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
