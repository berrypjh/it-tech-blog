import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '시작하기 · 01-01',
    title: 'LLM 시스템 시작하기: 모델에서 소프트웨어까지',
    lead: (
      <>
        모델이 응답을 생성하는 것과 사용자의 업무가 끝나는 것은{' '}
        <strong className="text-text-default">다릅니다</strong>. 이 장은 모델, 추론 API, 앱이 각각
        무엇을 책임지는지 나누고, 요청이 업무 완료까지 가는 흐름을 따라갑니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '모델, 추론 API, 앱이 각각 무엇을 하고 무엇을 하지 않는지 구분하기',
      'LM과 LLM을 정의하되 "Large"의 기준을 단정하지 않기',
      '입력 확인에서 결과 확인까지, 검증 실패 시 실행이 막히는 흐름 설명하기',
      '모델 응답 성공과 업무 완료를 다른 사실로 판단하기',
    ],
  },
  en: {
    eyebrow: 'Getting Started · 01-01',
    title: 'Getting Started with LLM Systems: From Model to Software',
    lead: (
      <>
        A model generating a response and a user&apos;s task being finished are{' '}
        <strong className="text-text-default">different things</strong>. This chapter separates what
        the model, the inference API, and the app are each responsible for, and follows a request
        all the way to a finished task.
      </>
    ),
    readingTime: 'About 10 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Tell what the model, the inference API, and the app each do and do not do',
      'Define LM and LLM without asserting a threshold for "Large"',
      'Explain the flow from input check to result check, and how validation failure blocks execution',
      'Judge a successful model response and a finished task as separate facts',
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
        <ListenButton />
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
