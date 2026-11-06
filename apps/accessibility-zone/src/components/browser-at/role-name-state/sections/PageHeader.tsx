import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '03장 · 2 / 6',
    title: '접근성 객체의 역할 · 이름 · 상태 · 값 · 관계 읽기',
    lead: (
      <>
        접근성 트리의 노드 하나는 &quot;이것은 무엇이고, 이름은 무엇이고, 지금 어떤 상태인가&quot;를
        담은 객체입니다. 이 페이지는 이름 있는 버튼, 체크박스, 레이블이 연결된 입력 칸에서{' '}
        <strong className="text-text-default">역할 · 이름 · 상태 · 값 · 관계</strong>를 나눠
        읽습니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '접근성 객체의 역할 · 이름 · 상태 · 값 · 관계가 각각 무엇인지',
      '보이는 글자 · 접근성 이름 · 입력 값 · 체크 상태 · 레이블 관계 구분하기',
      '컨트롤마다 주는 정보가 다를 수 있다는 것',
      'DOM에서 읽을 수 있는 값과 브라우저 도구에서 확인할 값 나누기',
    ],
  },
  en: {
    eyebrow: 'Chapter 03 · 2 of 6',
    title: 'Reading role, name, state, value, and relations of accessible objects',
    lead: (
      <>
        A node in the accessibility tree is an object that says &quot;what this is, what it is
        called, and what state it is in now.&quot; This page reads{' '}
        <strong className="text-text-default">role, name, state, value, and relations</strong>{' '}
        separately on a named button, a checkbox, and an input with an associated label.
      </>
    ),
    readingTime: 'About 10 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'What role, name, state, value, and relations of an accessible object each are',
      'Telling apart visible text, accessible name, input value, checked state, and label relation',
      'That each control can give different information',
      'Separating values you can read from the DOM from values to check in browser tools',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
