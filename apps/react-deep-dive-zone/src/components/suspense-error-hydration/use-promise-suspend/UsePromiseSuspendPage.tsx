import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { BranchDiagram } from './sections/BranchDiagram';
import { CodePreview } from './sections/CodePreview';
import { ExplainCards } from './sections/ExplainCards';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { HeroSection } from './sections/HeroSection';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { PromiseStatesGrid } from './sections/PromiseStatesGrid';
import { PromiseStateSwitcher } from './sections/PromiseStateSwitcher';
import { ThenableTracking } from './sections/ThenableTracking';
import { TodayQuestion } from './sections/TodayQuestion';
import { usePromiseSuspendContent } from './content';

type Props = { locale: Locale };

export const UsePromiseSuspendPage = ({ locale }: Props) => {
  const c = usePromiseSuspendContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestion content={c.question} />
      <PromiseStatesGrid content={c.promiseStates} />
      <BranchDiagram content={c.diagram} />
      <ExplainCards content={c.explains} />
      <ThenableTracking content={c.thenable} />
      <CodePreview content={c.code} />
      <PromiseStateSwitcher content={c.switcher} />
      <FollowAlongSection content={c.followAlong} />
      <KeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
