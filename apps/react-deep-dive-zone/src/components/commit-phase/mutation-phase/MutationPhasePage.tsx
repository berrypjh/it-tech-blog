import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { MutationBeforeAfterSection } from './sections/MutationBeforeAfterSection';
import { MutationCodeCheckpointSection } from './sections/MutationCodeCheckpointSection';
import { MutationEffectsSection } from './sections/MutationEffectsSection';
import { MutationHeroSection } from './sections/MutationHeroSection';
import { MutationNextConceptSection } from './sections/MutationNextConceptSection';
import { MutationSummaryTableSection } from './sections/MutationSummaryTableSection';
import { RenderFlagsToMutationSection } from './sections/RenderFlagsToMutationSection';
import { mutationPhaseContent } from './content';

type Props = { locale: Locale };

export const MutationPhasePage = ({ locale }: Props) => {
  const c = mutationPhaseContent[locale];

  return (
    <StartPageShell>
      <MutationHeroSection content={c.hero} />
      <RenderFlagsToMutationSection content={c.connection} />
      <MutationEffectsSection content={c.effects} />
      <MutationSummaryTableSection content={c.summary} />
      <MutationCodeCheckpointSection content={c.checkpoint} />
      <MutationBeforeAfterSection content={c.beforeAfter} />
      <MutationNextConceptSection rootCurrent={c.rootCurrent} extra={c.extra} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
