import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        &quot;상담 위젯은 외부 것이니 범위에서 뺀다&quot;고 선언하면 목록 페이지가 적합해질까요?
        원문은 그렇지 않다고 말합니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 5.2.2 · 5.4',
    after: (
      <>
        페이지 일부를 빼면 그 페이지의 적합성은 성립하지 않습니다. 원문 5.4절은 나중에 콘텐츠가
        더해지는 페이지(댓글 · 광고 · 여러 출처를 모은 콘텐츠)에 두 가지 길을 둡니다. 하나는 그런
        콘텐츠를 감시해 영업일 이틀 안에 고치거나 지우는 경우 최선의 지식으로 적합성을 판단하는
        것이고, 다른 하나는 &quot;이 페이지는 적합하지 않지만, 통제하지 않는 출처의 다음 부분을 빼면
        적합할 것&quot;이라는 부분 적합성 선언입니다. 부분 적합성 선언은 적합성 주장이 아니고, 그
        부분이 작성자가 통제하는 콘텐츠가 아니며 사용자가 알아볼 수 있게 설명되어야 한다는 조건도
        있습니다. 작성자가 골라서 끼워 넣은 상담 위젯은 이 조건에 맞는지부터 따로 따져야 합니다.
      </>
    ),
    pitfallTitle: '범위 선언과 적합성 주장을 섞지 않습니다',
    pitfall: (
      <>
        평가 보고서에 범위 밖 항목을 적는 것은 정직한 기록입니다. 하지만 그것으로 &quot;적합&quot;을
        얻을 수는 없습니다. 위젯을 고치거나, 교체하거나, 대체 경로를 만든 뒤 다시 판단합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        If you declare &quot;the chat widget is third-party, so it is out of scope,&quot; does the
        list page conform? The original says no.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 5.2.2 · 5.4',
    after: (
      <>
        Excluding part of a page means the page does not conform. Section 5.4 of the original gives
        two options for pages that will later have content added (comments, ads, content aggregated
        from multiple sources). One is to make a determination based on best knowledge when such
        content is monitored and repaired or removed within two business days; the other is a
        statement of partial conformance: &quot;this page does not conform, but would conform … if
        the following parts from uncontrolled sources were removed.&quot; A statement of partial
        conformance is not a conformance claim, and it also requires that the content is not under
        the author&apos;s control and is described so users can identify it. A chat widget the
        author chose to embed has to be checked against these conditions first.
      </>
    ),
    pitfallTitle: 'Do not mix scope statements with conformance claims',
    pitfall: (
      <>
        Listing out-of-scope items in an evaluation report is honest recording. But it cannot earn
        &quot;conforms.&quot; Fix the widget, replace it, or provide another path, then judge again.
      </>
    ),
  },
};

export const ExclusionSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.exclusion.id}>
      <DocH2 {...toc.exclusion} />
      <p>{c.intro}</p>
      <NormativeQuote locale={locale} href={wcag22('cc2')} cite={c.cite}>
        <p>
          Conformance (and conformance level) is for full web page(s) only, and cannot be achieved
          if part of a web page is excluded.
        </p>
        <p className="mt-xs">
          &quot;This page does not conform, but would conform to WCAG 2.2 at level X if the
          following parts from uncontrolled sources were removed.&quot;
        </p>
      </NormativeQuote>
      <p>{c.after}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>
    </section>
  );
};
