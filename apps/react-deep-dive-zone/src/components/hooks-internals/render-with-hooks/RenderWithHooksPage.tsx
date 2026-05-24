import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ComponentExecutionCompare } from './sections/ComponentExecutionCompare';
import { CurrentFiberCodePreview } from './sections/CurrentFiberCodePreview';
import { DispatcherSelection } from './sections/DispatcherSelection';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
import { RenderSimulator } from './sections/RenderSimulator';
import { RenderWithHooksHero } from './sections/RenderWithHooksHero';
import { RenderWithHooksTimeline } from './sections/RenderWithHooksTimeline';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { renderWithHooksContent } from './content';

type Props = { locale: Locale };

export const RenderWithHooksPage = ({ locale }: Props) => {
  const c = renderWithHooksContent[locale];

  return (
    <StartPageShell>
      <RenderWithHooksHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <ComponentExecutionCompare content={c.compare} />
      <RenderWithHooksTimeline content={c.timeline} />
      <CurrentFiberCodePreview content={c.codePreview} />
      <DispatcherSelection content={c.dispatcher} />
      <RenderSimulator content={c.simulator} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
