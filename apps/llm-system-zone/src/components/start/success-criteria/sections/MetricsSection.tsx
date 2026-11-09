import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { Exercise } from '@/components/shared/Exercise';
import { formatRatio } from '@/components/shared/ratio';

import { computeMetrics, type Metrics, sampleOutcomes } from '../metrics/metrics';
import { getToc } from '../toc';

const NIST = 'https://airc.nist.gov/airmf-resources/playbook/measure/';

type MetricKey = Exclude<keyof Metrics, 'total'>;

const content = {
  ko: {
    intro:
      '01.4의 Baseline과 LLM 후보를 비교하려면 먼저 무엇을 셀지 정합니다. 사용자 과업은 "직원이 문의를 제출하면 올바른 담당 큐에 접수 ID가 생긴 상태로 끝나는 것"입니다. 아래는 한 구성을 가상 평가 사례 20건에 돌린 결과입니다.',
    outcomesCaption: '가상 평가 사례 20건의 처리 결과',
    outcomesHead: ['결과', '뜻', '건수', '실패 비용'],
    outcomes: [
      ['정확한 자동 처리', '사람 없이 올바른 큐에 접수됨', sampleOutcomes.correctAuto, '없음'],
      [
        '자동 오처리',
        '사람 없이 틀린 큐에 접수됨',
        sampleOutcomes.wrongAuto,
        '다른 팀이 받아 재배정하고 처리가 늦어짐. 가장 비싸다',
      ],
      [
        '검토 대기',
        '계약 검사는 통과했지만 상담원 확인을 기다림',
        sampleOutcomes.review,
        '상담원 시간, 접수 확인 지연',
      ],
      [
        '보류',
        '계약 검사를 통과하지 못해 사람 분류 대기열로 감',
        sampleOutcomes.hold,
        '사람 분류 시간',
      ],
    ],
    metricsCaption: '지표의 분자 · 분모와 값',
    metricsHead: ['지표', '분자', '분모', '값', '읽는 법'],
    metrics: {
      autoRate: ['자동 처리율', '자동 처리 (정확 + 오처리)', '전체', '사람 손을 거치지 않은 비율'],
      autoPrecision: [
        '자동 처리 중 정확률',
        '정확한 자동 처리',
        '자동 처리',
        '자동으로 보낸 것 가운데 맞은 비율',
      ],
      wrongAutoRate: [
        '전체 중 자동 오처리율',
        '자동 오처리',
        '전체',
        '사람 확인 없이 틀린 곳으로 간 비율',
      ],
      undecided: ['결과 미확정', '검토 대기 + 보류', '전체', '아직 결과를 모르는 비율'],
    } satisfies Record<MetricKey, [string, string, string, string]>,
    notApplicable: '해당 없음',
    calc: '값은 표와 손계산으로 충분해 계산기를 두지 않았습니다. 분모가 0이면 비율을 정의할 수 없으므로 "해당 없음"으로 적습니다. 예를 들어 자동 처리가 0건이면 자동 처리 중 정확률은 해당 없음입니다.',
    pitfallTitle: '이 수치는 전체 과업 성공률이 아닙니다',
    pitfall:
      '검토 대기와 보류 6건은 아직 끝나지 않았습니다. 12/20을 성공률이라고 부르면 미확정 6건을 실패로 셈하고, 14/20을 성공률이라고 부르면 오처리 2건을 성공으로 섞습니다. 과업 성공은 검토 · 보류 건의 최종 결과가 나온 뒤에 따로 셉니다.',
    boundaryHeading: '지연 경계와 비용 단위',
    boundary: [
      '지연은 직원이 제출 버튼을 누른 시각에 시작해 접수 ID가 화면에 표시된 시각에 끝납니다. 모델 호출 시간만 재면 검증 · 기록 · 화면 표시가 빠집니다. 검토 대기 건은 상담원 확인까지를 포함할지 따로 적습니다.',
      '비용 단위는 접수 1건입니다. 모델 호출과 재시도, 상담원 검토 시간을 포함하는지 적어야 Baseline과 비교할 수 있습니다.',
    ],
    approveHeading: '승인 조건은 지표 하나가 아니라 묶음이다',
    approve: [
      '같은 20건에서 전체 중 자동 오처리율이 Baseline보다 높지 않다.',
      '자동 처리 중 정확률이 팀이 정한 하한 이상이다.',
      '제출부터 접수 ID 표시까지의 지연과 접수 1건당 비용이 예산 안이다.',
      '검토 대기 건을 상담원이 정한 시간 안에 처리할 수 있다.',
    ],
    fair: 'Baseline과 후보는 같은 사례, 같은 판정 기준, 같은 지연 경계, 같은 비용 단위, 같은 재시도 정책으로 비교합니다. 한쪽만 쉬운 사례로 재면 비교가 아닙니다.',
    nistTitle: '측정 설계를 기록합니다',
    nist: (
      <>
        <ExternalLink href={NIST}>NIST AI RMF Playbook의 MEASURE 기능</ExternalLink>은 지표를 고른
        기준과 고려했지만 쓰지 않은 지표를 기록하고(MEASURE 1.1), 배포와 비슷한 조건에서 측정하고
        (MEASURE 2.3), 사람이 출력을 감독하는 정도를 기록하라고 권합니다(MEASURE 2.8). 검토 대기를
        두었다면 상담원이 실제로 무엇을 확인하는지도 측정 대상입니다.
      </>
    ),
    exerciseTitle: '새 사례의 성공 지표와 비교 조건',
    question: (
      <p>
        비밀번호 재설정 문의가 오면 LLM이 안내 메일 초안을 쓰고, 계약 검사를 통과하면 자동으로
        보내는 기능을 생각해 보세요. Baseline은 &quot;정해진 템플릿 메일을 보내는 규칙&quot;입니다.
        사용자 과업, 지표 두 개(분자와 분모까지), 공정한 비교 조건을 적어 보세요.
      </p>
    ),
    answerLabel: '풀이 보기',
    answer: [
      '사용자 과업의 예: "요청한 직원이 메일의 안내대로 비밀번호를 재설정하는 것". 메일 발송은 과업의 끝이 아닙니다.',
      '지표의 예: 자동 발송 중 정확한 안내 비율(정확한 자동 발송 / 자동 발송), 전체 중 잘못된 자동 발송 비율(잘못된 자동 발송 / 전체 요청). 재설정 완료율(재설정 완료 / 전체 요청)을 더할 수도 있지만, 메일 밖 요인이 섞인다는 점을 함께 적습니다.',
      '비교 조건의 예: 같은 요청 사례, 같은 "정확한 안내" 판정 기준, 요청 접수부터 메일 발송까지의 같은 지연 경계, 요청 1건당 같은 비용 단위. 지표를 다르게 골라도 분자 · 분모와 비교 조건이 적혀 있으면 타당한 답입니다.',
    ],
  },
  en: {
    intro:
      'To compare the 01.4 baseline with an LLM candidate, first decide what to count. The user task is "an employee submits a request and it ends with a ticket ID in the right queue". Below is one setup run on 20 fictional evaluation cases.',
    outcomesCaption: 'Outcomes of 20 fictional evaluation cases',
    outcomesHead: ['Outcome', 'Meaning', 'Count', 'Failure cost'],
    outcomes: [
      [
        'Correct automatic',
        'Filed in the right queue with no person',
        sampleOutcomes.correctAuto,
        'None',
      ],
      [
        'Wrong automatic',
        'Filed in the wrong queue with no person',
        sampleOutcomes.wrongAuto,
        'Another team receives it, reassigns it, and handling is delayed. The most expensive',
      ],
      [
        'Awaiting review',
        'Passed the contract checks but waits for an agent to confirm',
        sampleOutcomes.review,
        'Agent time, delayed filing confirmation',
      ],
      [
        'Held',
        'Failed the contract checks and went to the triage queue',
        sampleOutcomes.hold,
        'Human triage time',
      ],
    ],
    metricsCaption: 'Numerator, denominator, and value of each metric',
    metricsHead: ['Metric', 'Numerator', 'Denominator', 'Value', 'How to read it'],
    metrics: {
      autoRate: [
        'Automatic handling rate',
        'Automatic (correct + wrong)',
        'All',
        'Share that no person touched',
      ],
      autoPrecision: [
        'Precision of automatic handling',
        'Correct automatic',
        'Automatic',
        'Share of what was sent automatically that was right',
      ],
      wrongAutoRate: [
        'Wrong automatic rate over all',
        'Wrong automatic',
        'All',
        'Share that went to the wrong place with no human check',
      ],
      undecided: [
        'Outcome undecided',
        'Awaiting review + held',
        'All',
        'Share whose outcome is not known yet',
      ],
    } satisfies Record<MetricKey, [string, string, string, string]>,
    notApplicable: 'Not applicable',
    calc: 'The table and hand calculation are enough, so there is no calculator. When a denominator is 0 the ratio is undefined and is written "Not applicable". For example, with 0 automatic cases, the precision of automatic handling is not applicable.',
    pitfallTitle: 'These numbers are not an overall task success rate',
    pitfall:
      'The 6 cases awaiting review or held are not finished yet. Calling 12/20 a success rate counts those 6 as failures, and calling 14/20 a success rate mixes the 2 wrong cases in as successes. Task success is counted separately, once the reviewed and held cases have a final outcome.',
    boundaryHeading: 'Latency boundary and cost unit',
    boundary: [
      'Latency starts when the employee presses submit and ends when the ticket ID appears on screen. Timing only the model call leaves out validation, recording, and display. For cases awaiting review, state separately whether agent confirmation is included.',
      'The cost unit is one filed request. State whether model calls, retries, and agent review time are included, or it cannot be compared with the baseline.',
    ],
    approveHeading: 'Approval is a bundle of conditions, not one metric',
    approve: [
      'On the same 20 cases, the wrong automatic rate over all is no higher than the baseline’s.',
      'The precision of automatic handling is at or above the floor the team set.',
      'Latency from submit to ticket ID display, and cost per filed request, are within budget.',
      'Agents can handle the cases awaiting review within the agreed time.',
    ],
    fair: 'Compare the baseline and the candidate on the same cases, the same judging criteria, the same latency boundary, the same cost unit, and the same retry policy. Measuring one side on easier cases is not a comparison.',
    nistTitle: 'Record the measurement design',
    nist: (
      <>
        The <ExternalLink href={NIST}>MEASURE function of the NIST AI RMF Playbook</ExternalLink>{' '}
        advises documenting metric selection criteria including metrics considered but unused
        (MEASURE 1.1), measuring under conditions similar to deployment (MEASURE 2.3), and
        documenting the degree of human oversight of outputs (MEASURE 2.8). If you have a review
        queue, what agents actually check is something to measure too.
      </>
    ),
    exerciseTitle: 'Success metrics and comparison conditions for a new case',
    question: (
      <p>
        Consider a feature where, for a password reset request, an LLM drafts a guidance email and
        sends it automatically if it passes the contract checks. The baseline is &quot;a rule that
        sends a fixed template email&quot;. Write the user task, two metrics (with numerator and
        denominator), and fair comparison conditions.
      </p>
    ),
    answerLabel: 'Show solution',
    answer: [
      'An example user task: "the requesting employee resets the password by following the email". Sending the email is not the end of the task.',
      'Example metrics: correct guidance among automatic sends (correct automatic sends / automatic sends), and wrong automatic sends over all (wrong automatic sends / all requests). You may add a reset completion rate (resets completed / all requests), noting that factors outside the email are mixed in.',
      'Example comparison conditions: the same request cases, the same criterion for "correct guidance", the same latency boundary from request to send, and the same cost unit per request. Different metric choices are valid as long as the numerator, denominator, and comparison conditions are written down.',
    ],
  },
};

/** 가상 사례 20건의 처리 결과와 지표의 분자 · 분모, 지연 경계 · 비용 단위 · 승인 조건과 과제. */
export const MetricsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const m = computeMetrics(sampleOutcomes);
  const keys = Object.keys(c.metrics) as MetricKey[];
  const bold = (text: string) => (
    <span key={text} className="whitespace-nowrap font-semiBold text-text-default">
      {text}
    </span>
  );

  return (
    <section aria-labelledby={toc.metrics.id}>
      <DocH2 {...toc.metrics} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.outcomesCaption}
        head={c.outcomesHead}
        rows={c.outcomes.map(([name, ...rest]) => [bold(String(name)), ...rest])}
      />
      <DocTable
        caption={c.metricsCaption}
        head={c.metricsHead}
        rows={keys.map((key) => {
          const [name, numerator, denominator, reading] = c.metrics[key];
          return [
            bold(name),
            numerator,
            denominator,
            <span key="value" className="whitespace-nowrap font-mono">
              {formatRatio(m[key], c.notApplicable)}
            </span>,
            reading,
          ];
        })}
      />
      <p>{c.calc}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>

      <DocH3>{c.boundaryHeading}</DocH3>
      {c.boundary.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <DocH3>{c.approveHeading}</DocH3>
      <List ordered marker className="flex flex-col gap-xs">
        {c.approve.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
      <p>{c.fair}</p>
      <Callout variant="note" title={c.nistTitle}>
        <p>{c.nist}</p>
      </Callout>

      <Exercise
        title={c.exerciseTitle}
        question={c.question}
        answerLabel={c.answerLabel}
        answer={c.answer.map((item) => (
          <p key={item}>{item}</p>
        ))}
      />
    </section>
  );
};
