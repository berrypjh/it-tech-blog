import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { AdvancedLearningSection } from './sections/AdvancedLearningSection';
import { CheckpointSection } from './sections/CheckpointSection';
import { ElementFiberSection } from './sections/ElementFiberSection';
import { KeyTakeawaySection } from './sections/KeyTakeawaySection';
import { PositionSection } from './sections/PositionSection';
import { ReconcilerHero } from './sections/ReconcilerHero';
import { ResponsibilitiesSection } from './sections/ResponsibilitiesSection';
import { reconcilerContent } from './content';

type Props = { locale: Locale };

export const ReconcilerCorePage = ({ locale }: Props) => {
  const c = reconcilerContent[locale];

  return (
    <StartPageShell>
      <ReconcilerHero content={c.hero} />
      <PositionSection content={c.position} />
      <ResponsibilitiesSection content={c.responsibilities} />
      <ElementFiberSection content={c.elementFiber} />
      <CheckpointSection content={c.checkpoint} />
      <AdvancedLearningSection content={c.advanced} />
      <KeyTakeawaySection content={c.concept} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
