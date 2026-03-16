<template>
  <aside class="w-64 bg-[#111111] text-white h-screen flex flex-col p-6 fixed left-0 top-0">
    <div class="flex flex-col items-center mb-10">
      <div class="relative w-20 h-20 mb-3">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="Admin" 
          class="rounded-full object-cover border-2 border-gray-700 p-1"
        />
      </div>
      <h3 class="text-lg font-bold">Admin</h3>
      <p class="text-gray-500 text-xs">Real Estate Builders</p>
    </div>

    <nav class="flex-1 space-y-1">
      <div class="group">
        <div class="flex items-center space-x-3 p-3 bg-[#1a1a1a] rounded-xl border-r-4 border-[#4ade80] cursor-pointer">
          <span class="text-[#4ade80]">📊</span>
          <span class="font-medium text-sm text-white">Dashboard</span>
        </div>
      </div>

      <div v-for="item in menuItems" :key="item.name" 
           class="flex items-center justify-between p-3 text-gray-500 hover:text-white hover:bg-[#1a1a1a] rounded-xl cursor-pointer transition-all">
        <div class="flex items-center space-x-3">
          <span>{{ item.icon }}</span>
          <span class="text-sm">{{ item.name }}</span>
        </div>
        <span v-if="item.badge" class="bg-orange-500 text-[10px] text-white px-1.5 py-0.5 rounded-full">
          {{ item.badge }}
        </span>
      </div>
    </nav>

    <div class="mt-auto space-y-4 pt-6 border-t border-gray-800 text-sm">
      <div class="flex items-center space-x-3 text-gray-500 cursor-pointer">
        <span>🎧</span>
        <span>Help & Support</span>
      </div>
      <div class="flex items-center space-x-3 text-red-500 cursor-pointer">
        <span>🚪</span>
        <span>Log Out</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
const menuItems = [
  { name: 'Discover', icon: '🏠' },
  { name: 'Inbox', icon: '📧', badge: '3' },
  { name: 'My Wallet', icon: '💳' },
  { name: 'Analytics', icon: '📈' },
  { name: 'Notifications', icon: '🔔', badge: '5' },
  { name: 'Settings', icon: '⚙️' },
];
</script>