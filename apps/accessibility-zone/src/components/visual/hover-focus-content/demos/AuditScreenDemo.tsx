'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { overlapRatio } from '@/components/keyboard/shared/overlapRatio';

import { checkContrast, formatRatio } from '../../shared/contrast';

import { DefectiveHelpTip, HelpTip } from './HelpTip';

const SCREEN_BACKGROUND = '#ffffff';
const HINT_COLOR = { defect: '#9aa5b1', fixed: '#475467' };
const BAR_HEIGHT = 48;
const SCREEN_WIDTH = 320;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '결함을 켜고 끄며 아래 값을 비교하세요. 입력 칸은 Tab으로 이동하고, 도움말은 호버 · 포커스 · 누르기로 열어 봅니다.',
    defect: '의도한 결함 켜기',
    screen: '쿠폰 화면 (가상의 화면)',
    title: '쿠폰 등록',
    hint: '쿠폰 번호는 메일에서 확인할 수 있습니다.',
    fields: ['쿠폰 번호', '확인 번호', '받는 사람'],
    wide: '가로로 넓은 쿠폰 안내 영역',
    tip: '쿠폰 도움말',
    tipText: '쿠폰은 주문 한 건에 하나만 쓸 수 있습니다 (교육 예시).',
    bar: '고정 안내 영역',
    observed: '이 화면의 판단 재료',
    contrast: '안내 문구 대비 (1.4.3)',
    overflow: `${SCREEN_WIDTH}px 패널의 가로 넘침 (1.4.10)`,
    covered: '포커스 입력 칸의 가림 (2.4.11)',
    tipOpen: '도움말 표시 (1.4.13, 직접 조작)',
    meets: '기준 이상',
    below: '기준 미달',
    yes: '있음',
    no: '없음',
    open: '열림',
    closed: '닫힘',
    none: '(아직 없음)',
    note: '대비는 계산, 넘침과 가림은 패널 모형의 측정입니다. 실제 확대 · 기기 결과가 아닙니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Toggle the defect and compare the values below. Tab through the inputs, and open the help with hover, focus, and press.',
    defect: 'Turn on the intentional defect',
    screen: 'Coupon screen (a fictional screen)',
    title: 'Add a coupon',
    hint: 'You can find the coupon number in your email.',
    fields: ['Coupon number', 'Confirmation code', 'Recipient'],
    wide: 'Wide coupon information area',
    tip: 'Coupon help',
    tipText: 'One coupon can be used per order (teaching example).',
    bar: 'Fixed notice area',
    observed: 'Inputs for judging this screen',
    contrast: 'Hint contrast (1.4.3)',
    overflow: `Horizontal overflow at ${SCREEN_WIDTH}px panel (1.4.10)`,
    covered: 'Focused input hidden (2.4.11)',
    tipOpen: 'Help shown (1.4.13, operate it yourself)',
    meets: 'meets it',
    below: 'below it',
    yes: 'Yes',
    no: 'No',
    open: 'Open',
    closed: 'Closed',
    none: '(nothing yet)',
    note: 'Contrast is computed; overflow and covering are measured in a panel model. They are not real zoom or device results.',
  },
};

/** 대비 · 좁은 폭 · 가림 · 추가 내용을 한 모형 화면에 모아, 결함 전후의 판단 재료를 보여 준다. */
export const AuditScreenDemo = () => {
  const c = useLang(content);
  const id = useId();
  const [defect, setDefect] = useState(false);
  const [overflow, setOverflow] = useState(false);
  const [covered, setCovered] = useState<number | null>(null);
  const [tipOpen, setTipOpen] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const focusedRef = useRef<HTMLElement | null>(null);
  const hintColor = defect ? HINT_COLOR.defect : HINT_COLOR.fixed;
  const contrast = checkContrast(hintColor, SCREEN_BACKGROUND, 'text');
  const Tip = defect ? DefectiveHelpTip : HelpTip;

  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;
    const measureOverflow = () => setOverflow(screen.scrollWidth > screen.clientWidth + 1);
    measureOverflow();
    setCovered(null);
    const observer = new ResizeObserver(measureOverflow);
    observer.observe(screen);
    return () => observer.disconnect();
  }, [defect]);

  const measure = () => {
    if (!focusedRef.current || !barRef.current) return;
    setCovered(
      overlapRatio(
        focusedRef.current.getBoundingClientRect(),
        barRef.current.getBoundingClientRect(),
      ),
    );
  };

  const onFocus = (event: React.FocusEvent) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    focusedRef.current = event.target;
    requestAnimationFrame(measure);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={defect} onChange={(e) => setDefect(e.target.checked)} />
        {c.defect}
      </label>

      <div
        ref={screenRef}
        role="group"
        aria-label={c.screen}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- 결함 상태에서 넘친 내용을 키보드로 스크롤할 수 있게 한다
        tabIndex={0}
        className="max-w-full overflow-x-auto rounded-sm border border-stroke-light text-xsm"
        style={{ width: SCREEN_WIDTH, backgroundColor: SCREEN_BACKGROUND, color: '#101828' }}
      >
        <div className="flex flex-col gap-sm p-md">
          <p className="font-bold">{c.title}</p>
          <p style={{ color: hintColor }}>{c.hint}</p>
          <p
            className="rounded-sm border border-[#d0d5dd] p-sm"
            style={defect ? { width: 440 } : undefined}
          >
            {c.wide}
          </p>
          <div className="pb-[4.5rem]">
            <Tip
              key={String(defect)}
              label={c.tip}
              text={c.tipText}
              onStateChange={(s) => setTipOpen(s.open)}
            />
          </div>
        </div>
        <div
          onFocus={onFocus}
          onScroll={measure}
          className="overflow-y-auto"
          style={{
            height: 150,
            scrollPaddingBottom: defect ? undefined : BAR_HEIGHT + 8,
          }}
        >
          <div className="flex flex-col gap-sm p-md">
            {c.fields.map((field, i) => (
              <div key={field} className="flex flex-col gap-xs">
                <label htmlFor={`${id}-${i}`}>{field}</label>
                <input
                  id={`${id}-${i}`}
                  className="w-full rounded-sm border border-[#667085] bg-white px-sm py-xs"
                />
              </div>
            ))}
          </div>
          <div
            ref={barRef}
            className="sticky bottom-0 flex items-center bg-[#eef2f6] px-md font-semiBold"
            style={{ height: BAR_HEIGHT }}
          >
            {c.bar}
          </div>
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        source="model"
        rows={[
          [
            c.contrast,
            contrast
              ? `${formatRatio(contrast.ratio)}:1 / ${contrast.required}:1 (${contrast.passes ? c.meets : c.below})`
              : c.none,
          ],
          [c.overflow, overflow ? c.yes : c.no],
          [c.covered, covered === null ? c.none : `${Math.round(covered * 100)}%`],
          [c.tipOpen, tipOpen ? c.open : c.closed],
        ]}
      >
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
