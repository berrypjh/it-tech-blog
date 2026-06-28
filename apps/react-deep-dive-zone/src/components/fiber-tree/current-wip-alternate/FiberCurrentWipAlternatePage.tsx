import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { AlternateCodeCheckpoint } from './sections/AlternateCodeCheckpoint';
import { AlternateDiagram } from './sections/AlternateDiagram';
import { AlternateHero } from './sections/AlternateHero';
import { AlternateMiniQuiz } from './sections/AlternateMiniQuiz';
import { CurrentWipComparison } from './sections/CurrentWipComparison';
import { RenderingScenarioFlow } from './sections/RenderingScenarioFlow';
import { RootCurrentStructure } from './sections/RootCurrentStructure';
import { currentWipAlternateContent } from './content';

type Props = { locale: Locale };

export const FiberCurrentWipAlternatePage = ({ locale }: Props) => {
  const c = currentWipAlternateContent[locale];

  return (
    <StartPageShell>
      <AlternateHero content={c.hero} />
      <CurrentWipComparison content={c.comparison} />
      <RootCurrentStructure content={c.rootCurrent} />
      <AlternateDiagram content={c.alternate} />
      <AlternateCodeCheckpoint content={c.checkpoint} />
      <RenderingScenarioFlow content={c.scenario} />
      <AlternateMiniQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
