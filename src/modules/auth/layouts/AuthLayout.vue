<template>
     <div class="min-h-screen flex items-center justify-center bg-black p-4 font-sans relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400" 
           class="w-full h-full object-cover opacity-40">
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
    </div>

    <div class="z-10 w-full max-w-[380px] bg-[#121212]/90 backdrop-blur-lg p-10 rounded-[40px] border border-white/5 shadow-2xl">
         <RouterView />
    </div>
    </div>    
</template>