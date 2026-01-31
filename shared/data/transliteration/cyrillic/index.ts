import type { Writing } from '#shared/types/rule';
import { ru } from './ru';
import { uk } from './uk';
import { kk } from './kk';

export const cyrillic: Writing = {
  writingName: 'Cyrillic',
  languages: { ru, uk, kk }
}