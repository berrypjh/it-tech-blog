'use client';

import { useEffect, useId, useRef, useState } from 'react';

export type HelpTipState = { open: boolean; pointerOnContent: boolean };

type Props = {
  label: string;
  text: string;
  onStateChange?: (state: HelpTipState) => void;
};

/** 글자색은 놓인 화면에서 물려받는다. 고정 색을 쓰는 예제 화면에서도 대비가 유지된다. */
const triggerClass = 'rounded-sm border border-stroke-light px-md py-xs text-xsm font-semiBold';
const contentClass =
  'absolute left-0 top-full z-10 w-64 max-w-[70vw] rounded-sm border border-stroke-default bg-background-default p-sm text-xsm text-text-default';

/**
 * 호버 · 키보드 포커스 · 누르기로 열리는 도움말. 내용 위로 포인터를 옮겨도 유지되고, 타이머로 닫히지 않는다.
 * Escape는 열려 있는 동안만 듣고 기본 동작을 막지 않는다. 닫아도 포커스를 옮기지 않고, 트리거를 벗어나기 전에는 다시 열지 않는다.
 */
export const HelpTip = ({ label, text, onStateChange }: Props) => {
  const id = useId();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [pointerOnContent, setPointerOnContent] = useState(false);
  const open = pinned || (!dismissed && (hovered || focused));

  useEffect(() => {
    onStateChange?.({ open, pointerOnContent });
  }, [open, pointerOnContent, onStateChange]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setPinned(false);
      setDismissed(hovered || focused);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, hovered, focused]);

  const onPointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType !== 'touch') setHovered(true);
  };

  const onPointerLeave = () => {
    setHovered(false);
    setPointerOnContent(false);
    if (!focused) setDismissed(false);
  };

  const onFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget.matches(':focus-visible')) setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
    if (!hovered) setDismissed(false);
  };

  const onClick = () => {
    setDismissed(pinned);
    setPinned(!pinned);
  };

  return (
    <span
      className="relative inline-block"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-describedby={open ? id : undefined}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        className={triggerClass}
      >
        {label}
      </button>
      {open && (
        <span
          id={id}
          role="note"
          onPointerEnter={() => setPointerOnContent(true)}
          onPointerLeave={() => setPointerOnContent(false)}
          className={contentClass}
        >
          {text}
        </span>
      )}
    </span>
  );
};

const AUTO_HIDE_MS = 1500;

/** 의도한 결함: 트리거 호버로만 열리고, 틈이 있으며, 시간이 지나면 사라지고, 키보드 · 터치로는 열 수 없다. */
export const DefectiveHelpTip = ({ label, text, onStateChange }: Props) => {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    onStateChange?.({ open, pointerOnContent: false });
  }, [open, onStateChange]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const show = () => {
    setOpen(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), AUTO_HIDE_MS);
  };

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onMouseEnter={show}
        onMouseLeave={() => setOpen(false)}
        className={triggerClass}
      >
        {label}
      </button>
      {open && <span className={`${contentClass} mt-sm`}>{text}</span>}
    </span>
  );
};
