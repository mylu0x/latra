import type { Rules } from '#shared/types/rule';

export const transliterationMap: Rules = {
  cyrillic: {
    writingName: 'Cyrillic',
    writingCode: 'cyrillic',
    languages: {
      ru: { // Russian
        langName: 'Russian',
        langCode: 'ru',
        route: '/',
        rules: {
          iso9: { // ISO 9
            id: 'iso-9-1995',
            name: 'ISO 9',
            desc: 'International standard for converting cyrillic into latin system',
            map: {
              'А': 'A', 'а': 'a',
              'Б': 'B', 'б': 'b',
              'В': 'V', 'в': 'v',
              'Г': 'G', 'г': 'g',
              'Д': 'D', 'д': 'd',
              'Е': 'E', 'е': 'e',
              'Ё': 'Ë', 'ё': 'ë',
              'Ж': 'Ž', 'ж': 'ž',
              'З': 'Z', 'з': 'z',
              'И': 'I', 'и': 'i',
              'Й': 'J', 'й': 'j',
              'К': 'K', 'к': 'k',
              'Л': 'L', 'л': 'l',
              'М': 'M', 'м': 'm',
              'Н': 'N', 'н': 'n',
              'О': 'O', 'о': 'o',
              'П': 'P', 'п': 'p',
              'Р': 'R', 'р': 'r',
              'С': 'S', 'с': 's',
              'Т': 'T', 'т': 't',
              'У': 'U', 'у': 'u',
              'Ф': 'F', 'ф': 'f',
              'Х': 'H', 'х': 'h',
              'Ц': 'C', 'ц': 'c',
              'Ч': 'Č', 'ч': 'č',
              'Ш': 'Š', 'ш': 'š',
              'Щ': 'Ŝ', 'щ': 'ŝ',
              'Ъ': 'ʺ', 'ъ': 'ʺ',
              'Ы': 'Y', 'ы': 'y',
              'Ь': 'ʹ', 'ь': 'ʹ',
              'Э': 'È', 'э': 'è',
              'Ю': 'Û', 'ю': 'û',
              'Я': 'Â', 'я': 'â'
            }
          }
        }
      }
    }
  }
}
