import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DispatchSelectionCodeCheckpoint } from './sections/DispatchSelectionCodeCheckpoint';
import { DispatchSelectionHero } from './sections/DispatchSelectionHero';
import { PerEventTable } from './sections/PerEventTable';
import { PriorityGrades } from './sections/PriorityGrades';
import { WrapperSelectionFlow } from './sections/WrapperSelectionFlow';
import { dispatchSelectionContent } from './content';

type Props = { locale: Locale };

export const DispatchSelectionPage = ({ locale }: Props) => {
  const c = dispatchSelectionContent[locale];

  return (
    <StartPageShell>
      <DispatchSelectionHero content={c.hero} />
      <PriorityGrades content={c.grades} />
      <PerEventTable content={c.table} />
      <WrapperSelectionFlow content={c.selection} />
      <DispatchSelectionCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
