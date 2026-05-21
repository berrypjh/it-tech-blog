import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { DebugExperienceBenefits } from './sections/DebugExperienceBenefits';
import { DebugMetaInfoCards } from './sections/DebugMetaInfoCards';
import { NextElementSummaryCta } from './sections/NextElementSummaryCta';
import { ObjectFreezeSection } from './sections/ObjectFreezeSection';
import { OwnerDevInfoHero } from './sections/OwnerDevInfoHero';
import { OwnerDevSourceCheckpoint } from './sections/OwnerDevSourceCheckpoint';
import { OwnerMeaningSection } from './sections/OwnerMeaningSection';
import { ProdDevComparison } from './sections/ProdDevComparison';
import { reactElementOwnerDevInfoContent } from './content';

type Props = { locale: Locale };

export const ReactElementOwnerDevInfoPage = ({ locale }: Props) => {
  const c = reactElementOwnerDevInfoContent[locale];

  return (
    <StartPageShell>
      <OwnerDevInfoHero content={c.hero} />
      <ProdDevComparison content={c.prodDev} />
      <OwnerMeaningSection content={c.owner} />
      <DebugMetaInfoCards content={c.debug} />
      <ObjectFreezeSection content={c.freeze} />
      <OwnerDevSourceCheckpoint content={c.checkpoint} />
      <DebugExperienceBenefits content={c.benefits} />
      <NextElementSummaryCta content={c.next} />
    </StartPageShell>
  );
};
