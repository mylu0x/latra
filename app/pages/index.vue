<script setup lang="ts">
type Update = {
  date: string;
  content: string;
}

const updates: Update[] = [
    {
      date: '2026-01-27',
      content: 'a'
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
<!--    <section class="max-w-400px mx-auto mx-8px b-(solid 1px gray-2) px-24px py-14px rounded-16px shadow-sm mt-32px">-->
<!--      <div v-for="update in updates" class="flex gap-8px">-->
<!--        <p class="text-gray-8 font-600">{{ update.date }}</p>-->
<!--        <p class="text-gray-8">{{ update.content }}</p>-->
<!--      </div>-->
<!--    </section>-->
  </div>
</template>

<style scoped>

</style>