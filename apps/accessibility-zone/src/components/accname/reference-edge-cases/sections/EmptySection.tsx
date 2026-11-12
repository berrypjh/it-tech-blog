import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        &quot;이름이 비어 있으면 다음 출처로 넘어간다&quot;고 한 줄로 외우면 틀립니다. 비어 있는
        방식이 네 가지이고, 그중 하나는 판본마다 결과가 다릅니다.
      </>
    ),
    caption: '네 가지 "비어 있음"',
    head: ['상태', '예', 'AccName 1.2 초안', 'AccName 1.1 확정'],
    rows: [
      ['속성 없음', '<button>예약 변경</button>', '그 단계를 적용하지 않고 다음 단계로', '같음'],
      [
        '빈 문자열 · 공백뿐',
        'aria-label="" · aria-label="   "',
        '그 단계를 적용하지 않고 다음 단계로',
        '같음',
      ],
      [
        '유효한 참조 없음',
        'aria-labelledby="" · aria-labelledby="no-such-id"',
        '유효한 ID가 하나도 없어 LabelledBy를 적용하지 않음',
        '같음',
      ],
      [
        '참조는 유효하지만 결과가 빈 경우',
        'aria-labelledby="blank" (#blank는 글자 없음)',
        '다음 단계로 (변경 기록의 의도). 단계 문장을 글자 그대로 읽는 해석은 실습 메모에',
        '빈 이름으로 끝남',
      ],
    ],
    after: (
      <>
        앞의 세 줄은 &quot;그 단계가 적용되지 않는다&quot;는 점에서 같지만, 이유가 다릅니다. 마지막
        줄은 단계가 적용된 뒤 결과가 빈 경우라 판본마다 결과가 달라서, 다음 단계로 넘어간다고
        단정하지 않습니다.
      </>
    ),
    calloutTitle: '하나의 결과를 강제하지 않습니다',
    callout: (
      <>
        판본이나 해석에 따라 결과가 갈리는 사례는 정답을 하나로 적지 않습니다. 대신 읽은 판본과
        단계, 관찰한 엔진 · 버전, 재현 조건(코드 · 브라우저 · 설정)을 함께 기록합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Memorizing &quot;if the name is empty, move to the next source&quot; in one line is wrong.
        There are four ways to be empty, and one of them gives different results by edition.
      </>
    ),
    caption: 'Four kinds of "empty"',
    head: ['State', 'Example', 'AccName 1.2 draft', 'AccName 1.1 Recommendation'],
    rows: [
      [
        'No attribute',
        '<button>Change booking</button>',
        'The step does not apply; go to the next',
        'Same',
      ],
      [
        'Empty string or whitespace only',
        'aria-label="" · aria-label="   "',
        'The step does not apply; go to the next',
        'Same',
      ],
      [
        'No valid reference',
        'aria-labelledby="" · aria-labelledby="no-such-id"',
        'No valid ID at all, so LabelledBy does not apply',
        'Same',
      ],
      [
        'Valid reference, empty result',
        'aria-labelledby="blank" (#blank has no text)',
        'Moves on (the intent in the change log). The literal reading of the step text is in the exercise note',
        'Stops with an empty name',
      ],
    ],
    after: (
      <>
        The first three rows are alike in that &quot;the step does not apply,&quot; but for
        different reasons. The last row is a step that did apply and produced an empty result, and
        the editions differ there, so do not take for granted that it moves on to the next step.
      </>
    ),
    calloutTitle: 'Do not force a single result',
    callout: (
      <>
        Where results split by edition or reading, do not write one answer. Instead, record the
        edition and step you read, the engine and version you observed, and the reproduction
        conditions (code, browser, settings).
      </>
    ),
  },
};

export const EmptySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.empty.id}>
      <DocH2 {...toc.empty} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map(([state, code, r12, r11]) => [
          state,
          <code key="c">{code}</code>,
          r12,
          r11,
        ])}
      />
      <p>{c.after}</p>
      <Callout variant="note" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
