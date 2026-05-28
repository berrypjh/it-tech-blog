import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { commitToneTokens } from '../../_shared/tones';
import type { CommitTimelineItem, RootCurrentRefContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, LightbulbIcon, SwapIcon, TreeIcon } from '../icons';

type Props = { content: RootCurrentRefContent['hero'] };

export const RootCurrentHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/root-current-ref.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// root.current = finishedWork'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left */}
      <div className="flex flex-col gap-md min-w-0">
        <ul className="flex flex-wrap items-center gap-2">
          {content.pills.map((pill) => (
            <li
              key={pill.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                pill.tone === 'sky' &&
                  'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
                pill.tone === 'slate' &&
                  'border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/40',
              )}
            >
              {pill.tone === 'sky' && (
                <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-sky-500" />
              )}
              {pill.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.3rem] xl:text-[2.6rem]',
            'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-violet-600 via-sky-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-violet-300 dark:via-sky-300 dark:to-teal-300',
            )}
          >
            {content.title.line2}
          </span>
          <span className="block">{content.title.line3}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

        <aside
          className={cn(
            'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-sky-200/80 bg-sky-50/60',
            'dark:border-sky-800/70 dark:bg-sky-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
              'bg-amber-100 text-amber-700 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.insight}
          </p>
        </aside>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const HeroDiagram = ({ diagram }: { diagram: RootCurrentRefContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-violet-50/55 via-white to-teal-50/55',
      'dark:from-violet-950/25 dark:via-[var(--term-bg)] dark:to-teal-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// current → finishedWork swap'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700/80 dark:text-blue-300/80 rounded-md border border-blue-200/70 dark:border-blue-800/60 px-2 py-0.5">
        commit pipeline
      </span>
    </header>

    {/* Desktop: 3 columns */}
    <div className="hidden md:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
      <TreeCard title={diagram.leftTitle} subtitle={diagram.leftSubtitle} variant="old" />
      <CenterSwap label={diagram.centerLabel} formula={diagram.centerFormula} />
      <TreeCard title={diagram.rightTitle} subtitle={diagram.rightSubtitle} variant="new" />
    </div>

    {/* Mobile: vertical */}
    <div className="md:hidden flex flex-col gap-2">
      <TreeCard title={diagram.leftTitle} subtitle={diagram.leftSubtitle} variant="old" />
      <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
        <ArrowDownIcon className="h-4 w-4" />
      </span>
      <CenterSwap label={diagram.centerLabel} formula={diagram.centerFormula} />
      <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
        <ArrowDownIcon className="h-4 w-4" />
      </span>
      <TreeCard title={diagram.rightTitle} subtitle={diagram.rightSubtitle} variant="new" />
    </div>

    {/* Bottom phase timeline */}
    <Timeline items={diagram.timeline} />
  </div>
);

const TreeCard = ({
  title,
  subtitle,
  variant,
}: {
  title: string;
  subtitle: string;
  variant: 'old' | 'new';
}) => {
  const tone = variant === 'old' ? commitToneTokens.violet : commitToneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        tone.borderStrong,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            tone.text,
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            tone.chip,
          )}
        >
          {variant === 'old' ? 'previous' : 'next'}
        </span>
      </header>
      <p className="text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">{subtitle}</p>
      <div
        className={cn(
          'mt-auto flex items-center justify-center rounded-xl border-2 border-dashed p-md',
          tone.borderStrong,
          tone.bg,
        )}
      >
        <TreeIcon aria-hidden="true" className={cn('h-10 w-10', tone.textStrong)} />
      </div>
    </article>
  );
};

const CenterSwap = ({ label, formula }: { label: string; formula: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-14 w-14 items-center justify-center rounded-full border-2',
        'border-blue-300/80 bg-gradient-to-br from-blue-100 to-teal-100',
        'dark:border-blue-700/70 dark:from-blue-950/70 dark:to-teal-950/60',
        'text-blue-700 dark:text-blue-200',
        'shadow-[0_2px_0_var(--term-border)]',
        'ring-2 ring-blue-300/40 dark:ring-blue-500/30',
      )}
    >
      <SwapIcon className="h-6 w-6" />
    </span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300 font-bold">
      {label}
    </span>
    <code
      className={cn(
        'inline-block rounded-md border px-2 py-1 text-[11px] font-mono font-bold whitespace-nowrap',
        'border-blue-300/80 bg-blue-50 text-blue-800',
        'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
      )}
    >
      {formula}
    </code>
  </div>
);

const Timeline = ({ items }: { items: CommitTimelineItem[] }) => (
  <div className="mt-md pt-md border-t border-dashed border-[var(--term-border)]">
    <ol className="flex flex-wrap items-stretch gap-1.5">
      {items.map((item, idx) => (
        <li key={item.key} className="flex items-center gap-1.5 flex-1 min-w-[120px]">
          <TimelineItem item={item} />
          {idx < items.length - 1 && (
            <span aria-hidden="true" className="hidden md:inline-block text-[var(--term-dim)]">
              <ArrowRightIcon className="h-3 w-3" />
            </span>
          )}
        </li>
      ))}
    </ol>
  </div>
);

const TimelineItem = ({ item }: { item: CommitTimelineItem }) => {
  const t = commitToneTokens[item.tone];
  return (
    <div
      className={cn(
        'flex-1 flex items-center gap-1.5 rounded-md border px-2 py-1.5',
        item.active
          ? cn('border-2', t.borderStrong, t.bg, 'ring-2 ring-blue-300/40 dark:ring-blue-500/30')
          : 'border-[var(--term-border)] bg-[var(--term-bg)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-block h-1.5 w-1.5 rounded-full shrink-0',
          item.active ? t.dot : 'bg-[var(--term-dim)]',
        )}
      />
      <div className="flex flex-col min-w-0">
        <span
          className={cn(
            'text-[10px] font-bold leading-tight break-keep',
            item.active ? t.textStrong : 'text-[var(--term-fg)]',
          )}
        >
          {item.label}
        </span>
        {item.subLabel && (
          <span
            className={cn(
              'text-[9px] leading-tight',
              item.active ? t.text : 'text-[var(--term-muted)]',
            )}
          >
            {item.subLabel}
          </span>
        )}
      </div>
    </div>
  );
};
