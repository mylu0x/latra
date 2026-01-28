<script setup lang="ts">
type Update = {
  date: Date;
  content: string;
}

const updates: Update[] = [
  {
    date: new Date('2026-01-28'),
    content: 'Added Mylstyle B rule for Russian'
  },
  {
    date: new Date('2026-01-28'),
    content: 'Added Mylstyle A rule for Russian'
  },
  {
    date: new Date('2026-01-27'),
    content: 'Added the GOST 7.79 rule for Russian'
  },
  {
    date: new Date('2026-01-27'),
    content: 'Added Russian transliterator'
  }
];
</script>

<template>
  <div class="py-48px">
    <section class="w-full">
      <h1 class="text-42px text-center font-600 leading-tight">Welcome</h1>
    </section>
    <section class="text-center text-gray-7">
      <p><strong class="font-600 text-gray-8">Latra</strong> is a web app that converts characters into Latin script.</p>
    </section>
    <section class="mx-auto mx-8px px-24px py-20px b-t-(solid 1px gray-2) mt-48px h-200px overflow-y-auto flex flex-col gap-16px">
      <div v-for="update in updates" class="flex flex-col justify-between text-14px">
        <p class="text-gray-8 font-600">{{ update.date.toLocaleDateString('en-US', { dateStyle: 'long' }) }}</p>
        <p class="text-gray-8">{{ update.content }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>