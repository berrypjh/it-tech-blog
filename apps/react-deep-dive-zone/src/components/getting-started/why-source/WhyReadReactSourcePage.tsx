import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { FirstCodePreview } from './sections/FirstCodePreview';
import { LearningPerspectiveCompare } from './sections/LearningPerspectiveCompare';
import { NextLearningStepBanner } from './sections/NextLearningStepBanner';
import { ReactQuestionCards } from './sections/ReactQuestionCards';
import { SourceLearningHero } from './sections/SourceLearningHero';
import { SourceReadingBenefits } from './sections/SourceReadingBenefits';
import { whySourceContent } from './content';

type Props = { locale: Locale };

export const WhyReadReactSourcePage = ({ locale }: Props) => {
  const c = whySourceContent[locale];

  return (
    <StartPageShell>
      <SourceLearningHero content={c.hero} />
      <ReactQuestionCards content={c.questions} />
      <LearningPerspectiveCompare content={c.compare} />
      <SourceReadingBenefits content={c.benefits} />
      <FirstCodePreview content={c.firstCode} />
      <NextLearningStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
