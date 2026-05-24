import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { InteractivePriorityMap } from './sections/InteractivePriorityMap';
import { PriorityAxesHero } from './sections/PriorityAxesHero';
import { PriorityAxesOverview } from './sections/PriorityAxesOverview';
import { PriorityAxisDetailGrid } from './sections/PriorityAxisDetailGrid';
import { PriorityCodePreview } from './sections/PriorityCodePreview';
import { PriorityComparisonTable } from './sections/PriorityComparisonTable';
import { PriorityConnectionFlow } from './sections/PriorityConnectionFlow';
import { PriorityFollowAlongMission } from './sections/PriorityFollowAlongMission';
import { PriorityKeyTakeaways } from './sections/PriorityKeyTakeaways';
import { PriorityNextCTA } from './sections/PriorityNextCTA';
import { PriorityQuestionPanel } from './sections/PriorityQuestionPanel';
import { threePriorityAxesContent } from './content';

type Props = { locale: Locale };

export const ThreePriorityAxesPage = ({ locale }: Props) => {
  const c = threePriorityAxesContent[locale];

  return (
    <StartPageShell>
      <PriorityAxesHero content={c.hero} />
      <PriorityQuestionPanel content={c.question} />
      <PriorityAxesOverview content={c.overview} axes={c.hero.axes} />
      <PriorityAxisDetailGrid content={c.detail} />
      <PriorityConnectionFlow content={c.connection} />
      <PriorityComparisonTable content={c.comparison} />
      <PriorityCodePreview content={c.code} />
      <InteractivePriorityMap content={c.interactive} />
      <PriorityFollowAlongMission content={c.mission} />
      <PriorityKeyTakeaways content={c.takeaways} />
      <PriorityNextCTA content={c.cta} />
    </StartPageShell>
  );
};
