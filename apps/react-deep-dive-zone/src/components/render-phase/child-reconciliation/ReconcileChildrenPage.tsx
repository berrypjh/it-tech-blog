import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ChildShapePreview } from './sections/ChildShapePreview';
import { MountVsUpdateBranch } from './sections/MountVsUpdateBranch';
import { ReconcileChildrenCodeCheckpoint } from './sections/ReconcileChildrenCodeCheckpoint';
import { ReconcileChildrenHero } from './sections/ReconcileChildrenHero';
import { ReconcileChildrenInputs } from './sections/ReconcileChildrenInputs';
import { ReconcileChildrenQuizAndCTA } from './sections/ReconcileChildrenQuizAndCTA';
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
      <ReconcileChildrenQuizAndCTA quiz={c.quiz} cta={c.cta} />
    </StartPageShell>
  );
};
