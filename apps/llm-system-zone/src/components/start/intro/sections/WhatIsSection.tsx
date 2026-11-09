import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, ExternalLink } from '@it-tech-blog/ui';

import { NextTokenDemo } from '../demos/NextTokenDemo';
import { getToc } from '../toc';

const STANFORD = 'https://arxiv.org/abs/2108.07258';

const content = {
  ko: {
    lmHeading: 'LM: 언어의 통계적 관계를 모델링한다',
    lm: (
      <>
        언어 모델(Language Model, LM)은 언어의 통계적 관계를 모델링하는 모델입니다. 텍스트를
        토큰이라는 조각의 열로 보고, 어떤 토큰들이 어떤 맥락에서 함께 나타나는지를 학습한 계산 구성
        요소라고 이해하면 됩니다.
      </>
    ),
    nextTokenHeading: '대표 사례: 다음 토큰 예측',
    nextToken: (
      <>
        오늘날 챗봇처럼 텍스트를 생성하는 LLM은 대개 <strong>생성형 자기회귀</strong> 방식입니다.
        지금까지의 토큰을 조건으로 다음 토큰의 후보를 계산하고, 하나를 골라 이어 붙이는 일을 반복해
        응답을 만듭니다. IT 문의 예시에서 &quot;추천 담당 큐는&quot; 다음에는 &quot;네트워크&quot;,
        &quot;계정&quot;, &quot;장비&quot; 같은 후보가 각각 얼마나 그럴듯한지 계산됩니다. 모델이
        내놓는 것은 이렇게 이어 붙인 <strong>텍스트</strong>이고, 티켓 시스템의 기록이 아닙니다.
      </>
    ),
    notAll:
      '이것은 대표 사례이지 모든 언어 모델의 정의가 아닙니다. 가려진 토큰을 맞히도록 학습한 마스크 언어 모델처럼, 텍스트를 한 토큰씩 이어 쓰지 않는 모델도 있습니다. 후보의 점수를 Transformer 같은 구조 안에서 어떻게 계산하는지는 후속 장에서 다루고, 여기서는 텍스트를 생성하는 역할만 봅니다.',
    largeHeading: 'LLM: Large의 기준은 하나가 아니다',
    large: (
      <>
        LLM(Large Language Model)의 &quot;Large&quot;는 큰 데이터와 큰 계산 규모로 학습했다는 뜻으로
        쓰이는 상대적인 표현입니다.{' '}
        <strong>모두가 합의한 단일한 파라미터 수 기준은 없습니다.</strong> 이 트랙에서는 앱이
        텍스트를 넣고 텍스트를 받는 대규모 언어 모델을 LLM이라고 부릅니다.
      </>
    ),
    foundation: (
      <>
        더 넓은 용어로 파운데이션 모델(foundation model)이 있습니다.{' '}
        <ExternalLink href={STANFORD}>스탠퍼드 연구진의 보고서</ExternalLink>는 이를 넓은 데이터로
        대규모로 학습해 다양한 후속 작업에 적응시킬 수 있는 모델로 소개합니다. 언어 모델은 그 한
        갈래입니다.
      </>
    ),
    pitfallTitle: '그럴듯함과 정확함은 별개입니다',
    pitfall:
      '모델은 학습된 계산으로 그럴듯한 텍스트를 만듭니다. 출력이 유창하다는 사실이 그 내용이 사실이라는 보증이 아닙니다. 그래서 출력은 쓰기 전에 앱이 따로 확인해야 합니다.',
  },
  en: {
    lmHeading: 'LM: modeling statistical relations in language',
    lm: (
      <>
        A language model (LM) models the statistical relations in language. Treat text as a sequence
        of pieces called tokens; an LM is a trained computational component that captures which
        tokens tend to appear together in which contexts.
      </>
    ),
    nextTokenHeading: 'A representative case: next-token prediction',
    nextToken: (
      <>
        LLMs that generate text, like today&apos;s chatbots, are usually{' '}
        <strong>generative autoregressive</strong> models. Conditioned on the tokens so far, they
        compute candidates for the next token, pick one, append it, and repeat to build a response.
        In the IT request example, after &quot;Suggested queue:&quot; candidates such as
        &quot;Network&quot;, &quot;Accounts&quot;, or &quot;Hardware&quot; each get a score of how
        plausible they are. What the model puts out is this appended <strong>text</strong>, not a
        record in the ticket system.
      </>
    ),
    notAll:
      'This is a representative case, not the definition of every language model. Some models do not write text one token at a time, such as masked language models trained to predict hidden tokens. How the model computes those scores, for example inside a Transformer, is left to a later chapter; here we only need its role of generating text.',
    largeHeading: 'LLM: there is no single bar for Large',
    large: (
      <>
        The &quot;Large&quot; in LLM (Large Language Model) is a relative term for training at large
        data and compute scale.{' '}
        <strong>There is no single parameter count everyone agrees on.</strong> In this track, an
        LLM means a large language model an app feeds text and reads text from.
      </>
    ),
    foundation: (
      <>
        A broader term is the foundation model.{' '}
        <ExternalLink href={STANFORD}>A Stanford report</ExternalLink> introduces it as a model
        trained on broad data at scale that can be adapted to a wide range of downstream tasks.
        Language models are one branch of it.
      </>
    ),
    pitfallTitle: 'Plausible is not the same as correct',
    pitfall:
      'A model produces plausible text through trained computation. Fluent output is no guarantee that its content is true. That is why the app has to check the output separately before using it.',
  },
};

export const WhatIsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.whatIs.id}>
      <DocH2 {...toc.whatIs} />
      <DocH3>{c.lmHeading}</DocH3>
      <p>{c.lm}</p>

      <DocH3>{c.nextTokenHeading}</DocH3>
      <p>{c.nextToken}</p>
      <NextTokenDemo locale={locale} />
      <p>{c.notAll}</p>

      <DocH3>{c.largeHeading}</DocH3>
      <p>{c.large}</p>
      <p>{c.foundation}</p>

      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>
    </section>
  );
};
