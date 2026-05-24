import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneBadge } from '../../../getting-started/_shared/ToneBadge';
import { ToneCard } from '../../../getting-started/_shared/ToneCard';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { SurroundingContent } from '../content';
import { iconByName, InfoIcon, TerminalIcon } from '../icons';

type Props = { content: SurroundingContent['scripts'] };

const TONE = 'violet' as const;

export const ScriptsDeepDive = ({ content }: Props) => {
  const tone = toneTokens[TONE];
  return (
    <section aria-labelledby="heading-scripts" className="space-y-md">
      <SectionHeader
        id="scripts"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<TerminalIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];
          return (
            <li key={card.id}>
              <ToneCard tone={TONE}>
                <ToneIconBox tone={TONE} size="sm">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </ToneIconBox>

                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold font-mono tracking-tight break-keep',
                    tone.text,
                  )}
                >
                  {card.name}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>

                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <ToneBadge tone={TONE}>{card.badge}</ToneBadge>
                </div>
              </ToneCard>
            </li>
          );
        })}
      </ul>

      <div
        className={cn(
          'flex items-start gap-sm rounded-lg border px-md py-md',
          'border-violet-200/80 bg-violet-50/70 text-violet-900',
          'dark:border-violet-800/60 dark:bg-violet-950/30 dark:text-violet-100',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md shrink-0',
            'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
          )}
        >
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">{content.banner}</p>
      </div>
    </section>
  );
};
