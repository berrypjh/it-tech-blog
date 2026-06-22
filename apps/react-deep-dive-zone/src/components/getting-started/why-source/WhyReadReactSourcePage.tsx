import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FirstCodePreview } from './sections/FirstCodePreview';
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
      <SourceReadingBenefits content={c.benefits} />
      <FirstCodePreview content={c.firstCode} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
