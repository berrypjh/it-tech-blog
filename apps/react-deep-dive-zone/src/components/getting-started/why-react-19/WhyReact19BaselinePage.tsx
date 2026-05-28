import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { LearningPrinciplesPanel } from './sections/LearningPrinciplesPanel';
import { ModernReinterpretationTable } from './sections/ModernReinterpretationTable';
import { NextPageBanner } from './sections/NextPageBanner';
import { OfficialChangeRecordCards } from './sections/OfficialChangeRecordCards';
import { React19FocusTopics } from './sections/React19FocusTopics';
import { React19Hero } from './sections/React19Hero';
import { TerminologyShiftCompare } from './sections/TerminologyShiftCompare';
import { VersionEvolutionTimeline } from './sections/VersionEvolutionTimeline';
import { whyReact19Content } from './content';

type Props = { locale: Locale };

export const WhyReact19BaselinePage = ({ locale }: Props) => {
  const c = whyReact19Content[locale];

  return (
    <StartPageShell>
      <React19Hero content={c.hero} />
      <TerminologyShiftCompare content={c.terminology} />
      <VersionEvolutionTimeline content={c.timeline} />
      <React19FocusTopics content={c.focusTopics} />
      <ModernReinterpretationTable content={c.reinterpret} />
      <OfficialChangeRecordCards content={c.resources} />
      <LearningPrinciplesPanel content={c.principles} />
      <NextPageBanner content={c.nextStep} />
    </StartPageShell>
  );
};
