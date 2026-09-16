import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ActionsCodeCheckpoint } from './sections/ActionsCodeCheckpoint';
import { ActionsHero } from './sections/ActionsHero';
import { FourSlotCards } from './sections/FourSlotCards';
import { ManualVsAction } from './sections/ManualVsAction';
import { SubmitFlowSteps } from './sections/SubmitFlowSteps';
import { ThreeHooksTable } from './sections/ThreeHooksTable';
import { actionsUpdateFlowContent } from './content';

type Props = { locale: Locale };

export const ActionsUpdateFlowPage = ({ locale }: Props) => {
  const c = actionsUpdateFlowContent[locale];

  return (
    <StartPageShell>
      <ActionsHero content={c.hero} />
      <ManualVsAction content={c.before} />
      <FourSlotCards content={c.hub} />
      <SubmitFlowSteps content={c.flow} />
      <ThreeHooksTable content={c.hooks} />
      <ActionsCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
