import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { FiberDrawingMission } from './sections/FiberDrawingMission';
import { FiberPointerCodeCheckpoint } from './sections/FiberPointerCodeCheckpoint';
import { FiberTraversalReason } from './sections/FiberTraversalReason';
import { FiberTreeHero } from './sections/FiberTreeHero';
import { FiberTreePointersNextCTA } from './sections/FiberTreePointersNextCTA';
import { JsxToFiberConnection } from './sections/JsxToFiberConnection';
import { ThreeFiberPointers } from './sections/ThreeFiberPointers';
import { UiTreeVsFiberPointers } from './sections/UiTreeVsFiberPointers';
import { fiberTreePointersContent } from './content';

type Props = { locale: Locale };

export const FiberTreePointersPage = ({ locale }: Props) => {
  const c = fiberTreePointersContent[locale];

  return (
    <StartPageShell>
      <FiberTreeHero content={c.hero} />
      <UiTreeVsFiberPointers content={c.comparison} />
      <ThreeFiberPointers content={c.pointers} />
      <JsxToFiberConnection content={c.conversion} />
      <FiberPointerCodeCheckpoint content={c.checkpoint} />
      <FiberTraversalReason content={c.traversal} />
      <FiberDrawingMission content={c.mission} />
      <FiberTreePointersNextCTA content={c.next} />
    </StartPageShell>
  );
};
