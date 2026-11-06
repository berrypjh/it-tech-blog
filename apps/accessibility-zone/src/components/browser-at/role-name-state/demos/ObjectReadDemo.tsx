'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';
import { ShoppingCart } from 'lucide-react';

import { PracticeFrame } from '@/components/shared/PracticeFrame';
import { SourceTag } from '@/components/shared/SourceTag';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '받는 분 이름을 입력하고 선물 포장을 켰다 꺼 보세요. 아래 "DOM에서 읽은 값"이 바뀌는 것을 본 뒤, 개발자 도구에서 같은 세 컨트롤의 역할 · 이름 · 상태 · 값을 찾아 비교합니다.',
    stage: '예제 화면',
    add: '장바구니에 담기',
    recipient: '받는 분 이름',
    gift: '선물 포장',
    read: '다시 읽기',
    domHeading: 'DOM에서 읽은 값',
    head: ['컨트롤', 'DOM에서 읽은 것'],
    button: '버튼',
    checkbox: '체크박스',
    input: '입력 칸',
    text: (t: string) => `안쪽 글자: "${t}"`,
    checked: (on: boolean) => `checked 속성값(property): ${on}`,
    value: (v: string) => `value: "${v}"`,
    label: (t: string) => `연결된 label 글자: "${t}"`,
    empty: '(비어 있음)',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Type a recipient name and turn gift wrap on and off. Watch "Values read from the DOM" change, then find the role, name, state, and value of the same three controls in developer tools and compare.',
    stage: 'Example screen',
    add: 'Add to cart',
    recipient: 'Recipient name',
    gift: 'Gift wrap',
    read: 'Read again',
    domHeading: 'Values read from the DOM',
    head: ['Control', 'What the DOM gives'],
    button: 'Button',
    checkbox: 'Checkbox',
    input: 'Input',
    text: (t: string) => `Text inside: "${t}"`,
    checked: (on: boolean) => `checked property: ${on}`,
    value: (v: string) => `value: "${v}"`,
    label: (t: string) => `Associated label text: "${t}"`,
    empty: '(empty)',
  },
};

type Reading = { text: string; checked: boolean; value: string; label: string };

/** 세 컨트롤을 두고 DOM에서 읽을 수 있는 값만 보여 준다. 역할 · 이름은 브라우저가 계산하므로 여기서 읽지 않는다. */
export const ObjectReadDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const recipientId = useId();
  const giftId = useId();
  const [reading, setReading] = useState<Reading | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const giftRef = useRef<HTMLInputElement>(null);
  const recipientRef = useRef<HTMLInputElement>(null);

  const read = useCallback(() => {
    const input = recipientRef.current;
    setReading({
      text: buttonRef.current?.textContent?.trim() ?? '',
      checked: giftRef.current?.checked ?? false,
      value: input?.value ?? '',
      label: input?.labels?.[0]?.textContent?.trim() ?? '',
    });
  }, []);

  useEffect(read, [read]);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm">
        <p className="text-xxsm font-semiBold text-text-light">{c.stage}</p>
        <div className="flex flex-col gap-xs">
          <label htmlFor={recipientId}>{c.recipient}</label>
          <input
            ref={recipientRef}
            id={recipientId}
            type="text"
            onInput={read}
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm sm:w-1/2"
          />
        </div>
        <label htmlFor={giftId} className="inline-flex items-center gap-sm">
          <input ref={giftRef} id={giftId} type="checkbox" onChange={read} className="h-4 w-4" />
          {c.gift}
        </label>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex w-fit items-center gap-xs rounded-sm border border-stroke-light px-md py-sm font-semiBold hover:bg-background-grey/20"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          {c.add}
        </button>
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <div className="mb-sm flex flex-wrap items-center justify-between gap-sm">
          <p className="flex flex-wrap items-center gap-sm font-semiBold">
            {c.domHeading} <SourceTag locale={locale} id="dom" />
          </p>
          <Button type="button" variant="text" size="sm" onClick={read}>
            {c.read}
          </Button>
        </div>
        {reading && (
          <dl className="grid gap-x-lg gap-y-xs sm:grid-cols-[8rem_1fr]">
            <dt className="text-text-light">{c.button}</dt>
            <dd>{c.text(reading.text)}</dd>
            <dt className="text-text-light">{c.checkbox}</dt>
            <dd>{c.checked(reading.checked)}</dd>
            <dt className="text-text-light">{c.input}</dt>
            <dd className="break-all">
              {c.value(reading.value)} · {c.label(reading.label)}
            </dd>
          </dl>
        )}
      </div>
    </PracticeFrame>
  );
};
