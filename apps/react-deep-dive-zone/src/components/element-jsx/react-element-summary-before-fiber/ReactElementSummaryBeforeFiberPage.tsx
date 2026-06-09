import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/FinalLaunchBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ConceptConnectionFlow } from './sections/ConceptConnectionFlow';
import { ElementSummaryHero } from './sections/ElementSummaryHero';
import { FiberChapterPreview } from './sections/FiberChapterPreview';
import { FinalFlowDiagram } from './sections/FinalFlowDiagram';
import { FiveKeyTakeaways } from './sections/FiveKeyTakeaways';
import { JsxElementFiberDomComparison } from './sections/JsxElementFiberDomComparison';
import { reactElementSummaryBeforeFiberContent } from './content';

type Props = { locale: Locale };

export const ReactElementSummaryBeforeFiberPage = ({ locale }: Props) => {
  const c = reactElementSummaryBeforeFiberContent[locale];

  return (
    <StartPageShell>
      <ElementSummaryHero content={c.hero} />
      <FinalFlowDiagram content={c.finalFlow} />
      <JsxElementFiberDomComparison content={c.compare} />
      <FiveKeyTakeaways content={c.summary} />
      <ConceptConnectionFlow content={c.conceptFlow} />
      <FiberChapterPreview content={c.fiberPreview} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
