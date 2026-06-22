import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FollowAlongMission } from './sections/FollowAlongMission';
import { FrameworkReactBoundarySection } from './sections/FrameworkReactBoundarySection';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { ModuleBoundaryExplorer } from './sections/ModuleBoundaryExplorer';
import { ReactServerExportConditionSection } from './sections/ReactServerExportConditionSection';
import { ServerComponentDefinitionCards } from './sections/ServerComponentDefinitionCards';
import { ServerComponentsHero } from './sections/ServerComponentsHero';
import { ServerFunctionCallFlow } from './sections/ServerFunctionCallFlow';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UseClientBoundarySection } from './sections/UseClientBoundarySection';
import { UseServerFunctionSection } from './sections/UseServerFunctionSection';
import { serverComponentsContractContent } from './content';

type Props = { locale: Locale };

export const ServerComponentsContractPage = ({ locale }: Props) => {
  const c = serverComponentsContractContent[locale];

  return (
    <StartPageShell>
      <ServerComponentsHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <ServerComponentDefinitionCards content={c.definition} />
      <UseClientBoundarySection content={c.useClient} />
      <UseServerFunctionSection content={c.useServer} />
      <ServerFunctionCallFlow content={c.callFlow} />
      <ReactServerExportConditionSection content={c.reactServerExport} />
      <FrameworkReactBoundarySection content={c.frameworkBoundary} />
      <ModuleBoundaryExplorer content={c.explorer} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
