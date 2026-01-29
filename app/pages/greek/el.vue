<script setup lang="ts">
const userInput = ref<string>('');
const result = computed(() => transliterate('greek', 'el', ruleName.value, userInput.value));
const ruleName = ref<string>('iso_843_1997');

const copy = (text: string) => {
  navigator.clipboard.writeText(text);
}

const clearBothInput = () => userInput.value = '';
</script>

<template>
  <div class="p-6px">
    <TUserInput v-model="userInput" label="Greek Input" id="user-input" placeholder="Γεια σου, τι κάνεις;" />
    <TActionBar @copyUserInput="copy(userInput)" @clearUserInput="clearBothInput" @copyResult="copy(result)" @clearResult="clearBothInput">
      <TRuleSelector v-model="ruleName" writing="greek" lang="el" :rule="ruleName" />
    </TActionBar>
    <TResult :value="result" />
  </div>
</template>

<style scoped>

</style>