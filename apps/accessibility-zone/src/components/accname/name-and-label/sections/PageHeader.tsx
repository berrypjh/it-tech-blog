import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '06장 · 1 / 6',
    title: '보이는 라벨 · 접근성 이름 · 설명 · 값 구분하기',
    lead: (
      <>
        입력 칸 옆의 &quot;연락처&quot;는 화면 라벨이고, 보조기술이 받는 &quot;연락처&quot;는 접근성
        이름입니다. 둘은 같을 때가 많지만 같은 것이 아닙니다. 이 장은 이름과 설명이{' '}
        <strong className="text-text-default">어디서 계산되어 나오는지</strong> 추적합니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '한 컨트롤의 화면 라벨 · 접근성 이름 · 설명 · 값 · 역할을 나란히 비교하기',
      '보이는 글자나 DOM의 textContent를 계산된 이름으로 단정하지 않는 이유',
      '이 장이 쓰는 규격의 판본과 발행 상태',
    ],
  },
  en: {
    eyebrow: 'Chapter 06 · 1 of 6',
    title: 'Telling visible labels, accessible names, descriptions, and values apart',
    lead: (
      <>
        The &quot;Phone&quot; next to an input is a visible label; the &quot;Phone&quot; that
        assistive technology receives is an accessible name. They are often the same, but they are
        not the same thing. This chapter traces{' '}
        <strong className="text-text-default">
          where names and descriptions are computed from
        </strong>
        .
      </>
    ),
    readingTime: 'About 10 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Comparing the visible label, accessible name, description, value, and role of one control',
      'Why visible text or the DOM’s textContent is not the computed name',
      'The editions and publication status of the specs this chapter uses',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
