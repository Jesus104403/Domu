<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 1. Datos para las tarjetas (Stats)
// 1. Datos para las tarjetas (Stats)
// Agregamos <any[]> para decirle a TypeScript que no sea tan estricto con este arreglo
const adminStats = ref<any[]>([
  { label: 'Ventas Totales', value: '$124,500', trend: '+12%', up: true },
  { label: 'Propiedades Activas', value: '432', trend: '+3%', up: true },
  { label: 'Agentes Registrados', value: '...', trend: 'Actualizado', up: true },
  { label: 'Pendientes Revisión', value: '7', trend: 'Urgente', up: false },
]);

// 2. Variable vacía que se llenará con los datos de tu Base de Datos
const topAgents = ref<any[]>([]);

// 3. Función para traer a los agentes reales
const obtenerAgentesDashboard = async () => {
  try {
    const respuesta = await fetch('http://localhost:3000/api/usuarios');
    const usuarios = await respuesta.json();
    
    // Filtramos para obtener solo a los que tienen rol de 'AGENTE'
    const agentesReales = usuarios.filter((u: any) => u.rol === 'AGENTE');
    
    // Actualizamos el número en la tarjeta de estadísticas (la tercera tarjeta)
    adminStats.value[2].value = agentesReales.length.toString();

    // Tomamos solo los primeros 3 agentes para no llenar todo el dashboard (puedes cambiar el 3 por 4 o 5)
    const agentesParaTabla = agentesReales.slice(0, 3);
    
    // Adaptamos los datos del backend para que encajen perfectamente en tu diseño
    topAgents.value = agentesParaTabla.map((agente: any) => ({
      id: agente.id,
      name: agente.nombre,
      sales: '$0', // Como no hay ventas en la BD aún, ponemos 0
      status: 'Activo' // Estado por defecto
    }));

  } catch (error) {
    console.error('Error al obtener agentes para el dashboard:', error);
  }
};

// 4. Ejecutamos la función apenas se abre la página
onMounted(() => {
  obtenerAgentesDashboard();
});
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-slate-800">Resumen de Operaciones</h1>
      <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-sm">
        Generar Reporte Mensual
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="stat in adminStats" :key="stat.label" class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <p class="text-slate-500 text-sm font-medium">{{ stat.label }}</p>
        <div class="flex items-end justify-between mt-2">
          <h3 class="text-2xl font-bold text-slate-900">{{ stat.value }}</h3>
          <span :class="stat.up ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'" class="text-xs font-bold px-2 py-1 rounded">
            {{ stat.trend }}
          </span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="p-5 border-b border-slate-100 flex justify-between items-center">
          <h3 class="font-bold text-slate-800">Últimos Agentes Registrados</h3>
          <router-link to="/admin/agentes" class="text-xs font-bold text-indigo-600 hover:text-indigo-800">Ver todos</router-link>
        </div>
        <table class="w-full text-left border-collapse">
          <thead class="bg-slate-50 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
            <tr>
              <th class="px-6 py-3">Nombre</th>
              <th class="px-6 py-3">Ventas</th>
              <th class="px-6 py-3">Estado</th>
              <th class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-if="topAgents.length === 0">
              <td colspan="4" class="px-6 py-8 text-center text-slate-500 text-sm">No hay agentes para mostrar</td>
            </tr>
            <tr v-for="agent in topAgents" :key="agent.id" class="hover:bg-slate-50 transition">
              <td class="px-6 py-4 text-sm font-bold text-slate-700">{{ agent.name }}</td>
              <td class="px-6 py-4 text-sm text-slate-600">{{ agent.sales }}</td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase">
                  {{ agent.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <button class="text-indigo-600 hover:text-indigo-900 text-sm font-bold">Detalles</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
        <h3 class="font-bold text-slate-800 mb-4">Actividad del Inventario</h3>
        <div class="space-y-4">
          <div v-for="n in 4" :key="n" class="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg">
            <div class="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-lg">🏠</div>
            <div class="flex-1">
              <p class="text-sm font-bold text-slate-800 leading-none">Nueva casa en Venta</p>
              <p class="text-[11px] text-slate-400 mt-1">Hace 2 horas por Agente Ana</p>
            </div>
          </div>
        </div>
        <button class="w-full mt-6 py-2 text-sm text-slate-500 font-bold bg-slate-50 rounded-lg hover:bg-slate-100 transition">
          Ver todo el historial
        </button>
      </div>

    </div>
  </div>
</template>