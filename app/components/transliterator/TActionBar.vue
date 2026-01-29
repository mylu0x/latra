<script setup lang="ts">
const getClasses = (direction: 'top' | 'bottom') => {
  if (direction === 'top') {
    return 'rounded-b-10px b-(solid 1px gray-2) b-t-none mb-4px';
  } else {
    return 'rounded-t-10px b-(solid 1px gray-2) b-b-none mt-4px';
  }
}
</script>

<template>
  <div class="flex gap-6px px-8px justify-between max-md:flex-col max-md:gap-0">
    <div class="bg-gray-2 flex p-4px gap-4px max-md:mb-0 max-md:justify-between" :class="getClasses('top')">
      <button @click="$emit('copyUserInput')" class="text-14px flex items-center justify-center w-80px py-6px hover:bg-gray-1 transition-all-50 bg-white rounded-8px b-(solid 1px gray-2) shadow-sm gap-3px text-gray-9 leading-none max-md:w-full">
        <Icon name="tabler:copy" />
        <span>Copy</span>
      </button>
      <button @click="$emit('clearUserInput')" class="text-14px flex items-center justify-center w-80px py-6px hover:bg-gray-1 transition-all-50 bg-white rounded-8px b-(solid 1px gray-2) shadow-sm gap-3px text-gray-9 leading-none max-md:w-full">
        <Icon name="tabler:trash" />
        <span>Clear</span>
      </button>
    </div>
    <slot />
    <div class="bg-gray-2 flex p-4px gap-4px max-md:mt-0 max-md:justify-between" :class="getClasses('bottom')">
      <button @click="$emit('copyResult')" class="text-14px flex items-center justify-center w-80px py-6px hover:bg-gray-1 transition-all-50 bg-white rounded-8px b-(solid 1px gray-2) shadow-sm gap-3px text-gray-9 leading-none max-md:w-full">
        <Icon name="tabler:copy" />
        <span>Copy</span>
      </button>
      <button @click="$emit('clearResult')" class="text-14px flex items-center justify-center w-80px py-6px hover:bg-gray-1 transition-all-50 bg-white rounded-8px b-(solid 1px gray-2) shadow-sm gap-3px text-gray-9 leading-none max-md:w-full">
        <Icon name="tabler:trash" />
        <span>Clear</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>