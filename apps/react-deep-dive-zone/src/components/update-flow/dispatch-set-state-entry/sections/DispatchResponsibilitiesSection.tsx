import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DispatchResponsibilityIconName, DispatchSetStateEntryContent } from '../content';
import { BoxIcon, FunctionSquareIcon, TargetIcon, ZapIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['responsibilities'] };

const iconMap: Record<DispatchResponsibilityIconName, typeof BoxIcon> = {
  target: TargetIcon,
  box: BoxIcon,
  zap: ZapIcon,
};

export const DispatchResponsibilitiesSection = ({ content }: Props) => (
  <section
    id="responsibilities"
    aria-labelledby="heading-responsibilities"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="responsibilities"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<FunctionSquareIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem
            key={card.number}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.number}
          >
            <h3
              className={cn(
                'text-md sm:text-lg font-bold leading-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>

            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 font-mono text-xxsm sm:text-xsm leading-snug text-slate-100">
              <code>{card.code}</code>
            </pre>

            <span
              aria-hidden="true"
              className="block h-px w-full bg-gradient-to-r from-transparent via-[var(--term-border)] to-transparent"
            />

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
