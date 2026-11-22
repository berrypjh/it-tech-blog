import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 2 / 9',
    title: 'Disclosure와 Accordion을 기본 HTML부터 구현하기',
    lead: (
      <>
        접어 둔 내용은 화면에서 사라질 뿐 아니라 Tab 순서와 읽기 경로에서도 빠져야 하고, 펼치면
        그대로 돌아와야 합니다. 이 페이지는 짧은 설명 하나에는{' '}
        <strong className="text-text-default">details와 summary</strong>를, 여러 제목과 패널에는{' '}
        <strong className="text-text-default">제목 속 버튼</strong>을 쓰고, 열림 규칙과 초점 규칙을
        정합니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'details · summary로 충분한 경우와 제목 속 버튼이 필요한 경우 나누기',
      '하나만 열림과 여러 개 열림 규칙을 aria-expanded와 패널에 맞추기',
      '닫힌 패널의 자식을 Tab에서 빼고, 안에서 닫을 때 초점을 제목 버튼으로 돌려보내기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 2 of 9',
    title: 'Building disclosure and accordion from basic HTML',
    lead: (
      <>
        Collapsed content must not only disappear from the screen but also leave the Tab order and
        the reading path, and come back intact when expanded. This page uses{' '}
        <strong className="text-text-default">details and summary</strong> for one short explanation
        and <strong className="text-text-default">buttons inside headings</strong> for several
        headings and panels, and decides the open rule and the focus rule.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Telling when details and summary are enough from when buttons inside headings are needed',
      'Aligning single-open and multi-open rules with aria-expanded and the panels',
      'Removing children of a closed panel from Tab, and returning focus to the heading button when closing from inside',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
