import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BaseMappingTable } from './sections/BaseMappingTable';
import { NewApiCards } from './sections/NewApiCards';
import { React19HooksCodeCheckpoint } from './sections/React19HooksCodeCheckpoint';
import { React19HooksHero } from './sections/React19HooksHero';
import { SourceReadingOrder } from './sections/SourceReadingOrder';
import { react19HooksContent } from './content';

type Props = { locale: Locale };

export const React19HooksPage = ({ locale }: Props) => {
  const c = react19HooksContent[locale];

  return (
    <StartPageShell>
      <React19HooksHero content={c.hero} />
      <NewApiCards content={c.apis} />
      <BaseMappingTable content={c.compare} />
      <SourceReadingOrder content={c.readingOrder} />
      <React19HooksCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
