import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FragmentFlow } from './sections/FragmentFlow';
import { FragmentModeHero } from './sections/FragmentModeHero';
import { OtherSpecialTypes } from './sections/OtherSpecialTypes';
import { SourceCodeCheckpoint } from './sections/SourceCodeCheckpoint';
import { StrictModeFlow } from './sections/StrictModeFlow';
import { WorkTagCards } from './sections/WorkTagCards';
import { fragmentModeFiberContent } from './content';

type Props = { locale: Locale };

export const FragmentModeFiberPage = ({ locale }: Props) => {
  const c = fragmentModeFiberContent[locale];

  return (
    <StartPageShell>
      <FragmentModeHero content={c.hero} />
      <FragmentFlow content={c.fragmentFlow} />
      <StrictModeFlow content={c.strictFlow} />
      <SourceCodeCheckpoint content={c.checkpoint} />
      <WorkTagCards content={c.workTags} />
      <OtherSpecialTypes content={c.others} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
