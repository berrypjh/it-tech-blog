import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { WhySplitArchitectureMap } from './sections/WhySplitArchitectureMap';
import { WhySplitCodeFlow } from './sections/WhySplitCodeFlow';
import { WhySplitHero } from './sections/WhySplitHero';
import { WhySplitMisconception } from './sections/WhySplitMisconception';
import { WhySplitPackageQuestions } from './sections/WhySplitPackageQuestions';
import { WhySplitReasons } from './sections/WhySplitReasons';
import { whySplitContent } from './content';

type Props = { locale: Locale };

export const WhySplitPage = ({ locale }: Props) => {
  const c = whySplitContent[locale];

  return (
    <StartPageShell>
      <WhySplitHero content={c.hero} architecture={c.architecture} />
      <WhySplitMisconception content={c.misconception} />
      <WhySplitArchitectureMap content={c.fullMap} architecture={c.architecture} />
      <WhySplitReasons content={c.reasons} />
      <WhySplitCodeFlow content={c.codeFlow} />
      <WhySplitPackageQuestions content={c.questions} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
