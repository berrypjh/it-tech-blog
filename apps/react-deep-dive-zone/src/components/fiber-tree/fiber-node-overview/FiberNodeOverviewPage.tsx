import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { ElementToFiberReview } from './sections/ElementToFiberReview';
import { FiberCodeCheckpoint } from './sections/FiberCodeCheckpoint';
import { FiberFieldGroups } from './sections/FiberFieldGroups';
import { FiberHero } from './sections/FiberHero';
import { FiberIsNotJustNode } from './sections/FiberIsNotJustNode';
import { FiberMiniQuiz } from './sections/FiberMiniQuiz';
import { FiberNextCTA } from './sections/FiberNextCTA';
import { FiberStructurePreview } from './sections/FiberStructurePreview';
import { fiberNodeOverviewContent } from './content';

type Props = { locale: Locale };

export const FiberNodeOverviewPage = ({ locale }: Props) => {
  const c = fiberNodeOverviewContent[locale];

  return (
    <StartPageShell>
      <FiberHero content={c.hero} />
      <ElementToFiberReview content={c.review} />
      <FiberStructurePreview content={c.preview} />
      <FiberFieldGroups content={c.fieldGroups} />
      <FiberIsNotJustNode content={c.notJustNode} />
      <FiberCodeCheckpoint content={c.checkpoint} />
      <FiberMiniQuiz content={c.quiz} />
      <FiberNextCTA content={c.next} />
    </StartPageShell>
  );
};
