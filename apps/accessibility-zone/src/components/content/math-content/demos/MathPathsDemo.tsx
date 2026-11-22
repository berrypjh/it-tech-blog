'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

import { AverageFraction } from './AverageFraction';

type Form = 'mathml' | 'look' | 'linear';
const forms: Form[] = ['mathml', 'look', 'linear'];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '표기를 바꿀 때마다 페이지가 실제 DOM에서 분수 구조를 다시 읽습니다. 세 표기의 값을 비교하세요.',
    legend: '표기 방식',
    forms: {
      mathml: 'MathML (mfrac)',
      look: '의도한 결함: 분수 모양만 흉내 낸 글자',
      linear: '괄호 없는 일렬 글자',
    },
    observed: '페이지가 읽은 DOM 구조',
    math: 'math 요소',
    children: 'mfrac의 자식 수',
    numerator: '분자 글자',
    denominator: '분모 글자',
    text: '일렬로 이은 textContent',
    yes: '있음',
    no: '없음',
    reveal: '풀이 보기',
    answer:
      'MathML만 분자와 분모를 DOM 구조로 나눠 줍니다. 분수 모양 글자는 화면에서는 같아 보여도 textContent가 “a + bn”처럼 이어져 관계가 사라지고, 괄호 없는 일렬 글자는 연산 순서 때문에 뜻이 달라집니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Each time you change the form, the page reads the fraction structure from the real DOM again. Compare the values of the three forms.',
    legend: 'Form',
    forms: {
      mathml: 'MathML (mfrac)',
      look: 'Intentional defect: text styled to look like a fraction',
      linear: 'Linear text without parentheses',
    },
    observed: 'DOM structure the page read',
    math: 'math element',
    children: 'Children of mfrac',
    numerator: 'Numerator text',
    denominator: 'Denominator text',
    text: 'textContent joined in a line',
    yes: 'Present',
    no: 'None',
    reveal: 'Show solution',
    answer:
      'Only MathML splits numerator and denominator in the DOM structure. Text styled as a fraction looks the same on screen, but its textContent runs together like “a + bn” and the relationship is lost; linear text without parentheses changes the meaning through the order of operations.',
  },
};

type Read = {
  math: boolean;
  children: number;
  numerator: string;
  denominator: string;
  text: string;
};

const squash = (text: string | null | undefined) => (text ?? '').replace(/\s+/g, ' ').trim();

/** 같은 분수를 MathML · 모양만 흉내 낸 글자 · 일렬 글자로 바꿔 그리고, 실제 DOM에서 구조를 읽는다. */
export const MathPathsDemo = () => {
  const c = useLang(content);
  const [form, setForm] = useState<Form>('mathml');
  const box = useRef<HTMLDivElement>(null);
  const [read, setRead] = useState<Read | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const frac = el.querySelector('mfrac');
    setRead({
      math: !!el.querySelector('math'),
      children: frac?.children.length ?? 0,
      numerator: squash(frac?.children[0]?.textContent),
      denominator: squash(frac?.children[1]?.textContent),
      text: squash(el.textContent),
    });
  }, [form]);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.legend}
        value={form}
        onValueChange={(value) => setForm(value as Form)}
        className="flex flex-col gap-2xs"
      >
        {forms.map((f) => (
          <Radio key={f} value={f} className="text-xsm">
            {c.forms[f]}
          </Radio>
        ))}
      </RadioGroup>
      <div ref={box} className="rounded-sm border border-stroke-light p-md text-lg">
        {form === 'mathml' && <AverageFraction />}
        {form === 'look' && (
          <div className="flex items-center gap-sm">
            <span>m =</span>
            <span className="inline-flex flex-col items-center">
              <span className="border-b border-stroke-default px-xs">a + b</span>
              <span>n</span>
            </span>
          </div>
        )}
        {form === 'linear' && <p>m = a + b / n</p>}
      </div>
      {read && (
        <ObservedPanel
          title={c.observed}
          rows={[
            [c.math, read.math ? c.yes : c.no],
            [c.children, read.children],
            [c.numerator, read.numerator || c.no],
            [c.denominator, read.denominator || c.no],
            [c.text, <code key="t">{read.text}</code>],
          ]}
        />
      )}
      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">{c.reveal}</summary>
        <p className="mt-sm">{c.answer}</p>
      </details>
    </PracticeFrame>
  );
};
