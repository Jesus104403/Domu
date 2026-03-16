<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8 px-6 mt-20">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-12 mb-12">
        <h2 class="text-3xl font-bold mb-6 md:mb-0">
          Make your dreams a <span class="text-yellow-500">reality</span>
        </h2>
        <button class="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded flex items-center transition">
          Work with us 
          <span class="ml-2">&rarr;</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1">
           <div class="flex items-center">
            <img src="../assets/logo-domu.png" alt="Logo Domu" class="h-14 w-auto object-contain" />
          </div>
          <div class="flex space-x-4 text-gray-400">
            <a href="#" class="hover:text-white transition">F</a>
            <a href="#" class="hover:text-white transition">T</a>
            <a href="#" class="hover:text-white transition">IN</a>
          </div>
        </div>

        <div v-for="i in 3" :key="i" class="col-span-1">
          <h3 class="font-bold text-gray-300 mb-4">Column Heading</h3>
          <ul class="space-y-3 text-sm text-gray-500">
            <li><a href="#" class="hover:text-yellow-500 transition">Link goes here</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition">Link goes here</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition">Link goes here</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition">Link goes here</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  </footer>
</template>