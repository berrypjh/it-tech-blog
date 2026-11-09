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
import { BudgetSection } from './sections/BudgetSection';
import { CriteriaSection } from './sections/CriteriaSection';
import { DatasetSection } from './sections/DatasetSection';
import { DecisionSection } from './sections/DecisionSection';
import { FailureSection } from './sections/FailureSection';
import { GoalsSection } from './sections/GoalsSection';
import { GoldenSection } from './sections/GoldenSection';
import { LevelsSection } from './sections/LevelsSection';
import { MetricsSection } from './sections/MetricsSection';
import { PageHeader } from './sections/PageHeader';
import { ProblemSection } from './sections/ProblemSection';
import { getToc } from './toc';

const points = {
  ko: [
    '"잘 만들어 줘"는 대상 사용자, 입력 범위, 완료할 작업, 제외 범위로 분해합니다.',
    '지표는 분자와 분모로 적습니다. 가상 사례 20건에서 자동 처리율 14/20, 자동 처리 중 정확률 12/14, 전체 중 자동 오처리율 2/20이고, 검토 · 보류 6건은 미확정이므로 어느 값도 전체 과업 성공률이 아닙니다.',
    'Expected Output은 출력의 예이고, Acceptance Criteria는 통과 조건입니다. 구조 유효성, Correctness, Completeness, Task Success는 서로 다른 지표이며 각각 분모와 누락값 정책을 둡니다.',
    '지연과 비용 예산에는 측정 시작과 끝, 단위, 재시도 포함 여부, 분모, 집계 방식이 필요합니다.',
    'baseline과 같은 사례, 같은 기준, 같은 측정 정의로 비교하고, 개발용과 최종 확인용 사례를 나눠 데이터와 기준 버전을 기록합니다.',
    '측정 결과는 구현 · 수정 · 보류의 결정으로 이어지고, 기준을 만족하지 못하면 고칠 곳이나 기준과 사례로 되돌아갑니다.',
  ],
  en: [
    'Break "make it good" into target user, input scope, task to complete, and out-of-scope.',
    'Write each metric as a numerator and denominator. On the 20 fictional cases the automatic handling rate is 14/20, the precision of automatic handling 12/14, and the wrong automatic rate over all 2/20; the 6 reviewed or held cases are undecided, so none of these is an overall task success rate.',
    'Expected Output is an example of an output, and Acceptance Criteria are the pass conditions. Structure validity, Correctness, Completeness, and Task Success are different metrics, each with its denominator and missing-value policy.',
    'Latency and cost budgets need the start and end of measurement, unit, whether retries are included, denominator, and aggregation.',
    'Compare with a baseline on the same cases, the same criteria, and the same measurement definitions, separate development and final-check sets, and record data and criteria versions.',
    'Measured results lead to a decision to build, revise, or hold, and when the criteria are not met you return to what to fix, or to the criteria and cases.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://airc.nist.gov/airmf-resources/playbook/measure/',
    source: same('NIST AIRC'),
    title: same('AI RMF Playbook: MEASURE'),
    note: {
      ko: '지표 선택 기준과 쓰지 않은 지표의 기록(1.1), 배포와 비슷한 조건의 측정(2.3), 사람의 감독 정도 기록(2.8)',
      en: 'Documenting metric selection and unused metrics (1.1), measuring in deployment-like conditions (2.3), documenting human oversight (2.8)',
    },
  },
  {
    href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
    source: same('NIST (2023)'),
    title: {
      ko: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
      en: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
    },
    note: {
      ko: '본문을 확인함: 정확도 측정은 사용 조건을 대표하는 현실적인 테스트 집합과 방법 서술과 함께 두고 데이터 구간별 분해 가능, validation의 정의',
      en: 'Body checked: pair accuracy with realistic test sets representative of expected use and a method description, disaggregation by data segment, and the definition of validation',
    },
  },
  {
    href: 'https://platform.claude.com/docs/en/test-and-evaluate/define-success',
    source: same('Anthropic'),
    title: same('Define your success criteria'),
    note: {
      ko: '성공 기준을 구체적 · 측정 가능 · 달성 가능 · 목적에 맞게, 여러 차원을 함께. 한 벤더의 문서이며 예시 수치는 해당 문서의 예다',
      en: 'Success criteria that are specific, measurable, achievable, relevant, and multidimensional. One vendor’s document; its example figures are that document’s examples',
    },
  },
  {
    href: 'https://arxiv.org/abs/2211.09110',
    source: same('Liang et al. · arXiv (2022)'),
    title: {
      ko: 'Holistic Evaluation of Language Models (HELM)',
      en: 'Holistic Evaluation of Language Models (HELM)',
    },
    note: {
      ko: '초록을 확인함: 정확도뿐 아니라 보정, 견고성, 공정성, 편향, 독성, 효율성 등 여러 지표를 같은 시나리오에서 함께 측정',
      en: 'Abstract checked: measures accuracy plus calibration, robustness, fairness, bias, toxicity, and efficiency across the same scenarios',
    },
  },
  {
    href: 'https://arxiv.org/abs/2005.04118',
    source: same('Ribeiro et al. · ACL 2020'),
    title: {
      ko: 'Beyond Accuracy: Behavioral Testing of NLP Models with CheckList',
      en: 'Beyond Accuracy: Behavioral Testing of NLP Models with CheckList',
    },
    note: {
      ko: '초록을 확인함: held-out 정확도는 성능을 과대평가하는 경우가 많아 동작 단위의 테스트를 더함',
      en: 'Abstract checked: held-out accuracy often overestimates performance, so behavioral tests are added',
    },
  },
  {
    href: 'https://scikit-learn.org/stable/modules/cross_validation.html',
    source: same('scikit-learn'),
    title: {
      ko: 'Cross-validation: evaluating estimator performance',
      en: 'Cross-validation: evaluating estimator performance',
    },
    note: {
      ko: '같은 데이터로 학습하고 평가하는 것은 방법론적 실수이며, 조정용 validation set과 최종 평가용 test set을 나눈다',
      en: 'Learning and evaluating on the same data is a methodological mistake; separate a validation set for tuning and a test set for final evaluation',
    },
  },
  {
    href: 'https://arxiv.org/abs/1803.09010',
    source: same('Gebru et al. · CACM'),
    title: same('Datasheets for Datasets'),
    note: {
      ko: '초록을 확인함: 모든 데이터셋에 동기, 구성, 수집 과정, 권장 용도를 적은 문서를 붙일 것을 제안',
      en: 'Abstract checked: proposes that every dataset come with a document recording motivation, composition, collection process, and recommended uses',
    },
  },
];

export const SuccessCriteriaPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ProblemSection locale={locale} />
      <CriteriaSection locale={locale} />
      <LevelsSection locale={locale} />
      <MetricsSection locale={locale} />
      <FailureSection locale={locale} />
      <BudgetSection locale={locale} />
      <BaselineSection locale={locale} />
      <GoldenSection locale={locale} />
      <DatasetSection locale={locale} />
      <GoalsSection locale={locale} />
      <DecisionSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="failure-diagnosis" />
    </DocLayout>
  );
};
