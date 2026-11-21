'use client';

import { useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { getContrastRatio, useLang } from '@it-tech-blog/utils';

import { formatRatio } from '@/components/visual/shared/contrast';

import { ObservedPanel } from '../../shared/ObservedPanel';

type Reading = {
  name: string;
  visible: boolean;
  width: string;
  color: string;
  background: string;
  ratio: number;
};

type Rgba = [number, number, number, number];

const WHITE: Rgba = [255, 255, 255, 255];
/** 1.4.11과 2.4.13이 쓰는 대비 기준값. */
const REQUIRED_RATIO = 3;

const content = {
  ko: {
    practice: '실습',
    instructions: '이 문장 다음부터 Tab으로 두 버튼에 차례로 가서 포커스 표시를 찾아보세요.',
    stage: '예제 버튼 (교육 예시)',
    standard: '기본 링 버튼',
    weak: '식별 어려운 링 버튼',
    defect: '의도한 결함: 둘째 버튼의 표시는 1px이고 색이 주변과 거의 같습니다.',
    observed: '마지막으로 포커스 받은 버튼의 표시',
    target: '버튼',
    state: ':focus-visible',
    width: '외곽선 두께',
    color: '외곽선 색',
    background: '인접 배경색',
    ratio: '외곽선과 인접 배경의 대비',
    meets: '3:1 이상',
    below: '3:1 미만',
    yes: '일치',
    no: '일치하지 않음 (표시가 없을 수 있음)',
    none: '(아직 없음)',
    noIndicator: '(지금은 표시가 없어 계산하지 않음)',
    note: '외곽선이 요소 밖에 그려질 때의 계산값입니다. 2.4.13의 면적과 예외, 실제 보이는 정도는 화면에서 함께 판단합니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'From this sentence, Tab to each button in turn and look for the focus indicator.',
    stage: 'Example buttons (teaching example)',
    standard: 'Default ring button',
    weak: 'Hard-to-see ring button',
    defect:
      'Intentional defect: the second indicator is 1px and nearly the same as its surroundings.',
    observed: 'Indicator of the last focused button',
    target: 'Button',
    state: ':focus-visible',
    width: 'Outline width',
    color: 'Outline color',
    background: 'Adjacent background',
    ratio: 'Outline against adjacent background',
    meets: '3:1 or more',
    below: 'Below 3:1',
    yes: 'Matches',
    no: 'Does not match (there may be no indicator)',
    none: '(nothing yet)',
    noIndicator: '(no indicator now, so nothing is computed)',
    note: 'Computed for an outline drawn outside the element. Judge the area and exceptions of 2.4.13, and how visible it really is, on the screen as well.',
  },
};

/** CSS 색을 캔버스에 칠해 sRGB 값으로 읽는다. oklch 같은 표기도 같은 형태가 된다. */
const toRgba = (color: string): Rgba => {
  const context = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  if (!context) return [0, 0, 0, 0];
  context.fillStyle = color;
  context.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = context.getImageData(0, 0, 1, 1).data;
  return [r, g, b, a];
};

const toHex = ([r, g, b]: Rgba) =>
  `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;

/** 위 색을 아래 색에 합성해 getContrastRatio가 받는 #rrggbb로 만든다. */
const flatten = (top: Rgba, bottom: Rgba): string => {
  const alpha = top[3] / 255;
  const mix = (i: 0 | 1 | 2) => Math.round(top[i] * alpha + bottom[i] * (1 - alpha));
  return toHex([mix(0), mix(1), mix(2), 255]);
};

/** 투명하지 않은 가장 가까운 조상의 배경을 #rrggbb로 찾는다. 없으면 흰색으로 본다. */
const backgroundOf = (element: Element) => {
  for (let node = element.parentElement; node; node = node.parentElement) {
    const color = toRgba(getComputedStyle(node).backgroundColor);
    if (color[3] > 0) return flatten(color, WHITE);
  }
  return toHex(WHITE);
};

const read = (button: HTMLButtonElement): Reading => {
  const style = getComputedStyle(button);
  const background = backgroundOf(button);
  const color = flatten(toRgba(style.outlineColor), toRgba(background));
  return {
    name: button.textContent ?? '',
    visible: button.matches(':focus-visible') && style.outlineStyle !== 'none',
    width: style.outlineWidth,
    color,
    background,
    ratio: getContrastRatio(color, background),
  };
};

const buttonClass =
  'rounded-sm border border-stroke-light px-md py-sm text-xsm font-semiBold text-text-default';

/** 전역 포커스 표시를 그대로 둔 채, 한 버튼의 인라인 스타일만 약하게 바꿔 표시 값을 비교한다. */
export const IndicatorDemo = () => {
  const c = useLang(content);
  const [reading, setReading] = useState<Reading | null>(null);
  const onFocus = (event: React.FocusEvent<HTMLButtonElement>) =>
    setReading(read(event.currentTarget));
  const shown = reading?.visible ? reading : null;
  const empty = reading ? c.noIndicator : c.none;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="rounded-sm border border-stroke-light p-md">
        <p className="mb-md text-xxsm font-semiBold text-text-light">{c.stage}</p>
        <div className="flex flex-wrap gap-lg">
          <button type="button" onFocus={onFocus} className={buttonClass}>
            {c.standard}
          </button>
          <button
            type="button"
            onFocus={onFocus}
            className={buttonClass}
            style={{ outlineColor: 'var(--color-canvas)', outlineWidth: 1 }}
          >
            {c.weak}
          </button>
        </div>
        <p className="mt-sm text-xxsm text-text-error">{c.defect}</p>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.target, reading?.name ?? c.none],
          [c.state, reading ? (reading.visible ? c.yes : c.no) : c.none],
          [c.width, shown?.width ?? empty],
          [c.color, shown ? <code key="a">{shown.color}</code> : empty],
          [c.background, shown ? <code key="a">{shown.background}</code> : empty],
          [
            c.ratio,
            shown
              ? `${formatRatio(shown.ratio)}:1 (${shown.ratio >= REQUIRED_RATIO ? c.meets : c.below})`
              : empty,
          ],
        ]}
      >
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
