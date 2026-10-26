
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ... (Tus rutas de landing y auth quedan EXACTAMENTE IGUAL) ...
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage, // Tu HomePage cargará por defecto
        },
        {
          path: 'property', // (Opcional) También es buena práctica quitar la diagonal inicial a los demás hijos
          name: 'property',
          component: () => import('@/modules/landing/pages/PropertyPage.vue'),
        },
        {
          path: 'propertyDetail',
          name: 'propertyDetail',
          component: () => import('@/modules/landing/pages/PropertyDetailPage.vue'),
        },
      ],
    },
    // Auth (Ejemplo de cómo dejarlo)
    {
      path: '/auth',
      redirect: '/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        { path: '/login', name: 'login', component: () => import('@/modules/auth/pages/LoginPage.vue') },
        { path: '/register', name: 'register', component: () => import('@/modules/auth/pages/RegisterPage.vue') },
      ],
    },

    // --- DASHBOARD ADMIN ---
    {
      path: '/admin',
      name: 'admin',
      redirect: { name: 'admin-dashboard' },
      component: () => import('@/modules/admin/layouts/AdminLayout.vue'),
      meta: { requiresAuth: true, roleRequired: 'ADMIN' }, // 👈 AGREGAMOS ESTO
      children: [
        { path: 'dashboard', name: 'admin-dashboard', component: () => import('@/modules/admin/DashboardPage.vue') },
        { path: '/admin/users', name: 'admin-users', component: () => import('@/modules/admin/AgentsPage.vue') },
        { path: '/admin/properties', name: 'admin-properties', component: () => import('@/modules/admin/PropertiesPage.vue') },
      ],
    },

     

    // --- DASHBOARD AGENTE ---
    {
      path: '/agent',
      name: 'agent',
      redirect: { name: 'agent-dashboard' },
      component: () => import('@/modules/agent/layouts/AgentLayout.vue'),
      meta: { requiresAuth: true, roleRequired: 'AGENTE' }, // 👈 AGREGAMOS ESTO
      children: [
        { path: 'dashboard', name: 'agent-dashboard', component: () => import('@/modules/agent/DashboardPage.vue') },
      ],
    },
  ],
});

// ==========================================
// EL "CADENERO" (GUARDIÁN DE RUTAS)
// ==========================================
router.beforeEach((to, from, next) => {
  // 1. Revisamos qué tiene el usuario en los bolsillos (localStorage)
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('rol');

  // 2. ¿La ruta a la que va requiere estar logeado?
  if (to.meta.requiresAuth) {
    
    // Si no tiene token, lo pateamos al Login
    if (!token) {
      return next({ name: 'login' });
    }

    // Si tiene token pero intenta entrar al dashboard equivocado (Ej: Agente queriendo entrar a Admin)
    if (to.meta.roleRequired && to.meta.roleRequired !== userRole) {
      // Lo mandamos a su dashboard correspondiente
      if (userRole === 'ADMIN') return next({ name: 'admin-dashboard' });
      if (userRole === 'AGENTE') return next({ name: 'agent-dashboard' });
    }
  }

  // 3. ¿Intentar ir al Login cuando ya inició sesión?
  if (token && (to.name === 'login' || to.name === 'register')) {
    if (userRole === 'ADMIN') return next({ name: 'admin-dashboard' });
    if (userRole === 'AGENTE') return next({ name: 'agent-dashboard' });
  }

  // 4. Si todo está en orden, lo dejamos pasar
  next();
});

export default router;