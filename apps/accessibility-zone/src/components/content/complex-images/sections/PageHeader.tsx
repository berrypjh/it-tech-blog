import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 2 / 10',
    title: '차트 · 복잡한 그림 · 지도에 설명과 데이터 대안 제공하기',
    lead: (
      <>
        차트 하나에는 한 줄 alt로 다 담을 수 없는 값이 들어 있습니다. 이 페이지는{' '}
        <strong className="text-text-default">짧은 이름 · 요약 · 데이터 표</strong>를 나눠 맡기고,
        지도는 과업에 맞는 글로 바꿉니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '복잡한 그림의 짧은 이름과 긴 설명 나누기',
      '차트 · 요약 · 표에서 같은 정보를 찾아 비교하기',
      '목적지가 아니라 경로가 과업인 지도의 글 대안',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 2 of 10',
    title: 'Providing descriptions and data alternatives for charts, complex images, and maps',
    lead: (
      <>
        A chart holds values that one line of alt cannot carry. This page splits the work between{' '}
        <strong className="text-text-default">a short name, a summary, and a data table</strong>,
        and turns a map into text that fits the task.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Splitting a complex image into a short name and a long description',
      'Finding the same information in the chart, the summary, and the table',
      'A text alternative for a map when the task is the route, not the place',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
