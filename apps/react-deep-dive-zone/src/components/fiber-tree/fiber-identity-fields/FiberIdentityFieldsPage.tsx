import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ElementTypeVsType } from './sections/ElementTypeVsType';
import { FieldQuickSummary } from './sections/FieldQuickSummary';
import { IdentityCodeCheckpoint } from './sections/IdentityCodeCheckpoint';
import { IdentityHero } from './sections/IdentityHero';
import { IdentityMiniQuiz } from './sections/IdentityMiniQuiz';
import { JsxToFiberMapping } from './sections/JsxToFiberMapping';
import { KeyIdentitySection } from './sections/KeyIdentitySection';
import { WorkTagSection } from './sections/WorkTagSection';
import { fiberIdentityFieldsContent } from './content';

type Props = { locale: Locale };

export const FiberIdentityFieldsPage = ({ locale }: Props) => {
  const c = fiberIdentityFieldsContent[locale];

  return (
    <StartPageShell>
      <IdentityHero content={c.hero} />
      <FieldQuickSummary content={c.summary} />
      <WorkTagSection content={c.workTags} />
      <KeyIdentitySection content={c.keyField} />
      <ElementTypeVsType content={c.typeVs} />
      <IdentityCodeCheckpoint content={c.checkpoint} />
      <JsxToFiberMapping content={c.mapping} />
      <IdentityMiniQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
