import { transliterationMaps } from '#shared/data/transliteration';

export default function (writing: string, lang: string) {
  const selectedWriting = transliterationMaps[writing];
  if (!selectedWriting) throw new Error(`Writing ${writing} is not found`);

  const selectedLang = selectedWriting.languages[lang];
  if (!selectedLang) throw new Error(`Lang ${lang} is not found`);

  return selectedLang;
}
