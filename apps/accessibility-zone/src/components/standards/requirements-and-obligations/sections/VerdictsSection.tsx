import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { type VerdictId, VerdictLabel } from '@/components/shared/VerdictLabel';

import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 판정: 통과 · 실패 · 해당 없음 · 미확인. */
const rowVerdicts: VerdictId[] = ['pass', 'fail', 'na', 'unconfirmed'];

const content = {
  ko: {
    intro: <>판정은 네 가지로 나눕니다. 각 판정에는 함께 남겨야 하는 근거가 정해져 있습니다.</>,
    caption: '판정과 함께 남길 근거',
    head: ['판정', '뜻', '반드시 남길 것'],
    rows: [
      [
        '통과',
        '적용 대상이고, 조건을 충족함(예외로 충족한 경우 포함)',
        '관찰 증거와 환경, 예외로 충족했다면 그 예외의 이름',
      ],
      [
        '실패',
        '적용 대상이고, 조건을 충족하지 못했으며 해당하는 예외도 없음',
        '관찰 증거와 환경, 검토한 예외',
      ],
      ['해당 없음', '그 기준의 적용 대상이 아님', '적용 대상 문장이나 조건 — 왜 대상이 아닌지'],
      ['미확인', '판정에 필요한 증거를 아직 얻지 못함', '확인할 환경 · 도구 · 자료'],
    ],
    after: (
      <>
        &quot;해당 없음&quot;은 &quot;문제 없음&quot;이 아니고, &quot;미확인&quot;은
        &quot;통과&quot;로 세지 않습니다. 네 판정을 섞어 &quot;몇 % 통과&quot; 같은 하나의 숫자로
        만들지 않습니다.
      </>
    ),
  },
  en: {
    intro: <>Verdicts come in four kinds. Each has a basis that must be left with it.</>,
    caption: 'Verdicts and the basis to leave with each',
    head: ['Verdict', 'Meaning', 'Must record'],
    rows: [
      [
        'Pass',
        'In scope and the conditions are met (including through an exception)',
        'Observed evidence and environment; the name of the exception if met through one',
      ],
      [
        'Fail',
        'In scope, the conditions are not met, and no exception applies',
        'Observed evidence and environment; the exceptions reviewed',
      ],
      [
        'Not applicable',
        'Not in the criterion’s scope',
        'The scope sentence or condition — why it is out of scope',
      ],
      [
        'Unconfirmed',
        'The evidence needed for a verdict has not been obtained yet',
        'The environment, tool, or material to check with',
      ],
    ],
    after: (
      <>
        &quot;Not applicable&quot; is not &quot;no problem,&quot; and &quot;unconfirmed&quot; does
        not count as &quot;pass.&quot; Do not mix the four into one number like &quot;X%
        passed.&quot;
      </>
    ),
  },
};

export const VerdictsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.verdicts.id}>
      <DocH2 {...toc.verdicts} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <VerdictLabel key="verdict" id={rowVerdicts[i]}>
            {row[0]}
          </VerdictLabel>,
          ...row.slice(1),
        ])}
      />
      <p>{c.after}</p>
    </section>
  );
};
