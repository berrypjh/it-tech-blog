'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { controlClass } from '@/components/widgets/shared/styles';

const MIN = 0;
const MAX = 100;
const STEP = 5;
const presets = [0, 25, 50, 75, 100];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '손잡이 · 키보드 · 버튼 가운데 어느 길로도 같은 값에 닿는지 확인하세요. 설정은 어디에도 저장하지 않습니다.',
    label: '알림 소리 크기',
    valueText: (value: number) => `${value}퍼센트`,
    decrease: `${STEP} 줄이기`,
    increase: `${STEP} 늘리기`,
    presets: '값 바로 고르기',
    preset: (value: number) => `${value}%로 맞추기`,
    observed: '페이지가 읽은 DOM',
    value: 'input의 value',
    range: 'min · max · step',
    valuetext: 'aria-valuetext',
    output: '화면의 output 글자',
    focus: 'document.activeElement',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Check that the handle, the keyboard, and the buttons all reach the same value. The setting is not stored anywhere.',
    label: 'Notification volume',
    valueText: (value: number) => `${value} percent`,
    decrease: `Decrease by ${STEP}`,
    increase: `Increase by ${STEP}`,
    presets: 'Pick a value directly',
    preset: (value: number) => `Set to ${value}%`,
    observed: 'DOM the page read',
    value: 'value of the input',
    range: 'min, max, step',
    valuetext: 'aria-valuetext',
    output: 'Text of the output on screen',
    focus: 'document.activeElement',
  },
};

const clamp = (value: number) => Math.min(MAX, Math.max(MIN, value));

/**
 * 네이티브 range와, 끌지 않고 같은 값에 닿는 증감 버튼 · 직접 선택 버튼. 세 길은 같은 값 하나를 바꾼다.
 * 경계에서 더 갈 수 없는 증감 버튼은 aria-disabled로 알리고, 초점을 잃지 않도록 disabled로 바꾸지는 않는다.
 */
export const SliderDemo = () => {
  const c = useLang(content);
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const output = useRef<HTMLOutputElement>(null);
  const [active] = useActiveElement();
  const [value, setValue] = useState(25);
  const [read, setRead] = useState({ value: '', range: '', valuetext: '', output: '' });

  useEffect(() => {
    const el = input.current;
    if (!el) return;
    setRead({
      value: el.value,
      range: `${el.min} · ${el.max} · ${el.step}`,
      valuetext: el.getAttribute('aria-valuetext') ?? '',
      output: output.current?.textContent ?? '',
    });
  }, [value]);

  const step = (delta: number) => setValue((previous) => clamp(previous + delta));

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-md text-xsm">
        <label htmlFor={`${id}-range`} className="font-semiBold text-text-default">
          {c.label}
        </label>
        <div className="flex flex-wrap items-center gap-md">
          <input
            ref={input}
            id={`${id}-range`}
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={value}
            aria-valuetext={c.valueText(value)}
            onChange={(e) => setValue(Number(e.target.value))}
            className="min-w-0 flex-1"
          />
          <output ref={output} htmlFor={`${id}-range`} className="w-12 text-right font-semiBold">
            {value}%
          </output>
        </div>
        <div className="flex flex-wrap gap-sm">
          <button
            type="button"
            aria-disabled={value === MIN ? true : undefined}
            onClick={() => step(-STEP)}
            className={`${controlClass} aria-disabled:opacity-60`}
          >
            {c.decrease}
          </button>
          <button
            type="button"
            aria-disabled={value === MAX ? true : undefined}
            onClick={() => step(STEP)}
            className={`${controlClass} aria-disabled:opacity-60`}
          >
            {c.increase}
          </button>
        </div>
        <div role="group" aria-label={c.presets} className="flex flex-wrap gap-sm">
          {presets.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setValue(preset)}
              className={controlClass}
            >
              {c.preset(preset)}
            </button>
          ))}
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.value, <code key="v">{read.value}</code>],
          [c.range, <code key="r">{read.range}</code>],
          [c.valuetext, read.valuetext],
          [c.output, read.output],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
