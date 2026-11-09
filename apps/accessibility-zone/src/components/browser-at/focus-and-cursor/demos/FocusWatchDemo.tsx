'use client';

import { useId, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { SourceTag } from '@/components/shared/SourceTag';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '예제 안을 클릭하지 말고, 이 상자 바로 앞에서 Tab을 눌러 예제로 들어가 보세요. 어떤 요소에서 멈추는지 먼저 예상하고, 아래 "지금 DOM 포커스"가 어떻게 바뀌는지 봅니다.',
    sample: '예제 문서',
    summary: '예제: 주문 요약',
    summaryText: '상품 2개 · 합계 32,000원',
    coupon: '쿠폰 적용',
    shipping: '예제: 배송지',
    zip: '우편번호',
    save: '이 주소 저장',
    watchHeading: '지금 DOM 포커스 (document.activeElement)',
    outside: '예제 밖에 있음',
    caution:
      '이 값은 DOM 포커스입니다. 화면 낭독기의 읽기 위치는 페이지 스크립트로 알 수 없어 여기에 나오지 않습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Without clicking inside the example, press Tab just before this box to enter it. Predict first which elements it stops on, then watch how "Current DOM focus" below changes.',
    sample: 'Example document',
    summary: 'Example: Order summary',
    summaryText: '2 items · total 32,000 won',
    coupon: 'Apply coupon',
    shipping: 'Example: Shipping address',
    zip: 'Postal code',
    save: 'Save this address',
    watchHeading: 'Current DOM focus (document.activeElement)',
    outside: 'Outside the example',
    caution:
      'This value is DOM focus. A screen reader’s reading position cannot be known by page scripts, so it does not appear here.',
  },
};

/** 포커스를 받은 요소를 태그와 보이는 글자로 짧게 적는다. */
const describe = (el: Element) => {
  const tag = el.tagName.toLowerCase();
  const type = el.getAttribute('type');
  const text =
    el instanceof HTMLInputElement
      ? (el.labels?.[0]?.textContent?.trim() ?? '')
      : (el.textContent?.trim() ?? '');
  return `<${tag}${type ? ` type="${type}"` : ''}> ${text}`;
};

/** 예제 안에서만 focusin · focusout을 듣고 document.activeElement를 보여 준다. 전역 키는 가로채지 않는다. */
export const FocusWatchDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const id = useId();
  const [focused, setFocused] = useState('');

  const onFocus = () => setFocused(document.activeElement ? describe(document.activeElement) : '');
  const onBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused('');
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div
        onFocus={onFocus}
        onBlur={onBlur}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
      >
        <p className="text-xxsm font-semiBold text-text-light">{c.sample}</p>
        <h3 className="text-sm font-bold">{c.summary}</h3>
        <p>{c.summaryText}</p>
        <button
          type="button"
          className="w-fit rounded-sm border border-stroke-light px-md py-sm font-semiBold hover:bg-background-grey/20"
        >
          {c.coupon}
        </button>
        <h3 className="text-sm font-bold">{c.shipping}</h3>
        <div className="flex flex-col gap-xs">
          <label htmlFor={`${id}-zip`}>{c.zip}</label>
          <input
            id={`${id}-zip`}
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm sm:w-1/2"
          />
        </div>
        <label htmlFor={`${id}-save`} className="inline-flex items-center gap-sm">
          <input id={`${id}-save`} type="checkbox" className="h-4 w-4" />
          {c.save}
        </label>
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold">
          {c.watchHeading} <SourceTag locale={locale} id="dom" />
        </p>
        <p>
          <code>{focused || c.outside}</code>
        </p>
        <p className="mt-sm text-xxsm text-text-light">{c.caution}</p>
      </div>
    </PracticeFrame>
  );
};
