import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { accname12, aria12, aria13, htmlAam } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { DirectSection } from './sections/DirectSection';
import { ErrorsSection } from './sections/ErrorsSection';
import { PageHeader } from './sections/PageHeader';
import { PathsSection } from './sections/PathsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '이름과 설명은 서로 다른 순서표로 계산합니다. 설명은 처음 적용되는 출처 하나만 쓰고, 결과가 비어 있어도 다음 출처로 넘어가지 않습니다(AccName 1.2 초안).',
    'aria-describedby는 화면의 요소를 가리키는 WAI-ARIA 1.2 속성이고, aria-description은 WAI-ARIA 1.3 초안에만 있는 속성입니다. 보이는 도움말은 aria-describedby로 가리킵니다.',
    '안내 · 오류 표시 · aria-invalid · aria-errormessage는 서로 다른 정보입니다. aria-errormessage는 aria-invalid와 함께 쓰고, 설명 계산이나 즉시 낭독을 보장하지 않습니다.',
    '두 속성 모두 브라우저 · 보조기술 지원은 이 사이트가 확인하지 않았으므로, 직접 확인한 결과를 관찰값으로 기록합니다.',
  ],
  en: [
    'Names and descriptions are computed by different precedence tables. A description uses only the first applicable source and does not move on even if the result is empty (AccName 1.2 draft).',
    'aria-describedby is a WAI-ARIA 1.2 attribute that points to an element on screen; aria-description exists only in the WAI-ARIA 1.3 draft. Point to visible help with aria-describedby.',
    'Hints, error display, aria-invalid, and aria-errormessage are different information. Use aria-errormessage with aria-invalid; it guarantees neither the description computation nor immediate announcement.',
    'This site has not checked browser and assistive technology support for either attribute, so record what you check yourself as observed values.',
  ],
};

const references: DocReference[] = [
  {
    href: accname12('x4-2-description-computation'),
    source: same('W3C'),
    title: same('AccName 1.2 — 4.2 Description Computation'),
    note: {
      ko: '설명 출처 순서 (Working Draft, 2026-11-04)',
      en: 'Description source order (Working Draft, 2026-11-04)',
    },
  },
  {
    href: htmlAam('x4-2-accessible-description-computation'),
    source: same('W3C'),
    title: same('HTML-AAM 1.0 — 4.2 Accessible Description Computation'),
    note: {
      ko: 'HTML 요소별 설명 출처 (Working Draft, 2026-10-26)',
      en: 'Per-element description sources (Working Draft, 2026-10-26)',
    },
  },
  {
    href: aria12('aria-describedby'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-describedby'),
    note: {
      ko: '설명 요소를 가리키는 속성 (2023-06-06)',
      en: 'Pointing to describing elements (2023-06-06)',
    },
  },
  {
    href: aria13('aria-description'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.3 — aria-description'),
    note: {
      ko: '직접 적는 설명 (Working Draft, 2026-06-04)',
      en: 'A direct description string (Working Draft, 2026-06-04)',
    },
  },
  {
    href: aria12('aria-errormessage'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-errormessage, aria-invalid'),
    note: {
      ko: '오류 메시지 관계와 유효 상태',
      en: 'The error message relation and the validity state',
    },
  },
];

export const DescriptionsAndErrorsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PathsSection locale={locale} />
      <DirectSection locale={locale} />
      <ErrorsSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="label-in-name" />
    </DocLayout>
  );
};
