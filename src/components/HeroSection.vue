<template>
  <div class="relative w-full h-[600px] bg-gray-800 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50 z-10"></div>
    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="House" class="absolute inset-0 w-full h-full object-cover opacity-70" />

    <div class="relative z-20 text-center text-white px-4">
      <h1 class="text-5xl font-bold mb-4">Find Your Dream Home</h1>
      <p class="max-w-xl mx-auto text-gray-200 text-sm leading-relaxed">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
      
      <div class="mt-8 flex justify-center">
        <div class="bg-gray-900/80 rounded-t-lg flex overflow-hidden">
          <button class="px-6 py-2 bg-gray-900 text-white text-sm font-semibold">Rent</button>
          <button class="px-6 py-2 hover:bg-gray-800 text-gray-300 text-sm font-semibold transition">Sale</button>
        </div>
      </div>
    </div>

    <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-30 w-[90%] max-w-5xl bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
      
      <div class="flex-1 border-r border-gray-200 px-4 w-full">
        <label class="block text-xs font-bold text-gray-900 mb-1">Locations</label>
        <select class="w-full text-gray-500 text-sm bg-transparent outline-none cursor-pointer">
          <option>Select your city</option>
          <option>Washington</option>
          <option>Franklin</option>
        </select>
      </div>

      <div class="flex-1 border-r border-gray-200 px-4 w-full">
        <label class="block text-xs font-bold text-gray-900 mb-1">Property Type</label>
        <select class="w-full text-gray-500 text-sm bg-transparent outline-none cursor-pointer">
          <option>Select property type</option>
          <option>House</option>
          <option>Apartment</option>
        </select>
      </div>

      <div class="flex-1 px-4 w-full">
        <label class="block text-xs font-bold text-gray-900 mb-1">Rent Range</label>
        <select class="w-full text-gray-500 text-sm bg-transparent outline-none cursor-pointer">
          <option>Select rent range</option>
          <option>$500 - $1000</option>
          <option>$1000 - $2000</option>
        </select>
      </div>

      <div class="px-4 w-full md:w-auto">
        <button class="w-full md:w-auto bg-black text-white px-8 py-3 rounded text-sm font-medium hover:bg-gray-800 transition">
          Search
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
// Lógica de Vue para manejar la búsqueda iría aquí
</script>