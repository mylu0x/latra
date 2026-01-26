<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen px-16px">
    <div class="h-500px max-w-800px w-full mx-auto b-(solid 1px gray-2) p-8px rounded-18px shadow-sm flex gap-8px bg-white">
      <TheSidebar />
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>