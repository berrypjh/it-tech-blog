import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { CodePanel } from '../../_shared/CodePanel';
import type { JsxTransformFlowContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, BookOpenIcon, CodeIcon, SettingsIcon } from '../icons';

type Props = { content: JsxTransformFlowContent['hero'] };

export const JsxTransformHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react/jsx-transform-flow.md" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text column */}
      <div className="flex flex-col gap-md min-w-0">
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center min-w-[2.5rem] px-2 py-1',
              'rounded-md text-xsm font-bold tabular-nums tracking-wider',
              'bg-sky-600 text-white',
              'dark:bg-sky-500 dark:text-slate-950',
            )}
          >
            {content.badge}
          </span>
          <span className="text-xxsm uppercase tracking-wider text-[var(--term-muted)] font-mono">
            {content.eyebrow}
          </span>
        </div>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">
            <span className="bg-gradient-to-r from-sky-600 via-teal-500 to-violet-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-teal-300 dark:to-violet-300">
              {content.title.line2}
            </span>
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[56ch] break-keep">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-sky-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
            )}
          >
            <BookOpenIcon className="h-4 w-4" aria-hidden="true" />
            {content.primaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={content.secondaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
              'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <CodeIcon className="h-4 w-4" aria-hidden="true" />
            {content.secondaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Right transform diagram */}
      <div className="order-first lg:order-none">
        <TransformDiagram content={content} />
      </div>
    </div>
  </section>
);

const TransformDiagram = ({ content }: { content: JsxTransformFlowContent['hero'] }) => (
  <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-md items-start">
    {/* left flow column */}
    <div className="flex flex-col gap-2 min-w-0">
      <FlowStepLabel index={1} label="JSX" />
      <CodePanel code={content.inputCode} showWindowDots caption={content.inputCaption} size="md" />
      <FlowConnector />
      <FlowStepLabel index={2} label="Compile" />
      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border-2 border-dashed px-md py-3',
          'border-teal-300/80 bg-teal-50/70 text-teal-700',
          'dark:border-teal-700/80 dark:bg-teal-950/40 dark:text-teal-200',
        )}
      >
        <SettingsIcon
          className="h-5 w-5 animate-[spin_8s_linear_infinite] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <span className="font-mono text-sm font-bold tracking-wider">{content.compileLabel}</span>
      </div>
      <FlowConnector />
      <FlowStepLabel index={3} label="Function Call" />
      <CodePanel
        code={content.outputCode}
        caption={content.outputCaption}
        language="JS"
        size="md"
      />
    </div>

    {/* right explanation column */}
    <ul className="flex flex-col gap-md min-w-0">
      <ExplanationCard step={1} accent="teal" text={content.inputNote} />
      <ExplanationCard step={2} accent="sky" text={content.compileNote} />
      <ExplanationCard step={3} accent="violet" text={content.outputNote} />
    </ul>
  </div>
);

const FlowStepLabel = ({ index, label }: { index: number; label: string }) => (
  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-sky-600 text-white tabular-nums text-[10px]">
      {index}
    </span>
    <span>{label}</span>
    <span
      aria-hidden="true"
      className="flex-1 border-t border-dashed border-[var(--term-border)]"
    />
  </div>
);

const FlowConnector = () => (
  <div className="flex justify-center py-1" aria-hidden="true">
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300">
      <ArrowDownIcon className="h-3.5 w-3.5" />
    </span>
  </div>
);

const accentClass: Record<'teal' | 'sky' | 'violet', { border: string; chip: string }> = {
  teal: {
    border: 'border-teal-300/70 dark:border-teal-800/60',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
  },
  sky: {
    border: 'border-sky-300/70 dark:border-sky-800/60',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
  },
  violet: {
    border: 'border-violet-300/70 dark:border-violet-800/60',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
  },
};

const ExplanationCard = ({
  step,
  accent,
  text,
}: {
  step: number;
  accent: keyof typeof accentClass;
  text: string;
}) => {
  const a = accentClass[accent];
  return (
    <li
      className={cn(
        'group relative flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        a.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
          a.chip,
        )}
      >
        <span className="font-mono tabular-nums">step {step}</span>
      </span>
      <p className="text-sm leading-relaxed text-[var(--term-fg)] break-keep">{text}</p>
    </li>
  );
};
