<template>
  <div class="bg-white min-h-screen font-sans">
    <nav class="max-w-[1200px] mx-auto p-6 flex items-center justify-between">
      <button @click="$router.back()" class="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">
        <span>⬅️</span> Volver al listado
      </button>
      <div class="flex gap-4">
        <button class="p-2 border rounded-full hover:bg-gray-50">📤 Compartir</button>
        <button class="p-2 border rounded-full hover:bg-gray-50">❤️ Guardar</button>
      </div>
    </nav>

    <main class="max-w-[1200px] mx-auto px-6 pb-20">
      <section class="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-8 rounded-[32px] overflow-hidden">
        <div class="col-span-2 row-span-2 relative group cursor-pointer">
          <img :src="property.image" class="w-full h-full object-cover transition-transform group-hover:scale-105" />
        </div>
        <div class="col-span-1 row-span-1 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b" class="w-full h-full object-cover" />
        </div>
        <div class="col-span-1 row-span-1 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" class="w-full h-full object-cover" />
        </div>
        <div class="col-span-2 row-span-1 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800" class="w-full h-full object-cover" />
        </div>
      </section>

      <div class="flex flex-col lg:flex-row gap-12">
        <div class="flex-1">
          <div class="mb-6">
            <span class="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase">{{ property.type }}</span>
            <h1 class="text-4xl font-extrabold text-slate-900 mt-4 mb-2">{{ property.title }}</h1>
            <p class="text-xl text-slate-500 flex items-center gap-2">📍 {{ property.location }}</p>
          </div>

          <div class="grid grid-cols-3 gap-4 py-8 border-y border-gray-100 mb-8">
            <div class="text-center p-4 bg-slate-50 rounded-2xl">
              <p class="text-slate-400 text-sm">Recámaras</p>
              <p class="text-xl font-bold text-slate-800">{{ property.beds }}</p>
            </div>
            <div class="text-center p-4 bg-slate-50 rounded-2xl">
              <p class="text-slate-400 text-sm">Baños</p>
              <p class="text-xl font-bold text-slate-800">{{ property.baths }}</p>
            </div>
            <div class="text-center p-4 bg-slate-50 rounded-2xl">
              <p class="text-slate-400 text-sm">Superficie</p>
              <p class="text-xl font-bold text-slate-800">{{ property.sqft }} m²</p>
            </div>
          </div>

          <div class="mb-10">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Descripción</h2>
            <p class="text-slate-600 leading-relaxed text-lg">
              Esta impresionante propiedad cuenta con acabados de la más alta calidad, techos de doble altura y una iluminación natural inigualable. Diseñada por arquitectos de renombre, ofrece el equilibrio perfecto entre lujo contemporáneo y calidez hogareña.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Amenidades</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-y-4">
              <div v-for="ami in ['Seguridad 24/7', 'Alberca', 'Gimnasio', 'Terraza', 'Estacionamiento', 'Jardín']" 
                   :key="ami" class="flex items-center gap-2 text-slate-700">
                <span class="text-green-500">✅</span> {{ ami }}
              </div>
            </div>
          </div>
        </div>

        <aside class="w-full lg:w-[400px]">
          <div class="sticky top-10 border border-gray-100 rounded-[32px] p-8 shadow-xl bg-white">
            <p class="text-slate-400 font-semibold mb-1">Precio de lista</p>
            <h2 class="text-4xl font-black text-blue-600 mb-8">
              ${{ property.price.toLocaleString() }}
            </h2>

            <div class="space-y-4">
              <button class="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Contactar Agente
              </button>
              <button class="w-full border-2 border-slate-100 text-slate-700 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all">
                Agendar Visita
              </button>
            </div>

            <hr class="my-8" />

            <div class="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?u=jenny" class="w-14 h-14 rounded-full object-cover" />
              <div>
                <p class="font-bold text-slate-900">Jenny Wilson</p>
                <p class="text-sm text-slate-500">Agente Senior Luxury</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// En una app real, aquí recibirías el ID por la URL y buscarías la data
const property = ref({
  id: 1,
  title: 'Casa Moderna de Lujo',
  location: 'Polanco, Ciudad de México',
  price: 5500000,
  type: 'Venta',
  beds: 4,
  baths: 3.5,
  sqft: 350,
  image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200'
});
</script>

<style scoped>
/* Transición suave para las imágenes de la galería */
img {
  transition: all 0.3s ease-in-out;
}
</style>