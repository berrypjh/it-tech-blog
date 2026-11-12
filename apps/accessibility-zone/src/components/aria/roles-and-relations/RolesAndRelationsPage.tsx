import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { KindsSection } from './sections/KindsSection';
import { PageHeader } from './sections/PageHeader';
import { RelationsSection } from './sections/RelationsSection';
import { RequiredSection } from './sections/RequiredSection';
import { getToc } from './toc';

const points = {
  ko: [
    '역할은 무엇인지, 상태는 자주 바뀌는 지금의 값, 속성은 잘 바뀌지 않는 특성, 관계는 다른 요소를 ID로 가리키는 것입니다.',
    '한 역할의 필수 요구는 WAI-ARIA 특성 표의 Required States and Properties · Required Context Role · Required Owned Elements 세 줄에서 찾습니다.',
    'DOM 부모 · 자식, 접근성 소유, ID 참조는 서로 다른 관계입니다. aria-controls는 소유도 동작도 만들지 않습니다.',
    'aria-owns는 DOM으로 나타낼 수 없는 관계에만 씁니다. 순서 문제는 DOM 순서를 고쳐서 풉니다.',
  ],
  en: [
    'A role is what something is, a state is a current value that changes often, a property is a trait that rarely changes, and a relation points to another element by ID.',
    'Find one role’s requirements in three rows of its WAI-ARIA Characteristics table: Required States and Properties, Required Context Role, and Required Owned Elements.',
    'DOM parent and child, accessibility ownership, and ID reference are different relationships. aria-controls creates neither ownership nor behavior.',
    'Use aria-owns only for relationships the DOM cannot express. Fix ordering problems by fixing the DOM order.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('statevsprop'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — 6.1 Clarification of States versus Properties'),
    note: {
      ko: '상태와 속성의 구분 (W3C Recommendation, 2023-06-06)',
      en: 'How states and properties differ (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: aria12('mustContain'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — 5.2.6 Required Owned Elements'),
    note: { ko: '소유해야 할 자식 역할의 정의', en: 'The definition of required owned children' },
  },
  {
    href: aria12('scope'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — 5.2.7 Required Context Role'),
    note: { ko: '필요한 부모 역할의 정의', en: 'The definition of a required parent role' },
  },
  {
    href: aria12('aria-controls'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-controls'),
    note: { ko: '조절 관계를 가리키는 속성', en: 'The property that points to what is controlled' },
  },
  {
    href: aria12('aria-owns'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-owns'),
    note: {
      ko: 'DOM으로 나타낼 수 없는 소유 관계와 그 제한',
      en: 'Ownership the DOM cannot express, and its limits',
    },
  },
];

export const RolesAndRelationsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <KindsSection locale={locale} />
      <RequiredSection locale={locale} />
      <RelationsSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="aria-in-html" />
    </DocLayout>
  );
};
