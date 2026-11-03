import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

import { narration } from '../narration';

const content = {
  ko: {
    eyebrow: '01장 · 4 / 5',
    title: '접근성·사용성·포용적 설계·표준 적합성 구분하기',
    lead: (
      <>
        &quot;WCAG를 통과했으니 접근성은 됐다&quot;, &quot;사용성 테스트를 했으니 누구나 쓸 수
        있다&quot;. 두 문장 모두 서로 다른 질문의 답을 섞습니다. 이 페이지는 한 사례를{' '}
        <strong className="text-text-default">네 개념의 서로 다른 질문</strong>으로 각각 판단해
        보고, 그 답을 섞지 않고 말하는 방법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '접근성 · 사용성 · 포용적 설계 · 표준 적합성이 각각 묻는 질문 구분하기',
      '한 사례에서 네 관점의 판단이 서로 달라지는 이유 이해하기',
      '표준 적합성 · 과업 성공 · 법적 의무를 나눠 말하기',
      '규범 문서와 참고 문서로 문장의 근거 가리기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 4 of 5',
    title: 'Telling accessibility, usability, inclusive design, and conformance apart',
    lead: (
      <>
        &quot;We passed WCAG, so accessibility is done.&quot; &quot;We ran usability tests, so
        anyone can use it.&quot; Both sentences mix up answers to different questions. This page
        judges one case through{' '}
        <strong className="text-text-default">the different questions of four concepts</strong> and
        shows how to state those answers without mixing them.
      </>
    ),
    readingTime: 'About 12 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Tell apart the question each of accessibility, usability, inclusive design, and conformance asks',
      'Understand why the four perspectives reach different judgments on one case',
      'State conformance, task success, and legal obligation separately',
      'Tell where a statement comes from: normative or informative sources',
    ],
  },
};

/** 페이지 제목, 핵심 명제, 학습 목표를 보여주는 머리말. */
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
