'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useMotion } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { Headphones } from 'lucide-react';

import { ListenPlayer } from './ListenPlayer';
import type { NarrationScript } from './script';
import { fullSegments, lectureSegments, type ListenMode } from './segments';
import { useNarration } from './useNarration';

const strings = {
  ko: { listen: '이 페이지 듣기', listening: '듣는 중' },
  en: { listen: 'Listen to this page', listening: 'Listening' },
};

/** 고른 듣기 모드를 기억하는 브라우저 저장소 키. */
const MODE_KEY = 'listen-mode';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * 페이지 머리말의 듣기 버튼. 누르면 본문(article)을 해설처럼 골라 읽는 재생기를 화면 아래에 띄운다.
 * 재생기는 버튼 바로 뒤에 두어 Tab 순서가 버튼에서 재생기로 이어진다.
 */
export const ListenButton = ({ script }: { script?: NarrationScript }) => {
  const t = useLang(strings);
  const { motion } = useMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [mode, setMode] = useState<ListenMode>('lecture');
  const modeRef = useRef<ListenMode>('lecture');

  useEffect(() => setReduce(motion === 'reduce' || prefersReducedMotion()), [motion]);
  useEffect(() => {
    if (localStorage.getItem(MODE_KEY) !== 'full') return;
    modeRef.current = 'full';
    setMode('full');
  }, []);

  const segmentsFor = useCallback(
    (which: ListenMode) => {
      const article = buttonRef.current?.closest('article');
      if (!article) return [];
      const lang = document.documentElement.lang === 'en' ? 'en' : 'ko';
      return which === 'lecture' ? lectureSegments(article, lang, script) : fullSegments(article);
    },
    [script],
  );
  const getSegments = useCallback(() => segmentsFor(modeRef.current), [segmentsFor]);

  const narration = useNarration(getSegments, reduce);

  const changeMode = (next: ListenMode) => {
    modeRef.current = next;
    setMode(next);
    localStorage.setItem(MODE_KEY, next);
    narration.reload();
  };

  /** 이미 열려 있으면 처음부터 다시 시작하지 않고, 바로 뒤에 놓인 재생기(또는 미니 바)의 첫 버튼으로 간다. */
  const openPlayer = () => {
    if (open) {
      buttonRef.current?.nextElementSibling?.querySelector<HTMLButtonElement>('button')?.focus();
      return;
    }
    setOpen(true);
    narration.start();
  };

  const close = () => {
    narration.stop();
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={openPlayer}
        aria-pressed={open}
        className="inline-flex items-center gap-xs rounded-sm text-text-link hover:underline"
      >
        <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
        {open ? t.listening : t.listen}
      </button>
      {open && (
        <ListenPlayer narration={narration} mode={mode} onModeChange={changeMode} onClose={close} />
      )}
    </>
  );
};
