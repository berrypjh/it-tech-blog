import type { Locale } from '@it-tech-blog/preferences';
import {
  DocLayout,
  type DocReference,
  ReferencesSection,
  same,
  SummarySection,
} from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { AxesSection } from './sections/AxesSection';
import { CompareSection } from './sections/CompareSection';
import { GenerativeSection } from './sections/GenerativeSection';
import { LanguageSection } from './sections/LanguageSection';
import { PageHeader } from './sections/PageHeader';
import { ProblemSection } from './sections/ProblemSection';
import { SignalSection } from './sections/SignalSection';
import { getToc } from './toc';

const points = {
  ko: [
    '용어는 서로 다른 질문에 답하는 축이고, 한 구현이 여러 축의 값을 동시에 가질 수 있습니다.',
    'AI는 넓은 분야이고 규칙 기반 추론도 포함합니다. ML은 데이터에서 학습하는 접근, DL은 다층 신경망 중심의 ML이며, 통상 AI ⊃ ML ⊃ DL입니다.',
    'Generative AI는 생성 목적, Foundation Model은 넓은 데이터로 대규모 학습하고 여러 작업에 적응시키는 기반 모델입니다. 서로 다른 관점이며, 모든 Foundation Model이 대화형 생성 모델인 것도 아닙니다.',
    'LM은 언어를 모델링하며 신경망 이전의 방법도 있습니다. LLM의 Large에는 고정된 보편 기준이 없고, 신경망이라고 해서 모두 LLM인 것도 아닙니다.',
    '멀티모달은 다루는 모달리티에 대한 말이라 LLM과 겹칠 수 있을 뿐 같지 않습니다. 용도와 모델 종류는 다른 축이어서, 용도가 바뀌어도 모델의 종류는 바뀌지 않습니다.',
    '학습 신호는 또 다른 축입니다. 지도 학습의 표적은 사람이 붙인 라벨(예: 담당 큐)이고, 자기지도 학습의 표적은 원문에서 만든 다음 토큰입니다. 두 방식 모두 표적이 있고 예측과 표적을 비교해 학습합니다.',
  ],
  en: [
    'Terms sit on axes that answer different questions, and one implementation can have values on several axes at once.',
    'AI is a broad field that includes rule-based reasoning. ML is the approach of learning from data and DL is ML centered on multi-layer neural networks; usually AI ⊃ ML ⊃ DL.',
    'Generative AI is about the purpose of generating, while a foundation model is a base model trained on broad data at scale and adapted to many tasks. They are different viewpoints, and not every foundation model is a conversational generative model.',
    'LM models language, and methods predating neural networks exist. There is no fixed universal bar for Large in LLM, and being a neural network does not make a model an LLM.',
    'Multimodal is about the modalities handled, so it can overlap with LLM without being the same. Use and model kind are different axes: changing the use does not change the kind of model.',
    'Learning signal is yet another axis. In supervised learning the target is a label people assigned (such as a queue); in self-supervised learning it is the next token made from raw text. Both have a target and learn by comparing prediction with target.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://developers.google.com/machine-learning/intro-to-ml/supervised',
    source: same('Google for Developers'),
    title: same('Supervised Learning'),
    note: {
      ko: '라벨은 모델이 예측하기를 바라는 값("정답")이고, 라벨이 붙은 예시로 모델을 학습시킨다',
      en: 'A label is the value we want the model to predict (the "answer"); models are trained on labeled examples',
    },
  },
  {
    href: 'https://huggingface.co/docs/transformers/tasks/language_modeling',
    source: same('Hugging Face Transformers'),
    title: same('Causal language modeling'),
    note: {
      ko: '인과 언어 모델은 왼쪽 토큰만 보고 다음 토큰을 예측하며, "다음 단어가 곧 라벨"이라 입력을 한 칸 밀어 표적으로 쓴다',
      en: 'A causal language model predicts the next token from tokens on the left; since "the next word is the label", inputs shifted by one serve as targets',
    },
  },
  {
    href: 'https://arxiv.org/abs/2108.07258',
    source: same('arXiv (2021)'),
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
    source: same('NIST (2023)'),
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
    source: same('Schmidhuber · arXiv (2014)'),
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
    source: same('Jurafsky & Martin'),
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
    source: same('Radford et al. · arXiv (2021)'),
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

export const AiConceptsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ProblemSection locale={locale} />
      <AxesSection locale={locale} />
      <GenerativeSection locale={locale} />
      <LanguageSection locale={locale} />
      <SignalSection locale={locale} />
      <CompareSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="software-differences" />
    </DocLayout>
  );
};
