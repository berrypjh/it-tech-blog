import type { Locale } from '@it-tech-blog/preferences';
import {
  DocLayout,
  type DocReference,
  ReferencesSection,
  same,
  SummarySection,
} from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { BoundarySection } from './sections/BoundarySection';
import { ContractSection } from './sections/ContractSection';
import { DeterministicSection } from './sections/DeterministicSection';
import { LayersSection } from './sections/LayersSection';
import { PageHeader } from './sections/PageHeader';
import { ProblemSection } from './sections/ProblemSection';
import { TypesSection } from './sections/TypesSection';
import { VariationSection } from './sections/VariationSection';
import { VocabSection } from './sections/VocabSection';
import { getToc } from './toc';

const points = {
  ko: [
    '일반 함수는 입력, 상태, 환경이 같으면 결과가 정해지고 모델은 분포에서 선택한 출력을 냅니다. 다만 두 쪽 모두 비결정성의 원인이 있고, 출력 변동은 샘플링과 모델 · 컨텍스트 · 환경 변경으로 나눠 봅니다.',
    '코드 정확성, JSON 구문, 스키마, 도메인 제약, 의미적 품질, Task Success는 서로 다른 질문이며 앞 층의 통과가 뒤 층을 보장하지 않습니다.',
    'TypeScript 타입은 컴파일 시점의 도구이고 런타임 검증이 아닙니다. 모델 출력은 신뢰 경계 밖 데이터이므로 파싱, 검증, 권한 확인 뒤에 쓰고 HTML이나 명령으로 그대로 삽입하지 않습니다.',
    'Validation은 명시 제약 확인, Evaluation은 기준과 데이터에 따른 품질 평가, Monitoring은 운영 관찰입니다. 서로 겹칠 수 있습니다.',
    '계약은 형식, 사실 · 근거, 업무 규칙, 실행 권한을 차례로 판정하는 결정적인 함수입니다. 권한과 업무 상태는 신뢰된 입력으로 받고, 알 수 없거나 검사하지 않은 항목은 통과로 치지 않으며, 네 단계가 모두 통과할 때만 씁니다.',
  ],
  en: [
    'A regular function is fixed by its input, state, and environment, while a model produces output chosen from a distribution. Both have sources of nondeterminism, and output variation splits into sampling versus model, context, and environment changes.',
    'Code correctness, JSON syntax, schema, domain constraints, semantic quality, and task success are different questions, and passing an earlier layer does not guarantee a later one.',
    'TypeScript types are a compile-time tool, not runtime validation. Model output is data outside the trust boundary, so use it after parsing, validation, and permission checks, and never insert it as HTML or a command as is.',
    'Validation checks stated constraints, Evaluation assesses quality against criteria and data, and Monitoring observes operation. They can overlap.',
    'The contract is a deterministic function that judges format, fact and evidence, business rules, and execution permission in turn. Permission and business state come in as trusted inputs, unknown or unchecked items never count as passed, and a write happens only when all four pass.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://json-schema.org/specification',
    source: same('JSON Schema'),
    title: same('JSON Schema Specification'),
    note: {
      ko: '현재 2020-12판. Core와 Validation 두 부분으로 나뉘고, Validation이 필수 필드 · 타입 같은 검사 키워드를 정의한다',
      en: 'Currently 2020-12, split into Core and Validation; Validation defines check keywords such as required fields and types',
    },
  },
  {
    href: 'https://json-schema.org/understanding-json-schema/about',
    source: same('JSON Schema'),
    title: same('Understanding JSON Schema: About'),
    note: {
      ko: '스키마는 데이터의 구조를 기술하고 검증한다. 일부 제약은 표현할 수 없어 의미 검사는 별도 코드가 필요하다',
      en: 'A schema describes and validates data structure. Some constraints cannot be expressed, so semantic checks need separate code',
    },
  },
  {
    href: 'https://www.typescriptlang.org/docs/handbook/2/basic-types.html',
    source: same('TypeScript'),
    title: same('The Basics (Handbook)'),
    note: {
      ko: '타입 주석은 컴파일 때 지워지며 런타임 동작을 바꾸지 않는다',
      en: 'Type annotations are erased at compile time and never change runtime behavior',
    },
  },
  {
    href: 'https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/',
    source: same('OWASP GenAI'),
    title: same('LLM05:2025 Improper Output Handling'),
    note: {
      ko: '모델 출력을 신뢰하지 않고 검증 · 인코딩 · 매개변수화된 쿼리로 다루는 권고',
      en: 'Guidance on not trusting model output and handling it with validation, encoding, and parameterized queries',
    },
  },
  {
    href: 'https://developers.openai.com/cookbook/examples/reproducible_outputs_with_the_seed_parameter',
    source: same('OpenAI Cookbook'),
    title: {
      ko: 'Reproducible outputs with the seed parameter',
      en: 'Reproducible outputs with the seed parameter',
    },
    note: {
      ko: '한 제공자의 seed 재현성은 best effort이며 같은 조건에서도 달라질 수 있다 (해당 API 한정)',
      en: 'One provider seed reproducibility is best effort and can still differ under the same conditions (that API only)',
    },
  },
];

export const SoftwareDifferencesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ProblemSection locale={locale} />
      <DeterministicSection locale={locale} />
      <ContractSection locale={locale} />
      <VariationSection locale={locale} />
      <LayersSection locale={locale} />
      <TypesSection locale={locale} />
      <VocabSection locale={locale} />
      <BoundarySection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="when-to-use-llms" />
    </DocLayout>
  );
};
