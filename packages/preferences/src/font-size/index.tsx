'use client';

import { createContext, useContext, useState, useCallback } from 'react';

export type FontSize = 'sm' | 'md' | 'lg';

interface FontSizeContextValue {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const FontSizeContext = createContext<FontSizeContextValue | null>(null);

export const useFontSize = () => {
  const ctx = useContext(FontSizeContext);
  if (!ctx) throw new Error('useFontSize must be used within FontSizeProvider');
  return ctx;
};

export const FontSizeProvider = ({
  children,
  defaultFontSize = 'md',
}: {
  children: React.ReactNode;
  defaultFontSize?: FontSize;
}) => {
  const [fontSize, setFontSizeState] = useState<FontSize>(defaultFontSize);

  const setFontSize = useCallback((size: FontSize) => {
    setFontSizeState(size);
    document.cookie = `fontSize=${size};path=/;max-age=31536000`;
    document.documentElement.dataset.fontSize = size;
  }, []);

  return <FontSizeContext.Provider value={{ fontSize, setFontSize }}>{children}</FontSizeContext.Provider>;
};
