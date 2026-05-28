import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { WhySplitArchitectureMap } from './sections/WhySplitArchitectureMap';
import { WhySplitCodeFlow } from './sections/WhySplitCodeFlow';
import { WhySplitHero } from './sections/WhySplitHero';
import { WhySplitMisconception } from './sections/WhySplitMisconception';
import { WhySplitNextCTA } from './sections/WhySplitNextCTA';
import { WhySplitPackageQuestions } from './sections/WhySplitPackageQuestions';
import { WhySplitQuickQuiz } from './sections/WhySplitQuickQuiz';
import { WhySplitReasons } from './sections/WhySplitReasons';
import { whySplitContent } from './content';

type Props = { locale: Locale };

export const WhySplitPage = ({ locale }: Props) => {
  const c = whySplitContent[locale];

  return (
    <StartPageShell>
      <WhySplitHero content={c.hero} architecture={c.architecture} />
      <WhySplitMisconception content={c.misconception} />
      <WhySplitArchitectureMap
        content={c.fullMap}
        architecture={c.architecture}
        sectionId={c.hero.architectureSectionId}
      />
      <WhySplitReasons content={c.reasons} sectionId={c.hero.relationsSectionId} />
      <WhySplitCodeFlow content={c.codeFlow} />
      <WhySplitPackageQuestions content={c.questions} />
      <WhySplitQuickQuiz content={c.quiz} />
      <WhySplitNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
