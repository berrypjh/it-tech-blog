import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';
import { CONTENT_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { AverageFraction, averageMathml } from '../demos/AverageFraction';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        회차당 평균 참가자 m은 토요일 참가자 a와 일요일 참가자 b를 더한 뒤 회차 수 n으로 나눈
        값입니다. 화면에서는 가로줄 위아래로 보이지만, 그 관계는 <code>mfrac</code>의 첫째
        자식(분자)과 둘째 자식(분모)이라는 마크업 구조에 있습니다.
      </>
    ),
    label: '분수 하나를 MathML로 쓰기',
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.3.1 Info and Relationships (A)',
    sentenceHeading: '문장 대안',
    sentence:
      'm은 분자가 a 더하기 b이고 분모가 n인 분수입니다. 곧 a와 b를 먼저 더한 뒤 그 합을 n으로 나눕니다.',
    linear: (
      <>
        일렬 글자 <code>m = a + b / n</code>은 보통의 연산 순서로 읽으면 a에 b/n을 더한 값이 되어
        뜻이 바뀝니다. 일렬로 쓴다면 <code>m = (a + b) / n</code>처럼 괄호로 묶습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The average attendance per session, m, adds Saturday’s attendees a and Sunday’s attendees b,
        then divides by the number of sessions n. On screen it shows above and below a line, but the
        relationship lives in the markup: the first child of <code>mfrac</code> is the numerator and
        the second is the denominator.
      </>
    ),
    label: 'Writing one fraction in MathML',
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.3.1 Info and Relationships (A)',
    sentenceHeading: 'Sentence alternative',
    sentence:
      'm is a fraction whose numerator is a plus b and whose denominator is n. In other words, add a and b first, then divide the sum by n.',
    linear: (
      <>
        The linear text <code>m = a + b / n</code>, read with the usual order of operations, means a
        plus b/n, which changes the meaning. If you write it on one line, group it with parentheses
        as <code>m = (a + b) / n</code>.
      </>
    ),
  },
};

export const StructureSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.structure.id}>
      <DocH2 {...toc.structure} />
      <p>{c.intro}</p>
      <div className="my-xl rounded-md border border-stroke-light p-lg text-lg">
        <AverageFraction />
      </div>
      <CodeBlock label={c.label} code={averageMathml} />
      <NormativeQuote
        locale={locale}
        href={wcag22('info-and-relationships')}
        cite={c.cite}
        checkedOn={CONTENT_CHECKED_ON}
      >
        Information, structure, and relationships conveyed through presentation can be
        programmatically determined or are available in text.
      </NormativeQuote>
      <p className="font-semiBold text-text-default">{c.sentenceHeading}</p>
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="example" />
      </p>
      <p id="fraction-sentence">{c.sentence}</p>
      <p>{c.linear}</p>
    </section>
  );
};
