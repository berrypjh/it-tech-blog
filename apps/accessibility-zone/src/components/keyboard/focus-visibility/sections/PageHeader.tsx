import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '07장 · 3 / 7',
    title: '포커스 표시 · 대비 · 가림을 서로 다른 조건으로 검사하기',
    lead: (
      <>
        &quot;포커스가 보인다&quot;는 한 문장에는 여러 조건이 섞여 있습니다. 이 페이지는{' '}
        <strong className="text-text-default">표시의 존재 · 대비 · 면적 · 가림</strong>을 기준별로
        나누고, 예제의 실제 값으로 비교합니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 2개',
    learnItems: [
      '2.4.7 · 2.4.11 · 2.4.12 · 2.4.13의 이름 · 수준 · 요건',
      '포커스 표시의 대비를 1.4.11과 2.4.13에서 다르게 보는 이유',
      'sticky 영역이 포커스를 가리는 경우와 고치는 방법',
    ],
  },
  en: {
    eyebrow: 'Chapter 07 · 3 of 7',
    title: 'Testing focus visibility, contrast, and obscuring as separate conditions',
    lead: (
      <>
        &quot;Focus is visible&quot; mixes several conditions in one sentence. This page separates{' '}
        <strong className="text-text-default">
          the indicator’s presence, contrast, area, and obscuring
        </strong>{' '}
        by criterion, and compares them with real values from examples.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'The names, levels, and requirements of 2.4.7, 2.4.11, 2.4.12, and 2.4.13',
      'Why 1.4.11 and 2.4.13 look at indicator contrast differently',
      'When sticky areas hide focus, and how to fix it',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
