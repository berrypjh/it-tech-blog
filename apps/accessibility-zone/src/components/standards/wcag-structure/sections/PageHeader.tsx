import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '04장 · 1 / 6',
    title: 'POUR에서 지침 · 성공 기준 · A · AA · AAA로 이어지는 구조',
    lead: (
      <>
        01장에서는 WCAG가 네 원칙 아래 성공 기준을 묶는다는 것까지 봤습니다. 이 장은 원문을 직접
        적용합니다. 첫 페이지는 성공 기준 하나를{' '}
        <strong className="text-text-default">원칙 → 지침 → 성공 기준 → 수준</strong>으로 따라가며
        WCAG 2.2의 짜임을 읽습니다.
      </>
    ),
    readingTime: '읽는 시간 약 9분',
    learnItems: [
      '원칙 · 지침 · 성공 기준의 관계를 성공 기준 하나로 따라가기',
      'A · AA · AAA가 적합 수준의 묶음이지 심각도나 점수가 아니라는 것',
      '목표 적합 수준에 따라 함께 검토할 성공 기준 정하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 04 · 1 of 6',
    title: 'The structure from POUR to guidelines, success criteria, and A, AA, AAA',
    lead: (
      <>
        Chapter 01 went as far as WCAG grouping success criteria under four principles. This chapter
        applies the original text. The first page reads the structure of WCAG 2.2 by following one
        success criterion{' '}
        <strong className="text-text-default">
          from principle to guideline to success criterion to level
        </strong>
        .
      </>
    ),
    readingTime: 'About 9 min read',
    learnItems: [
      'Following the relation of principles, guidelines, and success criteria through one criterion',
      'That A, AA, and AAA group criteria into conformance levels, not severity or scores',
      'Deciding which success criteria to review for a target conformance level',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
