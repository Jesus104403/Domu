<template>
  <div class="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
    <div class="relative h-56">
      <img :src="property.image" class="w-full h-full object-cover" />
      <div class="absolute top-3 left-3 flex gap-2">
        <span :class="property.type === 'Venta' ? 'bg-blue-600' : 'bg-green-600'" 
              class="text-white text-[10px] font-bold px-3 py-1 rounded-full">
          {{ property.type }}
        </span>
        <span v-if="property.featured" class="bg-amber-400 text-white text-[10px] font-bold px-3 py-1 rounded-full">
          Destacada
        </span>
      </div>
      <div class="absolute top-3 right-3">
        <span class="bg-white text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
          {{ property.category }}
        </span>
      </div>
    </div>

    <div class="p-6 text-left">
      <h3 class="text-xl font-extrabold text-slate-800 mb-1 leading-tight">
        {{ property.title }}
      </h3>
      <p class="text-gray-400 text-sm flex items-center gap-1 mb-4">
        📍 {{ property.location }}
      </p>
      
      <div class="flex items-center gap-2 text-blue-600 font-bold text-2xl mb-5">
        <span class="text-lg">🏷️</span>
        ${{ property.price.toLocaleString() }}{{ property.type === 'Renta' ? '/mes' : '' }}
      </div>

      <div class="flex items-center gap-4 text-gray-500 border-t pt-4">
        <span class="flex items-center gap-1 text-sm font-medium">🛏 {{ property.beds }}</span>
        <span class="flex items-center gap-1 text-sm font-medium">🚿 {{ property.baths }}</span>
        <span class="flex items-center gap-1 text-sm font-medium">📏 {{ property.sqft }} m²</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['property']);
</script>