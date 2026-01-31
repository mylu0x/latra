import type { Rules } from "#shared/types/rule";
import { cyrillic } from '#shared/data/transliteration/cyrillic';
import { greek } from '#shared/data/transliteration/greek';
import { georgian } from '#shared/data/transliteration/georgian';
import { armenian } from '#shared/data/transliteration/armenian';

export const transliterationMaps: Rules = {
  cyrillic, greek, georgian, armenian
}