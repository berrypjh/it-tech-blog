import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const APG_INTRO = 'https://www.w3.org/WAI/ARIA/apg/about/introduction/';
const UNDERSTANDING = 'https://www.w3.org/WAI/WCAG22/Understanding/';
const TECHNIQUES = 'https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques';

const content: Record<
  Locale,
  {
    intro: React.ReactNode;
    tableCaption: string;
    tableHead: string[];
    rows: string[][];
    informative: React.ReactNode;
  }
> = {
  ko: {
    intro: (
      <>
        접근성 자료에는 성격이 다른 문장이 섞여 있습니다. <strong>규범</strong>(normative) 문서는
        지켜야 하는 요구이고, <strong>참고</strong>(informative) 문서는 이해와 구현을 돕지만 요구가
        아닙니다. WCAG 성공 기준과 WAI-ARIA 명세는 규범이고,{' '}
        <ExternalLink href={UNDERSTANDING}>Understanding 문서</ExternalLink>와 Techniques는
        참고용입니다. ARIA Authoring Practices Guide(APG)도{' '}
        <ExternalLink href={APG_INTRO}>스스로 규범적 표준이 아니라고</ExternalLink> 밝힙니다.
      </>
    ),
    tableCaption: '문장의 성격별 근거 문서와 따르지 않았을 때의 의미',
    tableHead: ['성격', '근거 문서의 예', '따르지 않았을 때'],
    rows: [
      [
        '규범적 요구',
        'WCAG 2.2 성공 기준, WAI-ARIA 명세',
        '요구를 어긴 것입니다. WCAG라면 그 범위에서 해당 수준의 적합성을 주장할 수 없습니다',
      ],
      [
        '참고 자료',
        'APG 패턴, WCAG Understanding · Techniques',
        '그 자체로는 위반이 아닙니다. 다르게 만든다면 근거를 남깁니다',
      ],
      [
        '일반 UX 제안',
        '디자인 가이드, 사내 원칙',
        '팀의 판단입니다. 표준의 이름으로 강제하지 않습니다',
      ],
    ],
    informative: (
      <>
        참고 자료라고 가볍게 볼 수는 없습니다. APG는 패턴이 규범 요구를 전하고 있고, 널리 굳은
        키보드 관례는 요구처럼 다루는 편이 낫다고 설명합니다.{' '}
        <ExternalLink href={TECHNIQUES}>Techniques의 실패 사례(Failures)</ExternalLink>는 성공
        기준을 충족하지 못하는 경우를 모은 것이라, 해당하면 원칙적으로 그 기준을 충족하지 못합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Accessibility material mixes sentences of different kinds. <strong>Normative</strong>{' '}
        documents set requirements; <strong>informative</strong> documents help understanding and
        implementation but are not requirements. WCAG success criteria and the WAI-ARIA
        specification are normative, while the{' '}
        <ExternalLink href={UNDERSTANDING}>Understanding documents</ExternalLink> and Techniques are
        informative. The ARIA Authoring Practices Guide (APG){' '}
        <ExternalLink href={APG_INTRO}>states that it is not a normative standard</ExternalLink>.
      </>
    ),
    tableCaption: 'Source documents by kind of statement and what not following them means',
    tableHead: ['Kind', 'Example sources', 'If not followed'],
    rows: [
      [
        'Normative requirement',
        'WCAG 2.2 success criteria, WAI-ARIA specification',
        'The requirement is broken. For WCAG, you cannot claim conformance at that level for that scope',
      ],
      [
        'Informative resource',
        'APG patterns, WCAG Understanding and Techniques',
        'Not a failure by itself. If you diverge, record your reasoning',
      ],
      [
        'General UX advice',
        'Design guides, team principles',
        'A team judgment. Do not enforce it in the name of a standard',
      ],
    ],
    informative: (
      <>
        Informative does not mean optional in practice. APG explains that its patterns convey
        normative requirements and that well-established keyboard conventions are best treated as
        requirements. <ExternalLink href={TECHNIQUES}>Failures in Techniques</ExternalLink> collect
        cases that fail success criteria, so content that matches one generally does not meet that
        criterion.
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
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={c.rows} />
      <p>{c.informative}</p>
    </section>
  );
};
