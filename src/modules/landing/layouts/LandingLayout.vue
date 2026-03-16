<template>
  <nav class="bg-gray-900 text-white py-4 px-8 border-b border-gray-700">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-2 text-sm text-gray-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <span>Email us at: example@mail.com</span>
      </div>

      <div class="flex items-center space-x-6">
        <div class="flex space-x-4 text-gray-400">
          <a href="#" class="hover:text-white">F</a> <a href="#" class="hover:text-white">T</a>
          <a href="#" class="hover:text-white">IN</a>
        </div>
        <div class="border-l border-gray-600 pl-6 flex items-center space-x-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <RouterLink to="/login" class="hover:text-gray-300">Login</RouterLink>
        </div>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto flex justify-between items-center mt-6">
     <div class="flex items-center">
        <img src="@/assets/logo-domu.png" alt="Logo Domu" class="h-14 w-auto object-contain" />
     </div>
      <div class="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
        <RouterLink to="/" class="hover:text-gray-300 transition">HOME</RouterLink>
        <RouterLink to="/property" class="hover:text-gray-300 transition">PROPERTIES</RouterLink>
      </div>
      <div class="w-24"></div> </div>
  </nav>
    <!-- Main -->
    <main class="flex-1">
      <RouterView />
    </main>
    <!-- Fin Main -->
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
            <img src=" @/assets/logo-domu.png" alt="Logo Domu" class="h-14 w-auto object-contain" />
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