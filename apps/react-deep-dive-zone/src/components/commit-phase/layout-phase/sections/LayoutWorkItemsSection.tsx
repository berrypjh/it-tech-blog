import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LayoutPhaseContent, WorkItemIcon } from '../content';
import { ComponentIcon, LayersIcon, LinkIcon, ZapIcon } from '../icons';

type Props = { content: LayoutPhaseContent['workItems'] };

const iconMap: Record<WorkItemIcon, typeof ZapIcon> = {
  zap: ZapIcon,
  component: ComponentIcon,
  link: LinkIcon,
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
      icon={<LayersIcon className="h-5 w-5" />}
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
