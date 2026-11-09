import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

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
    dutiesHeading: '계약 밖에서 서비스 코드가 맡는 책임',
    dutiesHead: ['책임', '서비스가 하는 일'],
    duties: [
      [
        '오류',
        '스키마 위반 · 시간 초과 · 거절을 구분해 기록하고, 사용자에게 다음 행동을 보여 준다 (01.1 · 01.6)',
      ],
      [
        '취소',
        '사용자가 요청을 취소하면 진행 중인 호출을 멈추고, 이미 남은 기록이 있는지 확인한다',
      ],
      [
        '재시도',
        '같은 request_id로 다시 시도해도 티켓이 두 번 생기지 않게 한다. 시간 초과 뒤에는 먼저 기록을 조회한다 (01.6)',
      ],
      [
        '권위 있는 업무 상태',
        '접수 여부의 기준은 모델 응답이 아니라 티켓 시스템의 기록이다 (01.1)',
      ],
      ['민감정보', '문의 원문의 개인정보를 모델 입력과 trace에서 필요한 만큼만 남기고 마스킹한다'],
      ['테스트', '계약의 사례와 01.3의 가상 사례를 단위 테스트로 옮긴다'],
      ['관측', '요청 ID로 입력부터 UI까지 묶은 trace와, 01.5의 지표를 운영 중에 계속 잰다'],
    ],
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
    dutiesHeading: 'Duties the service code takes on outside the contract',
    dutiesHead: ['Duty', 'What the service does'],
    duties: [
      [
        'Errors',
        'Record schema violations, timeouts, and refusals as different things, and show the user a next step (01.1 · 01.6)',
      ],
      [
        'Cancellation',
        'When the user cancels, stop calls in progress and check whether a record was already left',
      ],
      [
        'Retries',
        'Retrying with the same request_id must not create a second ticket. After a timeout, look up the record first (01.6)',
      ],
      [
        'Authoritative business state',
        'Whether a request is filed is decided by the ticket system’s record, not the model response (01.1)',
      ],
      [
        'Sensitive data',
        'Keep only as much personal data from the request text in model input and traces as needed, and mask it',
      ],
      ['Tests', 'Carry the contract cases and the fictional cases from 01.3 into unit tests'],
      [
        'Observation',
        'Keep measuring, in operation, the trace tied by request ID from input to UI and the metrics from 01.5',
      ],
    ],
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
      <DocH3>{c.dutiesHeading}</DocH3>
      <DocTable caption={c.dutiesHeading} head={c.dutiesHead} rows={c.duties} />
    </section>
  );
};
