import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        W3C의 “Making Content Usable for People with Cognitive and Learning Disabilities”(COGA)는
        2021년 4월 29일 Working Group Note입니다. WCAG 적합성에 필요한 요구가 아니라 권고이며, 문서
        스스로 그렇게 밝힙니다. 위 수정 후 안내는 이 권고를 따른 것이지 규범을 만족시킨 것이
        아닙니다.
      </>
    ),
    caption: '이 페이지에서 쓴 권고와 규범의 구분',
    head: ['내용', '근거', '지위'],
    rows: [
      ['할 일을 맨 앞에, 쉬운 말로', 'COGA 목표 3: Use Clear and Understandable Content', '권고'],
      [
        '기한 · 장소를 숫자와 이름으로 적어 기억 부담 줄이기',
        'COGA 목표 6: Ensure Processes Do Not Rely on Memory',
        '권고',
      ],
      ['구절의 언어 표시', 'WCAG 3.1.2', '규범 (AA)'],
      ['되풀이되는 도움 수단의 순서', 'WCAG 3.2.6', '규범 (A)'],
      ['중등 교육 수준 넘는 글의 보충 · 쉬운 판', 'WCAG 3.1.5', '규범 (AAA)'],
    ],
    calloutTitle: '독해 점수로 이해 여부를 판정하지 않습니다',
    callout: (
      <>
        글자 수나 가독성 점수는 문장을 고칠 단서일 뿐, 특정 독자가 이해했는지 알려 주지 않습니다.
        이해 여부는 실제 사용자가 과업을 해 본 기록이 있을 때만 확인으로 적습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        W3C’s “Making Content Usable for People with Cognitive and Learning Disabilities” (COGA) is
        a Working Group Note of April 29, 2021. It is advice, not a requirement for WCAG
        conformance, and says so itself. The rewritten notice above follows this advice; it does not
        satisfy a normative requirement by doing so.
      </>
    ),
    caption: 'Advice and normative requirements used on this page',
    head: ['Content', 'Basis', 'Status'],
    rows: [
      [
        'Put the action first, in plain words',
        'COGA Objective 3: Use Clear and Understandable Content',
        'Advice',
      ],
      [
        'Give deadline and place as numbers and names to reduce memory load',
        'COGA Objective 6: Ensure Processes Do Not Rely on Memory',
        'Advice',
      ],
      ['Language of passages', 'WCAG 3.1.2', 'Normative (AA)'],
      ['Order of repeated help mechanisms', 'WCAG 3.2.6', 'Normative (A)'],
      [
        'Supplements or simpler versions for text beyond lower secondary level',
        'WCAG 3.1.5',
        'Normative (AAA)',
      ],
    ],
    calloutTitle: 'Do not judge understanding by a readability score',
    callout: (
      <>
        Character counts or readability scores are only clues for rewriting; they do not tell
        whether a particular reader understood. Record understanding as confirmed only with evidence
        of real users doing the task.
      </>
    ),
  },
};

export const CogaSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.coga.id}>
      <DocH2 {...toc.coga} />
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="informative" />
      </p>
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
