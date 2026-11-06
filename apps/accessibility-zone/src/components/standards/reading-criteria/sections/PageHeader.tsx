import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '04장 · 2 / 6',
    title: 'WCAG 2.2 성공 기준의 조건 · 예외 · 정의를 해석하기',
    lead: (
      <>
        성공 기준은 한 문장처럼 보여도 정의된 용어, 적용 대상, 조건과 예외가 함께 들어 있습니다. 이
        페이지는{' '}
        <strong className="text-text-default">
          원문 → 정의 → 적용 대상 → 조건 · 예외 → 확인 증거
        </strong>{' '}
        순서로 두 성공 기준을 읽습니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '성공 기준을 다섯 단계로 나눠 읽기',
      '1.3.5에서 규범이 요구하는 결과와 autocomplete 기법 구분하기',
      '2.5.8의 조건과 다섯 예외를 숫자 하나로 줄이지 않고 적용하기',
      '관찰값에서 판정 근거를 고르고, 풀이와 자동 감사를 구별하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 04 · 2 of 6',
    title: 'Interpreting conditions, exceptions, and definitions in WCAG 2.2 success criteria',
    lead: (
      <>
        A success criterion may look like one sentence, but it carries defined terms, a scope,
        conditions, and exceptions. This page reads two criteria in the order{' '}
        <strong className="text-text-default">
          original text → definitions → scope → conditions and exceptions → evidence
        </strong>
        .
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Reading a success criterion in five steps',
      'Telling the normative outcome of 1.3.5 apart from the autocomplete technique',
      'Applying the condition and five exceptions of 2.5.8 without reducing them to one number',
      'Choosing a basis from observed values, and telling a solution apart from an automated audit',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
