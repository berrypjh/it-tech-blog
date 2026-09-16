import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { PlacementUpdateCompareSection } from './sections/PlacementUpdateCompareSection';
import { PropsChangeExampleSection } from './sections/PropsChangeExampleSection';
import { PropsVsTextUpdateSection } from './sections/PropsVsTextUpdateSection';
import { TextChangeExampleSection } from './sections/TextChangeExampleSection';
import { UpdateBeforeAfterSection } from './sections/UpdateBeforeAfterSection';
import { UpdateCodeCheckpoint } from './sections/UpdateCodeCheckpoint';
import { UpdateHeroSection } from './sections/UpdateHeroSection';
import { updatePhaseContent } from './content';

type Props = { locale: Locale };

export const UpdatePhasePage = ({ locale }: Props) => {
  const c = updatePhaseContent[locale];

  return (
    <StartPageShell>
      <UpdateHeroSection content={c.hero} />
      <PropsChangeExampleSection content={c.propsExample} />
      <TextChangeExampleSection content={c.textExample} />
      <PlacementUpdateCompareSection content={c.compare} />
      <UpdateCodeCheckpoint content={c.checkpoint} />
      <UpdateBeforeAfterSection content={c.beforeAfter} />
      <PropsVsTextUpdateSection content={c.propsVsText} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
