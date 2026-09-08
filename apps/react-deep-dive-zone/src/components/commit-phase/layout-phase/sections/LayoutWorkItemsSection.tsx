import { cn } from '@it-tech-blog/utils';

import { Component, Layers, Link, Zap } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LayoutPhaseContent, WorkItemIcon } from '../content';

type Props = { content: LayoutPhaseContent['workItems'] };

const iconMap: Record<WorkItemIcon, typeof Zap> = {
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
    <SectionHeader
      id="layout-work-items"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.items.map((item, idx) => {
        const Icon = iconMap[item.iconName];
        return (
          <ToneCardItem
            key={item.title}
            tone={item.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
            badge={item.pill}
          >
            <h3
              className={cn(
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
