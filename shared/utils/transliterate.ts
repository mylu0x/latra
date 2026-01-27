import { transliterationMap } from "#shared/data/transliterationMap";

export default function (writing: string, lang: string, rule: string, input: string): string {
  const selectedWriting = transliterationMap[writing];
  if (!selectedWriting) throw new Error(`Writing ${writing} is not found`);

  const selectedLang = selectedWriting.languages[lang];
  if (!selectedLang) throw new Error(`Lang ${lang} is not found`);

  const selectedRule = selectedLang.rules[rule];
  if (!selectedRule) throw new Error(`Rule ${rule} is not found`);

  const normalizedInput = input.normalize('NFC');

  return Array.from(normalizedInput).map(char => selectedRule.map[char] ?? char).join('');
}
