<template>
  <h1 class="text-3xl font-bold text-white text-center mb-8">Signup</h1>

  <div v-if="errorMensaje" class="bg-red-500/10 border border-red-500/50 text-red-400 text-sm font-bold p-4 rounded-2xl mb-6 text-center">
    {{ errorMensaje }}
  </div>
  <div v-if="exitoMensaje" class="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 text-sm font-bold p-4 rounded-2xl mb-6 text-center">
    {{ exitoMensaje }}
  </div>

  <form @submit.prevent="handleRegister" class="space-y-5">
    <div>
      <label class="block text-sm font-semibold text-gray-300 mb-2 ml-1">Full Name</label>
      <input v-model="name" type="text" placeholder="Your name" 
             class="w-full bg-[#1e1e1e] border-none text-white rounded-2xl px-5 py-4 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all">
    </div>

    <div>
      <label class="block text-sm font-semibold text-gray-300 mb-2 ml-1">Email</label>
      <input v-model="email" type="email" placeholder="example@mail.com" 
             class="w-full bg-[#1e1e1e] border-none text-white rounded-2xl px-5 py-4 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all">
    </div>

    <div>
      <label class="block text-sm font-semibold text-gray-300 mb-2 ml-1">Password</label>
      <input v-model="password" type="password" placeholder="Min. 8 characters" 
             class="w-full bg-[#1e1e1e] border-none text-white rounded-2xl px-5 py-4 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all">
    </div>

    <button type="submit" class="w-full bg-[#6366f1] text-white font-bold py-4 rounded-2xl hover:bg-[#5558e6] transition-all mt-4">
      Create Account
    </button>
  </form>

  <p class="text-center mt-8 text-gray-400 text-sm">
    Already have an account? 
    <router-link to="/login" class="text-indigo-400 font-bold hover:text-indigo-300 ml-1">Login</router-link>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importamos el router

const name = ref('');
const email = ref('');
const password = ref('');

// Variables para los mensajes visuales
const errorMensaje = ref('');
const exitoMensaje = ref('');
const router = useRouter();

const handleRegister = async () => {
  // Limpiamos mensajes anteriores
  errorMensaje.value = '';
  exitoMensaje.value = '';

  try {
    const respuesta = await fetch('http://localhost:3000/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: name.value, // Le pasamos la variable 'name' a la propiedad 'nombre' que espera tu backend
        email: email.value,
        password: password.value,
        rol: 'AGENTE' // Forzamos a que sea un agente
      })
    });

    const data = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(data.error || 'Hubo un problema al crear la cuenta');
    }

    // Si todo salió bien
    exitoMensaje.value = '¡Cuenta creada con éxito! Redirigiendo al login...';
    
    // Esperamos 2 segundos para que se vea el mensaje y lo mandamos al login
    setTimeout(() => {
      router.push('/login');
    }, 2000);

  } catch (error: any) {
    console.error('Error en registro:', error);
    errorMensaje.value = error.message;
  }
};
</script>