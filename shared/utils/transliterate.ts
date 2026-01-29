import { transliterationMap } from '#shared/data/transliterationMap';

export default function (writing: string, lang: string, rule: string, input: string): string {
  let text = input;

  const selectedWriting = transliterationMap[writing];
  if (!selectedWriting) throw new Error(`Writing ${writing} is not found`);

  const selectedLang = selectedWriting.languages[lang];
  if (!selectedLang) throw new Error(`Lang ${lang} is not found`);

  const selectedRule = selectedLang.rules[rule];
  if (!selectedRule) throw new Error(`Rule ${rule} is not found`);

  const normalizedInput = input.normalize('NFC');

  // for Greek
  if (selectedLang.langCode === 'el') {
    text = text
      .replace(/ΑΥ/g, 'AU').replace(/Αυ/g, 'Au').replace(/αΥ/g, 'aU').replace(/αυ/g, 'au')
      .replace(/ΑΎ/g, 'AÚ').replace(/Αύ/g, 'Aú').replace(/αΎ/g, 'aÚ').replace(/αύ/g, 'aú')
      .replace(/ΕΥ/g, 'EU').replace(/Ευ/g, 'Eu').replace(/εΥ/g, 'eU').replace(/ευ/g, 'eu')
      .replace(/ΕΎ/g, 'EÚ').replace(/Εύ/g, 'Eú').replace(/εΎ/g, 'eÚ').replace(/εύ/g, 'eú')
      .replace(/ΟΥ/g, 'OU').replace(/Ου/g, 'Ou').replace(/οΥ/g, 'oU').replace(/ου/g, 'ou')
      .replace(/ΟΎ/g, 'OÚ').replace(/Ού/g, 'Oú').replace(/οΎ/g, 'oÚ').replace(/ού/g, 'oú')
  }

  text = Array.from(normalizedInput).map(char => selectedRule.map[char] ?? char).join('')

  return text;
}
