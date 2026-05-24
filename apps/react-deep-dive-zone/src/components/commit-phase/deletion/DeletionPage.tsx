import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { CleanupVsHostRemoveSection } from './sections/CleanupVsHostRemoveSection';
import { DeletionCleanupItemsSection } from './sections/DeletionCleanupItemsSection';
import { DeletionCodeCheckpointSection } from './sections/DeletionCodeCheckpointSection';
import { DeletionHeroSection } from './sections/DeletionHeroSection';
import { DeletionPipelineSection } from './sections/DeletionPipelineSection';
import { DeletionQuizAndNextSection } from './sections/DeletionQuizAndNextSection';
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
      <DeletionQuizAndNextSection quiz={c.quiz} cta={c.cta} />
    </StartPageShell>
  );
};
