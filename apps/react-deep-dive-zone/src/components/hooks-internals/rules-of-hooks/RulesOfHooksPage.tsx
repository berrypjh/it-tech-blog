import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { RulesOfHooksCodeCheckpoint } from './sections/RulesOfHooksCodeCheckpoint';
import { RulesOfHooksHero } from './sections/RulesOfHooksHero';
import { SlotMatchingDiff } from './sections/SlotMatchingDiff';
import { TwoRulesAndReasons } from './sections/TwoRulesAndReasons';
import { WhereOrderBreaks } from './sections/WhereOrderBreaks';
import { rulesOfHooksContent } from './content';

type Props = { locale: Locale };

export const RulesOfHooksPage = ({ locale }: Props) => {
  const c = rulesOfHooksContent[locale];

  return (
    <StartPageShell>
      <RulesOfHooksHero content={c.hero} />
      <WhereOrderBreaks content={c.breaking} />
      <SlotMatchingDiff content={c.matching} />
      <TwoRulesAndReasons content={c.rules} />
      <RulesOfHooksCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
