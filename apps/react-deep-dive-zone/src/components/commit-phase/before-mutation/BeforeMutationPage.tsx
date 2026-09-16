import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BeforeMutationCodeCheckpoint } from './sections/BeforeMutationCodeCheckpoint';
import { BeforeMutationHeroSection } from './sections/BeforeMutationHeroSection';
import { BeforeMutationModernCorrectionSection } from './sections/BeforeMutationModernCorrectionSection';
import { BeforeMutationNeedSection } from './sections/BeforeMutationNeedSection';
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
      <BeforeMutationCodeCheckpoint content={c.checkpoint} />
      <RootBeforeMutationSection content={c.rootPerspective} />
      <BeforeMutationModernCorrectionSection content={c.modern} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
