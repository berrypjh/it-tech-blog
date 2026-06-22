import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberStateAndQueueContent, RoleFlowCard } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ComponentIcon,
  DatabaseIcon,
  ListIcon,
} from '../icons';

type Props = { content: FiberStateAndQueueContent['roleFlow'] };

const iconMap = {
  database: DatabaseIcon,
  list: ListIcon,
  check: CheckCircleIcon,
} as const;

const tone = {
  emerald: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    title: 'text-emerald-900 dark:text-emerald-100',
    pill: 'bg-emerald-50 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
    fieldBg:
      'bg-emerald-100/60 text-emerald-800 border-emerald-300/80 dark:bg-emerald-950/40 dark:text-emerald-100 dark:border-emerald-700/70',
  },
  violet: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    title: 'text-violet-900 dark:text-violet-100',
    pill: 'bg-violet-50 text-violet-800 border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60',
    fieldBg:
      'bg-violet-100/60 text-violet-800 border-violet-300/80 dark:bg-violet-950/40 dark:text-violet-100 dark:border-violet-700/70',
  },
  amber: {
    border:
      'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
    iconWrap: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
    title: 'text-amber-900 dark:text-amber-100',
    pill: 'bg-amber-50 text-amber-800 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/60',
    fieldBg:
      'bg-emerald-100/60 text-emerald-800 border-emerald-300/80 dark:bg-emerald-950/40 dark:text-emerald-100 dark:border-emerald-700/70',
  },
} as const;

export const StateFieldVsQueueField = ({ content }: Props) => (
  <section id="roleflow" aria-labelledby="heading-roleflow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="roleflow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ComponentIcon className="h-5 w-5" />}
    />

    <ol
      className={cn(
        'grid items-stretch gap-sm',
        'grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr]',
      )}
    >
      {content.cards.map((card, idx) => (
        <li key={card.id} className="contents">
          <RoleCard card={card} />
          {idx < content.cards.length - 1 && (
            <span
              aria-hidden="true"
              className="self-center justify-self-center flex items-center justify-center"
            >
              {/* 2 → 3 is dotted to indicate time gap to "next render" */}
              <ConnectorArrow dotted={idx === 1} />
            </span>
          )}
        </li>
      ))}
    </ol>
  </section>
);

const ConnectorArrow = ({ dotted }: { dotted: boolean }) => (
  <>
    <span className="hidden lg:inline-flex flex-col items-center gap-1">
      <span
        aria-hidden="true"
        className={cn(
          'block h-px w-10 border-t-2 border-sky-400/80 dark:border-sky-500/70',
          dotted && 'border-dashed',
        )}
      />
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-sky-200/80 text-sky-600 dark:bg-slate-900 dark:border-sky-800/60 dark:text-sky-300">
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </span>
      {dotted && (
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300 whitespace-nowrap">
          next render
        </span>
      )}
    </span>
    <span className="lg:hidden inline-flex flex-col items-center gap-1 py-1">
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
        <ArrowDownIcon className="h-3.5 w-3.5" />
      </span>
      {dotted && (
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
          next render
        </span>
      )}
    </span>
  </>
);

const RoleCard = ({ card }: { card: RoleFlowCard }) => {
  const t = tone[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between">
        <span
          aria-hidden="true"
          className={cn('inline-flex items-center justify-center w-12 h-12 rounded-xl', t.iconWrap)}
        >
          <Icon className="h-6 w-6" />
        </span>
      </header>
      <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight break-keep', t.title)}>
        {card.title}
      </h3>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-[12.5px] font-bold',
          t.pill,
        )}
      >
        {card.valuePill}
      </span>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-md border-2 px-2 py-0.5 font-mono text-[11.5px] font-bold',
          t.fieldBg,
        )}
      >
        {card.field}
      </span>
      <div className="flex flex-col gap-0.5 mt-auto">
        {card.descriptionLines.map((line, i) => (
          <p key={i} className="text-[11.5px] leading-relaxed text-[var(--term-muted)] break-keep">
            {line}
          </p>
        ))}
      </div>
    </article>
  );
};
