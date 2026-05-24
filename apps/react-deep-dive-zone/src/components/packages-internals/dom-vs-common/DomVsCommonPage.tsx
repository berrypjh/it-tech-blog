import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { BoundaryQuizSection } from './sections/BoundaryQuizSection';
import { ComparisonTableSection } from './sections/ComparisonTableSection';
import { ConcernsSection } from './sections/ConcernsSection';
import { DvcHero } from './sections/DvcHero';
import { DvcNextCTA } from './sections/DvcNextCTA';
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
      <BoundaryQuizSection content={c.quiz} />
      <PathSection content={c.path} />
      <DvcNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
