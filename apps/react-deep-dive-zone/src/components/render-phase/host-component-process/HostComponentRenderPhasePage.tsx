import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CompleteWorkPreview } from './sections/CompleteWorkPreview';
import { HostComponentCodeCheckpoint } from './sections/HostComponentCodeCheckpoint';
import { HostComponentHero } from './sections/HostComponentHero';
import { HostComponentQuizAndCTA } from './sections/HostComponentQuizAndCTA';
import { HostUserCodeExample } from './sections/HostUserCodeExample';
import { TextVsNestedChildren } from './sections/TextVsNestedChildren';
import { UpdateHostComponentFlow } from './sections/UpdateHostComponentFlow';
import { hostComponentContent } from './content';

type Props = { locale: Locale };

export const HostComponentRenderPhasePage = ({ locale }: Props) => {
  const c = hostComponentContent[locale];

  return (
    <StartPageShell>
      <HostComponentHero content={c.hero} />
      <HostUserCodeExample content={c.userCode} />
      <UpdateHostComponentFlow content={c.updateFlow} />
      <TextVsNestedChildren content={c.childCompare} />
      <HostComponentCodeCheckpoint content={c.code} />
      <CompleteWorkPreview content={c.completeWork} />
      <HostComponentQuizAndCTA quiz={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
