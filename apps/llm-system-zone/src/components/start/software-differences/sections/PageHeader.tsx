import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '시작하기 · 01-02',
    title: 'LLM 애플리케이션은 일반 소프트웨어와 무엇이 다른가?',
    lead: (
      <>
        <strong className="text-text-default">
          타입과 제어 흐름이 정확해도 모델 응답이 유용하고 사실이라는 보장은 생기지 않습니다.
        </strong>{' '}
        이 장은 실행 오류, 구조 위반, 의미적 오답을 구별하고 각각을 무엇으로 확인할지 고르는 법을
        다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 8분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '결정적 함수와 확률 분포를 학습한 모델의 차이, 그리고 둘 다 가지는 비결정성의 원인 구별하기',
      '출력 변동의 원인을 샘플링과 모델 · 컨텍스트 · 환경 변경으로 나누기',
      '코드 정확성, JSON 구문, 스키마, 도메인 제약, 의미적 품질, Task Success를 분리하기',
      '모델 출력을 신뢰 경계 밖 데이터로 다루고, 무엇을 코드로 검사하고 무엇을 평가 데이터로 확인할지 정하기',
    ],
  },
  en: {
    eyebrow: 'Getting Started · 01-02',
    title: 'How Do LLM Applications Differ from Regular Software?',
    lead: (
      <>
        <strong className="text-text-default">
          Correct types and control flow do not guarantee that a model response is useful or true.
        </strong>{' '}
        This chapter separates execution errors, structure violations, and semantic wrong answers,
        and shows how to pick what verifies each.
      </>
    ),
    readingTime: 'About 8 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Tell deterministic functions from models trained on probability distributions, and the causes of nondeterminism both share',
      'Split output variation into sampling versus model, context, and environment changes',
      'Separate code correctness, JSON syntax, schema, domain constraints, semantic quality, and task success',
      'Treat model output as data outside the trust boundary, and decide what to check in code versus evaluation data',
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
