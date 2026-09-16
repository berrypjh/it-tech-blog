import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DispatchBindFlow } from './sections/DispatchBindFlow';
import { MountStateFlow } from './sections/MountStateFlow';
import { UpdateQueueShape } from './sections/UpdateQueueShape';
import { UseStateCodeCheckpoint } from './sections/UseStateCodeCheckpoint';
import { UseStateInternalsHero } from './sections/UseStateInternalsHero';
import { useStateInternalsContent } from './content';

type Props = { locale: Locale };

export const UseStateInternalsPage = ({ locale }: Props) => {
  const c = useStateInternalsContent[locale];

  return (
    <StartPageShell>
      <UseStateInternalsHero content={c.hero} />
      <MountStateFlow content={c.mountFlow} />
      <UpdateQueueShape content={c.queueShape} />
      <DispatchBindFlow content={c.dispatchBind} />
      <UseStateCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
