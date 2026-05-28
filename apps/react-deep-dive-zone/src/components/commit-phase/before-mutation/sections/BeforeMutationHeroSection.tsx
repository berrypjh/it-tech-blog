import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { commitToneTokens } from '../../_shared/tones';
import type { BeforeMutationContent, PhaseTimelineStep } from '../content';
import { ArrowRightIcon, CameraIcon, EyeIcon, LightbulbIcon } from '../icons';

type Props = { content: BeforeMutationContent['hero'] };

export const BeforeMutationHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/before-mutation.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// read before mutate'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)] gap-xl lg:gap-2xl items-start">
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
            'text-3xl sm:text-4xl lg:text-[2.3rem] xl:text-[2.6rem]',
            'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent',
              'dark:from-teal-300 dark:via-cyan-300 dark:to-sky-300',
            )}
          >
            {content.title.line3}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

        <aside
          className={cn(
            'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-teal-200/80 bg-teal-50/60',
            'dark:border-teal-800/70 dark:bg-teal-950/30',
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

const HeroDiagram = ({ diagram }: { diagram: BeforeMutationContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-teal-50/55 via-white to-sky-50/55',
      'dark:from-teal-950/25 dark:via-[var(--term-bg)] dark:to-sky-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// current DOM → snapshot → next DOM'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        snapshot
      </span>
    </header>

    <h2 className="mb-md text-center text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
      {diagram.title}
    </h2>

    {/* Snapshot 3-column */}
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
      <DomCard title={diagram.leftTitle} code={diagram.leftCode} variant="before" />
      <CenterSnapshot label={diagram.centerLabel} />
      <DomCard title={diagram.rightTitle} code={diagram.rightCode} variant="after" />
    </div>

    {/* Phase timeline */}
    <PhaseTimeline steps={diagram.phaseTimeline} />
  </div>
);

const DomCard = ({
  title,
  code,
  variant,
}: {
  title: string;
  code: string;
  variant: 'before' | 'after';
}) => {
  const isBefore = variant === 'before';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm',
        isBefore
          ? 'border-teal-300/70 dark:border-teal-700/60'
          : 'border-[var(--term-border)] opacity-90',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-1">
        <h3
          className={cn(
            'text-[11px] sm:text-xsm font-bold uppercase tracking-wider break-keep',
            isBefore ? 'text-teal-700 dark:text-teal-300' : 'text-slate-500 dark:text-slate-400',
          )}
        >
          {title}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-md border',
            isBefore
              ? 'border-teal-200/80 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200'
              : 'border-[var(--term-border)] bg-slate-50/60 text-[var(--term-muted)] dark:bg-slate-900/40',
          )}
        >
          html
        </span>
      </header>
      <pre
        className={cn(
          'overflow-x-auto rounded-lg border p-2 text-[10.5px] sm:text-[11px] leading-snug font-mono',
          isBefore
            ? 'border-teal-200/60 bg-teal-50/50 text-teal-900 dark:border-teal-800/50 dark:bg-teal-950/25 dark:text-teal-100'
            : 'border-[var(--term-border)] bg-slate-50/60 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300',
        )}
      >
        <code>{code}</code>
      </pre>
    </article>
  );
};

const CenterSnapshot = ({ label }: { label: string }) => (
  <div className="flex flex-row md:flex-col items-center justify-center gap-2 py-2 md:py-0">
    <span aria-hidden="true" className="hidden md:block text-teal-500 dark:text-teal-300">
      <ArrowRightIcon className="h-4 w-4" strokeDasharray="3 3" />
    </span>
    <div
      className={cn(
        'relative inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2',
        'border-teal-300/80 bg-gradient-to-br from-teal-100 to-cyan-100',
        'dark:border-teal-700/70 dark:from-teal-950/70 dark:to-cyan-950/60',
        'shadow-[0_2px_0_var(--term-border)]',
        'ring-2 ring-teal-300/30 dark:ring-teal-500/20',
      )}
    >
      <CameraIcon
        aria-hidden="true"
        className="h-7 w-7 sm:h-8 sm:w-8 text-teal-700 dark:text-teal-200"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full border bg-white px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-teal-700 border-teal-200/80 dark:bg-slate-950 dark:text-teal-200 dark:border-teal-800/60"
      >
        {label}
      </span>
    </div>
    <span aria-hidden="true" className="hidden md:block text-teal-500 dark:text-teal-300">
      <ArrowRightIcon className="h-4 w-4" strokeDasharray="3 3" />
    </span>
  </div>
);

const PhaseTimeline = ({ steps }: { steps: PhaseTimelineStep[] }) => (
  <div className="mt-md pt-md border-t border-dashed border-[var(--term-border)]">
    <ol className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {steps.map((step) => (
        <li key={step.key}>
          <PhaseStep step={step} />
        </li>
      ))}
    </ol>
  </div>
);

const PhaseStep = ({ step }: { step: PhaseTimelineStep }) => {
  const t = commitToneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-xl border p-sm',
        step.active
          ? cn('border-2', t.borderStrong, t.bg)
          : 'border-[var(--term-border)] bg-[var(--term-bg)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-full border shrink-0',
          step.active
            ? cn(t.chipSolid, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30')
            : 'border-[var(--term-border)] bg-slate-50 text-[var(--term-muted)] dark:bg-slate-900/40',
        )}
      >
        {step.active ? (
          <EyeIcon className="h-3.5 w-3.5" />
        ) : (
          <span className="block h-1.5 w-1.5 rounded-full bg-[var(--term-dim)]" />
        )}
      </span>
      <div className="flex flex-col min-w-0">
        <span
          className={cn(
            'text-[11px] sm:text-xsm font-bold leading-tight break-keep',
            step.active ? t.textStrong : 'text-[var(--term-fg)]',
          )}
        >
          {step.title}
        </span>
        <span
          className={cn(
            'text-[10px] leading-tight break-keep',
            step.active ? t.text : 'text-[var(--term-muted)]',
          )}
        >
          {step.subtitle}
        </span>
      </div>
    </div>
  );
};
