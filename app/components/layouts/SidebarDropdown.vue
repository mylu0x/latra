<script setup lang="ts">
const props = defineProps<{
  name: string;
  icon: string;
}>();
const isDropdownOpen = ref<boolean>(false);
</script>

<template>
  <div>
    <div class="flex leading-none flex justify-between items-center px-6px py-6px rounded-8px hover:bg-gray-1 cursor-pointer" @click="isDropdownOpen = !isDropdownOpen">
      <div class="flex items-center gap-6px">
        <Icon :name="icon" />
        <p class="text-14px font-500">{{ name }}</p>
      </div>
      <div class="flex items-center justify-center text-gray-8 text-12px">
        <Icon v-show="isDropdownOpen" name="tabler:caret-up-filled" />
        <Icon v-show="!isDropdownOpen" name="tabler:caret-down-filled" />
      </div>
    </div>
    <div v-show="isDropdownOpen">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>