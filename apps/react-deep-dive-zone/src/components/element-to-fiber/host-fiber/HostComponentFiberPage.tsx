import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ExampleJsxTypeCheck } from './sections/ExampleJsxTypeCheck';
import { HostComponentConcept } from './sections/HostComponentConcept';
import { HostComponentHero } from './sections/HostComponentHero';
import { HostMiniQuiz } from './sections/HostMiniQuiz';
import { HostVsDomComparison } from './sections/HostVsDomComparison';
import { ModernHostFamily } from './sections/ModernHostFamily';
import { QuickChecklist } from './sections/QuickChecklist';
import { SourceCodeCheckpoint } from './sections/SourceCodeCheckpoint';
import { hostComponentFiberContent } from './content';

type Props = { locale: Locale };

export const HostComponentFiberPage = ({ locale }: Props) => {
  const c = hostComponentFiberContent[locale];

  return (
    <StartPageShell>
      <HostComponentHero content={c.hero} />
      <ExampleJsxTypeCheck content={c.example} />
      <HostComponentConcept content={c.concept} />
      <SourceCodeCheckpoint content={c.checkpoint} />
      <HostVsDomComparison content={c.vsDom} />
      <ModernHostFamily content={c.modern} />
      <HostMiniQuiz content={c.quiz} />
      <QuickChecklist content={c.checklist} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
