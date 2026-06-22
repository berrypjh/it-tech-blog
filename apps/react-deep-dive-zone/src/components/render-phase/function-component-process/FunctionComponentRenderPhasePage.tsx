import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FunctionComponentCodeCheckpoint } from './sections/FunctionComponentCodeCheckpoint';
import { FunctionComponentHero } from './sections/FunctionComponentHero';
import { FunctionComponentQuizAndCTA } from './sections/FunctionComponentQuizAndCTA';
import { HooksChapterConnection } from './sections/HooksChapterConnection';
import { InternalProcessingFlow } from './sections/InternalProcessingFlow';
import { NextChildrenExplanation } from './sections/NextChildrenExplanation';
import { RenderWithHooksRole } from './sections/RenderWithHooksRole';
import { UserCodeExample } from './sections/UserCodeExample';
import { functionComponentContent } from './content';

type Props = { locale: Locale };

export const FunctionComponentRenderPhasePage = ({ locale }: Props) => {
  const c = functionComponentContent[locale];

  return (
    <StartPageShell>
      <FunctionComponentHero content={c.hero} />
      <UserCodeExample content={c.userCode} />
      <InternalProcessingFlow content={c.internalFlow} />
      <RenderWithHooksRole content={c.renderWithHooks} />
      <NextChildrenExplanation content={c.nextChildren} />
      <FunctionComponentCodeCheckpoint content={c.code} />
      <HooksChapterConnection content={c.hooksLink} />
      <FunctionComponentQuizAndCTA quiz={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
