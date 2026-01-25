import type { Rules } from "#shared/types/rule";

const transliterationMap: Rules = {
  cyrillic: {
    writingName: 'Cyrillic',
    writingCode: 'cyrillic',
    languages: {
      ru: { // Russian
        langName: 'Russian',
        langCode: 'ru',
        rules: {
          iso9: { // ISO 9
            id: 'iso9',
            name: 'ISO 9',
            desc: 'International standard for converting cyrillic into latin system',
            map: {
              'А': 'A',
              'Б': 'B',
              // Under construction
            }
          }
        }
      }
    }
  }
}

export default function (): Rules { return transliterationMap }
