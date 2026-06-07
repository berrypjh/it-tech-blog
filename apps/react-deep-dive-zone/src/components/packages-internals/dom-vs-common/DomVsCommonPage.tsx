import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ComparisonTableSection } from './sections/ComparisonTableSection';
import { ConcernsSection } from './sections/ConcernsSection';
import { DvcHero } from './sections/DvcHero';
import { FileCompareSection } from './sections/FileCompareSection';
import { PathSection } from './sections/PathSection';
import { ReadingMethodSection } from './sections/ReadingMethodSection';
import { dvcContent } from './content';

type Props = { locale: Locale };

const TABLE_SECTION_ID = 'section-table';
const FILE_COMPARE_SECTION_ID = 'section-file-compare';

export const DomVsCommonPage = ({ locale }: Props) => {
  const c = dvcContent[locale];

  return (
    <StartPageShell>
      <DvcHero content={c.hero} />
      <ComparisonTableSection content={c.table} sectionId={TABLE_SECTION_ID} />
      <ReadingMethodSection content={c.reading} />
      <FileCompareSection content={c.fileCompare} sectionId={FILE_COMPARE_SECTION_ID} />
      <ConcernsSection content={c.concerns} />
      <PathSection content={c.path} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
