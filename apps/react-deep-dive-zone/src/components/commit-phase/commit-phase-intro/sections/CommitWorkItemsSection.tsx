import { cn } from '@it-tech-blog/utils';

import { Link, Monitor, Pencil, PlusSquare, Sparkles, Trash2, Zap } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitPhaseIntroContent, WorkItemIcon } from '../content';

type Props = { content: CommitPhaseIntroContent['work'] };

const iconMap: Record<WorkItemIcon, typeof Pencil> = {
  plusSquare: PlusSquare,
  pencil: Pencil,
  trash: Trash2,
  link: Link,
  monitor: Monitor,
  zap: Zap,
};

export const CommitWorkItemsSection = ({ content }: Props) => (
  <section
    id="commit-work-items"
    aria-labelledby="heading-commit-work-items"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="commit-work-items"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
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
            badge={item.subtitle}
          >
            <h3
              className={cn(
                'text-sm sm:text-md font-bold leading-tight break-keep',
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
