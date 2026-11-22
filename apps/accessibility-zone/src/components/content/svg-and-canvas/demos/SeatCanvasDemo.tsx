'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useTheme } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';

const seats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];
const sold = new Set(['A2']);
const SIZE = 56;
const GAP = 16;
const WIDTH = 3 * SIZE + 4 * GAP;
const HEIGHT = 2 * SIZE + 3 * GAP;

const content = {
  ko: {
    practice: '실습',
    instructions:
      'Canvas의 좌석을 마우스로 눌러 보고, Tab으로도 같은 좌석을 골라 보세요. 그다음 의도한 결함을 켜고 키보드로 고를 수 있는지 비교합니다.',
    defect: '의도한 결함: Canvas만 두고 HTML 버튼 없음',
    canvasLabel: 'Canvas 좌석 배치도 (포인터 전용)',
    groupLabel: '좌석 선택 (HTML 버튼)',
    seat: (id: string) => `${id} 좌석`,
    soldOut: '판매됨',
    chosen: (id: string) => `${id} 좌석을 골랐습니다.`,
    soldTried: (id: string) => `${id} 좌석은 판매되어 고를 수 없습니다.`,
    observed: '지금 관찰한 값',
    tabIndex: 'canvas.tabIndex',
    hidden: 'canvas의 aria-hidden',
    buttons: 'HTML 좌석 버튼 수',
    selected: '고른 좌석',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Click a seat on the Canvas with the mouse, then pick the same seat with Tab. Then turn on the intentional defect and compare whether the keyboard can still pick one.',
    defect: 'Intentional defect: Canvas only, no HTML buttons',
    canvasLabel: 'Canvas seat map (pointer only)',
    groupLabel: 'Choose a seat (HTML buttons)',
    seat: (id: string) => `Seat ${id}`,
    soldOut: 'sold',
    chosen: (id: string) => `Seat ${id} chosen.`,
    soldTried: (id: string) => `Seat ${id} is sold and cannot be chosen.`,
    observed: 'Observed now',
    tabIndex: 'canvas.tabIndex',
    hidden: 'aria-hidden on canvas',
    buttons: 'HTML seat buttons',
    selected: 'Chosen seat',
    focus: 'document.activeElement',
    none: 'None',
  },
};

const seatBox = (i: number) => ({
  x: GAP + (i % 3) * (SIZE + GAP),
  y: GAP + Math.floor(i / 3) * (SIZE + GAP),
});

/** 글자색 토큰을 Canvas 색으로 읽는다. Canvas는 CSS 변수를 직접 쓰지 못한다. */
const colorOf = (el: Element | null) => (el ? getComputedStyle(el).color : '#000');

/**
 * 같은 좌석 상태를 Canvas(포인터 전용 그림)와 HTML 버튼(키보드 · 보조기술 경로)으로 보여 준다.
 * Canvas는 aria-hidden으로 숨겨 같은 기능을 두 번 노출하지 않는다.
 */
export const SeatCanvasDemo = () => {
  const c = useLang(content);
  const { resolvedTheme } = useTheme();
  const groupId = useId();
  const canvas = useRef<HTMLCanvasElement>(null);
  const primary = useRef<HTMLSpanElement>(null);
  const muted = useRef<HTMLSpanElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [defect, setDefect] = useState(false);
  const [read, setRead] = useState({ tabIndex: 0, hidden: '', buttons: 0 });
  const [active] = useActiveElement();

  const choose = (id: string) => {
    if (sold.has(id)) {
      setMessage(c.soldTried(id));
      return;
    }
    setSelected(id);
    setMessage(c.chosen(id));
  };

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext('2d');
    if (!el || !ctx) return;
    const ratio = window.devicePixelRatio || 1;
    el.width = WIDTH * ratio;
    el.height = HEIGHT * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.font = '600 14px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    seats.forEach((id, i) => {
      const { x, y } = seatBox(i);
      const tone = sold.has(id) ? colorOf(muted.current) : colorOf(primary.current);
      ctx.lineWidth = 2;
      ctx.strokeStyle = tone;
      ctx.fillStyle = tone;
      if (id === selected) {
        ctx.globalAlpha = 0.25;
        ctx.fillRect(x, y, SIZE, SIZE);
        ctx.globalAlpha = 1;
        ctx.lineWidth = 4;
      }
      ctx.strokeRect(x, y, SIZE, SIZE);
      ctx.fillStyle = colorOf(text.current);
      ctx.fillText(sold.has(id) ? `${id} ✕` : id, x + SIZE / 2, y + SIZE / 2);
    });
  }, [selected, resolvedTheme]);

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    setRead({
      tabIndex: el.tabIndex,
      hidden: el.getAttribute('aria-hidden') ?? '',
      buttons: group.current?.querySelectorAll('button').length ?? 0,
    });
  }, [defect]);

  const onCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * WIDTH;
    const y = ((event.clientY - rect.top) / rect.height) * HEIGHT;
    const hit = seats.findIndex((_, i) => {
      const box = seatBox(i);
      return x >= box.x && x <= box.x + SIZE && y >= box.y && y <= box.y + SIZE;
    });
    if (hit >= 0) choose(seats[hit]);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={defect} onChange={(e) => setDefect(e.target.checked)} />
        {c.defect}
      </label>
      <span ref={primary} className="hidden text-text-primary" />
      <span ref={muted} className="hidden text-text-light" />
      <span ref={text} className="hidden text-text-default" />
      <div className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm sm:flex-row sm:items-start">
        <div className="flex flex-col gap-xs text-text-light">
          <span aria-hidden="true">{c.canvasLabel}</span>
          {}
          <canvas
            ref={canvas}
            aria-hidden={defect ? undefined : 'true'}
            onClick={onCanvasClick}
            style={{ width: WIDTH, height: HEIGHT }}
            className="max-w-full cursor-pointer"
          />
        </div>
        {!defect && (
          <div className="flex flex-col gap-xs text-text-default">
            <p id={groupId} className="font-semiBold">
              {c.groupLabel}
            </p>
            <div
              ref={group}
              role="group"
              aria-labelledby={groupId}
              className="grid grid-cols-3 gap-xs"
            >
              {seats.map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={selected === id}
                  aria-disabled={sold.has(id) || undefined}
                  onClick={() => choose(id)}
                  className="rounded-sm border border-stroke-default px-sm py-xs aria-pressed:bg-background-grey/40 aria-pressed:font-bold aria-disabled:text-text-light"
                >
                  {c.seat(id)}
                  {sold.has(id) && ` (${c.soldOut})`}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <p role="status" className="text-xsm">
        {message}
      </p>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.tabIndex, <code key="t">{read.tabIndex}</code>],
          [c.hidden, <code key="h">{read.hidden || c.none}</code>],
          [c.buttons, read.buttons],
          [c.selected, selected ?? c.none],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
