import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { RoleCard, RvrContent } from '../content';
import { rvrIcon, SparklesIcon } from '../icons';

type Props = { content: RvrContent['summary'] };

export const RoleSummarySection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-summary" className="space-y-md">
      <SectionHeader
        id="summary"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-md">
        <RoleCardView card={content.cards[0]} />

        {/* 중앙 원형 ≠ 배지 */}
        <div className="flex md:flex-col items-center justify-center md:py-md" aria-hidden="true">
          <span
            className={cn(
              'inline-flex flex-col items-center justify-center gap-0.5 w-20 h-20 rounded-full',
              'border-2 bg-[var(--term-bg)] text-[var(--term-fg)] font-bold font-mono tracking-tight',
              'border-sky-400/80 dark:border-sky-500/80',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span className="text-[10px] uppercase tracking-wider text-teal-600 dark:text-teal-300">
              {content.centerBadge.lead}
            </span>
            <span className="text-2xl leading-none">{content.centerBadge.symbol}</span>
            <span className="text-[10px] uppercase tracking-wider text-violet-600 dark:text-violet-300">
              {content.centerBadge.tail}
            </span>
          </span>
        </div>

        <RoleCardView card={content.cards[1]} />
      </div>
    </section>
  );
};

const RoleCardView = ({ card }: { card: RoleCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = rvrIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        tone.chip,
        tone.border,
        tone.borderHover,
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>{card.name}</h3>
      </header>

      <p
        className={cn(
          'text-md sm:text-lg font-bold leading-snug break-keep',
          'text-[var(--term-fg)]',
        )}
      >
        {card.headline}
      </p>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-1.5">
        {card.tags.map((tag) => (
          <li key={tag}>
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold tracking-tight',
                'bg-[var(--term-bg)]',
                tone.border,
                tone.text,
              )}
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
