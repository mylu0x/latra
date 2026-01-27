<script setup lang="ts">
const userInput = ref<string>('');
const result = computed(() => transliterate('cyrillic', 'ru', 'iso9', userInput.value));

const copy = (text: string) => {
  navigator.clipboard.writeText(text);
}

const clearBothInput = () => userInput.value = '';
</script>

<template>
  <div class="p-6px">
    <TUserInput v-model="userInput" label="Cyrillic Input" id="user-input" />
    <TActionBar @copyUserInput="copy(userInput)" @clearUserInput="clearBothInput" @copyResult="copy(result)" @clearResult="clearBothInput" />
    <TResult :value="result" />
  </div>
</template>

<style scoped>

</style>