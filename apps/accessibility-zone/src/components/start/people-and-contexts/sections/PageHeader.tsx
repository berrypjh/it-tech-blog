import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

import { narration } from '../narration';

const content = {
  ko: {
    eyebrow: '01장 · 2 / 5',
    title: '시각·청각·운동·인지 특성과 복합적인 사용 환경 이해하기',
    lead: (
      <>
        같은 장애가 있어도 웹을 쓰는 방식은 사람마다 다르고, 한 사람은 여러 특성과 환경을 동시에
        가집니다. 이 페이지는 장애를 분류표로 외우는 대신{' '}
        <strong className="text-text-default">
          한 과업이 어떤 조건에서 막히고 어떻게 복구되는지
        </strong>
        를 봅니다.
      </>
    ),
    readingTime: '읽는 시간 약 8분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '시각 · 청각 · 운동 · 인지 특성을 진단명이 아니라 기능적 필요로 설명하기',
      '장애 유형과 보조기술이 1:1로 대응하지 않는다는 점 이해하기',
      '여러 특성과 기기 · 장소 · 네트워크 같은 환경이 겹친 복합 상황 읽기',
      '한 과업이 맥락마다 다른 단계에서 막히는 조건과 복구 경로 비교하기',
      '직접 따라 해 보기로 알 수 있는 것과 없는 것 구분하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 2 of 5',
    title: 'Understanding visual, auditory, motor, and cognitive traits in combined contexts',
    lead: (
      <>
        Two people with the same disability can use the web very differently, and one person brings
        several traits and environments at once. Instead of memorizing a table of disabilities, this
        page looks at{' '}
        <strong className="text-text-default">
          when a task gets blocked and how people recover
        </strong>
        .
      </>
    ),
    readingTime: 'About 8 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Describe visual, auditory, motor, and cognitive traits as functional needs, not diagnoses',
      'Understand that disability types and assistive technologies do not map one-to-one',
      'Read combined situations where several traits meet device, place, and network',
      'Compare the conditions and recovery paths of one task blocked at different stages',
      'Separate what disability simulation can and cannot tell you',
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
