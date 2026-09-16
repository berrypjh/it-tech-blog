import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DeclarationTable } from './sections/DeclarationTable';
import { FormActionsCodeCheckpoint } from './sections/FormActionsCodeCheckpoint';
import { FormActionsHero } from './sections/FormActionsHero';
import { PendingStateFields } from './sections/PendingStateFields';
import { SubmitPipelineSteps } from './sections/SubmitPipelineSteps';
import { WhichActionWins } from './sections/WhichActionWins';
import { formActionsEventSystemContent } from './content';

type Props = { locale: Locale };

export const FormActionsEventSystemPage = ({ locale }: Props) => {
  const c = formActionsEventSystemContent[locale];

  return (
    <StartPageShell>
      <FormActionsHero content={c.hero} />
      <SubmitPipelineSteps content={c.pipeline} />
      <WhichActionWins content={c.which} />
      <PendingStateFields content={c.pendingState} />
      <DeclarationTable content={c.declarations} />
      <FormActionsCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
