<script setup lang="ts">
const userInput = ref<string>('');
const result = computed(() => transliterate('cyrillic', 'ru', ruleName.value, userInput.value));
const ruleName = ref<string>('iso_9_1995');

const copy = (text: string) => {
  navigator.clipboard.writeText(text);
}

const clearBothInput = () => userInput.value = '';
</script>

<template>
  <div class="p-6px">
    <TUserInput v-model="userInput" label="Cyrillic Input" id="user-input" />
    <TActionBar @copyUserInput="copy(userInput)" @clearUserInput="clearBothInput" @copyResult="copy(result)" @clearResult="clearBothInput">
      <TRuleSelector v-model="ruleName" writing="cyrillic" lang="ru" :rule="ruleName" />
    </TActionBar>
    <TResult :value="result" />
  </div>
</template>

<style scoped>

</style>