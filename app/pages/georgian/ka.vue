<script setup lang="ts">
const userInput = ref<string>('');
const result = computed(() => transliterate('georgian', 'ka', ruleName.value, userInput.value));
const ruleName = ref<string>('iso_9984_1996');

const copy = (text: string) => {
  navigator.clipboard.writeText(text);
}

const clearBothInput = () => userInput.value = '';
</script>

<template>
  <div class="p-6px">
    <TUserInput v-model="userInput" label="Georgian Input" id="user-input" placeholder="გამარჯობა, როგორ ხარ?" />
    <TActionBar @copyUserInput="copy(userInput)" @clearUserInput="clearBothInput" @copyResult="copy(result)" @clearResult="clearBothInput">
      <TRuleSelector v-model="ruleName" writing="georgian" lang="ka" :rule="ruleName" />
    </TActionBar>
    <TResult :value="result" />
  </div>
</template>

<style scoped>

</style>