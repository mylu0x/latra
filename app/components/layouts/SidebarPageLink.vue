<script setup lang="ts">
const props = defineProps<{
  name: string;
  icon: string;
  to?: string;
}>();
</script>

<template>
  <NuxtLink :to class="flex items-center gap-8px p-5px w-130px rounded-12px hover:bg-gray-1 transition-all-100">
    <span class="flex items-center justify-center p-6px bg-white b-(solid 1px gray-2) rounded-8px shadow-sm">
      <Icon :name="icon" class="text-gray-8" />
    </span>
    <span class="leading-none font-500 text-14px">{{ name }}</span>
  </NuxtLink>
</template>

<style scoped>

</style>