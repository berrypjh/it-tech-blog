import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

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
      <MisconceptionsSection content={c.misconceptions} />
      <NextChapterPreviewSection content={c.nextChapter} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
