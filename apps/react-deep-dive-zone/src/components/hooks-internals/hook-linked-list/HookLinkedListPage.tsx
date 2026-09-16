import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CallOrderMatters } from './sections/CallOrderMatters';
import { HookLinkedListCodeCheckpoint } from './sections/HookLinkedListCodeCheckpoint';
import { HookLinkedListHero } from './sections/HookLinkedListHero';
import { HookLinkingSteps } from './sections/HookLinkingSteps';
import { HookObjectFields } from './sections/HookObjectFields';
import { MemoizedStateSlot } from './sections/MemoizedStateSlot';
import { hookLinkedListContent } from './content';

type Props = { locale: Locale };

export const HookLinkedListPage = ({ locale }: Props) => {
  const c = hookLinkedListContent[locale];

  return (
    <StartPageShell>
      <HookLinkedListHero content={c.hero} />
      <MemoizedStateSlot content={c.slot} />
      <HookObjectFields content={c.fields} />
      <HookLinkingSteps content={c.linking} />
      <CallOrderMatters content={c.order} />
      <HookLinkedListCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
