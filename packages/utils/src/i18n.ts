'use client';

import { useLocale } from '@it-tech-blog/preferences';

export const useLang = <T>(strings: Record<'ko' | 'en', T>): T => {
  const { locale } = useLocale();
  return strings[(locale as 'ko' | 'en') ?? 'ko'];
};
