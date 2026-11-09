import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '04장 · 4 / 6',
    title: '규범 문서와 Understanding · Techniques · APG · ACT의 역할 구분하기',
    lead: (
      <>
        WCAG 주변에는 해설서, 기법 모음, 패턴 안내, 검사 규칙이 있습니다. 모두 쓸모 있지만 판정의
        근거는 아닙니다. 이 페이지는{' '}
        <strong className="text-text-default">판정은 규범 조항에, 이해와 구현은 보충 자료에</strong>{' '}
        연결하는 법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    learnItems: [
      '규범 문서와 보충 자료의 역할 구분하기',
      '충분 기법 · 실패 사례가 적합성과 이어지는 방식',
      'APG를 구현 안내로 쓰고, 실제 지원은 따로 확인하기',
      'ACT Rules Format의 상태와 개별 규칙의 적용 범위를 나누고, 규칙 통과를 기준 충족으로 단정하지 않기',
    ],
  },
  en: {
    eyebrow: 'Chapter 04 · 4 of 6',
    title: 'Telling normative documents apart from Understanding, Techniques, APG, and ACT',
    lead: (
      <>
        Around WCAG there are explanations, technique collections, pattern guides, and test rules.
        All are useful, but none is the basis of a judgment. This page covers how to{' '}
        <strong className="text-text-default">
          tie judgments to normative clauses, and understanding and implementation to supporting
          material
        </strong>
        .
      </>
    ),
    readingTime: 'About 11 min read',
    learnItems: [
      'Telling normative documents apart from supporting material',
      'How sufficient techniques and failures relate to conformance',
      'Using the APG as implementation guidance and checking real support separately',
      'Separating the status of the ACT Rules Format from the scope of individual rules, and not treating a passed rule as a satisfied criterion',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
