import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const references: DocReference[] = [
  {
    href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
    source: { ko: 'NIST (2023)', en: 'NIST (2023)' },
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
    source: { ko: 'Anthropic', en: 'Anthropic' },
    title: { ko: 'Define your success criteria', en: 'Define your success criteria' },
    note: {
      ko: '성공 기준을 구체적 · 측정 가능 · 달성 가능 · 목적에 맞게, 여러 차원을 함께. 한 벤더의 문서이며 예시 수치는 해당 문서의 예다',
      en: 'Success criteria that are specific, measurable, achievable, relevant, and multidimensional. One vendor’s document; its example figures are that document’s examples',
    },
  },
  {
    href: 'https://arxiv.org/abs/2211.09110',
    source: { ko: 'Liang et al. · arXiv (2022)', en: 'Liang et al. · arXiv (2022)' },
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
    source: { ko: 'Ribeiro et al. · ACL 2020', en: 'Ribeiro et al. · ACL 2020' },
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
    source: { ko: 'scikit-learn', en: 'scikit-learn' },
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
    source: { ko: 'Gebru et al. · CACM', en: 'Gebru et al. · CACM' },
    title: { ko: 'Datasheets for Datasets', en: 'Datasheets for Datasets' },
    note: {
      ko: '초록을 확인함: 모든 데이터셋에 동기, 구성, 수집 과정, 권장 용도를 적은 문서를 붙일 것을 제안',
      en: 'Abstract checked: proposes that every dataset come with a document recording motivation, composition, collection process, and recommended uses',
    },
  },
];

export const ReferencesSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.references.id}>
      <DocH2 {...toc.references} />
      <ReferenceList references={references} locale={locale} />
    </section>
  );
};
