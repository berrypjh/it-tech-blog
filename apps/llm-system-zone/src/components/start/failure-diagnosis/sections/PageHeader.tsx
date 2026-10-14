import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '시작하기 · 01-05',
    title: '실패하는 AI 기능에서 먼저 살펴볼 것들',
    lead: (
      <>
        <strong className="text-text-default">
          관측한 실패는 원인 자체가 아닙니다. 모델이나 프롬프트를 바꾸기 전에 실패한 위치와 증거를
          조사합니다.
        </strong>{' '}
        이 장은 증상에서 원인 후보를 만들고, 다음에 확인할 증거와 수정 뒤 재검증 방법을 고르는 법을
        다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '증상에서 열 가지 범주의 원인 후보를 세우고 반증 질문으로 좁히기',
      'Retrieval과 Tool 안에서 서로 다른 실패를 구별하기',
      'trace에서 요청 ID, 문서 버전, context, 검증 결과, 소요 시간 읽기',
      '한 번에 가설 하나를 고치고 같은 실패 사례와 정상 사례를 다시 확인하기',
    ],
  },
  en: {
    eyebrow: 'Getting Started · 01-05',
    title: 'What to Check First When an AI Feature Fails',
    lead: (
      <>
        <strong className="text-text-default">
          An observed failure is not the cause itself. Before changing the model or the prompt,
          investigate where it failed and the evidence.
        </strong>{' '}
        This chapter builds candidate causes from a symptom and picks the next evidence to check and
        how to re-verify after a fix.
      </>
    ),
    readingTime: 'About 10 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Build candidate causes in ten categories from a symptom and narrow them with refuting questions',
      'Tell different failures apart inside Retrieval and Tool',
      'Read request ID, document versions, context, validation results, and durations in a trace',
      'Fix one hypothesis at a time and recheck the same failing case and a normal case',
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
