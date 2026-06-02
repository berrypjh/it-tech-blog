import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { BoundaryCodeEntryMap } from './sections/BoundaryCodeEntryMap';
import { BoundaryMeetingPoints } from './sections/BoundaryMeetingPoints';
import { NextPageCTA } from './sections/NextPageCTA';
import { ReactNextBoundaryHero } from './sections/ReactNextBoundaryHero';
import { ResponsibilityQuiz } from './sections/ResponsibilityQuiz';
import { ResponsibilitySplitCards } from './sections/ResponsibilitySplitCards';
import { reactNextBoundaryContent } from './content';

type Props = { locale: Locale };

export const ReactNextBoundaryPage = ({ locale }: Props) => {
  const c = reactNextBoundaryContent[locale];

  return (
    <StartPageShell>
      <ReactNextBoundaryHero content={c.hero} />
      <ResponsibilitySplitCards content={c.split} />
      <ResponsibilityQuiz content={c.quiz} />
      <BoundaryMeetingPoints content={c.boundary} />
      <BoundaryCodeEntryMap content={c.codeEntry} />
      <NextPageCTA content={c.nextStep} />
    </StartPageShell>
  );
};
