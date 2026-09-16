import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ApiShapeCompare } from './sections/ApiShapeCompare';
import { BasicStateReducerCode } from './sections/BasicStateReducerCode';
import { ChoosingBetweenThem } from './sections/ChoosingBetweenThem';
import { SharedInternalsTable } from './sections/SharedInternalsTable';
import { UseReducerCodeCheckpoint } from './sections/UseReducerCodeCheckpoint';
import { UseReducerSharedHero } from './sections/UseReducerSharedHero';
import { useReducerSharedContent } from './content';

type Props = { locale: Locale };

export const UseReducerSharedPage = ({ locale }: Props) => {
  const c = useReducerSharedContent[locale];

  return (
    <StartPageShell>
      <UseReducerSharedHero content={c.hero} />
      <ApiShapeCompare content={c.apiShape} />
      <SharedInternalsTable content={c.sharedStructure} />
      <BasicStateReducerCode content={c.basicReducer} />
      <ChoosingBetweenThem content={c.choosing} />
      <UseReducerCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
