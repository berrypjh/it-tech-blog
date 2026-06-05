import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ClassificationGameSection } from './sections/ClassificationGameSection';
import { ConfusedValuesSection } from './sections/ConfusedValuesSection';
import { CoreClassificationTableSection } from './sections/CoreClassificationTableSection';
import { ElementStructureSection } from './sections/ElementStructureSection';
import { FiberStructureSection } from './sections/FiberStructureSection';
import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { WhyClassifySection } from './sections/WhyClassifySection';
import { valueClassificationContent } from './content';

type Props = { locale: Locale };

export const ClassifyValuesPage = ({ locale }: Props) => {
  const c = valueClassificationContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyClassifySection content={c.whyClassify} />
      <CoreClassificationTableSection content={c.coreTable} />
      <ElementStructureSection content={c.elementStructure} />
      <FiberStructureSection content={c.fiberStructure} />
      <ConfusedValuesSection content={c.confusedValues} />
      <ClassificationGameSection content={c.game} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
