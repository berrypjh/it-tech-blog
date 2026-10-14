import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const references: DocReference[] = [
  {
    href: 'https://arxiv.org/abs/2108.07258',
    source: { ko: 'arXiv (2021)', en: 'arXiv (2021)' },
    title: {
      ko: 'On the Opportunities and Risks of Foundation Models',
      en: 'On the Opportunities and Risks of Foundation Models',
    },
    note: {
      ko: 'Foundation Model의 정의: 넓은 데이터로 대규모 학습해 다양한 후속 작업에 적응시킬 수 있는 모델',
      en: 'Defines foundation models: models trained on broad data at scale that can be adapted to a wide range of downstream tasks',
    },
  },
  {
    href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
    source: { ko: 'NIST (2023)', en: 'NIST (2023)' },
    title: {
      ko: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
      en: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
    },
    note: {
      ko: 'AI system의 정의: 목표에 대해 예측 · 추천 · 결정을 출력하는 공학적 · 기계 기반 시스템',
      en: 'Definition of an AI system: an engineered or machine-based system generating predictions, recommendations, or decisions for an objective',
    },
  },
  {
    href: 'https://arxiv.org/abs/1404.7828',
    source: { ko: 'Schmidhuber · arXiv (2014)', en: 'Schmidhuber · arXiv (2014)' },
    title: {
      ko: 'Deep Learning in Neural Networks: An Overview',
      en: 'Deep Learning in Neural Networks: An Overview',
    },
    note: {
      ko: '딥러닝을 신경망의 깊이(credit assignment path)로 구분하는 서술',
      en: 'Distinguishes shallow from deep learners by the depth of credit assignment paths',
    },
  },
  {
    href: 'https://web.stanford.edu/~jurafsky/slp3/3.pdf',
    source: { ko: 'Jurafsky & Martin', en: 'Jurafsky & Martin' },
    title: {
      ko: 'Speech and Language Processing, Ch. 3: N-gram Language Models',
      en: 'Speech and Language Processing, Ch. 3: N-gram Language Models',
    },
    note: {
      ko: '언어 모델은 다음 단어의 확률을 예측하는 모델이며 n-gram이 그 예, 대규모 언어 모델은 신경망 기반',
      en: 'A language model predicts upcoming words by probability, with n-grams as an example; large language models are neural network based',
    },
  },
  {
    href: 'https://arxiv.org/abs/2103.00020',
    source: { ko: 'Radford et al. · arXiv (2021)', en: 'Radford et al. · arXiv (2021)' },
    title: {
      ko: 'Learning Transferable Visual Models From Natural Language Supervision (CLIP)',
      en: 'Learning Transferable Visual Models From Natural Language Supervision (CLIP)',
    },
    note: {
      ko: '이미지와 텍스트 쌍으로 학습해 자연어로 시각 개념을 가리키는 방법. 검색 용도는 초록이 직접 서술하지 않는다',
      en: 'Learning from image-text pairs so natural language can reference visual concepts. The abstract does not itself describe retrieval',
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
