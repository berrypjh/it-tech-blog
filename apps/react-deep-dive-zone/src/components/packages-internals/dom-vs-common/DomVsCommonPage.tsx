import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ComparisonTableSection } from './sections/ComparisonTableSection';
import { ConcernsSection } from './sections/ConcernsSection';
import { DvcHero } from './sections/DvcHero';
import { FileCompareSection } from './sections/FileCompareSection';
import { PathSection } from './sections/PathSection';
import { ReadingMethodSection } from './sections/ReadingMethodSection';
import { dvcContent } from './content';

type Props = { locale: Locale };

export const DomVsCommonPage = ({ locale }: Props) => {
  const c = dvcContent[locale];

  return (
    <StartPageShell>
      <DvcHero content={c.hero} />
      <ComparisonTableSection content={c.table} />
      <ReadingMethodSection content={c.reading} />
      <FileCompareSection content={c.fileCompare} />
      <ConcernsSection content={c.concerns} />
      <PathSection content={c.path} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
