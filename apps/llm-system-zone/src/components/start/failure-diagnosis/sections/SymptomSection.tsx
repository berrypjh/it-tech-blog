import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { Exercise } from '@/components/shared/Exercise';

import { TraceTimeline } from '../demos/TraceTimeline';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '01.5에서 "접수 ID가 화면에 표시된 시각"을 지연의 끝으로 정했습니다. 그 관측 기준 덕분에 "접수 확인이 없다"는 말을 증상으로 적을 수 있습니다. 그런데 같은 증상 뒤에 서로 다른 원인이 있을 수 있습니다.',
    caption: '같은 증상 "접수 확인 없음"에 대한 세 가설',
    head: ['가설', '맞다면 보일 증거', '어긋난다면 보일 증거'],
    rows: [
      ['검증이 쓰기를 거절했다', '검증 결과가 실패이고 도구 호출이 없다', '검증 결과가 통과'],
      [
        '도구 응답이 유실됐지만 기록은 있다',
        '도구 호출이 시간 초과이고, 티켓 시스템에는 같은 request_id의 기록이 있다',
        '티켓 시스템에 그 request_id의 기록이 없다',
      ],
      [
        'UI가 상태를 잘못 표기했다',
        '앱 상태는 "접수됨"인데 화면은 "없음"',
        '앱 상태와 화면 표시가 같다',
      ],
    ],
    traceHeading: '요청 ID로 계층을 따라가기',
    trace:
      '요청 ID 하나로 입력, 데이터, 모델, 검증, 도구, 앱 상태, UI의 기록을 묶어 봅니다. 아래 그림은 고정된 가상 trace입니다. 증거를 고르면 관찰한 것, 아직 확인하지 않은 것, 가설의 상태, 다음 검사가 나뉘어 보입니다.',
    resultHeading: '증거를 모두 보면',
    result:
      '검증이 통과했으므로 첫째 가설은 어긋납니다. 앱 상태가 "확인 안 됨"이고 화면도 같은 말을 했으므로 셋째 가설도 어긋납니다. 도구 호출은 시간 초과였지만, 이것만으로는 어느 가설도 가를 수 없습니다. request_id로 조회하자 INC-0077이 있었고, 그제야 둘째 가설만 증거와 맞습니다. 다만 "맞음"은 확정이 아닙니다. 응답이 왜 유실되었는지는 다음 검사의 몫입니다.',
    timeoutTitle: '시간 초과는 "실행되지 않았다"는 뜻이 아닙니다',
    timeout:
      '시간 초과는 앱이 응답을 받지 못했다는 관찰입니다. 티켓 시스템이 요청을 처리했는지는 알려 주지 않습니다. 그래서 시간 초과만 보고 티켓 생성을 다시 실행하면 같은 문의가 두 번 접수될 수 있습니다. 다시 실행하기 전에 같은 request_id로 기록이 있는지부터 조회합니다.',
    exerciseTitle: '새 증상에 가설 두 개와 가르는 검사',
    question: (
      <p>
        한 직원이 같은 문의로 접수 ID를 두 개(INC-0081, INC-0082) 받았다고 알려 왔습니다. 원인 가설
        두 개와, 둘을 가를 수 있는 검사 하나를 적어 보세요.
      </p>
    ),
    answerLabel: '풀이 보기',
    answer: [
      '가설의 예: (1) 앱이 시간 초과 뒤 자동으로 다시 시도해 같은 요청으로 티켓이 두 번 만들어졌다. (2) 직원이 제출 버튼을 두 번 눌러 서로 다른 요청 두 개가 생겼다.',
      '가르는 검사의 예: 두 티켓에 기록된 request_id를 비교합니다. 같으면 (1), 다르면 (2)와 맞습니다. 앱 로그에서 그 request_id의 ticket.create 호출 횟수를 세는 것도 같은 구별을 합니다.',
      '다른 가설(예: 티켓 시스템의 중복 생성)도 타당합니다. 가설마다 "맞다면 보일 증거"가 다르게 적혀 있으면 됩니다.',
    ],
  },
  en: {
    intro:
      'In 01.5 we set "the time the ticket ID appears on screen" as the end of latency. That observation standard is what lets us write down "there is no filing confirmation" as a symptom. But different causes can sit behind the same symptom.',
    caption: 'Three hypotheses for the same symptom, "no filing confirmation"',
    head: ['Hypothesis', 'Evidence if it holds', 'Evidence if it does not'],
    rows: [
      [
        'Validation refused the write',
        'The validation result is a failure and there is no tool call',
        'The validation result is a pass',
      ],
      [
        'The tool response was lost, but the record exists',
        'The tool call timed out, and the ticket system has a record with the same request_id',
        'The ticket system has no record with that request_id',
      ],
      [
        'The UI mislabeled the state',
        'The app state is "filed" but the screen says "none"',
        'The app state and the screen say the same thing',
      ],
    ],
    traceHeading: 'Following the layers by request ID',
    trace:
      'Tie together the records of input, data, model, validation, tool, app state, and UI with one request ID. The figure below is a fixed fictional trace. As you pick evidence, what was observed, what is not checked yet, the state of each hypothesis, and the next checks are shown apart.',
    resultHeading: 'With all the evidence',
    result:
      'Validation passed, so the first hypothesis is contradicted. The app state was "not confirmed" and the screen said the same, so the third is contradicted too. The tool call timed out, but that alone separates none of the hypotheses. A lookup by request_id found INC-0077, and only then is the second hypothesis the one consistent with the evidence. "Consistent" is not "confirmed", though; why the response was lost is for the next check.',
    timeoutTitle: 'A timeout does not mean "it did not run"',
    timeout:
      'A timeout is the observation that the app did not receive a response. It does not tell you whether the ticket system processed the request. So re-running ticket creation on a timeout alone can file the same request twice. Before running it again, first look up whether a record with the same request_id exists.',
    exerciseTitle: 'Two hypotheses and a check for a new symptom',
    question: (
      <p>
        An employee reports receiving two ticket IDs (INC-0081, INC-0082) for one request. Write two
        cause hypotheses and one check that can tell them apart.
      </p>
    ),
    answerLabel: 'Show solution',
    answer: [
      'Example hypotheses: (1) after a timeout the app retried automatically, creating the ticket twice for the same request. (2) The employee pressed submit twice, creating two different requests.',
      'Example check: compare the request_id recorded on the two tickets. The same ID fits (1); different IDs fit (2). Counting ticket.create calls for that request_id in the app log makes the same distinction.',
      'Other hypotheses (such as duplicate creation inside the ticket system) are valid too. What matters is that each hypothesis has its own "evidence if it holds".',
    ],
  },
};

/** 같은 증상 "접수 확인 없음"의 세 가설을 요청 ID trace로 가르는 섹션과 과제. */
export const SymptomSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.symptom.id}>
      <DocH2 {...toc.symptom} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />

      <DocH3>{c.traceHeading}</DocH3>
      <p>{c.trace}</p>
      <TraceTimeline />

      <DocH3>{c.resultHeading}</DocH3>
      <p>{c.result}</p>
      <Callout variant="pitfall" title={c.timeoutTitle}>
        <p>{c.timeout}</p>
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
