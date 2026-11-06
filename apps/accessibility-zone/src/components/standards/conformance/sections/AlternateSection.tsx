import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        1번 요구는 &quot;또는 적합 대체 버전이 제공됨&quot;을 함께 허용합니다. 다만 대체 버전은 아무
        페이지나 되는 것이 아니고, 정의된 조건을 모두 갖춰야 합니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — Definition: conforming alternate version',
    after: (
      <>
        정리하면 대체 버전은 목표 수준에 적합하고, 같은 언어로 같은 정보와 기능을 주며, 원래
        버전만큼 최신이어야 합니다. 그리고 부적합한 페이지에서 접근성이 지원되는 방법으로 대체
        버전에 갈 수 있어야 합니다. &quot;간편 버전&quot;에 기능 일부만 있다면 이 조건에 맞지
        않습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Requirement 1 also allows &quot;or a conforming alternate version is provided.&quot; But an
        alternate version is not just any page; it must meet every condition in the definition.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — Definition: conforming alternate version',
    after: (
      <>
        In short, the alternate version conforms at the target level, gives the same information and
        functionality in the same language, and is as up to date as the original. And it must be
        reachable from the non-conforming page through an accessibility-supported mechanism. A
        &quot;lite version&quot; with only some features does not meet these conditions.
      </>
    ),
  },
};

export const AlternateSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.alternate.id}>
      <DocH2 {...toc.alternate} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('dfn-conforming-alternate-versions')}
        cite={c.cite}
      >
        <p>
          version that conforms at the designated level, and provides all of the same information
          and functionality in the same human language, and is as up to date as the non-conforming
          content, and for which at least one of the following is true:
        </p>
        <ol className="mt-xs flex list-decimal flex-col gap-2xs pl-lg">
          <li>
            the conforming version can be reached from the non-conforming page via an
            accessibility-supported mechanism, or
          </li>
          <li>the non-conforming version can only be reached from the conforming version, or</li>
          <li>
            the non-conforming version can only be reached from a conforming page that also provides
            a mechanism to reach the conforming version
          </li>
        </ol>
      </NormativeQuote>
      <p>{c.after}</p>
    </section>
  );
};
