import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { BeforeMutationCodeCheckpointSection } from './sections/BeforeMutationCodeCheckpointSection';
import { BeforeMutationHeroSection } from './sections/BeforeMutationHeroSection';
import { BeforeMutationModernCorrectionSection } from './sections/BeforeMutationModernCorrectionSection';
import { BeforeMutationNeedSection } from './sections/BeforeMutationNeedSection';
import { BeforeMutationQuizSection } from './sections/BeforeMutationQuizSection';
import { ClassSnapshotSection } from './sections/ClassSnapshotSection';
import { RootBeforeMutationSection } from './sections/RootBeforeMutationSection';
import { SnapshotConceptSection } from './sections/SnapshotConceptSection';
import { beforeMutationContent } from './content';

type Props = { locale: Locale };

export const BeforeMutationPage = ({ locale }: Props) => {
  const c = beforeMutationContent[locale];

  return (
    <StartPageShell>
      <BeforeMutationHeroSection content={c.hero} />
      <BeforeMutationNeedSection content={c.why} />
      <SnapshotConceptSection content={c.snapshot} />
      <ClassSnapshotSection content={c.classSnapshot} />
      <BeforeMutationCodeCheckpointSection content={c.checkpoint} />
      <RootBeforeMutationSection content={c.rootPerspective} />
      <BeforeMutationModernCorrectionSection content={c.modern} />
      <BeforeMutationQuizSection quiz={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
