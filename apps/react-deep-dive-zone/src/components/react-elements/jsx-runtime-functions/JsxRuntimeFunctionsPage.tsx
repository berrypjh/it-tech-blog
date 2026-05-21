import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { JsxRuntimeHero } from './sections/JsxRuntimeHero';
import { RuntimeEntryMap } from './sections/RuntimeEntryMap';
import { RuntimeExampleCards } from './sections/RuntimeExampleCards';
import { RuntimeLearningQuestion } from './sections/RuntimeLearningQuestion';
import { RuntimeModeComparison } from './sections/RuntimeModeComparison';
import { RuntimeNextPageCta } from './sections/RuntimeNextPageCta';
import { RuntimeRoleComparisonTable } from './sections/RuntimeRoleComparisonTable';
import { RuntimeSourceCheckpoints } from './sections/RuntimeSourceCheckpoints';
import { jsxRuntimeFunctionsContent } from './content';

type Props = { locale: Locale };

export const JsxRuntimeFunctionsPage = ({ locale }: Props) => {
  const c = jsxRuntimeFunctionsContent[locale];

  return (
    <StartPageShell>
      <JsxRuntimeHero content={c.hero} />
      <RuntimeEntryMap content={c.entryMap} />
      <RuntimeRoleComparisonTable content={c.comparison} />
      <RuntimeExampleCards content={c.examples} />
      <RuntimeSourceCheckpoints content={c.checkpoints} />
      <RuntimeModeComparison content={c.modes} />
      <RuntimeLearningQuestion content={c.question} />
      <RuntimeNextPageCta content={c.next} />
    </StartPageShell>
  );
};
