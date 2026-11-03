import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '02장 · 2 / 7',
    title: '페이지 제목·언어·제목 단계·랜드마크로 문서 구조 만들기',
    lead: (
      <>
        화면을 훑어볼 수 없는 사용자는 탭에 보이는 페이지 제목으로 페이지를 구분하고, 제목(heading)
        목록과 영역 목록으로 원하는 곳에 바로 이동합니다. 이 페이지는 페이지 제목 · 언어 · 제목 단계
        · 랜드마크를 <strong className="text-text-default">꾸밈이 아니라 탐색 수단</strong>으로
        작성하는 법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '페이지 제목과 lang이 알리는 것과 바꿔야 할 때 구분하기',
      '제목 단계를 글자 크기가 아니라 내용의 계층으로 정하기',
      'header · nav · main · footer가 랜드마크가 되는 조건 알고 이름 붙이기',
      '실제 페이지의 구조를 읽어 점검하고 고치기',
    ],
  },
  en: {
    eyebrow: 'Chapter 02 · 2 of 7',
    title: 'Building document structure with page titles, language, headings, and landmarks',
    lead: (
      <>
        Users who cannot scan the screen tell pages apart by the tab title and jump straight to what
        they need using lists of headings and regions. This page shows how to write titles,
        language, headings, and landmarks{' '}
        <strong className="text-text-default">as navigation tools, not decoration</strong>.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'What title and lang each tell the user, and when to change them',
      'Choosing heading levels by content hierarchy, not font size',
      'When header, nav, main, and footer become landmarks, and how to name them',
      'The order for reading, checking, and fixing a real page’s structure',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
