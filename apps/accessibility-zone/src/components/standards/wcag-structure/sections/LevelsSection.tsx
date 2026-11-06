import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        성공 기준마다 붙은 A · AA · AAA는 <strong>어느 적합 수준에 들어가는가</strong>를 정합니다.
        적합 수준은 &quot;그 수준까지의 성공 기준을 모두 충족한다&quot;는 묶음입니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 5.2.1 Conformance Level',
    pitfallTitle: '수준을 심각도나 점수로 읽지 않습니다',
    pitfall: (
      <>
        AA 기준을 못 지킨 것이 A 기준을 못 지킨 것보다 덜 심각하다는 뜻이 아닙니다. 사용자에게 주는
        영향은 사례마다 따로 판단합니다. 수준은 평균을 내는 점수도 아닙니다. 기준 하나라도 충족하지
        못하면 그 수준의 적합성은 성립하지 않습니다.
      </>
    ),
    aaa: (
      <>
        원문의 Note 2는 일부 콘텐츠는 AAA 기준을 모두 충족할 수 없으므로 사이트 전체에 AAA를 일반
        정책으로 요구하는 것을 권하지 않는다고 적습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The A, AA, or AAA on each success criterion decides{' '}
        <strong>which conformance level it belongs to</strong>. A conformance level is a bundle:
        &quot;all success criteria up to that level are satisfied.&quot;
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 5.2.1 Conformance Level',
    pitfallTitle: 'Do not read levels as severity or scores',
    pitfall: (
      <>
        Missing an AA criterion is not less serious than missing an A criterion. The impact on users
        is judged case by case. Levels are not scores to average either. If even one criterion is
        not satisfied, conformance at that level does not hold.
      </>
    ),
    aaa: (
      <>
        Note 2 in the original says it is not recommended to require AAA as a general policy for
        entire sites, because some content cannot satisfy all AAA criteria.
      </>
    ),
  },
};

export const LevelsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.levels.id}>
      <DocH2 {...toc.levels} />
      <p>{c.intro}</p>
      <NormativeQuote locale={locale} href={wcag22('cc1')} cite={c.cite}>
        <p>One of the following levels of conformance is met in full.</p>
        <ul className="mt-xs flex list-disc flex-col gap-2xs pl-lg">
          <li>
            For Level A conformance (the minimum level of conformance), the web page satisfies all
            the Level A success criteria, or a conforming alternate version is provided.
          </li>
          <li>
            For Level AA conformance, the web page satisfies all the Level A and Level AA success
            criteria, or a Level AA conforming alternate version is provided.
          </li>
          <li>
            For Level AAA conformance, the web page satisfies all the Level A, Level AA and Level
            AAA success criteria, or a Level AAA conforming alternate version is provided.
          </li>
        </ul>
      </NormativeQuote>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>
      <p>{c.aaa}</p>
    </section>
  );
};
