import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { HostTaskRunnerCodeCheckpoint } from './sections/HostTaskRunnerCodeCheckpoint';
import { HostTaskRunnerHero } from './sections/HostTaskRunnerHero';
import { PriorityLevels } from './sections/PriorityLevels';
import { RoleSplit } from './sections/RoleSplit';
import { TaskQueueFlow } from './sections/TaskQueueFlow';
import { hostTaskRunnerContent } from './content';

type Props = { locale: Locale };

export const HostTaskRunnerPage = ({ locale }: Props) => {
  const c = hostTaskRunnerContent[locale];

  return (
    <StartPageShell>
      <HostTaskRunnerHero content={c.hero} />
      <RoleSplit content={c.roles} />
      <PriorityLevels content={c.priorities} />
      <TaskQueueFlow content={c.queue} />
      <HostTaskRunnerCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
