import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ActionFlowSimulatorSection } from './sections/ActionFlowSimulatorSection';
import { ActionsApiComparisonSection } from './sections/ActionsApiComparisonSection';
import { ActionsHero } from './sections/ActionsHero';
import { ActionStateQuadrantSection } from './sections/ActionStateQuadrantSection';
import { ApiFeatureCardsSection } from './sections/ApiFeatureCardsSection';
import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { KeyTakeawaysSection } from './sections/KeyTakeawaysSection';
import { LegacyAsyncSubmitSection } from './sections/LegacyAsyncSubmitSection';
import { OfficialDocsCardsSection } from './sections/OfficialDocsCardsSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { actionsUpdateFlowContent } from './content';

type Props = { locale: Locale };

export const ActionsUpdateFlowPage = ({ locale }: Props) => {
  const c = actionsUpdateFlowContent[locale];

  return (
    <StartPageShell>
      <ActionsHero content={c.hero} />
      <TodayQuestionSection content={c.question} />
      <LegacyAsyncSubmitSection content={c.legacySubmit} />
      <ActionStateQuadrantSection content={c.quadrant} />
      <ApiFeatureCardsSection content={c.apiCards} />
      <ActionsApiComparisonSection content={c.comparison} />
      <ActionFlowSimulatorSection content={c.simulator} />
      <OfficialDocsCardsSection content={c.officialDocs} />
      <FollowAlongMissionSection content={c.mission} />
      <KeyTakeawaysSection content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
