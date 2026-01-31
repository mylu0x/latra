import getMapData from './getMapData';

export default function (writing: string, lang: string, rule: string, input: string): string {
  const ruleData = getMapData(writing, lang, rule);

  let normalizedInput = input.normalize('NFC');
  normalizedInput = preprocess(normalizedInput, lang);
  normalizedInput = Array.from(normalizedInput).map(char => ruleData.map[char] ?? char).join('');

  return normalizedInput;
}

function preprocess(text: string, lang: string): string {
  const preprocessMapEl: Record<string, string> = {
    'ΑΥ': 'AU', 'Αυ': 'Au', 'αΥ': 'aU', 'αυ': 'au',
    'ΑΎ': 'AÚ', 'Αύ': 'Aú', 'αΎ': 'aÚ', 'αύ': 'aú',
    'ΕΥ': 'EU', 'Ευ': 'Eu', 'εΥ': 'eU', 'ευ': 'eu',
    'ΕΎ': 'EÚ', 'Εύ': 'Eú', 'εΎ': 'eÚ', 'εύ': 'eú',
    'ΟΥ': 'OU', 'Ου': 'Ou', 'οΥ': 'oU', 'ου': 'ou',
    'ΟΎ': 'OÚ', 'Ού': 'Oú', 'οΎ': 'oÚ', 'ού': 'oú'
  }

  const preprocessMapHy: Record<string, string> = {
    'և': 'ev', 'եւ': 'ev'
  }

  const result = (): string => {
    let tempText: string = text;

    if (lang === 'el') {
      for (const [from, to] of Object.entries(preprocessMapEl)) {
        tempText = tempText.replaceAll(from, to);
      }
      return tempText;
    } else if (lang === 'hy') {
      for (const [from, to] of Object.entries(preprocessMapHy)) {
        tempText = tempText.replaceAll(from, to);
      }
      return tempText;
    } else {
      return tempText;
    }
  }

  return result();
}
