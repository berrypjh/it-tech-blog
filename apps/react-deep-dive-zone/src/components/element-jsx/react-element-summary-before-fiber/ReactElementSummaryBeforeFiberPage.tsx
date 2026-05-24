import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ConceptConnectionQuiz } from './sections/ConceptConnectionQuiz';
import { ElementSummaryHero } from './sections/ElementSummaryHero';
import { FiberChapterPreview } from './sections/FiberChapterPreview';
import { FinalChecklist } from './sections/FinalChecklist';
import { FinalFlowDiagram } from './sections/FinalFlowDiagram';
import { FiveKeyTakeaways } from './sections/FiveKeyTakeaways';
import { JsxElementFiberDomComparison } from './sections/JsxElementFiberDomComparison';
import { NextFiberChapterCta } from './sections/NextFiberChapterCta';
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
      <ConceptConnectionQuiz content={c.quiz} />
      <FiberChapterPreview content={c.fiberPreview} />
      <FinalChecklist content={c.checklist} />
      <NextFiberChapterCta content={c.next} />
    </StartPageShell>
  );
};
