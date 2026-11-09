import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const OTEL = 'https://opentelemetry.io/docs/concepts/signals/traces/';

const content = {
  ko: {
    intro: (
      <>
        증거는 대개 요청 한 건이 지나간 단계별 기록(trace)에서 나옵니다.{' '}
        <ExternalLink href={OTEL}>관측 도구의 trace 개념</ExternalLink>은 요청의 경로를 단위
        작업(span)들의 모음으로 나타내고, 각 span에 시작과 끝 시각, 속성, 상태를 붙입니다. 이
        페이지는 로그 수집이나 관측 플랫폼을 만들지 않고, 읽는 법만 다룹니다.
      </>
    ),
    caption: '필드별로 무엇을 읽는가',
    head: ['필드', '무엇을 보나', '알 수 있는 것', '알 수 없는 것'],
    fields: [
      [
        'request_id',
        '관련 기록을 하나로 묶는 키',
        '이 요청의 모든 단계를 같은 ID로 따라갈 수 있다',
        '다른 요청에서도 같은 일이 있었는지',
      ],
      [
        '입력 상태',
        '길이, 형식, 마스킹 처리 여부',
        '입력이 정상 형식으로 들어왔는지',
        '내용이 질문 의도와 같은지',
      ],
      [
        '검색 문서 ID · 버전',
        '무엇을 근거로 가져왔는가',
        '어떤 문서가 어떤 버전으로 검색되었는지',
        '원본의 현행 버전이 무엇인지, 현행 문서가 후보에 있었는지',
      ],
      [
        'context 요약',
        '모델에 실제로 들어간 것',
        '어떤 근거가 모델에 전달되었는지',
        '그 본문이 사실인지',
      ],
      ['응답', '모델이 낸 출력의 요약', '모델이 무엇을 냈는지', '그 값이 맞는지'],
      [
        '검증 결과',
        '무엇이 확인되었고 무엇이 확인되지 않았나',
        '어떤 검사가 통과했고 어떤 검사가 실행되지 않았는지',
        '실행되지 않은 검사가 실행되었다면 잡았을지',
      ],
      [
        '도구 결과',
        '호출한 도구와 결과 코드',
        '호출이 성공했는지, 어떤 코드를 받았는지',
        '도구가 다른 부분에 영향을 주었는지',
      ],
      [
        '단계별 소요 시간',
        '시간이 어디에 쓰였는가',
        '어느 단계가 가장 오래 걸렸는지',
        '평소 범위가 얼마인지(기준 값이 있어야 비교할 수 있다)',
      ],
    ],
    noteTitle: 'trace는 증거이지 결론이 아닙니다',
    note: 'trace가 보여 주는 사실은 가설을 좁힐 뿐입니다. 원인을 확정하려면 request_id로 업무 시스템의 기록을 조회하거나 원본 문서의 현행 버전을 확인하는 것 같은 다음 증거가 필요합니다. 개인정보와 비밀값은 trace에 그대로 남기지 않고 마스킹합니다.',
  },
  en: {
    intro: (
      <>
        Evidence usually comes from a per-step record (a trace) of one request. The{' '}
        <ExternalLink href={OTEL}>trace concept in observability tools</ExternalLink> shows a
        request’s path as a set of units of work (spans), each with start and end times, attributes,
        and a status. This page does not build log collection or an observability platform; it only
        covers reading.
      </>
    ),
    caption: 'What each field is read for',
    head: ['Field', 'What to look at', 'What it can show', 'What it cannot show'],
    fields: [
      [
        'request_id',
        'The key that ties related records together',
        'Every step of this request can be followed by the same ID',
        'Whether the same thing happened in other requests',
      ],
      [
        'Input state',
        'Length, format, whether masking was applied',
        'Whether the input arrived in a normal shape',
        'Whether its content matches the intent of the question',
      ],
      [
        'Retrieved document ID and version',
        'What was fetched as evidence',
        'Which documents were retrieved at which versions',
        'The current source version, and whether the current document was among the candidates',
      ],
      [
        'Context summary',
        'What actually went into the model',
        'Which evidence was passed to the model',
        'Whether that body text is true',
      ],
      [
        'Response',
        'A summary of the model output',
        'What the model produced',
        'Whether that value is right',
      ],
      [
        'Validation result',
        'What was checked and what was not',
        'Which checks passed and which did not run',
        'Whether a check that did not run would have caught it',
      ],
      [
        'Tool result',
        'The tool called and its result code',
        'Whether the call succeeded and which code came back',
        'Whether the tool affected another part',
      ],
      [
        'Per-step duration',
        'Where the time went',
        'Which step took the longest',
        'What the usual range is (you need a reference value to compare)',
      ],
    ],
    noteTitle: 'A trace is evidence, not a conclusion',
    note: 'The facts a trace shows only narrow the hypotheses. To confirm the cause you need the next evidence, such as looking up the business system’s record by request_id or checking the current version of a source document. Personal data and secrets are masked rather than kept as they are in a trace.',
  },
};

export const TraceSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.fields.map(([name, ...values]) => [
    <span key={name} className="font-semiBold text-text-default">
      {name}
    </span>,
    ...values,
  ]);

  return (
    <section aria-labelledby={toc.trace.id}>
      <DocH2 {...toc.trace} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
