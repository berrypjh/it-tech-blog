import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { Exercise } from '@/components/shared/Exercise';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '01장의 결정을 새 도메인에 옮겨 봅니다. 가상의 사내 "시설 고장 신고"입니다. 직원이 "3층 회의실 에어컨에서 물이 떨어져요"처럼 신고하면 전기, 냉난방, 배관, 보안 가운데 담당 부서에 배정합니다. 양식에는 위치 코드(건물 · 층 · 호실)와 고장 유형을 고르는 칸이 있지만 비워 둘 수 있고, 사진이 붙기도 합니다. 가스 냄새나 누전 같은 안전 신고는 즉시 보안실로 가야 합니다. 신고 내용은 모두 가상입니다.',
    caption: '작성할 여섯 가지와 참고할 페이지',
    head: ['작성할 것', '참고'],
    prompts: [
      ['사용자 과업과 성공 조건 (지표의 분자 · 분모 포함)', '01.5'],
      ['비LLM 대안 (Baseline)', '01.4'],
      ['LLM 도입 또는 보류의 근거', '01.4'],
      ['실패 가설 두 개와 가르는 검사', '01.6'],
      ['최소 시스템 흐름과 계약 검사', '01.1 · 01.3'],
      ['서비스로 옮길 때의 기록과 책임', '01.7'],
    ],
    exerciseTitle: '최종 과업: 시설 고장 신고의 담당 부서 배정',
    question: (
      <p>
        위 여섯 가지를 차례로 적어 보세요. 정답은 하나가 아닙니다. 각 결정이 앞 페이지의 어떤
        기준에서 나왔는지 함께 적으면 됩니다.
      </p>
    ),
    answerLabel: '풀이와 예시 답안 보기',
    answers: [
      [
        '사용자 과업 · 성공 조건',
        '과업은 "신고가 올바른 부서의 작업 지시로 접수되고 신고자가 접수 번호를 받는 것". 지표 예: 자동 배정 중 정확률(정확한 자동 배정 / 자동 배정), 전체 중 자동 오배정률(자동 오배정 / 전체 신고), 안전 신고의 즉시 전달률(정한 시간 안에 보안실에 전달된 안전 신고 / 안전 신고). 검토 대기 건은 미확정으로 따로 셉니다.',
      ],
      [
        '비LLM 대안',
        '위치 코드와 고장 유형이 있으면 부서 표(규칙)로 배정하고, "가스" "누전" 같은 안전 키워드는 규칙으로 보안실에 바로 보냅니다. 과거 신고에 시설팀이 붙인 부서 라벨이 안정적이면 분류기도 Baseline에 넣습니다.',
      ],
      [
        '도입 · 보류 근거',
        '코드를 비운 자유 문장 · 다국어 신고의 비중이 크고, Baseline이 같은 평가 사례에서 성공 조건을 넘지 못하면 그 범위에만 LLM 제안을 검토합니다. 안전 신고는 실패 비용이 커서 LLM에 맡기지 않습니다. 키워드 없이 "타는 냄새"처럼 안전이 의심되는 문장도 있으므로, 안전 여부가 불확실한 신고는 LLM 경로로 보내지 말고 시설 관리자가 바로 확인합니다. 평가 사례가 없으면 도입을 보류합니다.',
      ],
      [
        '실패 가설 · 검사',
        '증상 "배관 팀이 전기 고장 신고를 받았다"의 가설 예: (1) LLM 경로가 신고 원문을 잘못 해석해 배관을 제안했다. (2) 위치 코드 → 부서 표가 낡아 규칙이 틀린 부서를 골랐다. 같은 요청 ID의 trace에서 배정한 경로가 모델인지 규칙인지, 그리고 부서 표의 버전을 확인하면 둘을 가를 수 있습니다.',
      ],
      [
        '최소 흐름',
        '입력 확인 → 안전 키워드 규칙(해당하면 즉시 보안실) → 위치 · 유형 코드 규칙 → 코드가 없을 때만 LLM 제안 → 계약 검사(형식 · 근거 · 업무 규칙(부서 목록 · 접수 상태) · 권한) → 작업 지시 시스템에 기록 → 접수 번호 표시. 어느 단계든 통과하지 못하면 시설 관리자가 분류합니다.',
      ],
      [
        '서비스 이전 책임',
        '실험 기록(평가 데이터 · 프롬프트 · 모델과 설정 · 코드 · 환경의 버전), 계약(필드, 부서의 허용 값, 보류 값, 임계값을 적용할 값), 서비스 책임(같은 요청 ID의 중복 접수 방지, 작업 지시 시스템을 기준 상태로 삼기, 사진과 위치의 민감정보 마스킹, 계약 사례의 테스트, 요청 ID trace)을 넘깁니다.',
      ],
    ],
    otherHeading: '다른 답도 타당합니다',
    others: [
      '"양식에서 위치 코드와 고장 유형을 필수로 바꾸고 규칙만 쓴다"는 결론도 타당합니다. 그때는 재평가 조건(예: "기타" 비율 증가)을 함께 적습니다.',
      '배정은 분류기가 하고, LLM은 담당자가 읽을 신고 요약만 쓰게 나누는 설계도 가능합니다. 요약의 성공 조건은 배정과 따로 정합니다.',
      '어떤 답이든 근거가 앞 페이지의 기준과 이어지고, 지표에 분자 · 분모가 있고, 가설마다 가를 증거가 적혀 있으면 됩니다.',
    ],
  },
  en: {
    intro:
      'Carry the decisions of chapter 01 over to a new domain: a fictional internal "facility fault report". An employee reports something like "Water is dripping from the air conditioner in the 3rd-floor meeting room", and it is assigned to one department among electrical, HVAC, plumbing, and security. The form has fields to pick a location code (building · floor · room) and a fault type, but they can be left empty, and photos are sometimes attached. Safety reports such as a gas smell or an electrical short must go to the security office at once. All report content is fictional.',
    caption: 'Six things to write, and the page to consult',
    head: ['What to write', 'See'],
    prompts: [
      ['User task and success criteria (with metric numerators and denominators)', '01.5'],
      ['Non-LLM alternative (baseline)', '01.4'],
      ['Grounds for adopting an LLM or holding off', '01.4'],
      ['Two failure hypotheses and a check that separates them', '01.6'],
      ['Minimal system flow and contract checks', '01.1 · 01.3'],
      ['Records and duties when moving to a service', '01.7'],
    ],
    exerciseTitle: 'Final task: assigning facility fault reports to departments',
    question: (
      <p>
        Write the six items above in order. There is no single right answer. Note which criterion
        from the earlier pages each decision came from.
      </p>
    ),
    answerLabel: 'Show solution and an example answer',
    answers: [
      [
        'User task · success criteria',
        'The task is "the report is filed as a work order for the right department and the reporter gets a ticket number". Example metrics: precision of automatic assignment (correct automatic assignments / automatic assignments), wrong automatic rate over all (wrong automatic assignments / all reports), and immediate routing of safety reports (safety reports delivered to security within the set time / safety reports). Cases awaiting review are counted separately as undecided.',
      ],
      [
        'Non-LLM alternative',
        'If a location code and fault type are present, assign with a department table (rules), and send safety keywords such as "gas" or "electrical short" straight to security by rule. If the department labels the facilities team put on past reports are stable, put a classifier in the baseline too.',
      ],
      [
        'Grounds to adopt or hold off',
        'If free-text and multilingual reports with no codes make up a large share, and the baseline does not meet the success criteria on the same evaluation cases, consider an LLM suggestion for that range only. Safety reports carry a high failure cost and are not given to an LLM. Some sentences suggest a safety issue without a keyword, such as "a burning smell", so a report whose safety status is uncertain does not go down the LLM path; the facilities manager checks it at once. With no evaluation cases, hold off.',
      ],
      [
        'Failure hypotheses · check',
        'For the symptom "the plumbing team received an electrical fault report", example hypotheses: (1) the LLM path misread the report text and suggested plumbing. (2) the location code → department table is stale, so the rule picked the wrong department. Checking in the trace for the same request ID whether the model or the rule made the assignment, along with the table version, separates them.',
      ],
      [
        'Minimal flow',
        'Input check → safety keyword rule (straight to security if it applies) → location and type code rules → LLM suggestion only when there are no codes → contract checks (format · evidence · business rule (department list · intake state) · permission) → record in the work order system → show the ticket number. Anything that fails a step is triaged by the facilities manager.',
      ],
      [
        'Duties when moving to a service',
        'Hand over the experiment record (versions of evaluation data, prompt, model and settings, code, environment), the contract (fields, allowed department values, the hold value, the value a threshold applies to), and service duties (no duplicate filing for the same request ID, the work order system as the authoritative state, masking sensitive data in photos and locations, tests from the contract cases, request ID traces).',
      ],
    ],
    otherHeading: 'Other answers are valid too',
    others: [
      'Concluding "make location code and fault type mandatory on the form and use rules only" is valid. Then also write the re-evaluation conditions (for example, a rising share of "Other").',
      'A design where a classifier assigns and the LLM only writes a report summary for the assignee is possible too. The summary gets its own success criteria, separate from assignment.',
      'Any answer works as long as its grounds connect to the criteria of the earlier pages, its metrics have numerators and denominators, and each hypothesis has evidence that separates it.',
    ],
  },
};

/** 01장 전체를 새 도메인(시설 고장 신고 배정)에 옮기는 전이 과제와 복수 해법을 허용하는 해설. */
export const TransferSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.transfer.id}>
      <DocH2 {...toc.transfer} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.prompts} />
      <Exercise
        title={c.exerciseTitle}
        question={c.question}
        answerLabel={c.answerLabel}
        answer={
          <>
            <dl className="flex flex-col gap-sm">
              {c.answers.map(([term, detail]) => (
                <div key={term}>
                  <dt className="font-semiBold text-text-default">{term}</dt>
                  <dd className="mt-2xs">{detail}</dd>
                </div>
              ))}
            </dl>
            <DocH3>{c.otherHeading}</DocH3>
            <List marker className="flex flex-col gap-xs">
              {c.others.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </>
        }
      />
    </section>
  );
};
