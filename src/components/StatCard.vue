<template>
  <div :class="['p-6 rounded-[2rem] flex flex-col justify-between h-full min-w-[140px]', bgColor]">
    <p class="text-gray-600 text-sm font-medium">{{ title }}</p>
    <div class="mt-4">
      <h4 class="text-2xl font-extrabold text-gray-800">{{ value }}</h4>
      <p class="text-[10px] font-bold mt-1" :class="isUp ? 'text-green-600' : 'text-red-600'">
        {{ isUp ? '↑' : '↓' }} {{ percentage }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  percentage: String,
  bgColor: String,
  isUp: { type: Boolean, default: true }
});
</script>