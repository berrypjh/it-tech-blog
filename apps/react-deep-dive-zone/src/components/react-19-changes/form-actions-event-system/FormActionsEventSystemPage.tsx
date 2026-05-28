import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { ActionExtractionSection } from './sections/ActionExtractionSection';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { FormActionPipelineInteractor } from './sections/FormActionPipelineInteractor';
import { FormActionPluginRoleGrid } from './sections/FormActionPluginRoleGrid';
import { FormActionsHero } from './sections/FormActionsHero';
import { FormDataCreationSection } from './sections/FormDataCreationSection';
import { InternalCodePreviewSection } from './sections/InternalCodePreviewSection';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
import { PendingStateSection } from './sections/PendingStateSection';
import { StartHostTransitionSection } from './sections/StartHostTransitionSection';
import { SubmitEventPipeline } from './sections/SubmitEventPipeline';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UserFacingFormCodeSection } from './sections/UserFacingFormCodeSection';
import { formActionsEventSystemContent } from './content';

type Props = { locale: Locale };

export const FormActionsEventSystemPage = ({ locale }: Props) => {
  const c = formActionsEventSystemContent[locale];

  return (
    <StartPageShell>
      <FormActionsHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <UserFacingFormCodeSection content={c.userFormCode} />
      <SubmitEventPipeline content={c.submitPipeline} />
      <FormActionPluginRoleGrid content={c.pluginRole} />
      <ActionExtractionSection content={c.actionExtraction} />
      <FormDataCreationSection content={c.formData} />
      <PendingStateSection content={c.pendingState} />
      <StartHostTransitionSection content={c.startHostTransition} />
      <InternalCodePreviewSection content={c.internalCode} />
      <FormActionPipelineInteractor content={c.interactor} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.nextCTA} />
    </StartPageShell>
  );
};
