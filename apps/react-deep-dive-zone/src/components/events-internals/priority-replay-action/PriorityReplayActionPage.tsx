import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { AttachPointsTable } from './sections/AttachPointsTable';
import { PipelineRecap } from './sections/PipelineRecap';
import { PriorityReplayActionCodeCheckpoint } from './sections/PriorityReplayActionCodeCheckpoint';
import { PriorityReplayActionHero } from './sections/PriorityReplayActionHero';
import { ThreeExtensions } from './sections/ThreeExtensions';
import { priorityReplayActionContent } from './content';

type Props = { locale: Locale };

export const PriorityReplayActionPage = ({ locale }: Props) => {
  const c = priorityReplayActionContent[locale];

  return (
    <StartPageShell>
      <PriorityReplayActionHero content={c.hero} />
      <PipelineRecap content={c.recap} />
      <ThreeExtensions content={c.extensions} />
      <AttachPointsTable content={c.attach} />
      <PriorityReplayActionCodeCheckpoint content={c.checkpoint} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
