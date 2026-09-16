import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BoundaryQualifiers } from './sections/BoundaryQualifiers';
import { CoverageTable } from './sections/CoverageTable';
import { ErrorBoundaryCodeCheckpoint } from './sections/ErrorBoundaryCodeCheckpoint';
import { ErrorBoundaryHero } from './sections/ErrorBoundaryHero';
import { ErrorCaptureSteps } from './sections/ErrorCaptureSteps';
import { errorBoundaryRecoverContent } from './content';

type Props = { locale: Locale };

export const ErrorBoundaryRecoverPage = ({ locale }: Props) => {
  const c = errorBoundaryRecoverContent[locale];

  return (
    <StartPageShell>
      <ErrorBoundaryHero content={c.hero} />
      <BoundaryQualifiers content={c.hooks} />
      <ErrorCaptureSteps content={c.capture} />
      <CoverageTable content={c.coverage} />
      <ErrorBoundaryCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
