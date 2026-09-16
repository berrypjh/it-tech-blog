import { cx } from '@berrypjh/react-ui';
import {
  Gauge,
  Lightbulb,
  type LucideIcon,
  RefreshCw,
  SendHorizontal,
  Sparkles,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BranchId, PriorityReplayActionContent } from '../content';

type Props = { content: PriorityReplayActionContent['extensions'] };

const extensionIcon: Record<BranchId, LucideIcon> = {
  priority: Gauge,
  replay: RefreshCw,
  action: SendHorizontal,
};

export const ThreeExtensions = ({ content }: Props) => (
  <section id="extensions" aria-labelledby="heading-extensions" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="extensions"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((item) => {
        const Icon = extensionIcon[item.id];
        return (
          <ToneCardItem
            key={item.id}
            tone={item.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={item.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[item.tone].text,
                )}
              >
                {item.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {item.description}
              </p>
              <code className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10px] text-[var(--term-fg)] [overflow-wrap:anywhere]">
                {item.snippet}
              </code>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
