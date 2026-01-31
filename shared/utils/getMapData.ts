import { transliterationMaps } from '#shared/data/transliteration';
import type { Writing, Lang, Rule } from '../types/rule';

export default function (writing: string): Writing;
export default function (writing: string, lang: string): Lang;
export default function (writing: string, lang: string, rule: string): Rule;

export default function (writing: string, lang?: string, rule?: string): Writing | Lang | Rule {
  const writingData = transliterationMaps[writing];
  if (!writingData) throw new Error(`Writing ${writing} is not found`);

  if (!lang) return writingData;
  const langData = writingData.languages[lang];
  if (!langData) throw new Error(`Lang ${lang} is not found`);

  if (!rule) return langData;
  const ruleData = langData.rules[rule];
  if (!ruleData) throw new Error(`Rule ${rule} is not found`);

  return ruleData;
}