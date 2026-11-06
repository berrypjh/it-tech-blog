import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        평가를 시작하기 전에 목표 적합 수준을 먼저 정합니다. 그래야 어떤 성공 기준을 판정 대상으로
        삼을지 정해집니다.
      </>
    ),
    caption: '목표 적합 수준과 판정 대상 성공 기준',
    head: ['목표', '판정 대상', '그 밖의 수준'],
    rows: [
      ['A', 'A 기준 전부', 'AA · AAA 기준은 이 적합성 판정에 들어가지 않음'],
      ['AA', 'A 기준 전부와 AA 기준 전부', 'AAA 기준은 이 적합성 판정에 들어가지 않음'],
      ['AAA', 'A · AA · AAA 기준 전부', '—'],
    ],
    after: (
      <>
        판정 대상이 아닌 기준도 버리지 않습니다. 원문의 Note 1은 달성한 수준을 넘어 다른 수준의 성공
        기준을 향해 나아간 정도를 적합성 주장에 함께 적도록 권합니다. 그리고 적합성 판정과 별개로,
        그 기준이 실제 사용자의 과업에 영향을 주는지는 따로 봅니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Before evaluating, decide the target conformance level first. That decides which success
        criteria are judged.
      </>
    ),
    caption: 'Target conformance level and the success criteria judged',
    head: ['Target', 'Judged', 'Other levels'],
    rows: [
      ['A', 'All A criteria', 'AA and AAA criteria are not part of this conformance judgment'],
      ['AA', 'All A and all AA criteria', 'AAA criteria are not part of this conformance judgment'],
      ['AAA', 'All A, AA, and AAA criteria', '—'],
    ],
    after: (
      <>
        Criteria outside the judgment are not thrown away. Note 1 in the original encourages
        reporting, in the claim, progress toward success criteria from levels beyond the one
        achieved. And apart from the conformance judgment, whether a criterion affects real
        users&apos; tasks is looked at separately.
      </>
    ),
  },
};

export const TargetSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.target.id}>
      <DocH2 {...toc.target} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
