<template>
  <main class="font-sans text-gray-900 bg-white">
    <HeroSection />

    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Properties by Area</h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-sm">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="city in areas" :key="city.name" 
             :class="['relative rounded-xl overflow-hidden h-64 group cursor-pointer', city.colSpan]">
          <img :src="city.image" :alt="city.name" class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-bold">{{ city.name }}</h3>
            <p class="text-sm text-gray-300">{{ city.listings }} listings</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Our Services</h2> <p class="text-gray-500 max-w-2xl mx-auto text-sm">
            We provide full service at every step.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="service in services" :key="service.title" class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <div class="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl">
              {{ service.icon }}
            </div>
            <h3 class="text-lg font-bold mb-3">{{ service.title }}</h3>
            <p class="text-gray-500 text-sm mb-4">{{ service.desc }}</p>
            <a href="#" class="text-sm font-bold text-gray-900 hover:text-blue-600 transition">Read more</a>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Latest Properties of Rent</h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-sm">
          Discover the best rental properties available right now.
        </p>
      </div>

     <div v-for="prop in realProperties" :key="prop.id" class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
  <div class="relative h-56">
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&w=600&q=80" class="w-full h-full object-cover" />
    <span class="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded">
      {{ prop.tipo }} </span>
  </div>
  
  <div class="p-6">
    <h3 class="font-bold text-gray-900 mb-2 uppercase">{{ prop.titulo }}</h3>
    <p class="text-blue-600 font-bold text-xl mb-4">
      ${{ prop.precio.toLocaleString() }}
    </p>
    
    <div class="flex items-center text-gray-500 text-sm space-x-4 mb-6 border-b border-gray-100 pb-4">
      <span>🛏️ {{ prop.habitaciones }} Beds</span>
      <span>🛁 {{ prop.banos }} Baths</span>
      <span>📐 2,000 sq ft</span>
    </div>
    
    </div>
</div>
      
      <div class="mt-12 text-center">
        <button class="bg-black text-white px-8 py-3 rounded text-sm font-bold hover:bg-gray-800 transition">
          Load more listing
        </button>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Latest Properties for Sale</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div v-for="prop in visualProperties" :key="prop.id" class="relative rounded-xl overflow-hidden h-80 group cursor-pointer">
            <img :src="prop.image" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <span class="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded">
              {{ prop.tag }}
            </span>

            <div class="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
              <div>
                <p class="text-xs text-gray-300 mb-1">📍 {{ prop.location }}</p>
                <p class="font-bold text-lg">${{ prop.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-24 bg-gray-900 flex items-center justify-center">
      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div class="relative z-10 text-center text-white px-6">
        <h2 class="text-4xl font-bold mb-4">Find Best Place For Living</h2>
        <p class="text-gray-300 mb-8 max-w-xl mx-auto">
          We have helped thousands of people find their dream homes. Let us help you find yours today.
        </p>
        <button class="bg-transparent border border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded transition">
          Contact Us
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Importamos hooks de Vue
import HeroSection from '@/components/HeroSection.vue';

// 1. Creamos una variable reactiva para guardar las propiedades reales
const realProperties = ref([]);

// 2. Función para traer los datos del Backend
const fetchProperties = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/propiedades');
    const data = await response.json();
    realProperties.value = data;
  } catch (error) {
    console.error("Error al cargar propiedades:", error);
  }
};


onMounted(() => {
  fetchProperties();
});

// Mantén tus otros arrays (areas, services, etc.) igual si los quieres estáticos
</script>