<script setup lang="ts">
import transliterationMap from "#shared/data/transliterationMap";

const data = transliterationMap();
</script>

<template>
  <aside class="flex flex-col p-6px gap-4px shrink-0 bg-gray-50 rounded-12px b-(solid 1px gray-1) shadow-sm">
    <section class="flex flex-col gap-6px">
      <SidebarPageLink name="Home" icon="tabler:home" to="/" />
    </section>
    <section class="px-6px">
      <div v-for="writing in data" :id="writing.writingCode" class="b-(dashed 1px gray-2) p-6px rounded-12px shadow-sm flex flex-col gap-2px bg-white">
        <p class="text-12px text-gray-8 text-center">{{ writing.writingName }}</p>
        <div class="flex flex-col gap-3px">
          <SidebarLink v-for="lang in writing.languages" text="Russian" :icon="`circle-flags:lang-${lang.langCode}`" :to="lang.route" />
        </div>
      </div>
    </section>
  </aside>
</template>

<style scoped>

</style>