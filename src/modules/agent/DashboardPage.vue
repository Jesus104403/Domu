<template>
  <div class="space-y-8">
    <header>
  <h1 class="text-2xl font-bold text-slate-800">¡Hola de nuevo, {{ nombreUsuario }}!</h1>
  <p class="text-slate-500 text-sm">Esto es lo que está pasando con tus propiedades hoy.</p>
</header>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-indigo-50">
        <div class="flex items-center justify-between">
          <span class="text-slate-500 text-sm font-medium">Nuevos Leads</span>
          <span class="bg-indigo-100 text-indigo-600 p-2 rounded-lg text-xs font-bold">+5</span>
        </div>
        <div class="text-3xl font-bold text-slate-800 mt-2">12</div>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-indigo-50">
        <span class="text-slate-500 text-sm font-medium">Visitas esta semana</span>
        <div class="text-3xl font-bold text-slate-800 mt-2">8</div>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-indigo-50">
        <span class="text-slate-500 text-sm font-medium">Propiedades Activas</span>
        <div class="text-3xl font-bold text-slate-800 mt-2">15</div>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm border border-indigo-50">
        <span class="text-slate-500 text-sm font-medium">Meta Mensual</span>
        <div class="w-full bg-gray-100 h-2 rounded-full mt-4">
          <div class="bg-green-500 h-2 rounded-full" style="width: 65%"></div>
        </div>
        <p class="text-xs text-slate-400 mt-2">65% completado</p>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-bold text-slate-800">Prospectos Recientes</h3>
          <button class="text-indigo-600 text-sm font-semibold hover:underline">Ver todos</button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="text-slate-400 text-sm uppercase">
                <th class="pb-4">Cliente</th>
                <th class="pb-4">Interés</th>
                <th class="pb-4">Estado</th>
                <th class="pb-4 text-right">Acción</th>
              </tr>
            </thead>
            <tbody class="text-slate-600">
              <tr class="border-t border-slate-50">
                <td class="py-4 font-medium text-slate-800 text-sm">Roberto Sánchez</td>
                <td class="py-4 text-sm">Casa Valle Real</td>
                <td class="py-4">
                  <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">Agendar Cita</span>
                </td>
                <td class="py-4 text-right font-bold text-indigo-600 cursor-pointer">📞</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
        <h3 class="font-bold text-slate-800 mb-6">Agenda de Hoy</h3>
        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="flex flex-col items-center">
              <span class="text-xs font-bold text-slate-400 uppercase">10:00</span>
              <div class="w-px h-full bg-slate-200 my-1"></div>
            </div>
            <div>
              <p class="text-sm font-bold text-slate-800 leading-none">Muestra: Loft Industrial</p>
              <p class="text-xs text-slate-500 mt-1">Con: Laura Méndez</p>
            </div>
          </div>
          </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Recuperamos el nombre del localStorage. 
// Si por alguna razón no existe, ponemos 'Agente' por defecto.
const nombreUsuario = ref(localStorage.getItem('nombre') || 'Agente');

// ... aquí va el resto de tu lógica (stats, props, etc.)
</script>