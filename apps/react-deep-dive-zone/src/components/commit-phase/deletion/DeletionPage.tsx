import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CleanupVsHostRemoveSection } from './sections/CleanupVsHostRemoveSection';
import { DeletionCleanupItemsSection } from './sections/DeletionCleanupItemsSection';
import { DeletionCodeCheckpointSection } from './sections/DeletionCodeCheckpointSection';
import { DeletionHeroSection } from './sections/DeletionHeroSection';
import { DeletionPipelineSection } from './sections/DeletionPipelineSection';
import { DeletionQuizSection } from './sections/DeletionQuizSection';
import { ModalDeletionExampleSection } from './sections/ModalDeletionExampleSection';
import { deletionContent } from './content';

type Props = { locale: Locale };

export const DeletionPage = ({ locale }: Props) => {
  const c = deletionContent[locale];

  return (
    <StartPageShell>
      <DeletionHeroSection content={c.hero} />
      <DeletionPipelineSection content={c.pipeline} />
      <DeletionCleanupItemsSection content={c.cleanup} />
      <ModalDeletionExampleSection content={c.modal} />
      <DeletionCodeCheckpointSection content={c.checkpoint} />
      <CleanupVsHostRemoveSection content={c.cleanupVsRemove} />
      <DeletionQuizSection quiz={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
