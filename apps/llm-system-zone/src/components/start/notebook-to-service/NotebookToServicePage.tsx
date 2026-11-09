import type { Locale } from '@it-tech-blog/preferences';
import {
  DocLayout,
  type DocReference,
  ReferencesSection,
  same,
  SummarySection,
} from '@it-tech-blog/ui';

import { CompareSection } from './sections/CompareSection';
import { ExperimentSection } from './sections/ExperimentSection';
import { FlowSection } from './sections/FlowSection';
import { HandoffSection } from './sections/HandoffSection';
import { InspectionSection } from './sections/InspectionSection';
import { PageHeader } from './sections/PageHeader';
import { PurposeSection } from './sections/PurposeSection';
import { RecordSection } from './sections/RecordSection';
import { ThresholdSection } from './sections/ThresholdSection';
import { TransferSection } from './sections/TransferSection';
import { getToc } from './toc';

const points = {
  ko: [
    'Notebook은 데이터 확인, 가설 수정, 결과 비교와 설명을 하는 탐색 환경이고, 서비스는 명시적 입력, 오류 처리, timeout, 권한, 재시도, 테스트, 관측을 요구합니다. 언어는 역할과 별개입니다.',
    'Dataset Inspection으로 결측, 중복, 라벨, 분포를 확인하고, Prompt Experiment는 한 번에 한 요인만 바꾸며 모델 비교는 같은 데이터와 기준으로 합니다.',
    '실험 기록에는 데이터, 프롬프트, 모델과 설정, 코드, 환경, 실행 조건, 결과와 실패 사례를 남깁니다.',
    '임계값은 고정 점수에서 채택 집합과 채택 건의 조건부 오류율을 따로 셉니다. 임계값을 올려도 오류율이 줄어든다는 보장은 없고, 모델이 적은 confidence는 보정된 확률이 아닙니다.',
    '서비스는 계약과 함께 오류, 취소, 같은 요청 ID의 재시도, 업무 시스템이라는 기준 상태, 민감정보, 테스트, 관측을 맡습니다.',
    '계약에는 schemaVersion, 허용 출력과 필수·선택 필드, unknown 처리, 모델·프롬프트 버전 정책, score의 의미와 범위, 비교 연산, 실패와 timeout 정책, 확인 사례를 담습니다. 서비스 모니터링은 실패 사례를 다음 데이터와 실험으로 돌려보냅니다.',
  ],
  en: [
    'A notebook is an exploration environment for checking data, revising hypotheses, and comparing and explaining results, while a service requires explicit input, error handling, timeouts, permissions, retries, tests, and observability. Language is separate from role.',
    'Check missing values, duplicates, labels, and distribution with Dataset Inspection, change one factor at a time in a Prompt Experiment, and compare models with the same data and criteria.',
    'The experiment record keeps data, prompt, model and settings, code, environment, run conditions, and results and failure cases.',
    'For a threshold, count the adopted set and the conditional error rate among adopted cases separately on fixed scores. A higher threshold does not guarantee a lower error rate, and a confidence the model writes is not a calibrated probability.',
    'Alongside the contract, the service takes on errors, cancellation, retries with the same request ID, the business system as the authoritative state, sensitive data, tests, and observation.',
    'The contract holds schemaVersion, allowed output and required and optional fields, unknown handling, model and prompt version policy, score meaning and range, comparison operator, failure and timeout policy, and confirmation cases. Service monitoring returns failure cases to the next data and experiments.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://jupyter-notebook.readthedocs.io/en/stable/notebook.html',
    source: same('Jupyter'),
    title: {
      ko: 'The Notebook (Jupyter Notebook documentation)',
      en: 'The Notebook (Jupyter Notebook documentation)',
    },
    note: {
      ko: '확인함: notebook 문서의 구성(셀), 입력과 출력을 함께 담음, 하나의 커널과 연결, 커널 재시작. 셀 실행 순서는 이 문서가 다루지 않는다',
      en: 'Checked: the structure of a notebook document (cells), holding inputs and outputs, one kernel, restarting the kernel. This document does not cover cell execution order',
    },
  },
  {
    href: 'https://scikit-learn.org/stable/modules/calibration.html',
    source: same('scikit-learn'),
    title: same('Probability calibration'),
    note: {
      ko: '확인함: 보정된 분류기의 정의(0.8 근처의 값을 준 표본의 약 80%가 양성), 모든 분류기의 점수가 보정된 것은 아니다',
      en: 'Checked: the definition of a calibrated classifier (about 80% of samples given a value near 0.8 are positive), and not every classifier’s score is calibrated',
    },
  },
  {
    href: 'https://scikit-learn.org/stable/modules/classification_threshold.html',
    source: same('scikit-learn'),
    title: {
      ko: 'Tuning the decision threshold for class prediction',
      en: 'Tuning the decision threshold for class prediction',
    },
    note: {
      ko: '확인함: 기본 컷오프는 대부분의 용도에 이상적이지 않다, 분류기 학습 데이터와 같은 데이터로 임계값을 조정하지 않는다',
      en: 'Checked: default cut-offs are not ideal for most uses, and do not tune the threshold on the data the classifier was trained on',
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
      ko: '확인함: 한 제공자의 seed 재현성은 best effort이며 같은 조건에서도 달라질 수 있다 (해당 API 한정)',
      en: 'Checked: one provider’s seed reproducibility is best effort and can differ under the same conditions (that API only)',
    },
  },
  {
    href: 'https://semver.org/',
    source: same('semver.org'),
    title: same('Semantic Versioning 2.0.0'),
    note: {
      ko: '확인함: 호환되지 않는 변경은 major, 호환되는 기능 추가는 minor, 호환되는 버그 수정은 patch',
      en: 'Checked: incompatible changes raise major, compatible additions minor, and compatible bug fixes patch',
    },
  },
];

export const NotebookToServicePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PurposeSection locale={locale} />
      <InspectionSection locale={locale} />
      <ExperimentSection locale={locale} />
      <ThresholdSection locale={locale} />
      <RecordSection locale={locale} />
      <CompareSection locale={locale} />
      <HandoffSection locale={locale} />
      <FlowSection locale={locale} />
      <TransferSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
    </DocLayout>
  );
};
