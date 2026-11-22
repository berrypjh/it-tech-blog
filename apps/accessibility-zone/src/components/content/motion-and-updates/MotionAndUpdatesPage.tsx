import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { FlashSection } from './sections/FlashSection';
import { PageHeader } from './sections/PageHeader';
import { PauseSection } from './sections/PauseSection';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '저절로 시작해 5초 넘게 다른 내용과 함께 움직이는 정보, 저절로 시작하는 자동 갱신에는 멈추거나 숨기거나 빈도를 조절할 수단이 필요합니다.',
    '가장 안전한 설계는 사용자가 시작하게 하고, 언제든 멈추고 빈도를 고르게 하는 것입니다.',
    '점멸은 1초에 세 번 이하이거나 임계값 아래여야 하며, 위험한 점멸은 설정과 관계없이 만들지 않습니다.',
    'prefers-reduced-motion은 기준을 구현하는 수단의 하나이고, 사이트 설정과 운영체제 설정은 따로 읽습니다.',
  ],
  en: [
    'Information that starts by itself and moves for more than five seconds alongside other content, and auto-updates that start by themselves, need a way to pause, stop, hide, or set the frequency.',
    'The safest design lets users start it, stop it at any time, and choose the frequency.',
    'Flashing must be three times or fewer per second or below the thresholds, and dangerous flashing is never built, whatever the setting.',
    'prefers-reduced-motion is one way to implement the criteria, and the site setting and the OS setting are read separately.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('pause-stop-hide'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.2.2 Pause, Stop, Hide'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('three-flashes-or-below-threshold'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.3.1 Three Flashes or Below Threshold'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('animation-from-interactions'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.3.3: Animation from Interactions'),
    note: {
      ko: 'prefers-reduced-motion 활용 (보충 자료)',
      en: 'Using prefers-reduced-motion (supporting)',
    },
  },
];

export const MotionAndUpdatesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PauseSection locale={locale} />
      <PracticeSection locale={locale} />
      <FlashSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="clear-content" />
    </DocLayout>
  );
};
