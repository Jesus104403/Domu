<template>
  <div class="flex h-screen bg-slate-100">
    <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl">
      <div class="p-6 text-white text-2xl font-bold border-b border-slate-800">
        Do<span class="text-indigo-400">mu</span>
      </div>
     
      <nav class="flex-1 p-4 space-y-2">
        <router-link 
          to="/admin/dashboard" 
          class="flex items-center p-3 rounded-lg hover:bg-slate-800 hover:text-white transition"
          active-class="bg-indigo-600 text-white"
        >
          <span class="mr-3">📊</span> Dashboard
        </router-link>
        <div class="text-xs font-semibold text-slate-500 uppercase px-3 mt-6 mb-2">Gestión</div>
        <router-link to="/admin/users" class="flex items-center p-3 rounded-lg hover:bg-slate-800">
          <span class="mr-3">👥</span> Agentes
        </router-link>
        <router-link to="/admin/properties" class="flex items-center p-3 rounded-lg hover:bg-slate-800">
          <span class="mr-3">🏠</span> Propiedades
        </router-link>
      </nav>

      <div class="p-4 border-t border-slate-800">
        <button 
          @click="cerrarSesion" 
          class="w-full flex items-center p-3 text-red-400 hover:bg-red-900/20 rounded-lg transition"
        >
          <span class="mr-3">🚪</span> Salir
        </button>
      </div>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="h-16 bg-white shadow-sm flex items-center justify-between px-8">
        <h2 class="text-lg font-medium text-slate-700">Panel de Control Global</h2>
         <div class="flex items-center gap-4">
          <span class="text-sm font-medium text-indigo-400">{{ nombreUsuario }}</span>
          <img :src="`https://ui-avatars.com/api/?name=${nombreUsuario}&background=random`" class="w-8 h-8 rounded-full border">
        </div>
      </header>
      
      <main class="flex-1 overflow-x-hidden overflow-y-auto p-8">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';


// Obtenemos el nombre guardado, o ponemos uno por defecto si no lo encuentra
const nombreUsuario = ref(localStorage.getItem('nombre') || 'Admin');

const router = useRouter();

const cerrarSesion = () => {
  // 1. Vaciamos los "bolsillos" del usuario (borramos sus accesos)
  localStorage.removeItem('token');
  localStorage.removeItem('rol');
  localStorage.removeItem('nombre');

  // 2. Lo mandamos de regreso al login
  router.push('/login');
};
</script>