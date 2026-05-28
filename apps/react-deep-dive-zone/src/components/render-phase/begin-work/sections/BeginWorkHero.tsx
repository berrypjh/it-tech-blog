import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { BeginWorkContent, FiberTagItem } from '../content';
import { LightbulbIcon, SettingsIcon } from '../icons';

import { tagIconMap, tagPalette } from './tag-palette';

type Props = { content: BeginWorkContent['hero'] };

export const BeginWorkHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/begin-work.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// descending function'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
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
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span
            className={cn(
              'block bg-gradient-to-r from-sky-700 via-sky-500 to-violet-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-sky-200 dark:to-violet-300',
            )}
          >
            {content.title.line1}
          </span>
          <span className="block">{content.title.line2}</span>
          <span className="block">{content.title.line3}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[60ch] break-keep">
          {content.description}
        </p>

        <aside
          className={cn(
            'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-sky-200/80 bg-sky-50/70',
            'dark:border-sky-800/70 dark:bg-sky-950/40',
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
      </div>

      {/* Right branch diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroBranchDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const HeroBranchDiagram = ({ diagram }: { diagram: BeginWorkContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// beginWork → Fiber.tag dispatch'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        branch map
      </span>
    </header>

    {/* Center beginWork node */}
    <div className="flex justify-center">
      <article
        className={cn(
          'inline-flex w-full max-w-[380px] items-center gap-3 rounded-2xl border-2 p-md',
          'border-sky-500/80 bg-sky-600 text-white',
          'dark:border-sky-400/70 dark:bg-sky-500 dark:text-slate-950',
          'shadow-[0_4px_0_rgba(0,0,0,0.08)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl border-2',
            'bg-white/15 text-white border-white/30',
            'dark:bg-slate-950/20 dark:text-slate-950 dark:border-slate-950/30',
          )}
        >
          <SettingsIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <h2 className="text-md sm:text-lg font-bold leading-tight tracking-tight">
            {diagram.center.title}
          </h2>
          <p className="text-xsm sm:text-sm font-bold leading-tight opacity-90 break-keep">
            {diagram.center.subtitle}
          </p>
        </div>
      </article>
    </div>

    {/* connector hint */}
    <div className="my-3 flex justify-center" aria-hidden="true">
      <span className="h-6 w-px border-l border-dashed border-[var(--term-border)]" />
    </div>

    {/* Branch grid */}
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
      aria-label="Fiber tag branches"
    >
      {diagram.branches.map((branch) => (
        <li key={branch.id}>
          <BranchChip branch={branch} />
        </li>
      ))}
    </ul>
  </div>
);

const BranchChip = ({ branch }: { branch: FiberTagItem }) => {
  const palette = tagPalette[branch.accent];
  const Icon = tagIconMap[branch.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm',
        palette.border,
        palette.borderHover,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
            palette.chip,
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <h3
          className={cn(
            'text-xsm font-bold leading-tight break-keep min-w-0 truncate',
            palette.text,
          )}
        >
          {branch.title}
        </h3>
      </header>
      <p className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
        {branch.description}
      </p>
    </article>
  );
};
