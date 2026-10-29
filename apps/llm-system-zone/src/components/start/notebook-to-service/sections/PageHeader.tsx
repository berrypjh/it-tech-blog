import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '시작하기 · 01-07',
    title: 'Python Notebook과 서비스 코드는 어떻게 역할이 다른가?',
    lead: (
      <>
        <strong className="text-text-default">
          실험에서 발견한 설정값만이 아니라 선택 근거, 입출력 계약, 실패 정책, 재현 사례를 함께
          서비스로 옮깁니다.
        </strong>{' '}
        이 장은 Notebook 실험의 결과를 버전이 있는 출력 스키마, 선택 정책, 실패 처리, 확인 사례로
        바꾸는 법을 다루고 01장을 마무리합니다.
      </>
    ),
    readingTime: '읽는 시간 약 9분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      'Notebook이 탐색 환경임을 이해하고 데이터 점검, 요인 통제, 오류 분석의 자리를 알기',
      'threshold가 어떤 score에 적용되는지 정의하고, 모델이 말한 confidence를 확률로 취급하지 않기',
      '실험 기록 항목과 언어 독립 JSON 계약(schemaVersion, enum, unknown, 비교 연산, 실패 정책, 확인 사례) 쓰기',
      'Notebook과 서비스 코드의 요구를 비교하고, 계약을 서비스 코드로 옮겨 같은 분기를 확인하기',
    ],
  },
  en: {
    eyebrow: 'Getting Started · 01-07',
    title: 'How Do a Python Notebook and Service Code Differ in Role?',
    lead: (
      <>
        <strong className="text-text-default">
          Carry into the service not only the settings found in an experiment, but also the
          rationale for the choice, the input and output contract, the failure policy, and the
          reproduction cases.
        </strong>{' '}
        This chapter turns notebook experiment results into a versioned output schema, selection
        policy, failure handling, and confirmation cases, and wraps up chapter 01.
      </>
    ),
    readingTime: 'About 9 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Understand a notebook as an exploration environment, and know where data inspection, factor control, and error analysis fit',
      'Define which score a threshold applies to, and do not treat a model-stated confidence as a probability',
      'Write an experiment record and a language-independent JSON contract (schemaVersion, enum, unknown, comparison operator, failure policy, confirmation cases)',
      'Compare notebook and service code requirements, and carry the contract into service code and confirm the same branches',
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
