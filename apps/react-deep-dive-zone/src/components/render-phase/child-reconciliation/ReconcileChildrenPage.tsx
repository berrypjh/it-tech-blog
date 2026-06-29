import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ChildShapePreview } from './sections/ChildShapePreview';
import { MountVsUpdateBranch } from './sections/MountVsUpdateBranch';
import { ReconcileChildrenCodeCheckpoint } from './sections/ReconcileChildrenCodeCheckpoint';
import { ReconcileChildrenHero } from './sections/ReconcileChildrenHero';
import { ReconcileChildrenInputs } from './sections/ReconcileChildrenInputs';
import { ReconcileChildrenQuiz } from './sections/ReconcileChildrenQuiz';
import { ReconcileChildrenVisualization } from './sections/ReconcileChildrenVisualization';
import { ReconciliationGoal } from './sections/ReconciliationGoal';
import { reconcileChildrenContent } from './content';

type Props = { locale: Locale };

export const ReconcileChildrenPage = ({ locale }: Props) => {
  const c = reconcileChildrenContent[locale];

  return (
    <StartPageShell>
      <ReconcileChildrenHero content={c.hero} />
      <ReconcileChildrenInputs content={c.inputs} />
      <MountVsUpdateBranch content={c.mountVsUpdate} />
      <ChildShapePreview content={c.childShape} />
      <ReconcileChildrenCodeCheckpoint content={c.code} />
      <ReconcileChildrenVisualization content={c.visualization} />
      <ReconciliationGoal content={c.goal} />
      <ReconcileChildrenQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
