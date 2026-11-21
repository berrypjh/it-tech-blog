'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { overlapRatio } from '@/components/keyboard/shared/overlapRatio';

type Fix = 'padding' | 'margin' | 'unstick' | 'none';

const fixes: Fix[] = ['padding', 'margin', 'unstick', 'none'];
const HEADER_HEIGHT = 44;
const FOOTER_HEIGHT = 56;
const STOP_GAP = 8;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '수정안을 고른 뒤 첫 입력 칸부터 Tab으로 이동해 보세요. 키보드 모형을 켜면 쓸 수 있는 높이가 줄어듭니다.',
    legend: '수정안',
    fixes: {
      padding: 'scroll-padding',
      margin: 'scroll-margin',
      unstick: '하단 고정 해제',
      none: '수정 없음 (의도한 결함)',
    },
    keyboard: '가상 키보드 모형 켜기 (교육용)',
    header: '배송 정보 (고정 머리글)',
    fields: ['받는 분', '연락처', '우편번호', '주소', '상세 주소', '요청 사항'],
    submit: '주문 제출',
    submitted: '제출 버튼이 눌렸습니다 (실제로 보내지 않음).',
    region: '배송 정보 폼',
    mock: '가상 키보드를 나타낸 교육용 모형입니다. 실제 키보드가 아닙니다.',
    observed: '포커스 받은 요소의 가림',
    target: '요소',
    covered: '가려진 면적',
    visual: '실제 visualViewport 높이',
    inner: '실제 window.innerHeight',
    none: '(아직 없음)',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Choose a fix and Tab from the first input. Turning on the keyboard model reduces the available height.',
    legend: 'Fix',
    fixes: {
      padding: 'scroll-padding',
      margin: 'scroll-margin',
      unstick: 'Unstick the bottom action',
      none: 'No fix (intentional defect)',
    },
    keyboard: 'Turn on the virtual keyboard model (teaching only)',
    header: 'Delivery details (fixed header)',
    fields: ['Recipient', 'Phone', 'Postal code', 'Address', 'Address line 2', 'Delivery note'],
    submit: 'Submit order',
    submitted: 'The submit button was pressed (nothing is sent).',
    region: 'Delivery details form',
    mock: 'A teaching model of a virtual keyboard. It is not a real keyboard.',
    observed: 'Covering of the focused element',
    target: 'Element',
    covered: 'Area hidden',
    visual: 'Real visualViewport height',
    inner: 'Real window.innerHeight',
    none: '(nothing yet)',
  },
};

/** 고정 머리글과 하단 액션이 있는 폼에서 수정안별로 포커스 요소의 가림을 잰다. 스크롤은 브라우저에 맡긴다. */
export const CoveredFormDemo = () => {
  const c = useLang(content);
  const id = useId();
  const [fix, setFix] = useState<Fix>('padding');
  const [keyboard, setKeyboard] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reading, setReading] = useState<{ name: string; ratio: number } | null>(null);
  const [viewport, setViewport] = useState<{ visual: number | null; inner: number } | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const focusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const update = () =>
      setViewport({ visual: window.visualViewport?.height ?? null, inner: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    window.visualViewport?.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('resize', update);
    };
  }, []);

  const measure = () => {
    const item = focusedRef.current;
    if (!item || !headerRef.current || !footerRef.current) return;
    const rect = item.getBoundingClientRect();
    const covers = [
      headerRef.current,
      ...(item === footerRef.current.firstElementChild ? [] : [footerRef.current]),
    ];
    const ratio = covers.reduce(
      (sum, cover) => sum + overlapRatio(rect, cover.getBoundingClientRect()),
      0,
    );
    const name =
      item instanceof HTMLInputElement ? item.labels?.[0]?.textContent : item.textContent;
    setReading({ name: name ?? '', ratio: Math.min(ratio, 1) });
  };

  const onFocus = (event: React.FocusEvent) => {
    focusedRef.current = event.target as HTMLElement;
    requestAnimationFrame(measure);
  };

  const sticky = fix !== 'unstick';

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.legend}
        value={fix}
        onValueChange={(value) => {
          setFix(value as Fix);
          setReading(null);
        }}
        className="flex-row flex-wrap gap-x-xl"
      >
        {fixes.map((value) => (
          <Radio key={value} value={value} className="text-xsm">
            {c.fixes[value]}
          </Radio>
        ))}
      </RadioGroup>
      <label className="flex items-center gap-sm text-xsm">
        <input
          type="checkbox"
          checked={keyboard}
          onChange={(e) => {
            setKeyboard(e.target.checked);
            setReading(null);
          }}
        />
        {c.keyboard}
      </label>

      <div className="overflow-hidden rounded-sm border border-stroke-light">
        <form
          aria-label={c.region}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          onFocus={onFocus}
          onScroll={measure}
          className="overflow-y-auto text-xsm"
          style={{
            height: keyboard ? 200 : 300,
            ...(fix === 'padding'
              ? {
                  scrollPaddingTop: HEADER_HEIGHT + STOP_GAP,
                  scrollPaddingBottom: FOOTER_HEIGHT + STOP_GAP,
                }
              : {}),
          }}
        >
          <div
            ref={headerRef}
            className="sticky top-0 z-10 flex items-center bg-background-default px-md font-semiBold text-text-default"
            style={{ height: HEADER_HEIGHT }}
          >
            {c.header}
          </div>
          <div className="flex flex-col gap-md p-md">
            {c.fields.map((field, i) => (
              <div key={field} className="flex flex-col gap-xs">
                <label htmlFor={`${id}-${i}`}>{field}</label>
                <input
                  id={`${id}-${i}`}
                  className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm"
                  style={
                    fix === 'margin'
                      ? {
                          scrollMarginTop: HEADER_HEIGHT + STOP_GAP,
                          scrollMarginBottom: FOOTER_HEIGHT + STOP_GAP,
                        }
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
          <div
            ref={footerRef}
            className={`${sticky ? 'sticky bottom-0' : ''} flex items-center bg-background-default px-md`}
            style={{ height: FOOTER_HEIGHT }}
          >
            <button
              type="submit"
              className="rounded-sm border border-stroke-light px-md py-xs font-semiBold text-text-default"
            >
              {c.submit}
            </button>
          </div>
        </form>
        {keyboard && (
          <p className="border-t border-stroke-light p-md text-center text-xxsm text-text-light">
            {c.mock}
          </p>
        )}
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.target, reading?.name ?? c.none],
          [c.covered, reading ? `${Math.round(reading.ratio * 100)}%` : c.none],
          [c.visual, viewport?.visual ? `${Math.round(viewport.visual)}px` : c.none],
          [c.inner, viewport ? `${viewport.inner}px` : c.none],
        ]}
      >
        {submitted && <p className="mt-sm text-xxsm text-text-light">{c.submitted}</p>}
      </ObservedPanel>
    </PracticeFrame>
  );
};
