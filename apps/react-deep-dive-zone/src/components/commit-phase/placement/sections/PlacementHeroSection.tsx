import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { commitToneTokens } from '../../_shared/tones';
import type { HeroStep, PlacementContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxIcon,
  FlagIcon,
  LightbulbIcon,
  PackageOpenIcon,
  PlusIcon,
} from '../icons';

type Props = { content: PlacementContent['hero'] };

export const PlacementHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/placement.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// new fiber → DOM'}</span>}
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
            'border-violet-200/80 bg-violet-50/60',
            'dark:border-violet-800/70 dark:bg-violet-950/30',
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
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
              {content.insightLabel}
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.insight}
            </p>
          </div>
        </aside>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const HeroDiagram = ({ diagram }: { diagram: PlacementContent['hero']['diagram'] }) => (
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
        {'// new fiber → host parent → DOM'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700/80 dark:text-violet-300/80 rounded-md border border-violet-200/70 dark:border-violet-800/60 px-2 py-0.5">
        placement flow
      </span>
    </header>

    <h2 className="mb-md text-center text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
      {diagram.title}
    </h2>

    {/* Desktop horizontal */}
    <ol className="hidden md:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-2 items-stretch">
      {diagram.steps.map((step, idx) => (
        <Fragment key={step.kind}>
          <li className="flex">
            <StepCard step={step} index={idx + 1} />
          </li>
          {idx < diagram.steps.length - 1 && (
            <li
              aria-hidden="true"
              className="flex items-center justify-center text-[var(--term-dim)]"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>

    {/* Mobile vertical */}
    <ol className="md:hidden flex flex-col">
      {diagram.steps.map((step, idx) => (
        <li key={step.kind} className="flex flex-col">
          <StepCard step={step} index={idx + 1} />
          {idx < diagram.steps.length - 1 && (
            <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
              <ArrowDownIcon className="h-4 w-4" />
            </span>
          )}
        </li>
      ))}
    </ol>

    {/* Bottom dotted line + label */}
    <div className="mt-md flex items-center gap-2">
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-teal-300/70 dark:border-teal-700/60"
      />
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
          'text-[10px] font-mono uppercase tracking-wider',
          'border-teal-200/80 bg-teal-50 text-teal-700',
          'dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200',
        )}
      >
        <TargetDot />
        {diagram.bottomLabel}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-teal-300/70 dark:border-teal-700/60"
      />
    </div>
  </div>
);

const TargetDot = () => (
  <span
    aria-hidden="true"
    className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400"
  />
);

const StepCard = ({ step, index }: { step: HeroStep; index: number }) => {
  const t = commitToneTokens[step.tone];
  const isFiber = step.kind === 'fiber';
  const isInsert = step.kind === 'insert';
  return (
    <article
      className={cn(
        'relative flex flex-1 flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        isInsert ? cn('border-2', t.borderStrong) : t.border,
        isInsert && t.bg,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
            t.chipSolid,
          )}
        >
          {isFiber ? (
            <BoxIcon className="h-5 w-5" />
          ) : isInsert ? (
            <PlusIcon className="h-5 w-5" />
          ) : (
            <PackageOpenIcon className="h-5 w-5" />
          )}
        </span>
        <span
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider tabular-nums rounded-md border px-1.5 py-0.5',
            t.chip,
          )}
        >
          step {index}
        </span>
      </header>

      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
        {step.title}
      </h3>

      {isFiber ? (
        <FiberPreview tone={t} caption={step.caption} />
      ) : isInsert ? (
        <DomPreview tone={t} highlight />
      ) : (
        <DomPreview tone={t} />
      )}
    </article>
  );
};

const FiberPreview = ({
  tone,
  caption,
}: {
  tone: typeof commitToneTokens.violet;
  caption: string;
}) => (
  <div
    className={cn(
      'rounded-xl border p-sm flex flex-col items-center gap-2 text-center',
      tone.border,
      tone.bgSoft,
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
        tone.borderStrong,
        'bg-white dark:bg-slate-950',
        tone.text,
      )}
    >
      <FlagIcon className="h-4 w-4" />
    </span>
    <span className={cn('text-[11px] font-mono font-bold leading-snug break-keep', tone.text)}>
      {caption}
    </span>
  </div>
);

const DomPreview = ({
  tone,
  highlight,
}: {
  tone: typeof commitToneTokens.sky;
  highlight?: boolean;
}) => (
  <div
    className={cn(
      'rounded-xl border p-sm font-mono text-[10.5px] sm:text-[11px] leading-snug',
      tone.border,
      tone.bgSoft,
    )}
  >
    <pre className="whitespace-pre overflow-x-auto">
      <code>
        {`<ul>\n  <li>A</li>\n  <li>B</li>\n`}
        {highlight ? (
          <>
            <span
              className={cn(
                'rounded-sm px-1 font-bold',
                'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-100',
              )}
            >
              {`  <li>C</li>`}
            </span>
            <span> </span>
            <span
              className={cn(
                'inline-block ml-1 rounded-md border px-1 text-[9px] font-bold uppercase tracking-wider align-baseline',
                'border-teal-300/80 bg-teal-100 text-teal-800',
                'dark:border-teal-700/70 dark:bg-teal-950/60 dark:text-teal-200',
              )}
            >
              NEW
            </span>
            {`\n</ul>`}
          </>
        ) : (
          `</ul>`
        )}
      </code>
    </pre>
  </div>
);
