import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { SharedHero } from './sections/SharedHero';
import { SharedPackageConnectionDiagram } from './sections/SharedPackageConnectionDiagram';
import { SharedRepresentativeFiles } from './sections/SharedRepresentativeFiles';
import { SharedUsageCheckpoint } from './sections/SharedUsageCheckpoint';
import { WhyReactSymbolsMatter } from './sections/WhyReactSymbolsMatter';
import { WhySharedSection } from './sections/WhySharedSection';
import { sharedContent } from './content';

type Props = { locale: Locale };

const WHY_SECTION_ID = 'section-why';

export const ReactSharedPackagePage = ({ locale }: Props) => {
  const c = sharedContent[locale];

  return (
    <StartPageShell>
      <SharedHero content={c.hero} />
      <WhySharedSection content={c.why} sectionId={WHY_SECTION_ID} />
      <SharedRepresentativeFiles content={c.files} />
      <WhyReactSymbolsMatter content={c.symbols} />
      <SharedUsageCheckpoint content={c.checkpoint} />
      <SharedPackageConnectionDiagram content={c.connection} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
