import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        Understanding Techniques 문서는 &quot;기법은 보충 자료이며 필수가 아니다&quot;,
        &quot;적합성의 근거는 기법이 아니라 성공 기준&quot;이라고 적습니다. 그래서 기법과 판정의
        관계를 이렇게 읽습니다.
      </>
    ),
    caption: '기법 문서의 결과를 판정에 쓰는 법',
    head: ['기법 문서에서', '판정에서 뜻하는 것'],
    rows: [
      [
        '충분 기법을 썼다',
        '그 기법이 다루는 상황에서는 기준을 충족하는 방법입니다. 다른 방법으로도 충족할 수 있습니다',
      ],
      ['충분 기법의 시험을 통과했다', '기법에 대한 시험이지 성공 기준의 적합성 시험이 아닙니다'],
      [
        '충분 기법의 시험을 통과하지 못했다',
        '그것만으로 성공 기준 실패는 아닙니다. 다른 방법으로 충족했는지 봅니다',
      ],
      [
        '실패 사례(Failure)에 해당한다',
        '그 기준을 충족하지 못한 것입니다(실패 없는 적합 대체 버전이 있으면 예외)',
      ],
    ],
    example: (
      <>
        예를 들어 <PageLink locale="ko" id="reading-criteria" hash="case-identify-input-purpose" />
        의 1.3.5에서 H98(autocomplete 속성)은 충분 기법입니다. 판정 근거로는 1.3.5의 원문 문장을
        적고, H98은 &quot;이 방법으로 결과를 냈다&quot;는 구현 설명으로 적습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The Understanding Techniques document says &quot;techniques are informative — that means
        they are not required&quot; and that the basis for conformance is &quot;the success criteria
        … not the techniques.&quot; So read the relation between techniques and judgments this way.
      </>
    ),
    caption: 'Using technique results in a judgment',
    head: ['In the Techniques', 'What it means for the judgment'],
    rows: [
      [
        'A sufficient technique was used',
        'It is a way to meet the criterion in the situations it covers. Other ways can meet it too',
      ],
      [
        'A sufficient technique’s test passed',
        'It is a test for the technique, not a conformance test for the success criterion',
      ],
      [
        'A sufficient technique’s test failed',
        'That alone is not a failure of the criterion. Check whether it was met another way',
      ],
      [
        'A Failure applies',
        'The criterion is not met (unless a conforming alternate version without the failure exists)',
      ],
    ],
    example: (
      <>
        For example, in 1.3.5 on{' '}
        <PageLink locale="en" id="reading-criteria" hash="case-identify-input-purpose" />, H98 (the
        autocomplete attribute) is a sufficient technique. As the basis of the judgment, cite the
        sentence of 1.3.5; record H98 as the implementation note &quot;the outcome was produced this
        way.&quot;
      </>
    ),
  },
};

export const TechniquesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.techniques.id}>
      <DocH2 {...toc.techniques} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.example}</p>
    </section>
  );
};
