import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { FourThingsTestsReveal } from './sections/FourThingsTestsReveal';
import { ImplementationTestPairMap } from './sections/ImplementationTestPairMap';
import { ReactCreateElementTestSpotlight } from './sections/ReactCreateElementTestSpotlight';
import { TestCodeHero } from './sections/TestCodeHero';
import { TestCodeNextCTA } from './sections/TestCodeNextCTA';
import { TestNameAnalysisQuiz } from './sections/TestNameAnalysisQuiz';
import { TestReadingSteps } from './sections/TestReadingSteps';
import { WhyTestsMatterComparison } from './sections/WhyTestsMatterComparison';
import { testCodeContent } from './content';

type Props = { locale: Locale };

const COMPARISON_SECTION_ID = 'section-comparison';

export const ReactTestCodeImportancePage = ({ locale }: Props) => {
  const c = testCodeContent[locale];

  return (
    <StartPageShell>
      <TestCodeHero content={c.hero} />
      <WhyTestsMatterComparison content={c.comparison} sectionId={COMPARISON_SECTION_ID} />
      <FourThingsTestsReveal content={c.insights} />
      <ImplementationTestPairMap content={c.pairMap} />
      <ReactCreateElementTestSpotlight content={c.spotlight} />
      <TestReadingSteps content={c.steps} />
      <TestNameAnalysisQuiz content={c.quiz} />
      <TestCodeNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
