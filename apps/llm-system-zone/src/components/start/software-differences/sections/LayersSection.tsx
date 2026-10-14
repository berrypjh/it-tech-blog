import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { LayersLadder } from '../diagrams/LayersLadder';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: '"응답이 맞다"는 말은 여섯 가지 다른 질문을 뭉뚱그립니다. 아래에서 각각 분리합니다.',
    after:
      '1~4층은 코드로 단언할 수 있습니다. 5층부터는 정답을 정의한 데이터와 기준이 필요합니다. 그리고 앞 층을 통과해도 뒤 층이 보장되지는 않습니다.',
  },
  en: {
    intro:
      '"The response is correct" lumps six different questions together. Below, we separate each.',
    after:
      'Layers 1 to 4 can be asserted in code. From layer 5 on you need data and criteria that define the right answer. And passing an earlier layer does not guarantee a later one.',
  },
};

export const LayersSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.layers.id}>
      <DocH2 {...toc.layers} />
      <p>{c.intro}</p>
      <LayersLadder locale={locale} />
      <p>{c.after}</p>
    </section>
  );
};
