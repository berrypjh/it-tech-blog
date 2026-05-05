'use client';

import { createContext, useCallback, useContext, useState } from 'react';

export type Locale = 'ko' | 'en';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
};

export const LocaleProvider = ({
  children,
  defaultLocale = 'ko',
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((locale: Locale) => {
    setLocaleState(locale);
    document.cookie = `locale=${locale};path=/;max-age=31536000`;
  }, []);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};
