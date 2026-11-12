import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '05장 · 3 / 6',
    title: 'ARIA in HTML로 허용 · 금지 · 불필요한 역할 확인하기',
    lead: (
      <>
        HTML 요소에 어떤 role과 aria-* 속성을 붙여도 되는지는 ARIA in HTML이 요소마다 정합니다. 이
        페이지는 요소의 행을 읽고, 붙인 선언이{' '}
        <strong className="text-text-default">중복인지, 의미를 덮어쓰는지, 필요한 보완인지</strong>{' '}
        구분합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '요소의 암시적 의미와 허용된 role · aria-* 속성을 원문 행에서 확인하기',
      '같은 의미의 중복 선언, 부적절한 덮어쓰기, 필요한 상태 보완을 구분하기',
      '허용된 선언이 키보드 동작이나 보조기술 지원을 증명하지 않는 이유',
      'presentation · none이 무시되는 조건',
    ],
  },
  en: {
    eyebrow: 'Chapter 05 · 3 of 6',
    title: 'Checking allowed, prohibited, and unnecessary roles with ARIA in HTML',
    lead: (
      <>
        ARIA in HTML decides, element by element, which roles and aria-* attributes an HTML element
        may take. This page reads an element&apos;s row and tells whether a declaration{' '}
        <strong className="text-text-default">
          is redundant, overrides the meaning, or is a needed addition
        </strong>
        .
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Checking an element’s implicit meaning and its allowed roles and aria-* attributes in its row',
      'Telling redundant declarations, inappropriate overrides, and needed state additions apart',
      'Why an allowed declaration does not prove keyboard behavior or assistive technology support',
      'When presentation and none are ignored',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
