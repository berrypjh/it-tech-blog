import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '04장 · 5 / 6',
    title: 'KWCAG 2.2와 WCAG의 항목 · 버전 · 판정 범위를 비교하기',
    lead: (
      <>
        KWCAG 2.2는 WCAG를 참고한 한국의 표준이지만 번역본도, 항목마다 짝이 맞는 대응표도 아닙니다.
        이 페이지는 공식 등록 정보와 첨부 원문을 확인하고,{' '}
        <strong className="text-text-default">항목 두 개를 버전 · 번호 · 조건 · 증거로</strong>{' '}
        나란히 놓습니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    learnItems: [
      '국립전파연구원 등록 정보와 첨부 원문에서 판본 · 날짜 확인하기',
      'KWCAG 2.2와 WCAG 2.2의 짜임과 기초 판본 차이',
      '명도 대비 · 컨트롤 크기 항목을 조건 · 예외 · 증거로 비교하기',
      '번역본이나 일대일 대응으로 다루지 않고 공식 원문을 확인하는 절차',
    ],
  },
  en: {
    eyebrow: 'Chapter 04 · 5 of 6',
    title: 'Comparing items, versions, and judgment scope in KWCAG 2.2 and WCAG',
    lead: (
      <>
        KWCAG 2.2 is a Korean standard that references WCAG, but it is neither a translation nor an
        item-by-item mapping. This page checks the official registry and the attached original, and
        sets{' '}
        <strong className="text-text-default">
          two items side by side by version, number, conditions, and evidence
        </strong>
        .
      </>
    ),
    readingTime: 'About 12 min read',
    learnItems: [
      'Checking edition and date in the National Radio Research Agency registry and attached original',
      'Differences in structure and base edition between KWCAG 2.2 and WCAG 2.2',
      'Comparing contrast and control size items by conditions, exceptions, and evidence',
      'A procedure for checking the official original instead of treating it as a translation or one-to-one mapping',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
