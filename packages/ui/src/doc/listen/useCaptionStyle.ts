'use client';

import { useEffect, useState } from 'react';

/** 자막 모양 설정. size는 글자 배율, opacity는 배경 불투명도, inside는 재생기 카드 안에 표시. */
export type CaptionStyle = { size: number; opacity: number; inside: boolean };

export const CAPTION_SIZES = [0.75, 1, 1.25, 1.5] as const;
export const CAPTION_OPACITIES = [0.5, 0.75, 1] as const;

/** 기본은 동영상 자막처럼 재생기 위에 따로 띄운다. */
const DEFAULT_STYLE: CaptionStyle = { size: 1, opacity: 1, inside: false };
/** 고른 자막 모양을 기억하는 브라우저 저장소 키. */
const CAPTION_KEY = 'listen-captions';

/** 유데미 자막 설정처럼 글자 크기 · 배경 · 위치를 고르고, 다음 페이지에서도 유지한다. */
export const useCaptionStyle = () => {
  const [style, setStyle] = useState<CaptionStyle>(DEFAULT_STYLE);

  useEffect(() => {
    const saved = localStorage.getItem(CAPTION_KEY);
    if (saved) setStyle({ ...DEFAULT_STYLE, ...(JSON.parse(saved) as Partial<CaptionStyle>) });
  }, []);

  const update = (next: Partial<CaptionStyle>) => {
    setStyle((prev) => {
      const merged = { ...prev, ...next };
      localStorage.setItem(CAPTION_KEY, JSON.stringify(merged));
      return merged;
    });
  };

  const isDefault = (Object.keys(DEFAULT_STYLE) as (keyof CaptionStyle)[]).every(
    (key) => style[key] === DEFAULT_STYLE[key],
  );

  return { style, isDefault, update, reset: () => update(DEFAULT_STYLE) };
};
