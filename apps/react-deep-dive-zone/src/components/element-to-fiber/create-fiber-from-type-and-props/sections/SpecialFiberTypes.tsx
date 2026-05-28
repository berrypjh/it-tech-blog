import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CreateFiberFromTypeAndPropsContent, SpecialCard } from '../content';
import { AtomIcon, EyeOffIcon, InfoIcon, ShieldCheckIcon, SparklesIcon, ZapIcon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['special'] };

const iconMap = {
  shield: ShieldCheckIcon,
  eyeoff: EyeOffIcon,
  zap: ZapIcon,
  sparkles: SparklesIcon,
} as const;

const accentTokens = {
  blue: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/70',
    chip: 'bg-sky-100 text-sky-700 border-sky-300/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/70',
    text: 'text-sky-700 dark:text-sky-300',
  },
  cyan: {
    border: 'border-cyan-300/80 dark:border-cyan-700/70',
    borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-500/70',
    chip: 'bg-cyan-100 text-cyan-700 border-cyan-300/80 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-700/70',
    text: 'text-cyan-700 dark:text-cyan-300',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    chip: 'bg-violet-100 text-violet-700 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
    text: 'text-violet-700 dark:text-violet-300',
  },
  sky: {
    border: 'border-indigo-300/80 dark:border-indigo-700/70',
    borderHover: 'hover:border-indigo-400 dark:hover:border-indigo-500/70',
    chip: 'bg-indigo-100 text-indigo-700 border-indigo-300/80 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-700/70',
    text: 'text-indigo-700 dark:text-indigo-300',
  },
} as const;

export const SpecialFiberTypes = ({ content }: Props) => (
  <section id="special" aria-labelledby="heading-special" className="space-y-md scroll-mt-xl">
    <div className="flex flex-col gap-sm">
      <SectionBadgeHeader
        id="special"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<AtomIcon className="h-5 w-5" />}
      />
      <div className="flex items-center gap-sm flex-wrap pl-1">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            'border-violet-300/80 bg-violet-50 text-violet-700',
            'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
          )}
        >
          <SparklesIcon className="h-3 w-3" aria-hidden="true" />
          {content.pill}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep max-w-[68ch]">
          {content.description}
        </p>
      </div>
    </div>

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <div
      className={cn(
        'flex items-start gap-sm rounded-xl border px-md py-3',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
      >
        <InfoIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {content.bottomNote}
      </p>
    </div>
  </section>
);

const CardView = ({ card }: { card: SpecialCard }) => {
  const a = accentTokens[card.accent];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        a.border,
        a.borderHover,
      )}
    >
      <header className="flex items-start justify-between gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-xl border',
            a.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-sm font-bold tracking-tight break-keep text-right', a.text)}>
          {card.title}
        </h3>
      </header>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] font-bold">
          type
        </span>
        <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
          {card.type}
        </code>
      </div>
      <p className={cn('font-mono text-xsm font-bold break-keep', a.text)}>{card.result}</p>
    </article>
  );
};
