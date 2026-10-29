import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '시작하기 · 01-06',
    title: 'AI 기능의 성공 조건을 먼저 정의하는 방법',
    lead: (
      <>
        <strong className="text-text-default">
          구현하기 전에 누구의 어떤 일을 어떤 조건에서 성공으로 판정할지 정의해야 합니다.
        </strong>{' '}
        이 장은 모호한 요구사항을 대상, 출력, 판정 기준, 측정 방법, 실패 처리까지 포함한 수용
        기준(Acceptance Criteria)으로 바꾸는 법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '"잘 만들어 줘"를 대상, 입력 범위, 완료할 작업, 제외 범위로 분해하기',
      'Expected Output과 Acceptance Criteria를 구분하고 구조 · 정확성 · 완전성 · Task Success를 따로 측정하기',
      '필수 조건, 실패 처리, 지연과 비용 예산의 측정 정의(시작과 끝, 단위, 분모) 쓰기',
      '같은 조건의 baseline 비교, 사례 · 데이터 버전 기록, 제품 목표와의 연결로 구현 · 수정 · 보류 정하기',
    ],
  },
  en: {
    eyebrow: 'Getting Started · 01-06',
    title: 'How to Define an AI Feature’s Success Criteria First',
    lead: (
      <>
        <strong className="text-text-default">
          Before implementing, define whose task counts as a success under what conditions.
        </strong>{' '}
        This chapter turns a vague requirement into acceptance criteria that include target, output,
        judging criteria, how it is measured, and failure handling.
      </>
    ),
    readingTime: 'About 10 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Break "make good answers" into target, input scope, task to complete, and out-of-scope',
      'Separate Expected Output from Acceptance Criteria and measure structure, correctness, completeness, and Task Success separately',
      'Write mandatory conditions, failure handling, and the measurement definitions (start and end, unit, denominator) of latency and cost budgets',
      'Decide to build, revise, or hold from a same-conditions baseline comparison, case and data version records, and the link to product goals',
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
