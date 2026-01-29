<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen px-16px">
    <div class="h-500px max-w-800px w-full mx-auto b-(solid 1px gray-2) p-8px rounded-18px shadow-sm flex gap-8px bg-white max-md:flex-col max-md:h-auto">
      <TheSidebar />
      <div class="flex h-full w-1px bg-gray-1 max-md:w-full max-md:h-1px"></div>
      <div class="w-full">
        <slot />
      </div>
    </div>
    <footer class="flex flex-col items-center justify-center py-16px text-gray-7 text-14px">
      <p>&copy; 2026 mylu0x - Released under the MIT License.</p>
      <p>Icons by Tabler Icons and Circle Flags, licensed under MIT.</p>
    </footer>
  </div>
  <div class="absolute top-0 left-0">
    <a href="https://github.com/mylu0x/latra" target="_blank" rel="noreferrer noopener" class="flex items-center justify-center gap-4px bg-gray-2 text-gray-8 font-500 px-16px py-4px rounded-br-8px transition-all-100 hover:bg-gray-3">
      <Icon name="tabler:brand-github-filled" />
      <span class="text-14px">GitHub Repo</span>
    </a>
  </div>
</template>

<style scoped>

</style>