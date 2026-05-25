import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ElementRefDeprecationSection } from './sections/ElementRefDeprecationSection';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { InternalCodePreviewSection } from './sections/InternalCodePreviewSection';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
import { PatternSection } from './sections/PatternSection';
import { PropsRefSourceOfTruthFlow } from './sections/PropsRefSourceOfTruthFlow';
import { RefAsPropHero } from './sections/RefAsPropHero';
import { RefPathComparisonInteractor } from './sections/RefPathComparisonInteractor';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UseImperativeHandleSection } from './sections/UseImperativeHandleSection';
import { WhatChangedCards } from './sections/WhatChangedCards';
import { refAsPropElementShapeContent } from './content';

type Props = { locale: Locale };

export const RefAsPropElementShapePage = ({ locale }: Props) => {
  const c = refAsPropElementShapeContent[locale];

  return (
    <StartPageShell>
      <RefAsPropHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <PatternSection
        number={c.forwardRefPattern.number}
        eyebrow={c.forwardRefPattern.eyebrow}
        title={c.forwardRefPattern.title}
        path="react18"
        code={c.forwardRefPattern.code}
        explanationTitle={c.forwardRefPattern.explanationTitle}
        explanationPoints={c.forwardRefPattern.explanationPoints}
        slug="forward-ref-pattern"
      />
      <PatternSection
        number={c.refAsPropPattern.number}
        eyebrow={c.refAsPropPattern.eyebrow}
        title={c.refAsPropPattern.title}
        path="react19"
        code={c.refAsPropPattern.code}
        explanationTitle={c.refAsPropPattern.explanationTitle}
        explanationPoints={c.refAsPropPattern.explanationPoints}
        slug="ref-as-prop-pattern"
      />
      <WhatChangedCards content={c.whatChanged} />
      <ElementRefDeprecationSection content={c.elementRefDeprecation} />
      <PropsRefSourceOfTruthFlow content={c.propsRefFlow} />
      <UseImperativeHandleSection content={c.useImperative} />
      <InternalCodePreviewSection content={c.internalCode} />
      <RefPathComparisonInteractor content={c.pathInteractor} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.nextCTA} />
    </StartPageShell>
  );
};
