import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '실패는 "없애는" 대상이 아니라 "어떻게 처리할지 정해 두는" 대상입니다. 어디까지 허용하고, 무엇을 만나면 보류하고, 언제 사람에게 넘기고, 언제 재시도할지를 기준에 씁니다.',
    labels: ['처리', '정하는 조건'],
    cases: [
      [
        '필수 입력이 비어 있어 대상을 특정할 수 없음',
        '보류하고 필요한 정보를 요청',
        '필수 입력이 비어 있음',
      ],
      [
        '구조 검증 실패, 필수 필드 누락',
        '정한 횟수만 재시도하고 다시 실패하면 보류',
        '재시도 횟수와 비용 예산에 맞춤',
      ],
      ['핵심 값이 근거와 다름', '사람 검토로 넘김', '필수 정확성 조건 위반'],
      [
        '금전, 개인정보, 권한이 걸려 오류 비용이 큰 변경',
        '사람의 명시적 승인 (01.4)',
        '오류 비용이 큼 (낮고 되돌릴 수 있으면 선택)',
      ],
    ],
    mandatoryTitle: '필수 조건은 평균 점수로 가리지 않는다',
    mandatory:
      '항목별 평균이 높아도 중요한 필드 하나가 틀린 사례가 섞여 있을 수 있고, 평균은 그 오류를 가립니다. 그래서 중요한 필드는 평균 점수와 별도로 "하나라도 틀리면 실패"인 필수 조건으로 둡니다. 이 페이지의 Task Success는 점수를 합산하지 않고 필수 조건의 결합으로 계산합니다. 허용 범위는 어조 같은 선택 항목에만 두며, 그 비율은 사용자가 정하는 값이지 업계 기준이 아닙니다.',
  },
  en: {
    intro:
      'A failure is not something to "remove" but something to "decide how to handle". Write into the criteria how far to allow, what to hold on, when to hand to a person, and when to retry.',
    labels: ['Handling', 'Condition that decides it'],
    cases: [
      [
        'A required input is empty, so the target cannot be identified',
        'Hold and ask for the needed information',
        'A required input is empty',
      ],
      [
        'Structure validation fails or a required field is missing',
        'Retry a set number of times, then hold if it fails again',
        'Matched to the retry count and cost budget',
      ],
      [
        'A key value differs from the evidence',
        'Hand to human review',
        'A mandatory correctness condition is violated',
      ],
      [
        'A change with high error cost, involving money, personal data, or permission',
        'Explicit human approval (01.4)',
        'The error cost is high (optional if low and reversible)',
      ],
    ],
    mandatoryTitle: 'Do not hide mandatory conditions in an average score',
    mandatory:
      'Even when the per-item average is high, a case with a wrong important field can be mixed in, and the average hides that error. So keep important fields as mandatory conditions where a single miss is a failure, separately from the average score. Task Success in this page is computed not by summing scores but by combining mandatory conditions. Tolerance applies only to optional items such as tone, and that ratio is a value the user decides, not an industry standard.',
  },
};

export const FailureSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.cases.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.failure.id}>
      <DocH2 {...toc.failure} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
      <Callout variant="note" title={c.mandatoryTitle}>
        <p>{c.mandatory}</p>
      </Callout>
    </section>
  );
};
