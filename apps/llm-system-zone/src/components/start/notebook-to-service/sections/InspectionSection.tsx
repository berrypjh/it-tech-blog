import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '실험을 시작하기 전에 데이터를 봅니다. 데이터에 문제가 있으면 모델이나 프롬프트를 바꾸는 실험의 결과를 해석할 수 없습니다.',
    labels: ['묻는 질문', '서비스로 이전할 것'],
    checks: [
      ['결측', '비어 있거나 없는 값이 있는가', '결측 시 처리(보류)를 계약의 실패 정책에 쓴다'],
      [
        '중복',
        '같은 사례가 둘 이상 들어 있는가. 같은 사례를 평가와 조정 양쪽에 쓰면 오염이 생긴다',
        '데이터 버전과 분할 기록',
      ],
      [
        '라벨',
        '정답 라벨이 일관되고 허용 값 안에 있는가',
        '출력 enum과 판단 유보(abstain) 값의 정의',
      ],
      [
        '분포',
        '카테고리별 개수가 한쪽으로 치우쳤는가',
        '분포가 바뀌면 다시 평가한다는 모니터링 항목',
      ],
    ],
    after:
      '점검 결과는 데이터 버전과 함께 기록해 두어야 나중에 같은 데이터인지 확인할 수 있습니다.',
  },
  en: {
    intro:
      'Look at the data before starting the experiment. If the data has problems, you cannot interpret the result of an experiment that changes the model or the prompt.',
    labels: ['Question it asks', 'What to carry to the service'],
    checks: [
      [
        'Missing values',
        'Are there empty or absent values',
        'Write the handling of a missing value (hold) into the contract’s failure policy',
      ],
      [
        'Duplicates',
        'Does the same case appear more than once. Using the same case for both evaluation and tuning contaminates results',
        'The data version and split record',
      ],
      [
        'Labels',
        'Are the answer labels consistent and within the allowed values',
        'The definition of the output enum and the abstain value',
      ],
      [
        'Distribution',
        'Is the count per category skewed to one side',
        'A monitoring item to reevaluate when the distribution changes',
      ],
    ],
    after:
      'Record the inspection result together with the data version so you can later check that it is the same data.',
  },
};

export const InspectionSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.checks.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.inspection.id}>
      <DocH2 {...toc.inspection} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
      <p>{c.after}</p>
    </section>
  );
};
