<template>
  <div class="bg-slate-50 h-screen flex flex-col font-sans overflow-hidden">
    
    <div class="max-w-[1400px] w-full mx-auto p-6 pb-0 flex-none">
      <h2 class="text-slate-500 font-medium">8 propiedades encontradas</h2>
    </div>

    <div class="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row gap-8 p-6 flex-1 overflow-hidden">
      
      <aside class="w-full lg:w-[320px] flex-none">
        <div class="bg-white rounded-[24px] p-8 shadow-sm lg:sticky lg:top-0 h-fit">
          <div class="flex justify-between items-center mb-8">
            <h3 class="text-xl font-bold flex items-center gap-2">
              <span>🔍</span> Filtros
            </h3>
            <button class="text-blue-500 text-sm font-semibold hover:underline">Limpiar</button>
          </div>

          <div class="space-y-6">
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Buscar</label>
              <input type="text" placeholder="Ubicación, título..." 
                     class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all">
            </div>

            <div v-for="label in ['Tipo de Operación', 'Tipo de Propiedad']" :key="label">
              <label class="block text-sm font-bold text-slate-700 mb-2">{{ label }}</label>
              <select class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 outline-none">
                <option>Todas</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Rango de Precio</label>
              <div class="flex gap-2">
                <input type="text" placeholder="Mínimo" class="w-1/2 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none">
                <input type="text" placeholder="Máximo" class="w-1/2 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none">
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Recámaras Mínimas</label>
              <select class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 outline-none">
                <option>Cualquiera</option>
              </select>
            </div>
          </div>
        </div>
      </aside>

      <main class="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
          <PropertyCard 
            v-for="item in properties" 
            :key="item.id" 
            :property="item" 
          />
        </div>
      </main>

    </div>
  </div>
</template>

<style scoped>
/* Opcional: Para que el scroll se vea más elegante */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
</style>

<script setup>
import { ref } from 'vue';
import PropertyCard from '@/components/PropertyCard.vue';

const properties = ref([
  {
    id: 1,
    title: 'Casa Moderna de Lujo',
    location: 'Polanco, Ciudad de México',
    price: 5500000,
    type: 'Venta',
    featured: true,
    category: 'Casa',
    beds: 4,
    baths: 3.5,
    sqft: 350,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    title: 'Apartamento Contemporáneo',
    location: 'Roma Norte, CDMX',
    price: 25000,
    type: 'Renta',
    featured: true,
    category: 'Apartamento',
    beds: 2,
    baths: 2,
    sqft: 120,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800'
  },
  {
    id: 3,
    title: 'Villa con Vista al Mar',
    location: 'Cabo San Lucas, B.C.S.',
    price: 12800000,
    type: 'Venta',
    featured: true,
    category: 'Villa',
    beds: 5,
    baths: 4,
    sqft: 520,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800'
  },
  {
    id: 4,
    title: 'Loft Industrial',
    location: 'Condesa, Ciudad de México',
    price: 18500,
    type: 'Renta',
    featured: false,
    category: 'Apartamento',
    beds: 1,
    baths: 1,
    sqft: 85,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800'
  },
  {
    id: 5,
    title: 'Residencia San Pedro',
    location: 'San Pedro Garza García, NL',
    price: 22000000,
    type: 'Venta',
    featured: true,
    category: 'Casa',
    beds: 4,
    baths: 5,
    sqft: 600,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800'
  },
  {
    id: 6,
    title: 'Penthouse Reforma',
    location: 'Juárez, CDMX',
    price: 45000,
    type: 'Renta',
    featured: false,
    category: 'Apartamento',
    beds: 3,
    baths: 3,
    sqft: 210,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800'
  },
  {
    id: 7,
    title: 'Cabaña del Bosque',
    location: 'Valle de Bravo, EdoMex',
    price: 7200000,
    type: 'Venta',
    featured: true,
    category: 'Casa',
    beds: 3,
    baths: 2,
    sqft: 180,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800'
  },
  {
    id: 8,
    title: 'Estudio Minimalista',
    location: 'Guadalajara, Jalisco',
    price: 12000,
    type: 'Renta',
    featured: false,
    category: 'Apartamento',
    beds: 1,
    baths: 1,
    sqft: 55,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800'
  }
]);
</script>