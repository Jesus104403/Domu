<template>
  
      <h1 class="text-3xl font-bold text-white text-center mb-8">Signup</h1>

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

const name = ref('');
const email = ref('');
const password = ref('');

const handleRegister = () => {
  console.log('Registrando usuario:', name.value);
};
</script>