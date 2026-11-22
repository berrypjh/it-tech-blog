import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 9 / 9',
    title: 'Carousel의 탐색 · 정지 · 현재 항목 · 읽기 순서 설계하기',
    lead: (
      <>
        읽고 있던 안내가 저절로 다음으로 넘어가면, 천천히 읽는 사용자와 화면을 보지 않는 사용자는
        무엇이 바뀌었는지도 모른 채 다른 내용을 만납니다. 이 장의 마지막 페이지는{' '}
        <strong className="text-text-default">직접 넘기는 이전 · 다음</strong>을 기본으로 삼고, 자동
        넘김은 사용자가 시작하고 멈추게 합니다. 그리고 이 장의 패턴 가운데 과업에 맞는 것만 골라
        조합합니다.
      </>
    ),
    readingTime: '읽는 시간 약 15분',
    practices: '브라우저 실습 3개',
    learnItems: [
      '보이는 안내와 그 위치를 알리고 숨긴 안내를 키보드 순서에서 빼기',
      '자동 넘김을 사용자가 시작했을 때만 돌리고 초점과 포인터에서 멈추기',
      '과업에 맞는 패턴만 조합하고 채택하지 않은 패턴의 이유 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 9 of 9',
    title: 'Designing navigation, pausing, the current item, and reading order of a carousel',
    lead: (
      <>
        When a guide being read moves on by itself, users who read slowly and users who do not look
        at the screen meet different content without knowing what changed. This last page of the
        chapter makes <strong className="text-text-default">manual previous and next</strong> the
        base and lets the user start and stop rotation. It then combines only the patterns of this
        chapter that fit a task.
      </>
    ),
    readingTime: 'About 15 min read',
    practices: '3 in-browser exercises',
    learnItems: [
      'Conveying the visible guide and its position, and removing hidden guides from the keyboard order',
      'Running rotation only when the user starts it, and stopping on focus and pointer',
      'Combining only the patterns that fit the task, and recording why a pattern was not adopted',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
