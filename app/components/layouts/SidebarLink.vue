<script setup lang="ts">
const props = defineProps<{
  text: string;
  icon: string;
  to?: string;
}>();
</script>

<template>
  <NuxtLink :to class="flex leading-none flex gap-6px items-center px-6px py-6px rounded-8px hover:bg-gray-1 cursor-pointer">
    <Icon :name="icon" />
    <p class="text-14px font-500 text-gray-8">{{ text }}</p>
  </NuxtLink>
</template>

<style scoped>

</style>