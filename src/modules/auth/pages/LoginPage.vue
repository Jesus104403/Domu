<template>
 
      <h1 class="text-3xl font-bold text-white text-center mb-10">Login</h1>
      <div v-if="errorMensaje" class="bg-red-500/10 border border-red-500 text-red-500 text-sm font-bold p-4 rounded-2xl mb-6 text-center">
      {{ errorMensaje }}
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-semibold text-gray-300 mb-2 ml-1">Email</label>
          <input 
            v-model="email"
            type="email" 
            placeholder="Email Address" 
            class="w-full bg-[#1e1e1e] border-none text-white rounded-2xl px-5 py-4 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          >
        </div>

       <div>
  <label class="block text-sm font-semibold text-gray-300 mb-2 ml-1">Password</label>
  <div class="relative">
    
    <input 
      v-model="password"
      :type="mostrarPassword ? 'text' : 'password'" 
      placeholder="Password" 
      class="w-full bg-[#1e1e1e] border-none text-white rounded-2xl px-5 py-4 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
    >
    
    <button 
      type="button" 
      @click="mostrarPassword = !mostrarPassword"
      class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
    >
      {{ mostrarPassword ? '🙈' : '👁️' }}
    </button>
    
  </div>
</div>

        <div class="flex items-center justify-between text-xs text-gray-400 px-1">
          <label class="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <div class="w-8 h-4 bg-[#333] rounded-full relative">
              <div class="absolute left-1 top-1 w-2 h-2 bg-white rounded-full"></div>
            </div>
            Remember me
          </label>
          <a href="#" class="hover:text-white transition-colors">Forgot password?</a>
        </div>

        <button type="submit" class="w-full bg-[#6366f1] text-white font-bold py-4 rounded-2xl hover:bg-[#5558e6] transition-all transform active:scale-95 shadow-lg shadow-indigo-500/20">
          Login
        </button>
      </form>

      <div class="relative my-8 flex justify-center items-center">
        <div class="absolute w-full border-t border-white/10"></div>
        <span class="relative bg-[#121212] px-4 text-xs text-gray-500 uppercase tracking-widest">Or login with</span>
      </div>

      <div class="grid grid-cols-3 gap-3">
        <button class="bg-[#1e1e1e] py-3 rounded-2xl flex justify-center hover:bg-[#252525] border border-white/5 transition-colors">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5" alt="Google">
        </button>
        <button class="bg-[#1e1e1e] py-3 rounded-2xl flex justify-center hover:bg-[#252525] border border-white/5 transition-colors">
          <img src="https://www.svgrepo.com/show/475633/apple-color.svg" class="w-5 h-5" alt="Apple">
        </button>
        <button class="bg-[#1e1e1e] py-3 rounded-2xl flex justify-center hover:bg-[#252525] border border-white/5 transition-colors">
          <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" class="w-5 h-5" alt="Facebook">
        </button>
      </div>

      <p class="text-center mt-10 text-gray-400 text-sm">
        Don't have an account? 
        <router-link to="/register" class="text-indigo-400 font-bold hover:text-indigo-300 ml-1">Signup</router-link>
      </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importamos el enrutador para cambiar de página

const email = ref('');
const password = ref('');
const errorMensaje = ref(''); // Variable para mostrar si se equivocan de contraseña
const router = useRouter();
const mostrarPassword = ref(false);

const handleLogin = async () => {
  errorMensaje.value = ''; // Limpiamos errores anteriores

  try {
    // 1. Enviamos los datos a nuestro backend
    const respuesta = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    const data = await respuesta.json();

    // 2. Revisamos si el backend nos devolvió un error (ej. contraseña incorrecta)
    if (!respuesta.ok) {
      throw new Error(data.error || 'Error al iniciar sesión');
    }

    // 3. ¡Login Exitoso! Guardamos el token y el rol en el navegador
    localStorage.setItem('token', data.token);
    localStorage.setItem('rol', data.rol);
    localStorage.setItem('nombre', data.nombre);

    // 4. Redirigimos al usuario dependiendo de su rol
    if (data.rol === 'ADMIN') {
      router.push('/admin/dashboard'); // Asegúrate de que esta ruta exista en tu router
    } else {
      router.push('/agent/dashboard'); // Asegúrate de que esta ruta exista en tu router
    }

  } catch (error: any) {
    console.error('Error de login:', error);
    errorMensaje.value = error.message; // Mostramos el error en pantalla
  }
};
</script>