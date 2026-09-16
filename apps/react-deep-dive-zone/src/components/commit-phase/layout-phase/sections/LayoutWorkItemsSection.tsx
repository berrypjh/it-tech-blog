import { cx } from '@berrypjh/react-ui';
import { Component, Layers, Link, type LucideIcon, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LayoutPhaseContent, WorkItemId } from '../content';

type Props = { content: LayoutPhaseContent['workItems'] };

const iconMap: Record<WorkItemId, LucideIcon> = {
  zap: Zap,
  component: Component,
  link: Link,
};

export const LayoutWorkItemsSection = ({ content }: Props) => (
  <section
    id="layout-work-items"
    aria-labelledby="heading-layout-work-items"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="layout-work-items"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.items.map((item, idx) => {
        const Icon = iconMap[item.id];
        return (
          <ToneCardItem
            key={item.title}
            tone={item.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
            badge={item.pill}
          >
            <h3
              className={cx(
                'text-md font-bold tracking-tight font-mono break-keep',
                toneTokens[item.tone].text,
              )}
            >
              {item.title}
            </h3>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {item.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
