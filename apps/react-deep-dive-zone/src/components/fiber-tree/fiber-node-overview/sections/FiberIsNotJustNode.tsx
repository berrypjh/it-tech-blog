import { cx } from '@berrypjh/react-ui';
import { Flag, ListTree, type LucideIcon, RefreshCw, Sparkles, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent, ReasonCard } from '../content';

type Props = { content: FiberNodeOverviewContent['notJustNode'] };

const reasonIcon: Record<ReasonCard['id'], LucideIcon> = {
  tree: ListTree,
  compare: RefreshCw,
  record: Flag,
  priority: Zap,
};

export const FiberIsNotJustNode = ({ content }: Props) => (
  <section
    id="not-just-node"
    aria-labelledby="heading-not-just-node"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="not-just-node"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.reasons.map((reason) => {
        const Icon = reasonIcon[reason.id];
        return (
          <ToneCardItem key={reason.id} tone={reason.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cx(
                'text-sm font-bold tracking-tight break-keep',
                toneTokens[reason.tone].text,
              )}
            >
              {reason.title}
            </h3>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {formatInline(reason.body)}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
