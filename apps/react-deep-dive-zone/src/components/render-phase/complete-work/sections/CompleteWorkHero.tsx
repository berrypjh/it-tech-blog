import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { CompleteWorkContent, LegendItem } from '../content';
import { ArrowDownIcon, ArrowUpIcon, BoxIcon, CircleDashedIcon, LightbulbIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: CompleteWorkContent['hero'] };

const legendIconMap = {
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  dashed: CircleDashedIcon,
} as const;

export const CompleteWorkHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/complete-work.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// descend & ascend'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
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
          {content.callout}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <HeroDiagram diagram={content.diagram} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroDiagram = ({ diagram }: { diagram: CompleteWorkContent['hero']['diagram'] }) => (
  <div
    className={cn(
      '@container relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-teal-50/30 via-white to-violet-50/40',
      'dark:from-teal-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// fiber tree: down & up'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700/80 dark:text-violet-300/80 rounded-md border border-violet-200/70 dark:border-violet-800/60 px-2 py-0.5">
        chapter 19 · final
      </span>
    </header>

    <div className="grid grid-cols-1 @xl:grid-cols-[minmax(0,_0.6fr)_minmax(0,_0.9fr)_minmax(0,_0.8fr)] gap-3 items-stretch">
      {/* Legend */}
      <article
        className={cn(
          'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
        )}
        aria-labelledby="legend-title"
      >
        <h3
          id="legend-title"
          className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]"
        >
          {diagram.legendTitle}
        </h3>
        <ul className="flex flex-col gap-1.5">
          {diagram.legend.map((item) => (
            <LegendRow key={item.label} item={item} />
          ))}
        </ul>
      </article>

      {/* Fiber tree */}
      <article
        className={cn(
          'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// fiber tree'}
        </span>
        <FiberTreeDiagram />
      </article>

      {/* Steps */}
      <article
        className={cn(
          'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
        )}
        aria-labelledby="steps-title"
      >
        <h3
          id="steps-title"
          className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]"
        >
          {diagram.stepsTitle}
        </h3>
        <ol className="flex flex-col gap-1.5">
          {diagram.steps.map((step, idx) => (
            <li key={step.title} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono font-bold text-[10px] tabular-nums',
                  'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
                )}
              >
                {idx + 1}
              </span>
              <div className="flex flex-col gap-0 min-w-0">
                <span className="text-xsm font-bold leading-tight text-[var(--term-fg)] break-keep">
                  {step.title}
                </span>
                <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
                  {step.description}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </div>
  </div>
);

const LegendRow = ({ item }: { item: LegendItem }) => {
  const palette = tonePalette[item.tone];
  const Icon = legendIconMap[item.iconName];
  const isDashed = item.iconName === 'dashed';
  return (
    <li className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
          isDashed ? cn('border-dashed', palette.chip) : palette.chip,
        )}
      >
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div className="flex flex-col gap-0 min-w-0">
        <span className={cn('text-xsm font-bold leading-tight break-keep', palette.text)}>
          {item.label}
        </span>
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {item.detail}
        </span>
      </div>
    </li>
  );
};

const FiberTreeDiagram = () => (
  <div className="flex flex-col items-center gap-2 py-2">
    {/* Root */}
    <TreeBox label="Root" color="sky" />
    <span aria-hidden="true" className="text-teal-500/80 dark:text-teal-300/80">
      <ArrowDownIcon className="h-4 w-4" />
    </span>
    {/* Left/Right */}
    <div className="flex items-center gap-md">
      <div className="flex flex-col items-center gap-1.5">
        <TreeBox label="Left" color="teal" />
        <span aria-hidden="true" className="text-teal-500/80 dark:text-teal-300/80">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
        <div className="flex items-center gap-2">
          <TreeBox label="LC" small color="teal" />
          <TreeBox label="—" small color="dashed" />
        </div>
      </div>
      <span aria-hidden="true" className="text-violet-500/80 dark:text-violet-300/80">
        <ArrowUpIcon className="h-4 w-4" />
      </span>
      <div className="flex flex-col items-center gap-1.5">
        <TreeBox label="Right" color="violet" />
        <span aria-hidden="true" className="text-teal-500/80 dark:text-teal-300/80">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
        <div className="flex items-center gap-2">
          <TreeBox label="RA" small color="teal" />
          <TreeBox label="RB" small color="violet" />
        </div>
      </div>
    </div>
  </div>
);

const TreeBox = ({
  label,
  color,
  small,
}: {
  label: string;
  color: 'sky' | 'teal' | 'violet' | 'dashed';
  small?: boolean;
}) => {
  const palette: Record<typeof color, string> = {
    sky: 'border-sky-300/80 bg-sky-50/80 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-100',
    teal: 'border-teal-300/80 bg-teal-50/80 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-100',
    violet:
      'border-violet-300/80 bg-violet-50/80 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100',
    dashed:
      'border-dashed border-slate-300/80 bg-white text-slate-500 dark:border-slate-700/70 dark:bg-slate-950/40 dark:text-slate-400',
  } as const;
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center gap-1 rounded-lg border-2 font-mono font-bold',
        small ? 'h-8 w-9 text-[10px]' : 'h-9 w-14 text-xsm',
        palette[color],
      )}
    >
      <BoxIcon className={cn(small ? 'h-3 w-3' : 'h-3.5 w-3.5')} />
      <span>{label}</span>
    </span>
  );
};
