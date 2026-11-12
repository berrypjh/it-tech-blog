import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '06장 · 2 / 6',
    title: 'label · 본문 텍스트 · alt 등 HTML의 이름 제공 방식',
    lead: (
      <>
        입력 칸은 연결된 label에서, 버튼은 안의 글자에서, 이미지는 alt에서 이름을 얻습니다. 이름의
        출처는 <strong className="text-text-default">요소와 역할에 따라</strong> 다릅니다. 이
        페이지는 HTML-AAM의 요소별 규칙을 읽고, 끊긴 label 연결을 직접 추적해 고칩니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '연결된 label이 있는 input, 내용이 있는 button, alt가 있는 img의 이름 출처 비교하기',
      '끊긴 for · id 관계를 DOM으로 추적하고 실제 관계를 고치기',
      'placeholder가 라벨을 대신하지 못하는 이유와, 대체 동작을 보편 규칙으로 단정하지 않는 이유',
    ],
  },
  en: {
    eyebrow: 'Chapter 06 · 2 of 6',
    title: 'How HTML provides names: label, text content, alt, and more',
    lead: (
      <>
        An input gets its name from a connected label, a button from the text inside it, and an
        image from alt. Where the name comes from depends on{' '}
        <strong className="text-text-default">the element and its role</strong>. This page reads the
        per-element rules in HTML-AAM and traces and fixes a broken label connection yourself.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Comparing name sources for an input with a connected label, a button with content, and an img with alt',
      'Tracing a broken for and id relation in the DOM and fixing the real relation',
      'Why a placeholder cannot replace a label, and why fallback behavior is not a universal rule',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
