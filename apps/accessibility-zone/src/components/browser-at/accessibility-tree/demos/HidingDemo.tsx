'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { cx, Radio, RadioGroup, TableScroll } from '@berrypjh/react-ui';

import { SourceTag } from '@/components/shared/SourceTag';

type Method = 'shown' | 'hidden' | 'visibility' | 'opacity' | 'visually-hidden';

const methods: Method[] = ['shown', 'hidden', 'visibility', 'opacity', 'visually-hidden'];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '숨기는 방법을 하나 고르고, 아래 "배송 안내" 문단이 화면과 접근성 트리에 남을지 먼저 예상해 보세요. 그다음 개발자 도구의 접근성 트리에서 같은 문단을 찾아 비교합니다.',
    legend: '숨기는 방법',
    labels: {
      shown: '숨기지 않음',
      hidden: 'hidden 속성',
      visibility: 'visibility: hidden',
      opacity: 'opacity: 0',
      'visually-hidden': '시각적으로만 숨김 (sr-only)',
    } satisfies Record<Method, string>,
    panel: '배송 안내: 주문 후 3일 안에 도착합니다.',
    stage: '예제 화면',
    domHeading: '이 문단의 지금 상태',
    attr: '속성',
    computed: '계산된 스타일',
    none: '(없음)',
    modelSummary: '예상을 정한 뒤 열어 보기 — 흔히 기대하는 결과',
    modelHead: ['방법', '화면', '접근성 트리'],
    model: {
      shown: ['보임', '남음'],
      hidden: ['안 보임', '빠짐'],
      visibility: ['안 보임 (자리는 남음)', '빠짐'],
      opacity: ['안 보임 (자리는 남음)', '남음'],
      'visually-hidden': ['안 보임', '남음'],
    } satisfies Record<Method, [string, string]>,
    modelNote:
      '이 표는 명세와 흔한 구현을 바탕으로 한 예상입니다. 결론은 지금 쓰는 브라우저의 접근성 트리에서 직접 확인한 값으로 냅니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Pick a hiding method and first predict whether the "Shipping info" paragraph below stays on screen and in the accessibility tree. Then find the same paragraph in the accessibility tree in developer tools and compare.',
    legend: 'Hiding method',
    labels: {
      shown: 'Not hidden',
      hidden: 'hidden attribute',
      visibility: 'visibility: hidden',
      opacity: 'opacity: 0',
      'visually-hidden': 'Visually hidden only (sr-only)',
    } satisfies Record<Method, string>,
    panel: 'Shipping info: arrives within 3 days of your order.',
    stage: 'Example screen',
    domHeading: 'The current state of this paragraph',
    attr: 'Attributes',
    computed: 'Computed style',
    none: '(none)',
    modelSummary: 'Open after you have made a prediction — the commonly expected result',
    modelHead: ['Method', 'Screen', 'Accessibility tree'],
    model: {
      shown: ['Visible', 'Stays'],
      hidden: ['Not visible', 'Removed'],
      visibility: ['Not visible (space kept)', 'Removed'],
      opacity: ['Not visible (space kept)', 'Stays'],
      'visually-hidden': ['Not visible', 'Stays'],
    } satisfies Record<Method, [string, string]>,
    modelNote:
      'This table is an expectation based on the specs and common implementations. Draw conclusions from what you check in your own browser’s accessibility tree.',
  },
};

const styleOf: Record<Method, { className?: string; hidden?: boolean }> = {
  shown: {},
  hidden: { hidden: true },
  visibility: { className: 'invisible' },
  opacity: { className: 'opacity-0' },
  'visually-hidden': { className: 'sr-only' },
};

type Reading = { attrs: string; display: string; visibility: string; opacity: string };

/** 문단 요소에서 실제 속성과 계산된 스타일을 읽는다. 접근성 트리는 페이지 스크립트로 읽을 수 없다. */
const read = (el: HTMLElement): Reading => {
  const style = getComputedStyle(el);
  return {
    attrs: [...el.attributes]
      .filter((a) => a.name !== 'class')
      .map((a) => (a.value ? `${a.name}="${a.value}"` : a.name))
      .join(' '),
    display: style.display,
    visibility: style.visibility,
    opacity: style.opacity,
  };
};

/** 숨기는 방법마다 실제 DOM 값을 읽어 보여 주고, 접근성 트리에 대한 예상은 교육용 모델로 따로 둔다. */
export const HidingDemo = () => {
  const c = useLang(content);
  const { locale: lang } = useLocale();
  const panelId = useId();
  const [method, setMethod] = useState<Method>('shown');
  const [reading, setReading] = useState<Reading | null>(null);
  const panelRef = useRef<HTMLParagraphElement>(null);
  const s = styleOf[method];

  useEffect(() => {
    if (panelRef.current) setReading(read(panelRef.current));
  }, [method]);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.legend}
        value={method}
        onValueChange={(value) => setMethod(value as Method)}
        className="flex-row flex-wrap gap-x-xl"
      >
        {methods.map((m) => (
          <Radio key={m} value={m} className="text-xsm">
            {c.labels[m]}
          </Radio>
        ))}
      </RadioGroup>

      <div className="rounded-sm border border-stroke-light p-md">
        <p className="mb-sm text-xxsm font-semiBold text-text-light">{c.stage}</p>
        <p
          ref={panelRef}
          id={`shipping-${panelId}`}
          hidden={s.hidden}
          className={cx('text-xsm', s.className)}
        >
          {c.panel}
        </p>
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
          {c.domHeading} <SourceTag locale={lang} id="dom" />
        </p>
        {reading && (
          <dl className="grid gap-x-lg gap-y-xs sm:grid-cols-[8rem_1fr]">
            <dt className="text-text-light">{c.attr}</dt>
            <dd className="break-all">
              <code>{reading.attrs || c.none}</code>
            </dd>
            <dt className="text-text-light">{c.computed}</dt>
            <dd>
              <code>
                display: {reading.display}; visibility: {reading.visibility}; opacity:{' '}
                {reading.opacity}
              </code>
            </dd>
          </dl>
        )}
      </div>

      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">
          {c.modelSummary}
        </summary>
        <p className="mt-sm">
          <SourceTag locale={lang} id="model" />
        </p>
        <TableScroll label={c.modelSummary}>
          <table className="mt-sm w-full text-left">
            <thead>
              <tr>
                {c.modelHead.map((h) => (
                  <th key={h} scope="col" className="py-xs pr-md font-semiBold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {methods.map((m) => (
                <tr
                  key={m}
                  className={cx('border-t border-stroke-light', m === method && 'font-semiBold')}
                  aria-current={m === method ? 'true' : undefined}
                >
                  <th scope="row" className="py-xs pr-md font-regular">
                    {c.labels[m]}
                  </th>
                  <td className="py-xs pr-md">{c.model[m][0]}</td>
                  <td className="py-xs">{c.model[m][1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
        <p className="mt-sm text-xxsm text-text-light">{c.modelNote}</p>
      </details>
    </PracticeFrame>
  );
};
