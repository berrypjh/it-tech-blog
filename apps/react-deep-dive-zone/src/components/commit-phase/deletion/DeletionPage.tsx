import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CleanupVsHostRemoveSection } from './sections/CleanupVsHostRemoveSection';
import { DeletionCleanupItemsSection } from './sections/DeletionCleanupItemsSection';
import { DeletionCodeCheckpoint } from './sections/DeletionCodeCheckpoint';
import { DeletionHeroSection } from './sections/DeletionHeroSection';
import { DeletionPipelineSection } from './sections/DeletionPipelineSection';
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
      <DeletionCodeCheckpoint content={c.checkpoint} />
      <CleanupVsHostRemoveSection content={c.cleanupVsRemove} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
