import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '시작하기 · 01-03',
    title: 'AI · Machine Learning · Deep Learning · Generative AI 구별하기',
    lead: (
      <>
        <strong className="text-text-default">
          AI 관련 용어는 한 가지 기준으로 나눈 상호 배타적인 제품 종류가 아닙니다.
        </strong>{' '}
        이 장은 서로 다른 분류 축을 구별하는 법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 6분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      'AI · ML · DL의 통상 포함 관계와 규칙 기반 AI 사례를 설명하기',
      'Generative AI, Foundation Model, LM, LLM, Multimodal이 서로 다른 축임을 구별하기',
      '용도(분류 등)와 모델 종류(LM 등)를 따로 보기',
    ],
  },
  en: {
    eyebrow: 'Getting Started · 01-03',
    title: 'Telling AI, Machine Learning, Deep Learning, and Generative AI Apart',
    lead: (
      <>
        <strong className="text-text-default">
          AI-related terms are not mutually exclusive kinds of product split by a single criterion.
        </strong>{' '}
        This chapter separates different classification axes.
      </>
    ),
    readingTime: 'About 6 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Explain the usual containment of AI, ML, and DL, and rule-based AI examples',
      'Tell that generative AI, foundation model, LM, LLM, and multimodal are different axes',
      'Look at the use (such as classification) and the model kind (such as LM) separately',
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
