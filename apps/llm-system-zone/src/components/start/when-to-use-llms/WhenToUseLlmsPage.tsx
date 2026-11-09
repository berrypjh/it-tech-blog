import type { Locale } from '@it-tech-blog/preferences';
import {
  DocLayout,
  type DocReference,
  ReferencesSection,
  same,
  SummarySection,
} from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { BaselineSection } from './sections/BaselineSection';
import { CompareSection } from './sections/CompareSection';
import { CriteriaSection } from './sections/CriteriaSection';
import { MlSection } from './sections/MlSection';
import { PageHeader } from './sections/PageHeader';
import { RetrievalSection } from './sections/RetrievalSection';
import { SplitSection } from './sections/SplitSection';
import { TreeSection } from './sections/TreeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '한 기능은 성격이 다른 작업 단위로 나뉩니다. 서비스 코드 → 큐 표, 형식 검사, 권한 확인처럼 규칙이 명확한 일은 코드와 시스템이 맡고, 해석 · 생성처럼 규칙으로 쓰기 어려운 일만 검증 전략과 함께 모델이 맡습니다.',
    '같은 문의를 서비스 코드 규칙, 정책 검색, 분류기, LLM으로 풀 수 있습니다. 조합에서는 앞 경로가 확실히 처리한 문의를 뒤로 넘기지 않고, 모든 경로가 01.3의 계약 검사를 거칩니다.',
    '실패 비용, 데이터, 변경 빈도, 품질, 지연, 비용, 검증 가능성으로 비LLM Baseline을 정하고, 보류 조건과 재평가 조건을 함께 적습니다.',
    '오류 비용이 높거나 검증이 어려우면 LLM 자동화를 보류합니다. 승인자가 있다는 사실만으로는 자동화가 타당해지지 않습니다.',
  ],
  en: [
    'A feature splits into task units of different natures. Work with clear rules, such as a service code → queue table, format checks, and permission checks, goes to code and the system; only work that is hard to write as rules, such as interpretation and generation, goes to a model with a verification strategy.',
    'The same request can be handled by service-code rules, policy search, a classifier, or an LLM. In a combination, a request an earlier path handled with certainty is not passed on, and every path goes through the 01.3 contract checks.',
    'Set a non-LLM baseline using failure cost, data, change frequency, quality, latency, cost, and verifiability, and write down the conditions for holding off and for re-evaluating.',
    'Hold off on LLM automation when the error cost is high or verification is hard. The presence of an approver does not make automation justified by itself.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://www.anthropic.com/engineering/building-effective-agents',
    source: same('Anthropic'),
    title: same('Building effective agents'),
    note: {
      ko: '단순한 해법으로 시작하고 필요할 때만 복잡성을 더하라는 권고. 한 벤더의 에세이이며 모든 LLM 시스템의 일반 법칙은 아니다',
      en: 'Advice to start with the simplest solution and add complexity only when needed. One vendor’s essay, not a general law for every LLM system',
    },
  },
  {
    href: 'https://arxiv.org/abs/2005.11401',
    source: same('Lewis et al. · arXiv (2020)'),
    title: {
      ko: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
      en: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
    },
    note: {
      ko: '사전학습 생성 모델과 외부 검색 기억을 결합하는 RAG. 근거 제시와 지식 갱신이 열린 문제라고 서술',
      en: 'RAG combines a pretrained generator with an external retrieval memory; provenance and knowledge updating are described as open problems',
    },
  },
  {
    href: 'https://nlp.stanford.edu/IR-book/html/htmledition/an-example-information-retrieval-problem-1.html',
    source: same('Manning et al.'),
    title: {
      ko: 'Introduction to Information Retrieval: An example information retrieval problem',
      en: 'Introduction to Information Retrieval: An example information retrieval problem',
    },
    note: {
      ko: '정보 검색을 문서 모음에서 관련 문서를 찾는 작업으로 정의하고 불리언 질의와 색인을 설명',
      en: 'Frames information retrieval as finding relevant documents in a collection and explains Boolean queries and indexes',
    },
  },
];

export const WhenToUseLlmsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <SplitSection locale={locale} />
      <RetrievalSection locale={locale} />
      <MlSection locale={locale} />
      <CompareSection locale={locale} />
      <CriteriaSection locale={locale} />
      <TreeSection locale={locale} />
      <BaselineSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="success-criteria" />
    </DocLayout>
  );
};
