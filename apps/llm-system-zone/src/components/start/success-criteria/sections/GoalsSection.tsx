import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '품질 지표가 좋아지는 것과 제품 목표가 나아지는 것은 같은 사실이 아닙니다. 지표가 제품 목표와 어떻게 이어지는지를 가설로 적고, 제품 쪽 지표를 따로 정해 확인합니다.',
    labels: ['이어지리라고 보는 제품 목표', '그 연결을 확인하는 방법'],
    links: [
      [
        '필수 항목 충족률',
        '사용자가 결과를 고치는 시간이 줄어든다',
        '결과를 열어 사용하기까지의 시간, 수정한 비율을 따로 관측',
      ],
      [
        'Task Success 비율',
        '결과를 그대로 또는 가볍게 고쳐 쓰는 건수가 늘어 처리 성공이 늘어난다',
        '결과 채택 여부와 처리 완료 건수',
      ],
      ['보류 처리 정확도', '잘못된 안내로 인한 재요청이 줄어든다', '같은 건의 재요청 비율'],
      ['지연 예산 충족률', '사용자가 기다리다 떠나는 일이 줄어든다', '응답 대기 중 이탈 비율'],
      [
        '비용 예산 충족률',
        '건당 비용이 처리 건수와 맞아 지속할 수 있다',
        '요청당 비용과 처리 건수를 같은 기간에 비교',
      ],
    ],
  },
  en: {
    intro:
      'A quality metric improving and a product goal improving are not the same fact. Write how a metric links to a product goal as a hypothesis, and set product-side metrics separately to confirm.',
    labels: ['Product goal it is expected to link to', 'How to confirm the link'],
    links: [
      [
        'Mandatory-item pass rate',
        'The time users spend fixing results goes down',
        'Observe separately the time until a result is used and the ratio edited',
      ],
      [
        'Task Success rate',
        'More results are used as is or lightly edited, so successful handling grows',
        'Whether results are adopted and the number of completed items',
      ],
      [
        'Hold-handling accuracy',
        'Repeat requests caused by wrong guidance go down',
        'The repeat-request rate for the same item',
      ],
      [
        'Latency budget pass rate',
        'Fewer users leave while waiting',
        'The abandonment rate while waiting for a response',
      ],
      [
        'Cost budget pass rate',
        'Cost per item matches the volume handled and is sustainable',
        'Compare cost per request and volume handled over the same period',
      ],
    ],
  },
};

export const GoalsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.links.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.goals.id}>
      <DocH2 {...toc.goals} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
    </section>
  );
};
