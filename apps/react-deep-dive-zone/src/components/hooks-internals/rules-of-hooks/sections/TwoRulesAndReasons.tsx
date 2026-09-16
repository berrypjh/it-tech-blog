import { ArrowUpToLine, Component, Lightbulb, type LucideIcon, ScrollText } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import type { RuleId, RulesOfHooksContent } from '../content';

type Props = { content: RulesOfHooksContent['rules'] };

const ruleIcon: Record<RuleId, LucideIcon> = {
  'top-level': ArrowUpToLine,
  'react-only': Component,
};

export const TwoRulesAndReasons = ({ content }: Props) => (
  <section id="rules" aria-labelledby="heading-rules" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="rules"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ScrollText className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.items.map((rule) => {
        const Icon = ruleIcon[rule.id];
        return (
          <ToneCardItem
            key={rule.id}
            tone={rule.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={rule.statement}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
                {rule.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {rule.reason}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
