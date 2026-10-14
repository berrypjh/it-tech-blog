import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    lmHeading: 'LM: 언어를 모델링한다',
    lm: '언어 모델(LM)은 언어에서 다음 단어 같은 요소의 확률을 모델링하는 모델입니다. 신경망 이전에도 n-gram 언어 모델이 있었습니다. 즉 LM은 신경망을 뜻하지 않으며, 대상과 목적(언어 모델링)을 가리키는 말입니다.',
    llmHeading: 'LLM: 대규모 언어 모델',
    llm: 'LLM은 대규모로 학습한 언어 모델입니다. Large에는 고정된 보편 기준이 없습니다. 오늘날의 LLM은 n-gram이 아니라 신경망에 기반하지만, 신경망이라고 해서 모두 LLM인 것은 아닙니다.',
    mmHeading: 'Multimodal: 다루는 모달리티',
    mm: '멀티모달은 모델이 텍스트와 이미지처럼 둘 이상의 모달리티를 다룬다는 뜻입니다. 이미지와 텍스트를 같은 공간의 벡터로 바꿔 유사도를 검색하는 모델은 멀티모달이지만 언어를 생성하는 LLM은 아닙니다. 이미지를 입력으로 받는 LLM 기반 모델도 있어, 둘은 겹칠 수 있을 뿐 같지 않습니다.',
    useHeading: '용도와 모델 종류는 다른 축이다',
    use: 'LLM에게 텍스트의 카테고리를 출력하게 해서 분류에 쓸 수 있습니다. 이때 활용의 목적은 분류이지만 모델은 여전히 언어 모델입니다. 용도가 바뀌어도 모델의 종류는 바뀌지 않습니다.',
    noteTitle: '"언어 모델"은 텍스트를 쓰는 모델 전반이 아닙니다',
    note: 'TF-IDF + 로지스틱 회귀 분류기는 텍스트를 입력받지만 언어를 모델링하는 모델이 아닙니다.',
  },
  en: {
    lmHeading: 'LM: modeling language',
    lm: 'A language model (LM) models the probability of elements such as the next word in language. n-gram language models existed before neural networks. So LM does not mean neural network; it names the target and purpose (language modeling).',
    llmHeading: 'LLM: a large language model',
    llm: 'An LLM is a language model trained at large scale. There is no fixed universal bar for Large. Today’s LLMs are based on neural networks rather than n-grams, yet "neural network" does not imply "LLM".',
    mmHeading: 'Multimodal: the modalities handled',
    mm: 'Multimodal means a model handles two or more modalities, such as text and images. A model that maps images and text into a shared vector space for similarity search is multimodal but is not an LLM that generates language. There are also LLM-based models that take images as input, so the two can overlap but are not the same.',
    useHeading: 'Use and model kind are different axes',
    use: 'You can have an LLM output a category for a piece of text and use it for classification. The purpose of that use is classification, while the model is still a language model. Changing the use does not change the kind of model.',
    noteTitle: '"Language model" does not cover every model that takes text',
    note: 'A TF-IDF + logistic regression classifier takes text but is not a model that models language.',
  },
};

export const LanguageSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.language.id}>
      <DocH2 {...toc.language} />
      <DocH3>{c.lmHeading}</DocH3>
      <p>{c.lm}</p>
      <DocH3>{c.llmHeading}</DocH3>
      <p>{c.llm}</p>
      <DocH3>{c.mmHeading}</DocH3>
      <p>{c.mm}</p>
      <DocH3>{c.useHeading}</DocH3>
      <p>{c.use}</p>
      <Callout variant="pitfall" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
