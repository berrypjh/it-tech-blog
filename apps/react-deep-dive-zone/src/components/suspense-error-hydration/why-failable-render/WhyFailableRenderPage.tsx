import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { NormalVsExtendedPath } from './sections/NormalVsExtendedPath';
import { RoleComparison } from './sections/RoleComparison';
import { ThreeBranchCards } from './sections/ThreeBranchCards';
import { WhyFailableRenderCodeCheckpoint } from './sections/WhyFailableRenderCodeCheckpoint';
import { WhyFailableRenderHero } from './sections/WhyFailableRenderHero';
import { whyFailableRenderContent } from './content';

type Props = { locale: Locale };

export const WhyFailableRenderPage = ({ locale }: Props) => {
  const c = whyFailableRenderContent[locale];

  return (
    <StartPageShell>
      <WhyFailableRenderHero content={c.hero} />
      <NormalVsExtendedPath content={c.paths} />
      <ThreeBranchCards content={c.branches} />
      <RoleComparison content={c.compare} />
      <WhyFailableRenderCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
