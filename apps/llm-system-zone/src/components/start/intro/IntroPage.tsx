import type { Locale } from '@it-tech-blog/preferences';
import {
  DocLayout,
  type DocReference,
  ReferencesSection,
  same,
  SummarySection,
} from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { CounterSection } from './sections/CounterSection';
import { ExampleSection } from './sections/ExampleSection';
import { FlowSection } from './sections/FlowSection';
import { PageHeader } from './sections/PageHeader';
import { PartsSection } from './sections/PartsSection';
import { ProblemSection } from './sections/ProblemSection';
import { RolesSection } from './sections/RolesSection';
import { WhatIsSection } from './sections/WhatIsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '모델이 응답을 생성하는 것과 사용자의 업무가 완료되는 것은 다릅니다. 완료의 근거는 모델 응답이 아니라 같은 요청에 대해 업무 시스템이 남긴 접수 ID와 담당 큐 기록입니다.',
    'LLM은 텍스트를 생성하는 구성 요소입니다. 다음 토큰 예측은 생성형 자기회귀 LLM의 대표 사례이며 모든 LM의 정의는 아닙니다. LLM의 "Large"에는 합의된 단일 기준이 없습니다.',
    '모델은 학습된 계산 구성 요소, 추론 API는 호출 인터페이스, 앱은 입력 · 권한 · 데이터 · 검증 · 실행 · UI를 조정합니다. 로컬 추론에서도 역할 구분은 같습니다.',
    '문의는 입력, 라우팅 제안, 검증, 업무 시스템 기록, 사용자 확인을 거칩니다. 검증 실패와 기록 거절로 기록하지 않는 분기도 정상 흐름입니다.',
    '모델이 "접수 완료"라는 문장을 생성해도 기록이 거절되었다면 완료가 아닙니다. 앱은 업무 시스템의 응답과 기록을 확인한 뒤에만 완료를 보여 줍니다.',
    'Retrieval, Tools, Evaluation은 필요할 때 더하는 보조 요소이고, Evaluation은 요청 경로 밖의 품질 측정입니다.',
  ],
  en: [
    'A model generating a response and a user’s task being finished are different things. The evidence of completion is not the model response but the ticket ID and queue record the business system left for the same request.',
    'An LLM is a component that generates text. Next-token prediction is a representative case of generative autoregressive LLMs, not the definition of every LM. There is no single agreed bar for "Large" in LLM.',
    'The model is a trained computational component, the inference API is the call interface, and the app coordinates input, permissions, data, validation, execution, and UI. With local inference the split of roles is the same.',
    'A request passes input, routing suggestion, validation, business system record, and user confirmation. Paths that record nothing, such as a validation failure or a rejected write, are normal flow.',
    'Even if the model generates the sentence "filed", the task is not done when the write was rejected. The app shows completion only after checking the business system’s response and record.',
    'Retrieval, Tools, and Evaluation are supporting elements added when needed, and Evaluation is quality measurement outside the request path.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://arxiv.org/abs/2108.07258',
    source: same('arXiv'),
    title: {
      ko: 'On the Opportunities and Risks of Foundation Models',
      en: 'On the Opportunities and Risks of Foundation Models',
    },
    note: {
      ko: '파운데이션 모델의 정의(넓은 데이터로 대규모 학습, 다양한 작업에 적응)와 규모에서 오는 위험',
      en: 'Definition of foundation models (broad data at scale, adaptable to many tasks) and risks that come with scale',
    },
  },
  {
    href: 'https://www.anthropic.com/engineering/building-effective-agents',
    source: same('Anthropic'),
    title: same('Building effective agents'),
    note: {
      ko: '단순한 해법으로 시작할 것, 정해진 코드 경로의 workflow와 모델이 경로를 정하는 agent의 구분',
      en: 'Start with the simplest solution; workflows with predefined code paths vs. agents that direct their own process',
    },
  },
  {
    href: 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/',
    source: same('OWASP GenAI'),
    title: same('LLM06:2025 Excessive Agency'),
    note: {
      ko: '최소 권한, 하위 시스템에서의 권한 검사, 영향이 큰 동작의 사람 승인',
      en: 'Minimal permissions, authorization in downstream systems, human approval for high-impact actions',
    },
  },
];

export const IntroPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ProblemSection locale={locale} />
      <WhatIsSection locale={locale} />
      <RolesSection locale={locale} />
      <FlowSection locale={locale} />
      <CounterSection locale={locale} />
      <PartsSection locale={locale} />
      <ExampleSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="ai-concepts" />
    </DocLayout>
  );
};
