import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FileMapTable } from './sections/FileMapTable';
import { FourCases } from './sections/FourCases';
import { RecoveryModelCodeCheckpoint } from './sections/RecoveryModelCodeCheckpoint';
import { RecoveryModelHero } from './sections/RecoveryModelHero';
import { SharedShape } from './sections/SharedShape';
import { recoveryModelOverviewContent } from './content';

type Props = { locale: Locale };

export const RecoveryModelOverviewPage = ({ locale }: Props) => {
  const c = recoveryModelOverviewContent[locale];

  return (
    <StartPageShell>
      <RecoveryModelHero content={c.hero} />
      <SharedShape content={c.shape} />
      <FourCases content={c.cases} />
      <FileMapTable content={c.files} />
      <RecoveryModelCodeCheckpoint content={c.checkpoint} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
