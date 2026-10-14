import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, ExternalLink } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const HELM = 'https://arxiv.org/abs/2211.09110';

const content = {
  ko: {
    intro:
      '"결과가 맞다"는 말은 서로 다른 질문을 뭉뚱그립니다. 01-02의 여섯 층 가운데 이 장에서는 네 가지를 따로 측정합니다.',
    labels: ['묻는 질문', '분모', '누락값 처리'],
    metrics: [
      [
        '구조 유효성',
        '출력이 약속한 형식이고 필수 필드가 있는가',
        '출력이 기대되는 사례',
        '필드가 없으면 실패',
      ],
      [
        'Correctness (정확성)',
        '핵심 값이 기준과 일치하는가',
        '출력이 기대되고 구조가 유효한 사례',
        '구조가 유효하지 않으면 평가하지 않고 분모에서 제외',
      ],
      [
        'Completeness (완전성)',
        '필요한 항목이 빠짐없이 있는가',
        '출력이 기대되고 구조가 유효한 사례',
        '항목이 하나라도 없으면 실패',
      ],
      [
        '사용자 Task Success',
        '기준에 정의한 필수 조건을 모두 만족해 일이 끝났는가',
        '적용한 전체 사례',
        '평가한 조건 중 하나라도 실패하면 실패',
      ],
    ],
    after: (
      <>
        네 지표는 서로 다른 값이 나옵니다. 구조를 통과해도 값이 틀릴 수 있고, 값이 맞아도 항목이
        빠질 수 있으며, 그 모두를 통과한 사례만 Task Success가 됩니다. 한 숫자로 &quot;좋다&quot;를
        말할 수 없는 이유입니다. <ExternalLink href={HELM}>HELM 논문</ExternalLink>도 정확도만이
        아니라 보정, 견고성, 공정성, 효율성 같은 여러 지표를 같은 시나리오에서 함께 측정합니다.
      </>
    ),
  },
  en: {
    intro:
      '"The result is right" lumps different questions together. Of the six layers in 01-02, this chapter measures four separately.',
    labels: ['Question it asks', 'Denominator', 'Missing-value handling'],
    metrics: [
      [
        'Structure validity',
        'Is the output in the promised format with the required fields',
        'Cases where an output is expected',
        'A missing field is a failure',
      ],
      [
        'Correctness',
        'Do the key values match the criteria',
        'Cases where an output is expected and the structure is valid',
        'If the structure is invalid, it is not evaluated and is left out of the denominator',
      ],
      [
        'Completeness',
        'Are all the needed items present',
        'Cases where an output is expected and the structure is valid',
        'A single missing item is a failure',
      ],
      [
        'User Task Success',
        'Were all mandatory conditions in the criteria met so the task is finished',
        'All cases applied',
        'If any evaluated condition fails, it is a failure',
      ],
    ],
    after: (
      <>
        The four metrics give different values. A result can pass the structure and still have a
        wrong value, a right value can still miss an item, and only a case that passes all of them
        counts as Task Success. That is why one number cannot say &quot;good&quot;. The{' '}
        <ExternalLink href={HELM}>HELM paper</ExternalLink> likewise measures not only accuracy but
        several metrics, such as calibration, robustness, fairness, and efficiency, on the same
        scenarios.
      </>
    ),
  },
};

export const LevelsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.metrics.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.levels.id}>
      <DocH2 {...toc.levels} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
      <p>{c.after}</p>
    </section>
  );
};
