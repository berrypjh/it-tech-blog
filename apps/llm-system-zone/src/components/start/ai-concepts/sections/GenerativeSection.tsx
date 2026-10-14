import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, ExternalLink } from '@it-tech-blog/ui';

import { GenerativeFoundationMatrix } from '../diagrams/GenerativeFoundationMatrix';
import { getToc } from '../toc';

const STANFORD = 'https://arxiv.org/abs/2108.07258';

const content = {
  ko: {
    intro: (
      <>
        <strong>Generative AI</strong>는 새로운 콘텐츠(텍스트, 이미지 등)를 생성하는 능력이나 목적을
        가리킵니다. <strong>Foundation Model</strong>은 넓은 데이터로 대규모 학습을 하고 여러
        후속(downstream) 작업에 적응시킬 수 있는 기반 모델을 가리킵니다. 앞의 것은 &quot;무엇을
        하는가&quot;, 뒤의 것은 &quot;어떻게 만들고 다시 쓰는가&quot;를 묻는 서로 다른 관점입니다.
      </>
    ),
    note: (
      <>
        Foundation Model이라는 용어는 2021년{' '}
        <ExternalLink href={STANFORD}>Stanford 보고서</ExternalLink>가 제안했습니다. 보고서는 BERT와
        GPT-3 같은 모델을 예로 들며, 이 용어를 &quot;대화형 생성 모델&quot;과 동일시하지 않습니다.
        모든 Foundation Model이 대화형 생성 모델인 것은 아닙니다.
      </>
    ),
    noteTitle: 'Foundation Model은 대화형 생성 모델의 다른 이름이 아닙니다',
  },
  en: {
    intro: (
      <>
        <strong>Generative AI</strong> refers to the ability or purpose of generating new content
        (text, images, and so on). <strong>Foundation model</strong> refers to a base model trained
        at scale on broad data that can be adapted to many downstream tasks. The first asks
        &quot;what does it do&quot;, the second &quot;how is it built and reused&quot;: different
        viewpoints.
      </>
    ),
    note: (
      <>
        The term foundation model was proposed in a{' '}
        <ExternalLink href={STANFORD}>2021 Stanford report</ExternalLink>. The report gives models
        such as BERT and GPT-3 as examples and does not equate the term with &quot;conversational
        generative models&quot;. Not every foundation model is a conversational generative model.
      </>
    ),
    noteTitle: 'Foundation model is not another name for a conversational generative model',
  },
};

export const GenerativeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.generative.id}>
      <DocH2 {...toc.generative} />
      <p>{c.intro}</p>
      <GenerativeFoundationMatrix locale={locale} />
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
