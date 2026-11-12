import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { accname11, accname12, htmlAam } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { NotNameSection } from './sections/NotNameSection';
import { PageHeader } from './sections/PageHeader';
import { PiecesSection } from './sections/PiecesSection';
import { VersionsSection } from './sections/VersionsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '화면 라벨은 모두에게 보이는 글자, 접근성 이름은 브라우저가 계산해 보조기술에 주는 글자입니다. 같을 때가 많지만 같은 것은 아닙니다.',
    '역할은 객체의 종류, 값은 지금 입력 · 선택된 정보, 설명은 이름 밖의 보충 정보입니다.',
    '보이는 글자나 DOM의 textContent는 계산된 이름이 아닙니다. 계산된 이름은 브라우저 도구에서 읽고 관찰값으로 따로 적습니다.',
    'AccName 1.1은 확정 규격, AccName 1.2와 HTML-AAM은 초안입니다. 예상에는 판본을, 관찰에는 엔진 · 버전을 함께 적습니다.',
  ],
  en: [
    'A visible label is text shown to everyone; an accessible name is text the browser computes and gives to assistive technology. They are often the same but not the same thing.',
    'A role is the kind of object, a value is what is entered or chosen now, and a description is extra information outside the name.',
    'Visible text and the DOM’s textContent are not the computed name. Read computed names in browser tools and record them separately as observed values.',
    'AccName 1.1 is a Recommendation; AccName 1.2 and HTML-AAM are drafts. Write the edition with each expectation, and the engine and version with each observation.',
  ],
};

const references: DocReference[] = [
  {
    href: accname11('mapping_additional_nd_te'),
    source: same('W3C'),
    title: same('Accessible Name and Description Computation 1.1'),
    note: {
      ko: '이름 · 설명 계산의 확정 규격 (W3C Recommendation, 2018-12-18)',
      en: 'The final naming rules (W3C Recommendation, 2018-12-18)',
    },
  },
  {
    href: accname12('computation-steps'),
    source: same('W3C'),
    title: same('Accessible Name and Description Computation 1.2'),
    note: {
      ko: '계산 단계의 초안 (Working Draft, 2026-11-04)',
      en: 'Draft computation steps (Working Draft, 2026-11-04)',
    },
  },
  {
    href: htmlAam('accessible-name-and-description-computation'),
    source: same('W3C'),
    title: same(
      'HTML Accessibility API Mappings 1.0 — 4. Accessible Name and Description Computation',
    ),
    note: {
      ko: 'HTML 요소별 이름 · 설명 규칙 (Working Draft, 2026-10-26)',
      en: 'Per-element HTML rules (Working Draft, 2026-10-26)',
    },
  },
  {
    href: wcag22('dfn-labels'),
    source: same('W3C'),
    title: same('WCAG 2.2 — Definitions: label, name'),
    note: {
      ko: '라벨과 이름의 정의 (2024-12-12)',
      en: 'Definitions of label and name (2024-12-12)',
    },
  },
];

export const NameAndLabelPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PiecesSection locale={locale} />
      <NotNameSection locale={locale} />
      <VersionsSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="html-name-sources" />
    </DocLayout>
  );
};
