import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '04장 · 3 / 6',
    title: '전체 페이지 · 완전한 과정 · 접근성 지원 · 비간섭으로 적합성 판단하기',
    lead: (
      <>
        성공 기준을 하나씩 통과해도 &quot;이 서비스는 WCAG 2.2 AA에 적합하다&quot;고 바로 말할 수는
        없습니다. 적합성은 <strong className="text-text-default">전체 페이지와 완전한 과정</strong>{' '}
        단위로 주장하고, 원문의 다섯 요구를 모두 충족해야 합니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    learnItems: [
      '컴포넌트 · 표본 검사와 전체 페이지 · 완전한 과정의 적합성 주장 구분하기',
      '적합 수준 · 전체 페이지 · 완전한 과정 · 접근성 지원 · 비간섭 다섯 요구',
      '적합 대체 버전이 성립하는 원문 조건',
      '일부를 범위 밖으로 빼도 적합성이 생기지 않는 이유',
    ],
  },
  en: {
    eyebrow: 'Chapter 04 · 3 of 6',
    title:
      'Judging conformance by full pages, complete processes, accessibility support, and non-interference',
    lead: (
      <>
        Passing success criteria one by one does not let you say right away that &quot;this service
        conforms to WCAG 2.2 AA.&quot; Conformance is claimed for{' '}
        <strong className="text-text-default">full pages and complete processes</strong>, and all
        five requirements in the original must be met.
      </>
    ),
    readingTime: 'About 13 min read',
    learnItems: [
      'Telling component and sample tests apart from conformance claims for full pages and complete processes',
      'The five requirements: level, full pages, complete processes, accessibility support, non-interference',
      'The original conditions for a conforming alternate version',
      'Why excluding part from scope does not create conformance',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
