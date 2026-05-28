import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { BottomCTASection } from './sections/BottomCTASection';
import { FinalChecklistSection } from './sections/FinalChecklistSection';
import { FullFlowDiagramSection } from './sections/FullFlowDiagramSection';
import { MisconceptionsSection } from './sections/MisconceptionsSection';
import { NextChapterPreviewSection } from './sections/NextChapterPreviewSection';
import { SourcePathSection } from './sections/SourcePathSection';
import { StepRoleTableSection } from './sections/StepRoleTableSection';
import { SummaryHero } from './sections/SummaryHero';
import { updateToRenderSummaryContent } from './content';

type Props = { locale: Locale };

export const UpdateToRenderSummaryPage = ({ locale }: Props) => {
  const c = updateToRenderSummaryContent[locale];

  return (
    <StartPageShell>
      <SummaryHero content={c.hero} />
      <FullFlowDiagramSection content={c.bigFlow} />
      <StepRoleTableSection content={c.roleTable} />
      <SourcePathSection content={c.sourcePath} />
      <FinalChecklistSection content={c.checklist} />
      <MisconceptionsSection content={c.misconceptions} />
      <NextChapterPreviewSection content={c.nextChapter} />
      <BottomCTASection content={c.cta} />
    </StartPageShell>
  );
};
