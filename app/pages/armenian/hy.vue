<script setup lang="ts">
const userInput = ref<string>('');
const result = computed(() => transliterate('armenian', 'hy', ruleName.value, userInput.value));
const ruleName = ref<string>('iso_9985_1996');

const copy = (text: string) => {
  navigator.clipboard.writeText(text);
}

const clearBothInput = () => userInput.value = '';
</script>

<template>
  <div class="p-6px">
    <TUserInput v-model="userInput" label="Armenian Input" id="user-input" placeholder="Բարև Ձեզ, ինչպե՞ս եք?" />
    <TActionBar @copyUserInput="copy(userInput)" @clearUserInput="clearBothInput" @copyResult="copy(result)" @clearResult="clearBothInput">
      <TRuleSelector v-model="ruleName" writing="armenian" lang="hy" :rule="ruleName" />
    </TActionBar>
    <TResult :value="result" />
  </div>
</template>

<style scoped>

</style>
