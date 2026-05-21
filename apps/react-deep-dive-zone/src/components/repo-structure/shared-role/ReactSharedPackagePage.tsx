import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { SharedHero } from './sections/SharedHero';
import { SharedNextCTA } from './sections/SharedNextCTA';
import { SharedPackageConnectionDiagram } from './sections/SharedPackageConnectionDiagram';
import { SharedQuickQuiz } from './sections/SharedQuickQuiz';
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
      <SharedQuickQuiz content={c.quiz} />
      <SharedNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
