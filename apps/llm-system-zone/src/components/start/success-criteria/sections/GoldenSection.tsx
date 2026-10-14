import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '사례 집합에는 정상 사례만 두지 않습니다. 정상, 경계, 실패, 정보 부족 사례를 모두 두고, 사례마다 Golden Example로 입력, 허용 출력, 판정 근거를 적습니다. 허용 출력은 문자열이 아니라 조건입니다.',
    labels: ['보는 것', '허용 출력(조건)의 예'],
    kinds: [
      ['정상', '일반적인 입력에서 기준을 만족하는가', '필수 항목이 모두 있고, 표현은 달라도 된다'],
      [
        '경계',
        '길이, 형식, 예산의 한계 근처에서도 만족하는가',
        '정상 사례와 같은 조건을 만족하고, 재시도를 포함해 지연과 비용이 예산 이내',
      ],
      [
        '실패 유도',
        '알려진 실패 범주를 일부러 건드려도 기준이 잡아내는가',
        '규칙이 정한 우선순위를 따르지 않은 출력은 실패',
      ],
      [
        '정보 부족',
        '필수 입력이 없을 때 단정하지 않고 보류하는가',
        '답변 대신 보류하고 필요한 정보를 요청한다. 단정하는 답변은 실패',
      ],
    ],
  },
  en: {
    intro:
      'A case set does not hold only normal cases. Keep normal, boundary, failure, and insufficient-information cases, and for each write a Golden Example with input, allowed output, and the basis for judging. An allowed output is conditions, not a string.',
    labels: ['What it checks', 'Example of an allowed output (conditions)'],
    kinds: [
      [
        'Normal',
        'Does it meet the criteria on ordinary input',
        'All required items are present, and the wording may differ',
      ],
      [
        'Boundary',
        'Does it still meet them near the limits of length, format, and budget',
        'Satisfies the same conditions as a normal case, with latency and cost within budget including retries',
      ],
      [
        'Failure-inducing',
        'Do the criteria catch it when a known failure category is deliberately touched',
        'An output that does not follow the rule’s priority is a failure',
      ],
      [
        'Insufficient information',
        'Does it hold instead of asserting when a required input is missing',
        'Hold and ask for the needed information instead of answering. An assertive answer is a failure',
      ],
    ],
  },
};

export const GoldenSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.kinds.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.golden.id}>
      <DocH2 {...toc.golden} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
    </section>
  );
};
