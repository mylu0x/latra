<script setup lang="ts">
import { transliterationMaps } from '#shared/data/transliteration';

const data = transliterationMaps;
</script>

<template>
  <aside class="flex flex-col p-6px gap-4px shrink-0 bg-gray-50 rounded-12px b-(solid 1px gray-1) shadow-sm">
    <section class="flex flex-col gap-6px">
      <SidebarPageLink name="Home" icon="tabler:home" to="/" />
    </section>
    <section class="px-5px flex flex-col gap-4px">
      <div v-for="(writing, writingKey) in data" :id="writingKey.toString()" class="b-(dashed 1px gray-2) p-6px rounded-12px shadow-sm flex flex-col gap-2px bg-white">
        <p class="text-12px text-gray-8 text-center">{{ writing.writingName }}</p>
        <div class="flex flex-col gap-3px">
          <SidebarLink v-for="(lang, langKey) in writing.languages" :text="lang.langName" :icon="`circle-flags:lang-${langKey}`" :to="lang.path" />
        </div>
      </div>
    </section>
  </aside>
</template>

<style scoped>

</style>