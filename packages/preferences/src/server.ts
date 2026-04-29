import { cookies } from 'next/headers';

export type Theme = 'dark' | 'light';
export type Locale = 'ko' | 'en';

export const getServerTheme = async () => ((await cookies()).get('theme')?.value ?? 'dark') as Theme;

export const getServerLocale = async () => ((await cookies()).get('locale')?.value ?? 'ko') as Locale;
