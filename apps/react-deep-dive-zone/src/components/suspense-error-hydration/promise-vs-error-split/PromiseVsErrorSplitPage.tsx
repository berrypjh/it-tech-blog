import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { ClassifierSection } from './sections/ClassifierSection';
import { CodePreviewSection } from './sections/CodePreviewSection';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { HeroSection } from './sections/HeroSection';
import { NextCTA } from './sections/NextCTA';
import { QuestionSection } from './sections/QuestionSection';
import { ReasonCards } from './sections/ReasonCards';
import { StepFlowSection } from './sections/StepFlowSection';
import { TakeawaysSection } from './sections/TakeawaysSection';
import { TreeDiagramSection } from './sections/TreeDiagramSection';
import { TwoFacesSection } from './sections/TwoFacesSection';
import { promiseVsErrorSplitContent } from './content';

type Props = { locale: Locale };

export const PromiseVsErrorSplitPage = ({ locale }: Props) => {
  const c = promiseVsErrorSplitContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <QuestionSection content={c.question} />
      <TwoFacesSection content={c.twoFaces} />
      <TreeDiagramSection content={c.tree} />
      <StepFlowSection content={c.stepFlow} />
      <ReasonCards suspense={c.reasonSuspense} error={c.reasonError} />
      <CodePreviewSection content={c.code} />
      <ClassifierSection content={c.classifier} />
      <FollowAlongSection content={c.followAlong} />
      <TakeawaysSection content={c.takeaways} />
      <NextCTA content={c.cta} />
    </StartPageShell>
  );
};
