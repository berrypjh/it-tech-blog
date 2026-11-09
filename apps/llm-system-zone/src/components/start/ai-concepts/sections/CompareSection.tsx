import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '앞에서 본 용어를 축, 판단 질문, 흔한 오해로 한 표에 모읍니다.',
    caption: '분류 축 · 판단 질문 · 흔한 오해',
    head: ['용어', '분류 축', '판단 질문', '흔한 오해'],
    rows: [
      [
        'AI',
        '기술 범주 (가장 넓음)',
        '목표에 대해 예측 · 추천 · 결정을 출력하는 시스템인가',
        'AI는 모두 학습한다 / 모두 신경망이다',
      ],
      ['ML', '기술 범주', '데이터에서 모델을 학습하는가', 'ML은 곧 딥러닝이다'],
      ['DL', '기술 범주', '다층 신경망이 중심인가', 'DL이면 생성 모델이다'],
      [
        'Generative AI',
        '목적 · 능력',
        '새 콘텐츠를 생성하는 것이 목적인가',
        '이미지나 텍스트를 다루면 생성 모델이다',
      ],
      [
        'Foundation Model',
        '재사용',
        '넓은 데이터로 대규모 사전학습하고 여러 작업에 적응시키는가',
        '모든 Foundation Model이 대화형 생성 모델이다',
      ],
      ['LM', '데이터 (언어)', '언어의 확률을 모델링하는가', 'LM은 신경망을 뜻한다'],
      [
        'LLM',
        '데이터 (언어) + 규모',
        '대규모로 학습한 언어 모델인가',
        'Large의 파라미터 기준이 정해져 있다',
      ],
      [
        'Multimodal',
        '데이터 (모달리티)',
        '둘 이상의 모달리티를 다루는가',
        '멀티모달 모델은 모두 LLM이다',
      ],
      [
        '지도 학습',
        '학습 신호',
        '표적이 사람이 붙인 라벨인가',
        '분류 과업이면 언제나 지도 학습이다',
      ],
      [
        '자기지도 학습',
        '학습 신호',
        '표적을 데이터 자체에서 만들었는가',
        '라벨이 없으니 표적도 없다',
      ],
    ],
  },
  en: {
    intro:
      'This table gathers the terms covered so far by axis, judgement question, and common misconception.',
    caption: 'Axis, judgement question, common misconception',
    head: ['Term', 'Axis', 'Judgement question', 'Common misconception'],
    rows: [
      [
        'AI',
        'Technology category (broadest)',
        'Is it a system that outputs predictions, recommendations, or decisions for an objective',
        'All AI learns / is all neural networks',
      ],
      ['ML', 'Technology category', 'Does it learn a model from data', 'ML means deep learning'],
      [
        'DL',
        'Technology category',
        'Is a multi-layer neural network at the center',
        'DL means a generative model',
      ],
      [
        'Generative AI',
        'Purpose or capability',
        'Is generating new content the purpose',
        'Anything handling images or text is a generative model',
      ],
      [
        'Foundation model',
        'Reuse',
        'Is it pretrained at scale on broad data and adapted to many tasks',
        'Every foundation model is a conversational generative model',
      ],
      [
        'LM',
        'Data (language)',
        'Does it model the probability of language',
        'LM means a neural network',
      ],
      [
        'LLM',
        'Data (language) + scale',
        'Is it a language model trained at large scale',
        'The parameter bar for Large is fixed',
      ],
      [
        'Multimodal',
        'Data (modality)',
        'Does it handle two or more modalities',
        'Every multimodal model is an LLM',
      ],
      [
        'Supervised',
        'Learning signal',
        'Is the target a label people assigned',
        'A classification task always means supervised learning',
      ],
      [
        'Self-supervised',
        'Learning signal',
        'Was the target made from the data itself',
        'No labels means no target',
      ],
    ],
  },
};

export const CompareSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([term, ...rest]) => [
    <span key={term} className="whitespace-nowrap font-semiBold text-text-default">
      {term}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.compare.id}>
      <DocH2 {...toc.compare} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
    </section>
  );
};
