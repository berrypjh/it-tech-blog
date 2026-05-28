import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { BeforeAfterBehaviorTable } from './sections/BeforeAfterBehaviorTable';
import { BeforeAfterCodeSection } from './sections/BeforeAfterCodeSection';
import { DependencyReductionSection } from './sections/DependencyReductionSection';
import { EffectEventSeparationSection } from './sections/EffectEventSeparationSection';
import { EffectReconnectSimulator } from './sections/EffectReconnectSimulator';
import { ExistingEffectProblem } from './sections/ExistingEffectProblem';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UsageRestrictionSection } from './sections/UsageRestrictionSection';
import { UseEffectEventHero } from './sections/UseEffectEventHero';
import { useEffectEventContent } from './content';

type Props = { locale: Locale };

export const UseEffectEventPage = ({ locale }: Props) => {
  const c = useEffectEventContent[locale];

  return (
    <StartPageShell>
      <UseEffectEventHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <ExistingEffectProblem content={c.problem} />
      <BeforeAfterCodeSection
        number={c.before.number}
        eyebrow={c.before.eyebrow}
        title={c.before.title}
        description={c.before.description}
        code={c.before.code}
        cardTitle={c.before.problemCardTitle}
        items={c.before.problems}
        summary={c.before.summary}
        variant="before"
        slug="before-code"
      />
      <BeforeAfterCodeSection
        number={c.after.number}
        eyebrow={c.after.eyebrow}
        title={c.after.title}
        description={c.after.description}
        code={c.after.code}
        cardTitle={c.after.improvementCardTitle}
        items={c.after.improvements}
        summary={c.after.summary}
        variant="after"
        slug="after-code"
      />
      <EffectEventSeparationSection content={c.separation} />
      <DependencyReductionSection content={c.dependency} />
      <UsageRestrictionSection content={c.restriction} />
      <BeforeAfterBehaviorTable content={c.comparison} />
      <EffectReconnectSimulator content={c.simulator} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.nextCTA} />
    </StartPageShell>
  );
};
