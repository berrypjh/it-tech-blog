import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { AppRouterCodeEntryMap } from './sections/AppRouterCodeEntryMap';
import { AppRouterComplexityHero } from './sections/AppRouterComplexityHero';
import { ComplexityFactorGrid } from './sections/ComplexityFactorGrid';
import { NextPageCTA } from './sections/NextPageCTA';
import { PagesVsAppRouterCompare } from './sections/PagesVsAppRouterCompare';
import { SegmentTreeExplorer } from './sections/SegmentTreeExplorer';
import { appRouterComplexityContent } from './content';

type Props = { locale: Locale };

export const AppRouterComplexityPage = ({ locale }: Props) => {
  const c = appRouterComplexityContent[locale];

  return (
    <StartPageShell>
      <AppRouterComplexityHero content={c.hero} />
      <PagesVsAppRouterCompare content={c.compare} />
      <ComplexityFactorGrid content={c.factors} />
      <SegmentTreeExplorer content={c.segmentTree} />
      <AppRouterCodeEntryMap content={c.codeEntry} />
      <NextPageCTA content={c.nextStep} />
    </StartPageShell>
  );
};
