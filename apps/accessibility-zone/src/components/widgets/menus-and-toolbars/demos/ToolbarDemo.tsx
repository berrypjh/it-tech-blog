'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { cx } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { moveIndex } from '@/components/widgets/shared/moveIndex';
import { controlClass } from '@/components/widgets/shared/styles';

const formats = ['bold', 'italic', 'underline'] as const;
type Format = (typeof formats)[number];

const styles: Record<Format, string> = {
  bold: 'font-bold',
  italic: 'italic',
  underline: 'underline',
};

const content = {
  ko: {
    practice: '실습',
    instructions:
      'Tab으로 도구 모음에 들어가 좌우 화살표로 옮기고 Space로 서식을 켠 뒤, Tab으로 메모 칸에 가서 화살표와 Home · End가 글자 사이를 그대로 움직이는지 확인하세요.',
    toolbar: '메모 서식',
    formats: { bold: '굵게', italic: '기울임', underline: '밑줄' },
    note: '메모',
    sample: '토요일 2회차는 13시에 시작합니다.',
    observed: '페이지가 읽은 DOM',
    stop: 'tabindex="0"인 컨트롤',
    pressed: 'aria-pressed="true"인 컨트롤',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Tab into the toolbar, move with the left and right arrows, and turn a format on with Space. Then Tab to the note field and check that the arrows and Home and End still move among the characters.',
    toolbar: 'Note formatting',
    formats: { bold: 'Bold', italic: 'Italic', underline: 'Underline' },
    note: 'Note',
    sample: 'Session 2 on Saturday starts at 1 p.m.',
    observed: 'DOM the page read',
    stop: 'Control with tabindex="0"',
    pressed: 'Controls with aria-pressed="true"',
    focus: 'document.activeElement',
    none: 'None',
  },
};

/**
 * 서식 도구 모음과 메모 칸. 도구 모음은 Tab 순서에 한 번만 들어가고 그 안은 좌우 화살표와 Home · End로 옮긴다.
 * 키 처리는 도구 모음의 버튼에만 달려 있어 메모 칸의 편집 키는 건드리지 않고, Tab은 가로채지 않는다.
 */
export const ToolbarDemo = () => {
  const c = useLang(content);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const [active] = useActiveElement();
  const [stop, setStop] = useState(0);
  const [pressed, setPressed] = useState<Format[]>([]);
  const [read, setRead] = useState({ stop: '', pressed: '' });

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    setRead({
      stop: el.querySelector('button[tabindex="0"]')?.textContent ?? '',
      pressed: [...el.querySelectorAll('button[aria-pressed="true"]')]
        .map((button) => button.textContent)
        .join(', '),
    });
  }, [stop, pressed]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const next = moveIndex(event.key, index, formats.length, 'horizontal');
    if (next === null) return;
    event.preventDefault();
    setStop(next);
    document.getElementById(`${id}-${formats[next]}`)?.focus();
  };

  const toggle = (format: Format) =>
    setPressed((previous) =>
      previous.includes(format) ? previous.filter((f) => f !== format) : [...previous, format],
    );

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div ref={box} className="flex flex-col gap-md text-xsm">
        <div
          role="toolbar"
          aria-label={c.toolbar}
          aria-controls={`${id}-note`}
          className="flex flex-wrap gap-xs"
        >
          {formats.map((format, index) => (
            <button
              key={format}
              type="button"
              id={`${id}-${format}`}
              aria-pressed={pressed.includes(format)}
              tabIndex={index === stop ? 0 : -1}
              onClick={() => toggle(format)}
              onFocus={() => setStop(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={controlClass}
            >
              {c.formats[format]}
            </button>
          ))}
        </div>
        <label htmlFor={`${id}-note`}>{c.note}</label>
        <textarea
          id={`${id}-note`}
          rows={3}
          defaultValue={c.sample}
          className={cx(
            'w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm',
            ...pressed.map((format) => styles[format]),
          )}
        />
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.stop, read.stop || c.none],
          [c.pressed, read.pressed || c.none],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
