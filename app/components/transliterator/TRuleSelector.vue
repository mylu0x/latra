<script setup lang="ts">
import { transliterationMap } from "#shared/data/transliterationMap";
import { OnClickOutside } from '@vueuse/components';

const props = defineProps<{
  writing: string;
  lang: string;
  rule: string;
}>();
const model = defineModel<string>();
const rule = computed<Rule>(() => {
  const selectedWriting = transliterationMap[props.writing];
  if (!selectedWriting) throw new Error(`Writing ${props.writing} is not found`);

  const selectedLang = selectedWriting.languages[props.lang];
  if (!selectedLang) throw new Error(`Lang ${props.lang} is not found`);

  const selectedRule = selectedLang.rules[props.rule];
  if (!selectedRule) throw new Error(`Rule ${props.rule} is not found`);

  return selectedRule;
});
const lang = computed<Lang>(() => {
  const selectedWriting = transliterationMap[props.writing];
  if (!selectedWriting) throw new Error(`Writing ${props.writing} is not found`);

  const selectedLang = selectedWriting.languages[props.lang];
  if (!selectedLang) throw new Error(`Lang ${props.lang} is not found`);

  return selectedLang;
});
const isOpen = ref<boolean>(false);
</script>

<template>
  <OnClickOutside @trigger="isOpen = false" class="flex w-full py-6px relative">
    <button @click="isOpen = !isOpen" class="flex items-center justify-center h-full b-(solid 1px gray-2) w-full rounded-8px hover:bg-gray-1 transition-all-50">
      <span class="leading-none font-500 text-gray-8">{{ rule.name }}</span>
    </button>
    <div v-show="isOpen" class="absolute mt-32px left-1/2 translate-x-[-50%]">
      <div class="translate-x-[1/2] bg-white z-999 b-(solid 1px gray-2) w-400px shadow-md p-6px rounded-14px">
        <button v-for="rule in lang.rules" @click="model = rule.id" class="flex justify-between p-10px hover:bg-gray-1 rounded-8px">
        <span class="flex flex-col justify-center w-100px text-left">
          <span class="font-600 text-gray-9 text-18px">{{ rule.name }}</span>
          <span class="text-10px text-gray-7 font-mono font-500">{{ rule.id }}</span>
        </span>
          <span class="text-12px text-gray-7 text-left">{{ rule.desc }}</span>
        </button>
      </div>
    </div>
  </OnClickOutside>
</template>

<style scoped>

</style>