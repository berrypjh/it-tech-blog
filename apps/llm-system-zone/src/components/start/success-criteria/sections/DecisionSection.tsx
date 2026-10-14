import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { CriteriaLoopDiagram } from '../diagrams/CriteriaLoopDiagram';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '측정한 결과는 세 가지 결정 가운데 하나로 이어집니다. 같은 흐름이 목표에서 결정까지 이어지고, 기준을 만족하지 못하면 무엇을 고칠지로 되돌아갑니다.',
    labels: ['이럴 때', '다음 행동'],
    decisions: [
      [
        '구현 (범위를 한정해 진행)',
        '최종 확인용 사례에서 필수 조건을 모두 만족하고, 예산 이내이며, baseline보다 나아진 점이 제품 목표와 이어진다고 설명할 수 있다',
        '기준과 데이터 버전을 기록하고, 운영 관찰 항목을 정한 뒤 범위를 제한해 시작한다',
      ],
      [
        '수정',
        '일부 필수 조건을 만족하지 못하고, 실패 위치가 보인다 (01-05의 범주)',
        '해당 위치만 고치고 같은 실패 사례와 정상 사례를 다시 실행한다',
      ],
      [
        '보류',
        '기준이 모호하거나, 사례가 목표를 대표하지 못하거나, 필요한 데이터나 권한이 없다',
        '기준을 구체화하고 사례를 보강하는 일로 돌아간다. 구현을 늘리지 않는다',
      ],
    ],
  },
  en: {
    intro:
      'The measured result leads to one of three decisions. The same flow runs from goal to decision, and when the criteria are not met it returns to what to fix.',
    labels: ['When', 'Next action'],
    decisions: [
      [
        'Build (proceed with a limited scope)',
        'All mandatory conditions are met on the final-check cases, it is within budget, and you can explain that the improvement over the baseline links to the product goal',
        'Record the criteria and data versions, decide what to observe in operation, and start with a limited scope',
      ],
      [
        'Revise',
        'Some mandatory conditions are not met, and the failing place is visible (a category from 01-05)',
        'Fix only that place and rerun the same failing cases and a normal case',
      ],
      [
        'Hold',
        'The criteria are vague, the cases do not represent the goal, or the needed data or permission is missing',
        'Go back to making criteria concrete and strengthening cases. Do not expand the implementation',
      ],
    ],
  },
};

export const DecisionSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.decisions.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.decision.id}>
      <DocH2 {...toc.decision} />
      <p>{c.intro}</p>
      <CriteriaLoopDiagram locale={locale} />
      <FieldCards items={items} single />
    </section>
  );
};
