import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock, FlaskConical } from 'lucide-react';

import { narration } from '../narration';

const content = {
  ko: {
    eyebrow: '01장 · 1 / 5',
    title: '웹 접근성은 누구의 어떤 활동을 가능하게 하는가?',
    lead: (
      <>
        웹접근성은 스크린 리더 대응만이 아닙니다. 장애가 있는 사람이 웹을{' '}
        <strong className="text-text-default">
          인식하고, 이해하고, 탐색하고, 상호작용하고, 직접 기여
        </strong>
        할 수 있도록 설계하고 개발하는 일입니다.
      </>
    ),
    readingTime: '읽는 시간 약 18분',
    practices: '브라우저 실습 4개',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '웹접근성을 "스크린 리더 대응"보다 넓게, 사람이 과업을 끝내는 흐름으로 정의하기',
      '장벽이 사람이 아니라 능력·환경·사용 방식·설계의 조합에서 생기는 이유',
      '일시적·상황적 제약과 장애 당사자의 경험을 구분하기',
      '막힌 활동을 규칙 위반이 아니라 사용자·과업·실패 단계로 기록하기',
      '보조기술이 받는 정보가 프론트엔드 마크업에서 결정되는 구조',
      '접근성과 사용성이 겹치지만 서로 다른 질문에 답하는 이유',
      'ARIA보다 시맨틱 HTML과 컴포넌트 계약이 먼저인 이유',
      'WCAG · KWCAG · 법적 의무를 서로 다른 층으로 구분하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 1 of 5',
    title: 'Whose activities does web accessibility make possible?',
    lead: (
      <>
        Web accessibility is more than screen reader support. It is designing and developing so that
        people with disabilities can{' '}
        <strong className="text-text-default">
          perceive, understand, navigate, interact with, and contribute to
        </strong>{' '}
        the web.
      </>
    ),
    readingTime: 'About 18 min read',
    practices: '4 in-browser exercises',
    learnHeading: 'What you will learn',
    learnItems: [
      'Define accessibility as people finishing tasks, not just "screen reader support"',
      'Why barriers come from the mix of ability, environment, way of use, and design',
      'Tell temporary and situational limitations apart from the experience of disabled people',
      'Record a blocked activity as user, task, and failure stage rather than a rule violation',
      'How frontend markup decides what assistive technology receives',
      'Why accessibility and usability overlap but answer different questions',
      'Why semantic HTML and component contracts come before ARIA',
      'Tell WCAG, KWCAG, and legal obligations apart as different layers',
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
        <ListenButton script={narration} />
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
