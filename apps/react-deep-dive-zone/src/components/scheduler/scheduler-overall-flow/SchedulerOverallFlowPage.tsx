import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FileMapTable } from './sections/FileMapTable';
import { FullFlowRecap } from './sections/FullFlowRecap';
import { ScenarioTable } from './sections/ScenarioTable';
import { SchedulerOverallFlowCodeCheckpoint } from './sections/SchedulerOverallFlowCodeCheckpoint';
import { SchedulerOverallFlowHero } from './sections/SchedulerOverallFlowHero';
import { schedulerOverallFlowContent } from './content';

type Props = { locale: Locale };

export const SchedulerOverallFlowPage = ({ locale }: Props) => {
  const c = schedulerOverallFlowContent[locale];

  return (
    <StartPageShell>
      <SchedulerOverallFlowHero content={c.hero} />
      <FullFlowRecap content={c.fullFlow} />
      <ScenarioTable content={c.scenarios} />
      <FileMapTable content={c.files} />
      <SchedulerOverallFlowCodeCheckpoint content={c.checkpoint} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
