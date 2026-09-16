import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { NameMappingTable } from './sections/NameMappingTable';
import { OnClickToClickCodeCheckpoint } from './sections/OnClickToClickCodeCheckpoint';
import { OnClickToClickHero } from './sections/OnClickToClickHero';
import { RegisterSimpleEventsFlow } from './sections/RegisterSimpleEventsFlow';
import { RuleVsException } from './sections/RuleVsException';
import { onClickToClickContent } from './content';

type Props = { locale: Locale };

export const OnClickToClickPage = ({ locale }: Props) => {
  const c = onClickToClickContent[locale];

  return (
    <StartPageShell>
      <OnClickToClickHero content={c.hero} />
      <NameMappingTable content={c.mappingTable} />
      <RuleVsException content={c.naming} />
      <RegisterSimpleEventsFlow content={c.registration} />
      <OnClickToClickCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
