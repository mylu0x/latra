<script setup lang="ts">
const props = defineProps<{
  label: string;
  id: string;
}>();
const model = defineModel<string>();
</script>

<template>
  <div class="flex flex-col">
    <label :for="id" class="text-12px font-500 z-999 text-gray-7">{{ label }}</label>
    <textarea v-model="model" :id class="resize-none b-(solid 1px gray-2) px-8px py-4px rounded-8px bg-gray-50 outline-(solid 0 gray-1) transition-all-50 focus:outline-2px h-200px"></textarea>
  </div>
</template>

<style scoped>

</style>