import { cookies } from 'next/headers';

import type { FontFamily } from '../font-family';
import type { FontSize } from '../font-size';
import type { Locale } from '../locale';
import type { Motion } from '../motion';
import type { Theme } from '../theme';

export type { FontFamily, FontSize, Locale, Motion, Theme };

export const getServerTheme = async () =>
  ((await cookies()).get('theme')?.value ?? 'dark') as Theme;

export const getServerLocale = async () =>
  ((await cookies()).get('locale')?.value ?? 'ko') as Locale;

export const getServerFontSize = async () =>
  ((await cookies()).get('fontSize')?.value ?? 'md') as FontSize;

export const getServerMotion = async () =>
  ((await cookies()).get('motion')?.value ?? 'default') as Motion;

export const getServerFontFamily = async () =>
  ((await cookies()).get('fontFamily')?.value ?? 'pretendard') as FontFamily;
