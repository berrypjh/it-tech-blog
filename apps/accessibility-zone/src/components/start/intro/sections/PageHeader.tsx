import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock, FlaskConical } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '시작하기',
    title: '웹접근성 시작하기',
    lead: (
      <>
        웹접근성은 스크린 리더 대응이 아닙니다. 장애가 있는 사람이 웹 콘텐츠를{' '}
        <strong className="text-text-default">
          동등하게 인식하고, 이해하고, 탐색하고, 상호작용
        </strong>
        할 수 있도록 설계하고 개발하는 일입니다. 이 챕터는 트랙 전체의 지도입니다.
      </>
    ),
    readingTime: '읽는 시간 약 15분',
    practices: '브라우저 실습 2개',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '웹접근성을 "스크린 리더 대응"보다 넓게, 작업 완료 흐름으로 정의하기',
      '장벽이 사람이 아니라 능력·환경·입력 방식·설계의 조합에서 생기는 이유',
      '보조기술이 받는 정보가 프론트엔드 마크업에서 결정되는 구조',
      '접근성을 사용성·시맨틱 HTML·디자인 시스템·표준과 구분하는 기준',
    ],
  },
  en: {
    eyebrow: 'Getting Started',
    title: 'Getting Started with Web Accessibility',
    lead: (
      <>
        Web accessibility is not screen reader support. It is designing and developing so that
        people with disabilities can{' '}
        <strong className="text-text-default">
          equally perceive, understand, navigate, and interact with
        </strong>{' '}
        web content. This chapter is the map for the whole track.
      </>
    ),
    readingTime: 'About 15 min read',
    practices: '2 in-browser exercises',
    learnHeading: 'What you will learn',
    learnItems: [
      'Define accessibility as a task-completion flow, not just "screen reader support"',
      'Why barriers come from the mix of ability, environment, input method, and design',
      'How frontend markup decides what assistive technology receives',
      'How accessibility differs from usability, semantic HTML, design systems, and standards',
    ],
  },
};

/** 챕터 제목, 한 줄 정의, 학습 목표를 보여주는 페이지 머리말. */
export const PageHeader = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <header>
      <p className="mb-sm text-xsm font-semiBold text-text-primary">{c.eyebrow}</p>
      <h1 className="text-3xl leading-3xl font-bold tracking-sm text-text-default">{c.title}</h1>

      <p className="mt-lg text-md leading-md text-text-light">{c.lead}</p>

      <div className="mt-lg flex flex-wrap gap-x-xl gap-y-xs text-xxsm text-text-light">
        <span className="flex items-center gap-xs">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {c.readingTime}
        </span>
        <span className="flex items-center gap-xs">
          <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
          {c.practices}
        </span>
      </div>

      <section
        aria-labelledby="learn-heading"
        className="mt-2xl rounded-md border border-stroke-light bg-background-default p-xl"
      >
        <h2 id="learn-heading" className="mb-md text-xsm font-bold text-text-default">
          {c.learnHeading}
        </h2>
        <List className="flex flex-col gap-sm text-xsm">
          {c.learnItems.map((item) => (
            <ListItem key={item} className="flex gap-sm">
              <Check className="mt-xs h-4 w-4 shrink-0 text-text-success" aria-hidden="true" />
              {item}
            </ListItem>
          ))}
        </List>
      </section>
    </header>
  );
};
