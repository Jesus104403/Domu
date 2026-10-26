<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-slate-800">Inventario de Propiedades</h1>
      <button 
        @click="abrirModal()" 
        class="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 transition shadow-sm text-sm"
      >
        + Nueva Propiedad
      </button>
    </div>

    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-50 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
          <tr>
            <th class="px-6 py-4">Propiedad</th>
            <th class="px-6 py-4">Ubicacion</th>
            <th class="px-6 py-4">Precio</th>
            <th class="px-6 py-4">Tipo</th>
            <th class="px-6 py-4">Hab / Baños</th>
            <th class="px-6 py-4 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-if="propiedades.length === 0">
             <td colspan="5" class="px-6 py-8 text-center text-slate-500 font-medium">No hay propiedades registradas aún.</td>
          </tr>
          <tr v-for="propiedad in propiedades" :key="propiedad.id" class="hover:bg-slate-50 transition">
            <td class="px-6 py-4 flex items-center gap-3">
            <img v-if="propiedad.imagen" :src="'http://localhost:3000' + propiedad.imagen" class="w-12 h-12 rounded-lg object-cover border border-slate-100 shadow-sm">
            <div v-else class="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-xs text-slate-400">Sin foto</div>
            <div>
                <p class="text-sm font-bold text-slate-700">{{ propiedad.titulo }}</p>
                <p class="text-[10px] text-slate-400">{{ propiedad.ubicacion }}</p>
            </div>
            </td>
            <td class="px-6 py-4 text-sm text-slate-500">${{ propiedad.precio.toLocaleString() }}</td>
            <td class="px-6 py-4">
              <span 
                :class="propiedad.tipo === 'Venta' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'"
                class="px-3 py-1 rounded-full text-[10px] font-bold uppercase"
              >
                {{ propiedad.tipo }}
              </span>
            </td>
            <td class="px-6 py-4 text-sm text-slate-500">
              🛏️ {{ propiedad.habitaciones }} | 🚿 {{ propiedad.banos }}
            </td>
            <td class="px-6 py-4 text-right space-x-3">
              <button @click="abrirModal(propiedad)" class="text-blue-500 hover:text-blue-700 font-bold text-sm">Editar</button>
              <button @click="eliminarPropiedad(propiedad.id)" class="text-rose-500 hover:text-rose-700 font-bold text-sm">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="mostrarModal" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl">
        <h2 class="text-xl font-bold mb-6 text-slate-800">
          {{ editandoId ? 'Editar Propiedad' : 'Nueva Propiedad' }}
        </h2>
        
        <form @submit.prevent="guardarPropiedad" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Título</label>
            <input v-model="form.titulo" type="text" required placeholder="Ej: Casa Modelo 1" class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Descripción</label>
            <textarea v-model="form.descripcion" rows="2" class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Precio</label>
              <input v-model="form.precio" type="number" required class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Tipo de Operación</label>
              <select v-model="form.tipo" class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="Venta">Venta</option>
                <option value="Renta">Renta</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Habitaciones</label>
              <input v-model="form.habitaciones" type="number" min="0" required class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Baños</label>
              <input v-model="form.banos" type="number" min="0" required class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Ubicación (Dirección)</label>
            <input v-model="form.ubicacion" type="text" placeholder="Ej: Av. Principal #123, Col. Centro" class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
            </div>

            <div>
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Foto de la Propiedad</label>
            <input type="file" @change="manejarFoto" accept="image/*" class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100">
            </div>

          <div class="flex space-x-3 pt-4">
            <button type="button" @click="mostrarModal = false" class="flex-1 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition">Cancelar</button>
            <button type="submit" class="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition">
              {{ editandoId ? 'Actualizar' : 'Guardar' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const propiedades = ref([]);
const mostrarModal = ref(false);
const editandoId = ref(null);

// Variables del formulario mapeadas a tu modelo de Prisma
const form = ref({
  titulo: '',
  descripcion: '',
  precio: 0,
  tipo: 'Venta',
  habitaciones: 1,
  banos: 1
});

const obtenerPropiedades = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/propiedades');
    propiedades.value = await res.json();
  } catch (error) {
    console.error('Error al cargar propiedades', error);
  }
};

const abrirModal = (propiedad = null) => {
  if (propiedad) {
    editandoId.value = propiedad.id;
    form.value = { 
      titulo: propiedad.titulo, 
      descripcion: propiedad.descripcion || '', 
      precio: propiedad.precio, 
      tipo: propiedad.tipo,
      habitaciones: propiedad.habitaciones,
      banos: propiedad.banos
    };
  } else {
    editandoId.value = null;
    form.value = { titulo: '', descripcion: '', precio: 0, tipo: 'Venta', habitaciones: 1, banos: 1 };
  }
  mostrarModal.value = true;
};


const fotoSeleccionada = ref(null);

const manejarFoto = (event) => {
  fotoSeleccionada.value = event.target.files[0];
};

const guardarPropiedad = async () => {
  // USAMOS FORMDATA PARA PODER ENVIAR LA IMAGEN
  const formData = new FormData();
  formData.append('titulo', form.value.titulo);
  formData.append('descripcion', form.value.descripcion);
  formData.append('precio', form.value.precio);
  formData.append('tipo', form.value.tipo);
  formData.append('habitaciones', form.value.habitaciones);
  formData.append('banos', form.value.banos);
  formData.append('ubicacion', form.value.ubicacion);
  
  if (fotoSeleccionada.value) {
    formData.append('imagen', fotoSeleccionada.value);
  }

  const url = editandoId.value 
    ? `http://localhost:3000/api/propiedades/${editandoId.value}` 
    : 'http://localhost:3000/api/propiedades';
  
  // Nota: Al usar FormData, NO pongas 'Content-Type': 'application/json'
  try {
    const res = await fetch(url, {
      method: editandoId.value ? 'PUT' : 'POST',
      body: formData // Enviamos el formData directamente
    });

    if (res.ok) {
      mostrarModal.value = false;
      fotoSeleccionada.value = null; // Limpiar selección
      obtenerPropiedades();
    }
  } catch (error) {
    console.error(error);
  }
};

const eliminarPropiedad = async (id) => {
  if (!confirm('¿Estás seguro de eliminar esta propiedad?')) return;
  await fetch(`http://localhost:3000/api/propiedades/${id}`, { method: 'DELETE' });
  obtenerPropiedades();
};

onMounted(obtenerPropiedades);
</script>