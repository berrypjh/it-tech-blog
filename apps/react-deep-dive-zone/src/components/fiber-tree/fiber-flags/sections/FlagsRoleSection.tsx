import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FiberFlagsContent, FlagMiniCard } from '../content';
import { AnchorIcon, EyeIcon, FlagIcon, LightbulbIcon, MoveIcon, PencilIcon } from '../icons';

type Props = { content: FiberFlagsContent['flagsRole'] };

const iconMap: Record<FlagMiniCard['id'], React.ComponentType<{ className?: string }>> = {
  placement: MoveIcon,
  update: PencilIcon,
  ref: AnchorIcon,
  visibility: EyeIcon,
};

const tone = {
  emerald: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    label: 'text-emerald-800 dark:text-emerald-100',
    meaning: 'text-emerald-700/80 dark:text-emerald-300',
  },
  sky: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    label: 'text-sky-800 dark:text-sky-100',
    meaning: 'text-sky-700/80 dark:text-sky-300',
  },
  violet: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    label: 'text-violet-800 dark:text-violet-100',
    meaning: 'text-violet-700/80 dark:text-violet-300',
  },
  amber: {
    border:
      'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
    iconWrap: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
    label: 'text-amber-800 dark:text-amber-100',
    meaning: 'text-amber-700/80 dark:text-amber-300',
  },
} as const;

export const FlagsRoleSection = ({ content }: Props) => (
  <section id="flags-role" aria-labelledby="heading-flags-role" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flags-role"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FlagIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'border-emerald-200/80 dark:border-emerald-800/60',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl',
            'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
          )}
        >
          <FlagIcon className="h-6 w-6" />
        </span>
        <div className="flex flex-col min-w-0">
          <code className="font-mono text-md font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            {content.mainTitle}
          </code>
          <p className="text-xsm font-bold text-emerald-700/90 dark:text-emerald-300 break-keep">
            {content.mainDescription}
          </p>
        </div>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {content.examples.map((ex) => (
          <li key={ex.id}>
            <MiniCard card={ex} />
          </li>
        ))}
      </ul>
    </article>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-emerald-300/80 bg-emerald-50/70',
        'dark:border-emerald-800/60 dark:bg-emerald-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 shrink-0"
      >
        <LightbulbIcon className="h-5 w-5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

const MiniCard = ({ card }: { card: FlagMiniCard }) => {
  const t = tone[card.tone];
  const Icon = iconMap[card.id];
  return (
    <article
      className={cn(
        'flex flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-flex items-center justify-center w-9 h-9 rounded-lg', t.iconWrap)}
      >
        <Icon className="h-4 w-4" />
      </span>
      <code className={cn('font-mono text-xsm font-bold tracking-tight', t.label)}>
        {card.label}
      </code>
      <span className={cn('text-[11.5px] font-medium break-keep', t.meaning)}>{card.meaning}</span>
    </article>
  );
};
