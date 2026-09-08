import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { PdHero } from './sections/PdHero';
import { RecapSection } from './sections/RecapSection';
import { UserFlowSection } from './sections/UserFlowSection';
import { ValuesSection } from './sections/ValuesSection';
import { packageDesignContent } from './content';

type Props = { locale: Locale };

export const PackageDesignPage = ({ locale }: Props) => {
  const c = packageDesignContent[locale];

  return (
    <StartPageShell>
      <PdHero content={c.hero} />
      <RecapSection content={c.recap} />
      <ValuesSection content={c.values} />
      <UserFlowSection content={c.userFlow} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
