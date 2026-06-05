import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { React19RefHero } from './sections/React19RefHero';
import { RefBeforeAfterCompare } from './sections/RefBeforeAfterCompare';
import { RefBenefits } from './sections/RefBenefits';
import { RefChangeCoreCards } from './sections/RefChangeCoreCards';
import { RefFlowDiagram } from './sections/RefFlowDiagram';
import { RefQuickQuiz } from './sections/RefQuickQuiz';
import { RefSourceCheckpoint } from './sections/RefSourceCheckpoint';
import { reactElementRefReact19Content } from './content';

type Props = { locale: Locale };

export const ReactElementRefReact19Page = ({ locale }: Props) => {
  const c = reactElementRefReact19Content[locale];

  return (
    <StartPageShell>
      <React19RefHero content={c.hero} />
      <RefChangeCoreCards content={c.core} />
      <RefBeforeAfterCompare content={c.compare} />
      <RefFlowDiagram content={c.flow} />
      <RefSourceCheckpoint content={c.checkpoint} />
      <RefBenefits content={c.benefits} />
      <RefQuickQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
