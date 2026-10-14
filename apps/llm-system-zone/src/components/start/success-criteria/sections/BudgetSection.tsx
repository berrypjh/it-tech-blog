import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '"빨라야 한다", "싸야 한다"는 기준이 아닙니다. 예산에는 측정의 정의가 함께 있어야 두 사람이 같은 숫자를 얻습니다.',
    caption: '지연과 비용 예산에 필요한 정의',
    head: ['정의 항목', '지연 예산', '비용 예산'],
    rows: [
      [
        '측정 시작과 끝',
        '요청 접수 시각부터 응답이 사용자에게 전달된 시각까지',
        '요청 접수부터 응답 전달까지 쓴 자원',
      ],
      ['단위', '밀리초 또는 초', '토큰 수, 호출 횟수, 또는 통화 단위 (단가는 사용자가 정함)'],
      ['재시도', '재시도에 쓴 시간을 포함할지 정한다', '재시도 호출을 포함할지 정한다'],
      ['분모', '예산 이하인 요청 수 / 적용한 전체 요청 수', '같은 방식'],
      [
        '집계 방식',
        '평균은 느린 요청을 가린다. 백분위수 등을 쓰려면 어느 것인지 적는다',
        '요청당 값, 일 합계 등 무엇인지 적는다',
      ],
    ],
    noteTitle: '단위가 다르면 같은 숫자가 아닙니다',
    note: '같은 숫자도 단위가 초인지 밀리초인지에 따라 다르고, 호출 횟수와 토큰 수는 다른 양입니다. 정의 없이 쓴 예산은 비교할 수 없습니다.',
  },
  en: {
    intro:
      '"It must be fast" and "it must be cheap" are not criteria. A budget needs its measurement definition so two people get the same number.',
    caption: 'Definitions a latency and cost budget needs',
    head: ['Definition item', 'Latency budget', 'Cost budget'],
    rows: [
      [
        'Start and end of measurement',
        'From the time the request is received to the time the response is delivered to the user',
        'Resources used from receiving the request to delivering the response',
      ],
      [
        'Unit',
        'Milliseconds or seconds',
        'Token count, call count, or a currency unit (the unit price is set by the user)',
      ],
      [
        'Retries',
        'Decide whether time spent on retries is included',
        'Decide whether retry calls are included',
      ],
      ['Denominator', 'Requests within budget / all requests applied', 'The same way'],
      [
        'Aggregation',
        'An average hides slow requests. If you use a percentile, state which one',
        'State what it is: per request, daily total, and so on',
      ],
    ],
    noteTitle: 'A different unit is not the same number',
    note: 'The same number differs depending on whether the unit is seconds or milliseconds, and call count and token count are different quantities. A budget written without definitions cannot be compared.',
  },
};

export const BudgetSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([item, ...rest]) => [
    <span key={item} className="font-semiBold text-text-default">
      {item}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.budget.id}>
      <DocH2 {...toc.budget} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
