import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { InternalStructureFlow } from './sections/InternalStructureFlow';
import { LearningModeChecklist } from './sections/LearningModeChecklist';
import { NextPageCTA } from './sections/NextPageCTA';
import { QuestionTransformer } from './sections/QuestionTransformer';
import { SameCodeDifferentQuestionHero } from './sections/SameCodeDifferentQuestionHero';
import { UsageLearningFlow } from './sections/UsageLearningFlow';
import { usageVsInternalsContent } from './content';

type Props = { locale: Locale };

export const UsageVsInternalsPage = ({ locale }: Props) => {
  const c = usageVsInternalsContent[locale];

  return (
    <StartPageShell>
      <SameCodeDifferentQuestionHero content={c.hero} />
      <UsageLearningFlow content={c.usageFlow} />
      <InternalStructureFlow content={c.internalFlow} />
      <QuestionTransformer content={c.transformer} />
      <LearningModeChecklist content={c.checklist} />
      <NextPageCTA content={c.nextStep} />
    </StartPageShell>
  );
};
