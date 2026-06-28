import { cn } from '@it-tech-blog/utils';

import { TakeawayBanner } from '../../../shared/banner';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent } from '../content';
import { FlagIcon, ListTreeIcon, RefreshIcon, SparklesIcon, ZapIcon } from '../icons';

type Props = { content: FiberNodeOverviewContent['notJustNode'] };

const iconMap = {
  tree: ListTreeIcon,
  refresh: RefreshIcon,
  flag: FlagIcon,
  zap: ZapIcon,
} as const;

export const FiberIsNotJustNode = ({ content }: Props) => (
  <section
    id="not-just-node"
    aria-labelledby="heading-not-just-node"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="not-just-node"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <TakeawayBanner lines={content.takeaway} />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.reasons.map((reason) => {
        const Icon = iconMap[reason.iconName];
        return (
          <ToneCardItem key={reason.id} tone={reason.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
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
