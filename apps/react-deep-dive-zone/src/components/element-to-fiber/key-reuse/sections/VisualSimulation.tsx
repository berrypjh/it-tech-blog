import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { KeyFiberReuseContent, SimCard } from '../content';
import {
  AlertTriangleIcon,
  ArrowDownIcon,
  CheckCircleIcon,
  FingerprintIcon,
  KeyRoundIcon,
  ShuffleIcon,
} from '../icons';

type Props = { content: KeyFiberReuseContent['simulation'] };

const variantTokens = {
  safe: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/70',
    accent: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
    resultBorder:
      'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/30',
    resultText: 'text-emerald-900 dark:text-emerald-100',
  },
  warning: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    accent: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    text: 'text-violet-700 dark:text-violet-300',
    chip: 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
    resultBorder:
      'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/30',
    resultText: 'text-violet-900 dark:text-violet-100',
  },
} as const;

export const VisualSimulation = ({ content }: Props) => (
  <section id="simulation" aria-labelledby="heading-simulation" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="simulation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ShuffleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'border-sky-300/70 bg-sky-50/70',
        'dark:border-sky-700/70 dark:bg-sky-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
          'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
          'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
        )}
      >
        <FingerprintIcon className="h-6 w-6" />
      </span>
      <p className="text-sm sm:text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep self-center">
        {content.emphasis}
      </p>
    </div>
  </section>
);

const CardView = ({ card }: { card: SimCard }) => {
  const t = variantTokens[card.variant];
  const Icon = card.variant === 'safe' ? CheckCircleIcon : AlertTriangleIcon;
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.border,
        t.borderHover,
      )}
    >
      <header className="flex items-start gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
            t.accent,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-sm sm:text-md font-bold tracking-tight break-keep', t.text)}>
          {card.title}
        </h3>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-sm items-stretch">
        <ListBlock label={card.beforeLabel} items={card.before} tone={t} />
        <div className="flex flex-col items-center justify-center gap-1" aria-hidden="true">
          <span
            className={cn('inline-flex items-center justify-center w-9 h-9 rounded-full', t.accent)}
          >
            <ArrowDownIcon className="h-4 w-4 sm:hidden" />
            <ShuffleIcon className="h-4 w-4 hidden sm:block" />
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5',
              'text-[10px] font-bold uppercase tracking-wider font-mono',
              t.chip,
            )}
          >
            {card.changeLabel}
          </span>
        </div>
        <ListBlock label={card.afterLabel} items={card.after} tone={t} />
      </div>

      <div className={cn('rounded-xl border-2 p-md', t.resultBorder)}>
        <span className={cn('text-[10px] uppercase tracking-wider font-mono font-bold', t.text)}>
          {card.resultLabel}
        </span>
        <ul className="flex flex-col gap-1 mt-1">
          {card.results.map((r) => (
            <li
              key={r}
              className={cn(
                'flex items-start gap-2 text-xsm font-bold leading-snug break-keep',
                t.resultText,
              )}
            >
              <Icon className={cn('h-4 w-4 shrink-0 mt-0.5', t.text)} aria-hidden="true" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const ListBlock = ({
  label,
  items,
  tone,
}: {
  label: string;
  items: { label: string; trail: string }[];
  tone: (typeof variantTokens)[keyof typeof variantTokens];
}) => (
  <div className="flex flex-col gap-1.5 min-w-0">
    <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
      {label}
    </span>
    <ul className="flex flex-col gap-1.5">
      {items.map((item, idx) => (
        <li
          key={`${item.label}-${idx}`}
          className={cn(
            'flex items-center justify-between gap-sm rounded-lg border px-sm py-2',
            tone.border,
            'bg-[var(--term-bg)]',
          )}
        >
          <code className={cn('font-mono text-sm font-extrabold', tone.text)}>{item.label}</code>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5',
              'font-mono text-[10px] font-bold',
              tone.chip,
            )}
          >
            <KeyRoundIcon className="h-2.5 w-2.5" aria-hidden="true" />
            {item.trail}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
