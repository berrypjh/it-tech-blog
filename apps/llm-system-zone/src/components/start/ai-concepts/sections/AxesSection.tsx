import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, ExternalLink } from '@it-tech-blog/ui';

import { ConceptRelationDiagram } from '../diagrams/ConceptRelationDiagram';
import { getToc } from '../toc';

const NIST = 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf';
const DEEP_LEARNING = 'https://arxiv.org/abs/1404.7828';

const content = {
  ko: {
    intro: (
      <>
        용어를 한 장의 중첩 원으로 그리면 모든 용어가 하나의 계층에 놓인 것처럼 보입니다. 실제로는
        <strong> 서로 다른 질문에 답하는 축</strong>이 섞여 있습니다.
      </>
    ),
    overlap:
      '한 구현은 여러 축의 값을 동시에 가질 수 있습니다. 예를 들어 사전학습한 언어 모델은 계열로는 DL, 재사용으로는 Foundation Model, 데이터로는 LM입니다.',
    ai: (
      <>
        미국 NIST가 <ExternalLink href={NIST}>AI 시스템을 정의한 문서</ExternalLink>는 이를 주어진
        목표에 대해 예측, 추천, 결정 같은 결과를 만드는 기계 기반 시스템으로 설명하며, 여기에는
        &quot;학습&quot;이 들어 있지 않습니다. 그래서 사람이 쓴 규칙으로 결론을 내는 규칙 기반
        시스템도 AI에 속합니다.
      </>
    ),
    mlDl: (
      <>
        기계학습은 규칙을 사람이 쓰는 대신 데이터로 모델을 만드는 접근입니다. 글을 단어 빈도 숫자로
        바꿔 분류하는 단순한 모델(TF-IDF + 로지스틱 회귀)도 기계학습이지만 신경망이 아니므로
        딥러닝은 아닙니다. 딥러닝의 &quot;깊이&quot;를 입력에서 결과까지 거치는 변환 단계의 수로
        보는 서술이 <ExternalLink href={DEEP_LEARNING}>딥러닝 개요 논문</ExternalLink>에 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Drawing the terms as one set of nested circles makes every term look like it sits in a
        single hierarchy. In fact they mix <strong>axes that answer different questions</strong>.
      </>
    ),
    overlap:
      'One implementation can have values on several axes at once. For example, a pretrained language model is DL by lineage, a foundation model by reuse, and an LM by data.',
    ai: (
      <>
        NIST&apos;s <ExternalLink href={NIST}>definition of an AI system</ExternalLink> describes it
        as a machine-based system that produces results such as predictions, recommendations, or
        decisions for a given objective, and learning is not part of it. So a rule-based system that
        reaches conclusions with rules people wrote is AI too.
      </>
    ),
    mlDl: (
      <>
        Machine learning builds a model from data instead of having people write the rules. A simple
        model that turns text into word-frequency numbers and classifies it (TF-IDF + logistic
        regression) is machine learning, but it is not a neural network, so it is not deep learning.
        One account measures the &quot;depth&quot; of deep learning by the number of transformation
        stages between input and output, in{' '}
        <ExternalLink href={DEEP_LEARNING}>an overview paper on deep learning</ExternalLink>.
      </>
    ),
  },
};

export const AxesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.axes.id}>
      <DocH2 {...toc.axes} />
      <p>{c.intro}</p>
      <ConceptRelationDiagram locale={locale} />
      <p>{c.overlap}</p>
      <p>{c.ai}</p>
      <p>{c.mlDl}</p>
    </section>
  );
};
