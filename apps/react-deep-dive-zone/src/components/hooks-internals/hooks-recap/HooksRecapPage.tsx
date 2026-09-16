import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CoreFunctionsTable } from './sections/CoreFunctionsTable';
import { CoreStructures } from './sections/CoreStructures';
import { HooksRecapCodeCheckpoint } from './sections/HooksRecapCodeCheckpoint';
import { HooksRecapHero } from './sections/HooksRecapHero';
import { WholeFlowRecap } from './sections/WholeFlowRecap';
import { hooksRecapContent } from './content';

type Props = { locale: Locale };

export const HooksRecapPage = ({ locale }: Props) => {
  const c = hooksRecapContent[locale];

  return (
    <StartPageShell>
      <HooksRecapHero content={c.hero} />
      <WholeFlowRecap content={c.fullFlow} />
      <CoreStructures content={c.structures} />
      <CoreFunctionsTable content={c.functions} />
      <HooksRecapCodeCheckpoint content={c.checkpoint} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
