import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '시작하기 · 01-04',
    title: 'LLM을 사용해야 하는 문제와 사용하지 말아야 할 문제',
    lead: (
      <>
        <strong className="text-text-default">
          &quot;LLM을 쓸까?&quot;보다 &quot;어떤 하위 작업을 어떤 책임과 제약으로 맡길까?&quot;를
          먼저 결정합니다.
        </strong>{' '}
        이 장은 기능을 작업 단위로 나누고, 제약과 대안을 근거로 구현 방식을 고르는 법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 8분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '한 기능을 작업 단위로 나누고 작업마다 책임을 배정하기',
      '규칙 · 검색 · ML · LLM의 유지보수, 품질, 비용, 지연, 데이터 요구를 비교하기',
      '실시간성, 비용, 오류 허용도, 상태 변경의 피해, 사람 검토 가능성, 데이터 제약으로 구성 정하기',
      '위험한 변경을 모델 응답만으로 승인하지 않는 설계 설명하기',
    ],
  },
  en: {
    eyebrow: 'Getting Started · 01-04',
    title: 'Problems to Use an LLM For, and Problems to Avoid',
    lead: (
      <>
        <strong className="text-text-default">
          Decide &quot;which subtask do we hand to what responsibility and constraints?&quot; before
          &quot;should we use an LLM?&quot;.
        </strong>{' '}
        This chapter splits a feature into task units and picks an implementation by constraints and
        alternatives.
      </>
    ),
    readingTime: 'About 8 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Split one feature into task units and assign responsibility per task',
      'Compare maintenance, quality, cost, latency, and data needs of rules, search, ML, and LLM',
      'Decide a design by real-time need, cost, error tolerance, damage of a state change, human review, and data constraints',
      'Explain a design where a risky change is never approved by the model response alone',
    ],
  },
};

/** 챕터 제목, 핵심 명제, 학습 목표를 보여주는 머리말. */
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
