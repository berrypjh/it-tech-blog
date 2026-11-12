'use client';

import { useEffect, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { cx, Radio, RadioGroup, TableScroll } from '@berrypjh/react-ui';

import { SourceTag } from '@/components/shared/SourceTag';

type Method = 'none' | 'hidden' | 'display' | 'visibility' | 'aria-hidden' | 'inert';

const methods: Method[] = ['none', 'hidden', 'display', 'visibility', 'aria-hidden', 'inert'];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '숨기는 방법을 고른 뒤, 방법 목록에서 Tab을 눌러 "쿠폰 받기" 버튼에 닿는지 보고 마우스로도 눌러 보세요. 그다음 개발자 도구의 접근성 트리에서 같은 버튼을 찾아 아래 예상과 비교합니다.',
    legend: '숨기는 방법',
    labels: {
      none: '숨기지 않음',
      hidden: 'hidden 속성',
      display: 'display: none',
      visibility: 'visibility: hidden',
      'aria-hidden': 'aria-hidden="true"',
      inert: 'inert',
    } satisfies Record<Method, string>,
    stage: '예제 화면 (교육 예시)',
    defect:
      '의도한 결함: 앞 절의 오류처럼, 버튼은 Tab으로 닿지만 명세상 접근성 API에서 빠져야 하는 상태입니다. 실제 노출은 브라우저마다 다를 수 있어 접근성 트리에서 확인합니다.',
    notice: '오늘만 무료 배송',
    button: '쿠폰 받기',
    observedHeading: '지금 관찰한 값',
    attrs: '감싼 요소의 속성',
    computed: '버튼의 계산된 스타일',
    visible: '화면 표시 (checkVisibility)',
    focusCount: 'Tab · 클릭으로 버튼이 포커스를 받은 횟수',
    clickCount: '버튼 click 이벤트 횟수',
    yes: '보임',
    no: '안 보임',
    none: '(없음)',
    unsupported: '이 브라우저는 checkVisibility를 지원하지 않습니다',
    exposure:
      '접근성 노출은 페이지 스크립트로 읽을 수 없습니다. 브라우저 도구의 접근성 트리에서 확인합니다.',
    modelSummary: '관찰한 뒤 열어 보기 — 명세상 예상 노출',
    modelHead: ['방법', '버튼이 접근성 트리에'],
    model: {
      none: '남음',
      hidden: '빠짐',
      display: '빠짐',
      visibility: '빠짐',
      'aria-hidden': '빠짐',
      inert: '빠짐',
    } satisfies Record<Method, string>,
    modelNote:
      '이 표는 명세가 기대하는 결과입니다. 결론은 지금 쓰는 브라우저의 접근성 트리에서 확인한 값으로 냅니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Pick a hiding method, then press Tab from the method list to see whether the "Get coupon" button is reached, and try clicking it too. Then find the same button in the accessibility tree in developer tools and compare it with the expectation below.',
    legend: 'Hiding method',
    labels: {
      none: 'Not hidden',
      hidden: 'hidden attribute',
      display: 'display: none',
      visibility: 'visibility: hidden',
      'aria-hidden': 'aria-hidden="true"',
      inert: 'inert',
    } satisfies Record<Method, string>,
    stage: 'Example screen (teaching example)',
    defect:
      'Intentional defect: like the error in the previous section, the button is reached with Tab while the specs expect it to be removed from the accessibility API. Real exposure can differ by browser, so check the accessibility tree.',
    notice: 'Free shipping today only',
    button: 'Get coupon',
    observedHeading: 'What you observe now',
    attrs: 'Attributes on the wrapper',
    computed: 'Computed style of the button',
    visible: 'Shown on screen (checkVisibility)',
    focusCount: 'Times the button received focus by Tab or click',
    clickCount: 'Button click events',
    yes: 'Shown',
    no: 'Not shown',
    none: '(none)',
    unsupported: 'This browser does not support checkVisibility',
    exposure:
      'Exposure cannot be read by page scripts. Check it in the accessibility tree in browser tools.',
    modelSummary: 'Open after observing — the exposure the specs expect',
    modelHead: ['Method', 'The button in the accessibility tree'],
    model: {
      none: 'Stays',
      hidden: 'Removed',
      display: 'Removed',
      visibility: 'Removed',
      'aria-hidden': 'Removed',
      inert: 'Removed',
    } satisfies Record<Method, string>,
    modelNote:
      'This table is the result the specs expect. Draw conclusions from what you check in your own browser’s accessibility tree.',
  },
};

/** 방법마다 감싼 요소에 줄 속성. 클래스는 hidden(display: none) · invisible(visibility: hidden)이다. */
const wrapperOf = (method: Method) => ({
  hidden: method === 'hidden',
  inert: method === 'inert',
  'aria-hidden': method === 'aria-hidden' ? ('true' as const) : undefined,
  className: cx(
    'flex flex-wrap items-center gap-md',
    method === 'display' && 'hidden',
    method === 'visibility' && 'invisible',
  ),
});

type Reading = { attrs: string; display: string; visibility: string; visible: boolean | null };

/** 버튼과 감싼 요소에서 실제 속성 · 계산된 스타일 · 화면 표시 여부를 읽는다. */
const read = (wrapper: HTMLElement, button: HTMLElement): Reading => {
  const style = getComputedStyle(button);
  return {
    attrs: [...wrapper.attributes]
      .filter((a) => a.name !== 'class')
      .map((a) => (a.value ? `${a.name}="${a.value}"` : a.name))
      .join(' '),
    display: style.display,
    visibility: style.visibility,
    visible:
      'checkVisibility' in button ? button.checkVisibility({ visibilityProperty: true }) : null,
  };
};

/**
 * 숨기는 방법마다 화면 표시 · 포커스 · click을 실제 DOM과 이벤트로 기록하고, 접근성 노출은 명세상 예상으로 따로 둔다.
 * 방법은 버튼 밖의 라디오로만 바꾸므로, 포커스가 버튼에 있는 채로 숨거나 inert가 되어 갇히는 일은 없다.
 */
export const HidingInertDemo = () => {
  const c = useLang(content);
  const { locale: lang } = useLocale();
  const [method, setMethod] = useState<Method>('none');
  const [counts, setCounts] = useState({ focus: 0, click: 0 });
  const [reading, setReading] = useState<Reading | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (wrapperRef.current && buttonRef.current) {
      setReading(read(wrapperRef.current, buttonRef.current));
    }
  }, [method]);

  const choose = (value: string) => {
    setMethod(value as Method);
    setCounts({ focus: 0, click: 0 });
  };

  const visibleText = (visible: boolean | null) =>
    visible === null ? c.unsupported : visible ? c.yes : c.no;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.legend}
        value={method}
        onValueChange={choose}
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
        <div ref={wrapperRef} {...wrapperOf(method)}>
          <p className="text-xsm">{c.notice}</p>
          <button
            ref={buttonRef}
            type="button"
            onFocus={() => setCounts((prev) => ({ ...prev, focus: prev.focus + 1 }))}
            onClick={() => setCounts((prev) => ({ ...prev, click: prev.click + 1 }))}
            className="rounded-sm bg-primaryBtn-default px-lg py-xs text-xsm font-semiBold text-text-contrastText hover:bg-primaryBtn-hover"
          >
            {c.button}
          </button>
        </div>
        {method === 'aria-hidden' && <p className="mt-sm text-xxsm text-text-error">{c.defect}</p>}
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
          {c.observedHeading} <SourceTag locale={lang} id="dom" />
        </p>
        {reading && (
          <dl className="grid gap-x-lg gap-y-xs sm:grid-cols-[14rem_1fr]">
            <dt className="text-text-light">{c.attrs}</dt>
            <dd className="break-all">
              <code>{reading.attrs || c.none}</code>
            </dd>
            <dt className="text-text-light">{c.computed}</dt>
            <dd>
              <code>
                display: {reading.display}; visibility: {reading.visibility}
              </code>
            </dd>
            <dt className="text-text-light">{c.visible}</dt>
            <dd>{visibleText(reading.visible)}</dd>
            <dt className="text-text-light">{c.focusCount}</dt>
            <dd>{counts.focus}</dd>
            <dt className="text-text-light">{c.clickCount}</dt>
            <dd>{counts.click}</dd>
          </dl>
        )}
        <p className="mt-sm text-xxsm text-text-light">{c.exposure}</p>
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
                  <td className="py-xs">{c.model[m]}</td>
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
