import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { eventFacts, seatsByHour } from '@/components/content/shared/event';
import { SeatsChart } from '@/components/content/shared/SeatsChart';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        복잡한 그림은 두 부분으로 대신합니다. 그림이 무엇인지 알려 주는 짧은 이름, 그리고 그림이
        전하는 내용을 담은 긴 설명입니다. 차트라면 긴 설명은 요약 문장과 데이터 표로 나눌 수
        있습니다. 아래 차트 · 요약 · 표는 같은 교육 예시 값에서 나왔습니다.
      </>
    ),
    chartLabel: '토요일 시간대별 남은 좌석 막대 차트. 요약과 표가 아래에 있습니다.',
    caption: '그림 1. 토요일 시간대별 남은 좌석 (교육 예시)',
    summaryHeading: '요약',
    summary:
      '토요일 남은 좌석은 13시에 38석으로 가장 많습니다. 10시 22석에서 11시 15석으로 줄었다가 13시에 가장 많아지고, 그 뒤로 16시 9석까지 줄어듭니다.',
    head: ['시각', '남은 좌석 (석)'],
    hour: (h: number) => `${h}시`,
    after: (locale: Locale) => (
      <>
        이름은 짧게 두고, 같은 값을 이름에 또 넣지 않습니다. 요약과 표가 바로 아래 있으니 이름이 그
        위치를 알려 주면 충분합니다. 막대 색과 배경의 대비는{' '}
        <PageLink locale={locale} id="contrast-conditions" />, 색만으로 구분하지 않는 일은{' '}
        <PageLink locale={locale} id="sensory-information" />
        에서 판정한 방법 그대로 확인합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A complex image is replaced in two parts: a short name that says what it is, and a long
        description that carries what it shows. For a chart, the long description can be split into
        a summary and a data table. The chart, summary, and table below come from the same teaching
        values.
      </>
    ),
    chartLabel: 'Bar chart of seats left by hour on Saturday. A summary and a table follow.',
    caption: 'Figure 1. Seats left by hour on Saturday (teaching example)',
    summaryHeading: 'Summary',
    summary:
      'Saturday has the most seats left at 13:00, with 38 seats. It drops from 22 seats at 10:00 to 15 at 11:00, peaks at 13:00, and then falls to 9 seats at 16:00.',
    head: ['Time', 'Seats left (seats)'],
    hour: (h: number) => `${h}:00`,
    after: (locale: Locale) => (
      <>
        Keep the name short and do not repeat the values in it. The summary and table sit right
        below, so the name only needs to say where they are. Check the contrast of bars against the
        background as judged on <PageLink locale={locale} id="contrast-conditions" />, and that
        color is not the only cue as on <PageLink locale={locale} id="sensory-information" />.
      </>
    ),
  },
};

export const ChartSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.chart.id}>
      <DocH2 {...toc.chart} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <figure className="my-xl flex flex-col gap-sm rounded-md border border-stroke-light p-lg">
        <SeatsChart locale={locale} label={c.chartLabel} />
        <figcaption className="text-xxsm text-text-light">{c.caption}</figcaption>
      </figure>
      <p className="font-semiBold text-text-default">{c.summaryHeading}</p>
      <p id="seats-summary">{c.summary}</p>
      <DocTable
        caption={eventFacts[locale].seatsTitle}
        head={c.head}
        rows={seatsByHour.map((point) => [c.hour(point.hour), point.seats])}
      />
      <p>{c.after(locale)}</p>
    </section>
  );
};
