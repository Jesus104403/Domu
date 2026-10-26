<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-slate-800">Directorio de Usuarios</h1>
      <button 
        @click="abrirModal()" 
        class="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 transition shadow-sm text-sm"
      >
        + Nuevo Usuario
      </button>
    </div>

    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-50 text-slate-400 text-[11px] uppercase font-bold tracking-wider">
          <tr>
            <th class="px-6 py-4">Nombre</th>
            <th class="px-6 py-4">Correo</th>
            <th class="px-6 py-4">Rol</th>
            <th class="px-6 py-4 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="agente in agentes" :key="agente.id" class="hover:bg-slate-50 transition">
            <td class="px-6 py-4 text-sm font-bold text-slate-700">{{ agente.nombre }}</td>
            <td class="px-6 py-4 text-sm text-slate-500">{{ agente.email }}</td>
            <td class="px-6 py-4">
              <span class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-bold uppercase">
                {{ agente.rol }}
              </span>
            </td>
            <td class="px-6 py-4 text-right space-x-2">
              <button @click="abrirModal(agente)" class="text-blue-500 hover:text-blue-700 font-bold text-sm">Editar</button>
              <button @click="eliminarAgente(agente.id)" class="text-red-500 hover:text-red-700 font-bold text-sm">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="mostrarModal" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h2 class="text-xl font-bold mb-6 text-slate-800">
          {{ editandoId ? 'Editar Usuario' : 'Nuevo Usuario' }}
        </h2>
        
        <form @submit.prevent="guardarUsuario" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Nombre</label>
            <input v-model="form.nombre" type="text" required class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Email</label>
            <input v-model="form.email" type="email" required class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
          </div>
          
          <div v-if="!editandoId">
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Contraseña</label>
            <input v-model="form.password" type="password" required class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Rol</label>
            <select v-model="form.rol" class="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="AGENTE">AGENTE</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>

          <div class="flex space-x-3 pt-4">
            <button type="button" @click="mostrarModal = false" class="flex-1 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition">Cancelar</button>
            <button type="submit" class="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition">
              {{ editandoId ? 'Actualizar' : 'Crear' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const agentes = ref([]);
const mostrarModal = ref(false);
const editandoId = ref(null);

const form = ref({
  nombre: '',
  email: '',
  password: '',
  rol: 'AGENTE'
});

const obtenerAgentes = async () => {
  try {
    // 👇 CAMBIAMOS LA RUTA AQUÍ 👇
    const res = await fetch('http://localhost:3000/api/usuarios');
    agentes.value = await res.json();
  } catch (error) {
    console.error('Error al cargar la lista:', error);
  }
};
const abrirModal = (agente = null) => {
  if (agente) {
    editandoId.value = agente.id;
    form.value = { nombre: agente.nombre, email: agente.email, rol: agente.rol, password: '' };
  } else {
    editandoId.value = null;
    form.value = { nombre: '', email: '', password: '', rol: 'AGENTE' };
  }
  mostrarModal.value = true;
};

const guardarUsuario = async () => {
  // Si hay un ID, editamos en /api/usuarios/:id. Si NO hay ID, creamos en tu ruta /api/registro
  const url = editandoId.value 
    ? `http://localhost:3000/api/usuarios/${editandoId.value}` 
    : 'http://localhost:3000/api/registro'; // <-- ¡Aquí apuntamos a tu ruta!
  
  const metodo = editandoId.value ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    });

    if (res.ok) {
      mostrarModal.value = false;
      obtenerAgentes(); // Recargamos la tabla para ver al nuevo usuario
    } else {
      // Si el backend manda error (como correo duplicado), lo mostramos
      const errorData = await res.json();
      alert(errorData.error || "Hubo un problema al guardar el usuario");
    }
  } catch (error) {
    console.error(error);
    alert("Error de conexión con el servidor");
  }
};

const eliminarAgente = async (id) => {
  if (!confirm('¿Estás seguro de eliminar este usuario?')) return;
  
  await fetch(`http://localhost:3000/api/usuarios/${id}`, { method: 'DELETE' });
  obtenerAgentes();
};

onMounted(obtenerAgentes);
</script>