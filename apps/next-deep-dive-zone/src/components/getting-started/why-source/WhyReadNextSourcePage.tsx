import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { LearningQuoteBanner } from './sections/LearningQuoteBanner';
import { NextCodeEntryMap } from './sections/NextCodeEntryMap';
import { NextPageCTA } from './sections/NextPageCTA';
import { NextQuestionCards } from './sections/NextQuestionCards';
import { NextSourceHero } from './sections/NextSourceHero';
import { ReactNextResponsibilityCompare } from './sections/ReactNextResponsibilityCompare';
import { ResponsibilityQuiz } from './sections/ResponsibilityQuiz';
import { SourceReadingBenefits } from './sections/SourceReadingBenefits';
import { whySourceContent } from './content';

type Props = { locale: Locale };

export const WhyReadNextSourcePage = ({ locale }: Props) => {
  const c = whySourceContent[locale];

  return (
    <StartPageShell>
      <NextSourceHero content={c.hero} />
      <NextQuestionCards content={c.questions} />
      <ReactNextResponsibilityCompare content={c.compare} />
      <ResponsibilityQuiz content={c.quiz} />
      <SourceReadingBenefits content={c.benefits} />
      <NextCodeEntryMap content={c.codeEntry} />
      <LearningQuoteBanner content={c.quote} />
      <NextPageCTA content={c.nextStep} />
    </StartPageShell>
  );
};
