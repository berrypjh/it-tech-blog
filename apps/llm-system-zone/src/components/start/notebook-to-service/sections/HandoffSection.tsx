import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '실험의 결과는 설정값 하나가 아니라 계약으로 옮깁니다. 계약은 서비스가 읽을 수 있는 언어 독립 명세(예: JSON)이고, Python, TypeScript, Go 어느 쪽 코드에서든 같은 분기를 확인할 수 있게 합니다.',
    label: '계약의 위치',
    map: [
      ['출력에는 어떤 필드가 필수이고 어떤 필드가 선택인가', 'output.required, output.optional'],
      [
        '카테고리의 허용 값과 판단 유보 값, 유보의 처리',
        'output.category.enum, abstainValue, unknownPolicy',
      ],
      ['score의 의미와 범위, 확률이 아니라는 점', 'output.score.min, max, meaning'],
      ['임계값을 어떤 값에 어떤 연산으로 적용하는가', 'selection.threshold, operator, appliesTo'],
      [
        '스키마 위반과 임계값 미만은 어떻게 처리하는가',
        'failurePolicy.schemaInvalid, belowThreshold',
      ],
      ['지연이 길 때와 재시도 횟수', 'failurePolicy.timeoutMs, onTimeout, retries'],
      [
        '모델과 프롬프트를 고정하고, 바뀌면 다시 평가한다는 규칙',
        'selection.candidate, promptVersion, versionPolicy',
      ],
      ['자동 처리 후보는 실행 권한이 아니라는 점', 'autoProcess.grantsExecutionPermission'],
      ['실패와 경계 사례와 기대 판정', 'cases (입력과 기대 판정)'],
    ],
    note: '계약의 값은 실험에서 확인한 근거와 함께 기록합니다. 서비스는 이 계약에서 코드를 만들고, 같은 확인 사례를 테스트로 옮겨 실험과 같은 분기가 나오는지 확인합니다.',
    noteTitle: '자동 처리 후보는 실행 권한이 아닙니다',
  },
  en: {
    intro:
      'The result of an experiment is carried over not as a single setting but as a contract. A contract is a language-independent specification (for example, JSON) that a service can read, and lets code in Python, TypeScript, or Go confirm the same branches.',
    label: 'Place in the contract',
    map: [
      [
        'Which output fields are required and which are optional',
        'output.required, output.optional',
      ],
      [
        'The allowed category values, the abstain value, and how an abstain is handled',
        'output.category.enum, abstainValue, unknownPolicy',
      ],
      [
        'The meaning and range of score, and that it is not a probability',
        'output.score.min, max, meaning',
      ],
      [
        'Which value the threshold applies to, and with which operation',
        'selection.threshold, operator, appliesTo',
      ],
      [
        'How a schema violation and a below-threshold case are handled',
        'failurePolicy.schemaInvalid, belowThreshold',
      ],
      [
        'What happens on a long delay, and the retry count',
        'failurePolicy.timeoutMs, onTimeout, retries',
      ],
      [
        'The rule to fix the model and prompt and to reevaluate when they change',
        'selection.candidate, promptVersion, versionPolicy',
      ],
      [
        'That an auto-processing candidate is not permission to execute',
        'autoProcess.grantsExecutionPermission',
      ],
      [
        'Failure and boundary cases with expected judgements',
        'cases (input and expected judgement)',
      ],
    ],
    note: 'Record the contract’s values together with the evidence confirmed in the experiment. The service builds code from this contract and carries the same confirmation cases into tests to check that the same branches come out as in the experiment.',
    noteTitle: 'An auto-processing candidate is not permission to execute',
  },
};

export const HandoffSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.map.map(([name, place]) => ({
    name,
    fields: [{ label: c.label, value: place }],
  }));

  return (
    <section aria-labelledby={toc.handoff.id}>
      <DocH2 {...toc.handoff} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
