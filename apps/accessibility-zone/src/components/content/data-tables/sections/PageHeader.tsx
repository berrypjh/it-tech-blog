import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 5 / 10',
    title: '데이터 표의 제목 · 헤더 · 셀 관계와 읽기 순서 구성하기',
    lead: (
      <>
        표의 칸 하나는 그 줄과 열의 헤더가 있어야 뜻을 갖습니다. 이 페이지는{' '}
        <strong className="text-text-default">caption · th · scope</strong>를 기본으로 두고, 헤더가
        여러 층이면 표를 단순화하거나 검증한 headers 연결을 씁니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '표의 제목과 열 · 행 헤더를 마크업으로 잇기',
      '다층 헤더를 단순화할지 id · headers로 이을지 정하기',
      '요일 · 장소 · 회차가 만나는 칸을 찾고 연결을 검증하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 5 of 10',
    title: 'Structuring titles, headers, cell relationships, and reading order in data tables',
    lead: (
      <>
        A single cell means something only with the headers of its row and column. This page starts
        with <strong className="text-text-default">caption, th, and scope</strong>, and when headers
        come in layers, it simplifies the table or uses verified headers connections.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Connecting a table’s title and its column and row headers in markup',
      'Deciding whether to simplify layered headers or connect them with id and headers',
      'Finding the cell where day, hall, and session meet, and verifying the connections',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
