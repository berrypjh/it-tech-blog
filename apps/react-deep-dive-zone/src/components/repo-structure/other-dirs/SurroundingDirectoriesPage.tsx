import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { CompilerIntroSection } from './sections/CompilerIntroSection';
import { DirectoryChoiceGuide } from './sections/DirectoryChoiceGuide';
import { DirectoryComparisonCards } from './sections/DirectoryComparisonCards';
import { ErrorCodesFilePreview } from './sections/ErrorCodesFilePreview';
import { FixturesDeepDive } from './sections/FixturesDeepDive';
import { ScriptsDeepDive } from './sections/ScriptsDeepDive';
import { SurroundingDirectoriesHero } from './sections/SurroundingDirectoriesHero';
import { SurroundingDirectoriesNextCTA } from './sections/SurroundingDirectoriesNextCTA';
import { surroundingContent } from './content';

type Props = { locale: Locale };

const COMPARISON_SECTION_ID = 'section-comparison';

export const SurroundingDirectoriesPage = ({ locale }: Props) => {
  const c = surroundingContent[locale];

  return (
    <StartPageShell>
      <SurroundingDirectoriesHero content={c.hero} />
      <DirectoryComparisonCards content={c.comparison} sectionId={COMPARISON_SECTION_ID} />
      <FixturesDeepDive content={c.fixtures} />
      <ScriptsDeepDive content={c.scripts} />
      <CompilerIntroSection content={c.compiler} />
      <ErrorCodesFilePreview content={c.errorCodes} />
      <DirectoryChoiceGuide content={c.choice} />
      <SurroundingDirectoriesNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
