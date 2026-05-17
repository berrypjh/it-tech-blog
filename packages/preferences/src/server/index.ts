import { cookies } from 'next/headers';

export type Theme = 'dark' | 'light';
export type Locale = 'ko' | 'en';
export type FontSize = 'sm' | 'md' | 'lg';

export const getServerTheme = async () =>
  ((await cookies()).get('theme')?.value ?? 'dark') as Theme;

export const getServerLocale = async () =>
  ((await cookies()).get('locale')?.value ?? 'ko') as Locale;

export const getServerFontSize = async () =>
  ((await cookies()).get('fontSize')?.value ?? 'md') as FontSize;

export type Motion = 'default' | 'reduce';
export const getServerMotion = async () =>
  ((await cookies()).get('motion')?.value ?? 'default') as Motion;

export type FontFamily = 'sans' | 'serif' | 'mono';
export const getServerFontFamily = async () =>
  ((await cookies()).get('fontFamily')?.value ?? 'sans') as FontFamily;
