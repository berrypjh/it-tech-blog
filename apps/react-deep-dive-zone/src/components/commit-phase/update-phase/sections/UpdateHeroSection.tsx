import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import type { UpdatePhaseContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  LightbulbIcon,
  LockIcon,
  PencilIcon,
  RepeatIcon,
  TypeIcon,
} from '../icons';

type Props = { content: UpdatePhaseContent['hero'] };

export const UpdateHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/update.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// update flag → props/text'}</span>}
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
              'block bg-gradient-to-r from-sky-600 via-blue-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-blue-300 dark:to-teal-300',
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

const HeroDiagram = ({ diagram }: { diagram: UpdatePhaseContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/55 via-white to-teal-50/55',
      'dark:from-sky-950/25 dark:via-[var(--term-bg)] dark:to-teal-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// existing node → update → props/text'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        update branch
      </span>
    </header>

    {/* Desktop: 3 columns with branches */}
    <div className="hidden md:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1.1fr)] gap-3 items-stretch">
      <ExistingNodeCard diagram={diagram} />
      <CenterColumn diagram={diagram} />
      <BranchColumn diagram={diagram} />
    </div>

    {/* Mobile: vertical */}
    <div className="md:hidden flex flex-col">
      <ExistingNodeCard diagram={diagram} />
      <ArrowSpacer direction="down" />
      <UpdateFlagCard diagram={diagram} />
      <ArrowSpacer direction="down" />
      <PropsBranchCard diagram={diagram} />
      <div className="my-1" />
      <TextBranchCard diagram={diagram} />
    </div>
  </div>
);

const ArrowSpacer = ({ direction }: { direction: 'right' | 'down' }) => (
  <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
    {direction === 'down' ? (
      <ArrowDownIcon className="h-4 w-4" />
    ) : (
      <ArrowRightIcon className="h-4 w-4" />
    )}
  </span>
);

const ExistingNodeCard = ({ diagram }: { diagram: UpdatePhaseContent['hero']['diagram'] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
      'border-slate-300/70 dark:border-slate-700/60',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          'bg-slate-100 text-slate-700 border-slate-200/80',
          'dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700/60',
        )}
      >
        <RepeatIcon className="h-4 w-4" />
      </span>
      <h3 className="text-xsm font-bold uppercase tracking-wider text-[var(--term-fg)] break-keep">
        {diagram.leftTitle}
      </h3>
    </header>
    <pre className="overflow-x-auto rounded-lg border border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/30 p-sm text-[11px] font-mono text-[var(--term-fg)]">
      <code>{diagram.leftCode}</code>
    </pre>
    <div className="flex items-center justify-center pt-1">
      <span className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1 text-xsm font-bold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
        {diagram.leftPreview}
      </span>
    </div>
  </article>
);

const CenterColumn = ({ diagram }: { diagram: UpdatePhaseContent['hero']['diagram'] }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-1">
    <ArrowSpacer direction="right" />
    <UpdateFlagCard diagram={diagram} />
    <ArrowSpacer direction="right" />
  </div>
);

const UpdateFlagCard = ({ diagram }: { diagram: UpdatePhaseContent['hero']['diagram'] }) => (
  <article
    className={cn(
      'flex flex-col items-center gap-1 rounded-2xl border-2 px-md py-sm text-center',
      'border-sky-300/80 bg-sky-50/70',
      'dark:border-sky-700/70 dark:bg-sky-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
      'ring-2 ring-sky-300/40 dark:ring-sky-500/30',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
        'bg-sky-100 text-sky-700 border-sky-200/80',
        'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
      )}
    >
      <PencilIcon className="h-5 w-5" />
    </span>
    <span className="text-sm font-bold text-sky-800 dark:text-sky-100">{diagram.centerTitle}</span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
      {diagram.centerSubtitle}
    </span>
  </article>
);

const BranchColumn = ({ diagram }: { diagram: UpdatePhaseContent['hero']['diagram'] }) => (
  <div className="flex flex-col gap-2">
    <PropsBranchCard diagram={diagram} />
    <TextBranchCard diagram={diagram} />
  </div>
);

const PropsBranchCard = ({ diagram }: { diagram: UpdatePhaseContent['hero']['diagram'] }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
      'border-sky-300/80 dark:border-sky-700/70',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
            'bg-sky-100 text-sky-700 border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <LockIcon className="h-4 w-4" />
        </span>
        <h3 className="text-xsm font-bold text-sky-800 dark:text-sky-100">
          {diagram.branch1Title}
        </h3>
      </div>
      <span className="text-[10px] font-mono text-sky-700 dark:text-sky-300 break-keep">
        {diagram.branch1Detail}
      </span>
    </header>
    <pre className="overflow-x-auto rounded-lg border border-sky-200/60 bg-sky-50/50 p-sm text-[11px] font-mono text-sky-900 dark:border-sky-800/50 dark:bg-sky-950/25 dark:text-sky-100">
      <code>{diagram.branch1Code}</code>
    </pre>
  </article>
);

const TextBranchCard = ({ diagram }: { diagram: UpdatePhaseContent['hero']['diagram'] }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
      'border-teal-300/80 dark:border-teal-700/70',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
            'bg-teal-100 text-teal-700 border-teal-200/80',
            'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
          )}
        >
          <TypeIcon className="h-4 w-4" />
        </span>
        <h3 className="text-xsm font-bold text-teal-800 dark:text-teal-100">
          {diagram.branch2Title}
        </h3>
      </div>
      <span className="text-[10px] font-mono text-teal-700 dark:text-teal-300 break-keep">
        {diagram.branch2Detail}
      </span>
    </header>
    <div className="flex items-center gap-2 rounded-lg border border-teal-200/60 bg-teal-50/50 p-sm dark:border-teal-800/50 dark:bg-teal-950/25">
      <code className="text-[11px] font-mono text-teal-900 dark:text-teal-100">
        {diagram.branch2BeforeCode}
      </code>
      <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5 text-teal-700 dark:text-teal-300" />
      <code className="text-[11px] font-mono font-bold text-teal-900 dark:text-teal-100">
        {diagram.branch2AfterCode}
      </code>
    </div>
  </article>
);
