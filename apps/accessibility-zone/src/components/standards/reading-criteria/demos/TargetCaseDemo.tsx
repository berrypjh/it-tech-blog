'use client';

import { useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';

import { PracticeFrame } from '@/components/shared/PracticeFrame';
import { SourceTag } from '@/components/shared/SourceTag';

type Basis = 'size' | 'spacing' | 'equivalent' | 'inline' | 'userAgent' | 'essential' | 'none';

const bases: Basis[] = [
  'size',
  'spacing',
  'equivalent',
  'inline',
  'userAgent',
  'essential',
  'none',
];

type Case = { id: string; answer: Basis };

const cases: Case[] = [
  { id: 'pager', answer: 'spacing' },
  { id: 'terms', answer: 'inline' },
  { id: 'stars', answer: 'none' },
  { id: 'date', answer: 'userAgent' },
];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '사례마다 관찰값을 읽고 2.5.8의 어느 근거가 맞는지 고른 뒤 "풀이 보기"를 누르세요. 관찰값은 이 페이지가 만든 교육 예시입니다.',
    legend: '근거',
    reveal: '풀이 보기',
    labels: {
      size: '24 × 24 CSS 픽셀 이상',
      spacing: '예외: 간격(Spacing)',
      equivalent: '예외: 동등(Equivalent)',
      inline: '예외: 인라인(Inline)',
      userAgent: '예외: 사용자 에이전트 제어',
      essential: '예외: 필수(Essential)',
      none: '어느 것에도 해당하지 않음 → 미충족',
    } satisfies Record<Basis, string>,
    cases: {
      pager: {
        title: '사례 1. 목록 아래의 이전 · 다음 아이콘 버튼',
        observed:
          '두 버튼은 각각 20 × 20 CSS 픽셀입니다. 두 버튼 중심 사이 거리는 32 CSS 픽셀이고, 주변 24 CSS 픽셀 안에 다른 대상은 없습니다.',
        answer:
          '크기는 24보다 작습니다. 각 버튼 중심에 지름 24 CSS 픽셀 원을 그리면 두 원의 중심 거리 32가 지름 24보다 커서 원이 서로 겹치지 않고, 다른 대상과도 겹치지 않습니다. 간격 예외로 충족합니다.',
      },
      terms: {
        title: '사례 2. 문장 안의 "이용 약관" 링크',
        observed:
          '"가입하면 이용 약관에 동의합니다." 문장 가운데의 링크입니다. 링크 높이는 줄 높이에 맞춰 18 CSS 픽셀입니다.',
        answer:
          '대상이 문장 안에 있고 크기가 주변 글자의 줄 높이로 정해집니다. 인라인 예외로 충족합니다.',
      },
      stars: {
        title: '사례 3. 별점 다섯 개',
        observed:
          '별 버튼 다섯 개가 각각 16 × 16 CSS 픽셀이고 빈틈 없이 붙어 있어 중심 거리는 16 CSS 픽셀입니다. 같은 기능을 하는 다른 컨트롤은 없습니다. 작성자가 만든 버튼입니다.',
        answer:
          '크기가 24보다 작고, 중심 거리 16이 지름 24보다 작아 원이 겹치므로 간격 예외도 아닙니다. 동등 · 인라인 · 사용자 에이전트 · 필수 예외에 해당할 근거도 관찰되지 않았습니다. 미충족입니다. 같은 16 × 16 별이라도 중심 거리를 24보다 크게 벌리면 원이 겹치지 않아 간격 예외로 충족할 수 있습니다.',
      },
      date: {
        title: '사례 4. 브라우저 기본 날짜 입력의 달력 버튼',
        observed:
          'input type="date"에 브라우저가 그린 달력 버튼입니다. 작성자는 크기를 바꾸는 스타일을 쓰지 않았습니다.',
        answer:
          '크기를 사용자 에이전트가 정하고 작성자가 바꾸지 않았습니다. 사용자 에이전트 제어 예외로 충족합니다. 작성자가 크기를 바꿨다면 이 예외를 쓸 수 없습니다.',
      },
    },
    yours: (label: string) => `고른 근거: ${label}`,
    match: '풀이와 같습니다.',
    differ: (label: string) => `풀이의 근거는 "${label}"입니다.`,
    notice: '이 사례의 풀이입니다. 사이트가 실제 페이지를 자동 감사한 결과가 아닙니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'For each case, read the observed values, choose which basis in 2.5.8 fits, and press "Show solution." The observed values are teaching examples made by this page.',
    legend: 'Basis',
    reveal: 'Show solution',
    labels: {
      size: 'At least 24 × 24 CSS pixels',
      spacing: 'Exception: Spacing',
      equivalent: 'Exception: Equivalent',
      inline: 'Exception: Inline',
      userAgent: 'Exception: User agent control',
      essential: 'Exception: Essential',
      none: 'None applies → not satisfied',
    } satisfies Record<Basis, string>,
    cases: {
      pager: {
        title: 'Case 1. Previous and next icon buttons below a list',
        observed:
          'Each button is 20 × 20 CSS pixels. The centers are 32 CSS pixels apart, and no other target lies within 24 CSS pixels.',
        answer:
          'The size is under 24. A 24 CSS pixel diameter circle centered on each button does not intersect the other, because the centers are 32 apart, more than the diameter 24, and no other target is in the way. Satisfied through the Spacing exception.',
      },
      terms: {
        title: 'Case 2. The "terms of use" link in a sentence',
        observed:
          'A link in the middle of the sentence "By signing up you agree to the terms of use." Its height follows the line height at 18 CSS pixels.',
        answer:
          'The target is in a sentence and its size is set by the line height of the surrounding text. Satisfied through the Inline exception.',
      },
      stars: {
        title: 'Case 3. Five rating stars',
        observed:
          'Five star buttons, each 16 × 16 CSS pixels, packed with no gap, so their centers are 16 CSS pixels apart. No other control does the same thing. The author built the buttons.',
        answer:
          'The size is under 24, and with centers 16 apart, less than the diameter 24, the circles intersect, so Spacing does not apply. No evidence for Equivalent, Inline, User agent control, or Essential was observed. Not satisfied. The same 16 × 16 stars spaced so their centers are more than 24 apart would no longer intersect, and could be satisfied through Spacing.',
      },
      date: {
        title: 'Case 4. The calendar button of a native date input',
        observed:
          'The calendar button the browser draws for input type="date". The author used no styles that change its size.',
        answer:
          'The user agent decides the size and the author did not modify it. Satisfied through the User agent control exception. If the author had changed the size, this exception would not apply.',
      },
    },
    yours: (label: string) => `Your basis: ${label}`,
    match: 'It matches the solution.',
    differ: (label: string) => `The solution’s basis is "${label}".`,
    notice:
      'This is the solution for this case. It is not the result of the site auditing a real page.',
  },
};

const CaseItem = ({ item }: { item: Case }) => {
  const c = useLang(content);
  const [choice, setChoice] = useState<Basis | ''>('');
  const [shown, setShown] = useState(false);
  const text = c.cases[item.id as keyof typeof c.cases];

  return (
    <div className="flex flex-col gap-sm rounded-sm border border-stroke-light p-md text-xsm">
      <p className="font-semiBold">{text.title}</p>
      <p className="text-text-light">{text.observed}</p>
      <RadioGroup
        label={c.legend}
        value={choice}
        onValueChange={(value) => {
          setChoice(value as Basis);
          setShown(false);
        }}
        className="flex flex-col gap-2xs"
      >
        {bases.map((b) => (
          <Radio key={b} value={b} className="text-xsm">
            {c.labels[b]}
          </Radio>
        ))}
      </RadioGroup>
      <Button
        type="button"
        variant="outlined"
        size="sm"
        className="w-fit"
        disabled={!choice}
        onClick={() => setShown(true)}
      >
        {c.reveal}
      </Button>
      <div role="status">
        {shown && choice && (
          <div className="flex flex-col gap-xs border-l-2 border-stroke-primary pl-md">
            <p>
              {c.yours(c.labels[choice])} —{' '}
              {choice === item.answer ? c.match : c.differ(c.labels[item.answer])}
            </p>
            <p>{text.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

/** 2.5.8 사례 네 개에서 학습자가 근거를 고르고 풀이와 견준다. 판정은 이 사례의 풀이일 뿐 감사 결과가 아니다. */
export const TargetCaseDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <p className="flex flex-wrap items-center gap-sm text-xxsm text-text-light">
        <SourceTag locale={locale} id="example" /> {c.notice}
      </p>
      {cases.map((item) => (
        <CaseItem key={item.id} item={item} />
      ))}
    </PracticeFrame>
  );
};
