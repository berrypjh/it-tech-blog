import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ModernReinterpretationTable } from './sections/ModernReinterpretationTable';
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
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
