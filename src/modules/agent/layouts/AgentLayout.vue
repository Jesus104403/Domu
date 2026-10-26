<template>
  <div class="flex h-screen bg-indigo-50/30">
    <aside class="w-20 lg:w-64 bg-white border-r border-indigo-100 flex flex-col transition-all">
      <div class="p-6 text-indigo-600 text-xl font-black">
        Inmo<span class="text-slate-800">Agent</span>
      </div>

      <nav class="flex-1 px-4 space-y-1">
        <router-link 
          to="/agent/dashboard" 
          class="flex items-center p-3 rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
          active-class="bg-indigo-600 !text-white"
        >
          <span class="text-xl">⚡</span> 
          <span class="ml-3 hidden lg:block">Mis Ventas</span>
        </router-link>
        <router-link to="/agent/leads" class="flex items-center p-3 rounded-xl text-slate-600 hover:bg-indigo-50">
          <span class="text-xl">🎯</span> 
          <span class="ml-3 hidden lg:block">Prospectos</span>
        </router-link>
      </nav>

      <div class="p-4 bg-indigo-600 m-4 rounded-2xl text-white text-center hidden lg:block">
        <p class="text-xs opacity-80">Comisión este mes</p>
        <p class="text-lg font-bold">$2,450.00</p>
      </div>

      <div class="p-4 border-t border-indigo-50 mt-auto">
        <button 
          @click="cerrarSesion" 
          class="w-full flex items-center justify-center lg:justify-start p-3 text-rose-500 hover:bg-rose-50 rounded-xl transition font-medium"
        >
          <span class="text-xl">🚪</span> 
          <span class="ml-3 hidden lg:block">Cerrar Sesión</span>
        </button>
      </div>
    </aside>

    <div class="flex-1 flex flex-col">
      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const cerrarSesion = () => {
  // 1. Borramos el token y los datos del agente
  localStorage.removeItem('token');
  localStorage.removeItem('rol');
  localStorage.removeItem('nombre');

  // 2. Lo regresamos al login
  router.push('/login');
};
</script>