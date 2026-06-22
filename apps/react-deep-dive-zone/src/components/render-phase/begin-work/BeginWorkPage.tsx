import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/shell';

import { BeginWorkBailoutSection } from './sections/BeginWorkBailoutSection';
import { BeginWorkCodeCheckpoint } from './sections/BeginWorkCodeCheckpoint';
import { BeginWorkCoreRoles } from './sections/BeginWorkCoreRoles';
import { BeginWorkFlowSummary } from './sections/BeginWorkFlowSummary';
import { BeginWorkHero } from './sections/BeginWorkHero';
import { BeginWorkQuizAndCTA } from './sections/BeginWorkQuizAndCTA';
import { FiberTagBranchMap } from './sections/FiberTagBranchMap';
import { ReconcileChildrenFlow } from './sections/ReconcileChildrenFlow';
import { beginWorkContent } from './content';

type Props = { locale: Locale };

export const BeginWorkPage = ({ locale }: Props) => {
  const c = beginWorkContent[locale];

  return (
    <StartPageShell>
      <BeginWorkHero content={c.hero} />
      <BeginWorkCoreRoles content={c.roles} />
      <FiberTagBranchMap content={c.tagBranch} />
      <BeginWorkBailoutSection content={c.bailout} />
      <ReconcileChildrenFlow content={c.reconcile} />
      <BeginWorkCodeCheckpoint content={c.code} />
      <BeginWorkFlowSummary content={c.summary} />
      <BeginWorkQuizAndCTA quiz={c.quiz} cta={c.cta} />
    </StartPageShell>
  );
};
