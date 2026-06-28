'use client';

import { createContext, useCallback, useContext, useState } from 'react';

export type FontFamily = 'sans' | 'serif' | 'mono' | 'pretendard' | 'd2coding' | 'myeongjo';

interface FontFamilyContextValue {
  fontFamily: FontFamily;
  setFontFamily: (family: FontFamily) => void;
}

const FontFamilyContext = createContext<FontFamilyContextValue | null>(null);

export const useFontFamily = () => {
  const ctx = useContext(FontFamilyContext);
  if (!ctx) throw new Error('useFontFamily must be used within FontFamilyProvider');
  return ctx;
};

export const FontFamilyProvider = ({
  children,
  defaultFontFamily = 'pretendard',
}: {
  children: React.ReactNode;
  defaultFontFamily?: FontFamily;
}) => {
  const [fontFamily, setFontFamilyState] = useState<FontFamily>(defaultFontFamily);

  const setFontFamily = useCallback((family: FontFamily) => {
    setFontFamilyState(family);
    document.cookie = `fontFamily=${family};path=/;max-age=31536000`;
    document.documentElement.dataset.font = family;
  }, []);

  return (
    <FontFamilyContext.Provider value={{ fontFamily, setFontFamily }}>
      {children}
    </FontFamilyContext.Provider>
  );
};
