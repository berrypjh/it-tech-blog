import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CreateRootCheckpoint } from './sections/CreateRootCheckpoint';
import { ReactDomComparisonTable } from './sections/ReactDomComparisonTable';
import { ReactDomEntrypointsSection } from './sections/ReactDomEntrypointsSection';
import { ReactDomMisconceptionSection } from './sections/ReactDomMisconceptionSection';
import { ReactDomUsageFlowSection } from './sections/ReactDomUsageFlowSection';
import { ReactVsReactDomHero } from './sections/ReactVsReactDomHero';
import { reactVsReactDomContent } from './content';

type Props = { locale: Locale };

const COMPARISON_SECTION_ID = 'section-comparison';

export const ReactVsReactDomPage = ({ locale }: Props) => {
  const c = reactVsReactDomContent[locale];

  return (
    <StartPageShell>
      <ReactVsReactDomHero content={c.hero} />
      <ReactDomMisconceptionSection content={c.misconception} />
      <ReactDomComparisonTable content={c.comparison} sectionId={COMPARISON_SECTION_ID} />
      <ReactDomUsageFlowSection content={c.usage} />
      <CreateRootCheckpoint content={c.checkpoint} />
      <ReactDomEntrypointsSection content={c.entrypoints} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
