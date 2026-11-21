import type { Locale } from '@it-tech-blog/preferences';

import type { ListOption } from './optionList';

const labels: Record<Locale, string[]> = {
  ko: ['A동 보관함', 'B동 보관함', 'C동 보관함', 'D동 보관함', 'E동 보관함', 'F동 보관함'],
  en: [
    'Aspen locker',
    'Birch locker',
    'Cedar locker',
    'Dogwood locker',
    'Elm locker',
    'Fir locker',
  ],
};

/** 07.5 · 07.7 실습의 가상 수령 장소. 첫 글자로 찾을 수 있게 글자를 나눴다. */
export const lockerOptions = (locale: Locale): ListOption[] =>
  labels[locale].map((label, i) => ({ id: `locker-${i + 1}`, label }));
