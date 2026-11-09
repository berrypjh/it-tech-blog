import type { Locale } from '@it-tech-blog/preferences';
import {
  DocLayout,
  type DocReference,
  ReferencesSection,
  same,
  SummarySection,
} from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { CategoriesSection } from './sections/CategoriesSection';
import { LoopSection } from './sections/LoopSection';
import { PageHeader } from './sections/PageHeader';
import { PrinciplesSection } from './sections/PrinciplesSection';
import { ProblemSection } from './sections/ProblemSection';
import { SplitSection } from './sections/SplitSection';
import { SymptomSection } from './sections/SymptomSection';
import { TraceSection } from './sections/TraceSection';
import { getToc } from './toc';

const points = {
  ko: [
    '증상에서 열 가지 범주의 가설을 세우고, 가설마다 맞다면 보일 증거와 반증 질문을 적습니다.',
    'Retrieval은 미검색, 낡은 문서, 권한 필터, context 누락으로, Tool은 선택 실패와 실행 실패로 가릅니다.',
    'trace에서는 요청 ID, 입력 상태, 문서 ID와 버전, context 요약, 응답, 검증 결과, 도구 결과, 단계별 시간을 읽고, 알 수 없는 것도 구분합니다.',
    '같은 증상 "접수 확인 없음"에도 검증 거절, 도구 응답 유실, UI 표기 오류가 있을 수 있습니다. 요청 ID로 계층을 따라가며 관찰, 미확인, 가설, 다음 검사를 나눕니다.',
    '시간 초과는 응답을 못 받았다는 관찰일 뿐입니다. 실행되지 않았다고 단정하거나 바로 다시 실행하지 않고, 같은 요청 ID의 기록부터 조회합니다.',
    '성공 기준이 비어 있으면 실패가 무엇인지도 정할 수 없습니다. 그래서 진단은 01.5에서 정한 기준에서 출발합니다.',
  ],
  en: [
    'Build hypotheses in ten categories from the symptom, and write for each the evidence it would show and a refuting question.',
    'Split Retrieval into not retrieved, stale document, permission filter, and context drop, and Tool into selection failure and execution failure.',
    'In a trace read the request ID, input state, document IDs and versions, context summary, response, validation result, tool result, and per-step times, and also separate what you cannot tell.',
    'The same symptom, "no filing confirmation", can come from a validation refusal, a lost tool response, or a UI labeling error. Follow the layers by request ID and separate observed, unchecked, hypothesis, and next check.',
    'A timeout is only the observation that no response arrived. Do not conclude it did not run or re-run it right away; first look up records with the same request ID.',
    'If the success criteria are empty, you cannot even say what a failure is. That is why diagnosis starts from the criteria set in 01.5.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://papers.nips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf',
    source: same('Sculley et al. · NeurIPS 2015'),
    title: {
      ko: 'Hidden Technical Debt in Machine Learning Systems',
      en: 'Hidden Technical Debt in Machine Learning Systems',
    },
    note: {
      ko: '본문을 확인함: 얽힘(entanglement)과 CACE 원칙(Changing Anything Changes Everything), ML 코드가 시스템의 작은 일부라는 서술. LLM 이전 ML 시스템 대상',
      en: 'Body text checked: entanglement and the CACE principle (Changing Anything Changes Everything), and ML code as a small part of a system. About pre-LLM ML systems',
    },
  },
  {
    href: 'https://opentelemetry.io/docs/concepts/signals/traces/',
    source: same('OpenTelemetry'),
    title: same('Traces (Concepts)'),
    note: {
      ko: 'trace와 span의 정의, span의 이름 · 시작과 끝 시각 · 속성 · 상태',
      en: 'Definitions of trace and span; a span’s name, start and end times, attributes, and status',
    },
  },
];

export const FailureDiagnosisPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ProblemSection locale={locale} />
      <PrinciplesSection locale={locale} />
      <CategoriesSection locale={locale} />
      <SplitSection locale={locale} />
      <TraceSection locale={locale} />
      <SymptomSection locale={locale} />
      <LoopSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="notebook-to-service" />
    </DocLayout>
  );
};
