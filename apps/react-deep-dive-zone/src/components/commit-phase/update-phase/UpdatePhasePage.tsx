import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { PlacementUpdateCompareSection } from './sections/PlacementUpdateCompareSection';
import { PropsChangeExampleSection } from './sections/PropsChangeExampleSection';
import { PropsVsTextUpdateSection } from './sections/PropsVsTextUpdateSection';
import { TextChangeExampleSection } from './sections/TextChangeExampleSection';
import { UpdateBeforeAfterSection } from './sections/UpdateBeforeAfterSection';
import { UpdateCodeCheckpointSection } from './sections/UpdateCodeCheckpointSection';
import { UpdateHeroSection } from './sections/UpdateHeroSection';
import { UpdateQuizAndNextSection } from './sections/UpdateQuizAndNextSection';
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
      <UpdateCodeCheckpointSection content={c.checkpoint} />
      <UpdateBeforeAfterSection content={c.beforeAfter} />
      <PropsVsTextUpdateSection content={c.propsVsText} />
      <UpdateQuizAndNextSection quiz={c.quiz} cta={c.cta} />
    </StartPageShell>
  );
};
