import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ExpansionCards } from './sections/ExpansionCards';
import { PrerenderResume } from './sections/PrerenderResume';
import { React192CodeCheckpoint } from './sections/React192CodeCheckpoint';
import { React192Hero } from './sections/React192Hero';
import { ReadingRoutine } from './sections/ReadingRoutine';
import { VersionScopeTable } from './sections/VersionScopeTable';
import { react192ReadingMethodContent } from './content';

type Props = { locale: Locale };

export const React192ReadingMethodPage = ({ locale }: Props) => {
  const c = react192ReadingMethodContent[locale];

  return (
    <StartPageShell>
      <React192Hero content={c.hero} />
      <ExpansionCards content={c.expansions} />
      <PrerenderResume content={c.resume} />
      <ReadingRoutine content={c.routine} />
      <VersionScopeTable content={c.versions} />
      <React192CodeCheckpoint content={c.checkpoint} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
