import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CodeEntryMap } from './sections/CodeEntryMap';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { HeroSection } from './sections/HeroSection';
import { NormalVsExtendedFlows } from './sections/NormalVsExtendedFlows';
import { PartFlowMap } from './sections/PartFlowMap';
import { QuestionAndNormalRender } from './sections/QuestionAndNormalRender';
import { RecoveryPathSelector } from './sections/RecoveryPathSelector';
import { RoleComparisonTable } from './sections/RoleComparisonTable';
import { TakeawaysSection } from './sections/TakeawaysSection';
import { ThreeBranchSection } from './sections/ThreeBranchSection';
import { whyFailableRenderContent } from './content';

type Props = { locale: Locale };

export const WhyFailableRenderPage = ({ locale }: Props) => {
  const c = whyFailableRenderContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <NormalVsExtendedFlows content={c.flows} />
      <QuestionAndNormalRender question={c.question} normalRender={c.normalRender} />
      <ThreeBranchSection content={c.threeBranches} />
      <RoleComparisonTable content={c.comparison} />
      <PartFlowMap content={c.flowMap} />
      <CodeEntryMap content={c.codeEntry} />
      <RecoveryPathSelector content={c.selector} />
      <FollowAlongSection content={c.followAlong} />
      <TakeawaysSection content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
