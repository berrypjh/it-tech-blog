import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '용어는 서로 다른 질문에 답하는 축이고, 한 구현이 여러 축의 값을 동시에 가질 수 있습니다.',
    'AI는 넓은 분야이고 규칙 기반 추론도 포함합니다. ML은 데이터에서 학습하는 접근, DL은 다층 신경망 중심의 ML이며, 통상 AI ⊃ ML ⊃ DL입니다.',
    'Generative AI는 생성 목적, Foundation Model은 넓은 데이터로 대규모 학습하고 여러 작업에 적응시키는 기반 모델입니다. 서로 다른 관점이며, 모든 Foundation Model이 대화형 생성 모델인 것도 아닙니다.',
    'LM은 언어를 모델링하며 신경망 이전의 방법도 있습니다. LLM의 Large에는 고정된 보편 기준이 없고, 신경망이라고 해서 모두 LLM인 것도 아닙니다.',
    '멀티모달은 다루는 모달리티에 대한 말이라 LLM과 겹칠 수 있을 뿐 같지 않습니다. 용도와 모델 종류는 다른 축이어서, 용도가 바뀌어도 모델의 종류는 바뀌지 않습니다.',
  ],
  en: [
    'Terms sit on axes that answer different questions, and one implementation can have values on several axes at once.',
    'AI is a broad field that includes rule-based reasoning. ML is the approach of learning from data and DL is ML centered on multi-layer neural networks; usually AI ⊃ ML ⊃ DL.',
    'Generative AI is about the purpose of generating, while a foundation model is a base model trained on broad data at scale and adapted to many tasks. They are different viewpoints, and not every foundation model is a conversational generative model.',
    'LM models language, and methods predating neural networks exist. There is no fixed universal bar for Large in LLM, and being a neural network does not make a model an LLM.',
    'Multimodal is about the modalities handled, so it can overlap with LLM without being the same. Use and model kind are different axes: changing the use does not change the kind of model.',
  ],
};

export const SummarySection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.summary.id}>
      <DocH2 {...toc.summary} />
      <List ordered className="flex flex-col gap-sm">
        {points[locale].map((point, i) => (
          <ListItem key={point} className="flex gap-md">
            <span className="font-mono text-xsm text-text-light">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="break-keep">{point}</span>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
