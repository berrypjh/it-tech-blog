import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { SeatsChart } from '@/components/content/shared/SeatsChart';
import { PageLink } from '@/components/shared/PageLink';

import { SvgReadout } from '../demos/SvgReadout';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="complex-images" />의 차트는 SVG입니다. 막대 여섯 개와 눈금
        글자가 들어 있지만, 바깥 svg에 <code>role=&quot;img&quot;</code>와 짧은 이름을 주어 그림
        하나로 읽히게 했습니다. 정확한 값은 그 페이지의 HTML 표가 맡습니다.
      </>
    ),
    label: '토요일 시간대별 남은 좌석 막대 차트. 값은 09.2의 표에 있습니다.',
    after: (
      <>
        이름에 모든 값을 넣거나 막대마다 이름을 주면, 표와 같은 정보를 두 번 듣게 됩니다. 값은 한
        곳(표)에 두고, 그림은 무엇인지만 알립니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        The chart on <PageLink locale={locale} id="complex-images" /> is an SVG. It holds six bars
        and tick labels, but the outer svg gets <code>role=&quot;img&quot;</code> and a short name
        so it reads as one image. The page’s HTML table carries the exact values.
      </>
    ),
    label: 'Bar chart of seats left by hour on Saturday. Values are in the table on 09.2.',
    after: (
      <>
        Putting every value in the name, or naming every bar, makes users hear the table’s
        information twice. Keep values in one place (the table), and let the image say only what it
        is.
      </>
    ),
  },
};

export const SvgSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.svg.id}>
      <DocH2 {...toc.svg} />
      <p>{c.intro(locale)}</p>
      <SvgReadout>
        <SeatsChart locale={locale} label={c.label} />
      </SvgReadout>
      <p>{c.after}</p>
    </section>
  );
};
