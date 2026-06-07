import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CreateFiberCheckpoint } from './sections/CreateFiberCheckpoint';
import { ReconcilerHero } from './sections/ReconcilerHero';
import { ReconcilerInternalProcess } from './sections/ReconcilerInternalProcess';
import { ReconcilerNextTopicsPreview } from './sections/ReconcilerNextTopicsPreview';
import { ReconcilerPositionFlow } from './sections/ReconcilerPositionFlow';
import { ReconcilerVsRenderer } from './sections/ReconcilerVsRenderer';
import { reconcilerEntryContent } from './content';

type Props = { locale: Locale };

const POSITION_SECTION_ID = 'section-position';

export const ReactReconcilerEntryPage = ({ locale }: Props) => {
  const c = reconcilerEntryContent[locale];

  return (
    <StartPageShell>
      <ReconcilerHero content={c.hero} />
      <ReconcilerPositionFlow content={c.position} sectionId={POSITION_SECTION_ID} />
      <ReconcilerVsRenderer content={c.compare} />
      <ReconcilerInternalProcess content={c.process} />
      <CreateFiberCheckpoint content={c.checkpoint} />
      <ReconcilerNextTopicsPreview content={c.preview} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
