import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { HooksRecapContent, SimulatorStep } from '../content';
import {
  BoxIcon,
  CpuIcon,
  EqualIcon,
  FastForwardIcon,
  MousePointerClickIcon,
  PlayCircleIcon,
  RepeatIcon,
  RocketIcon,
  SparklesIcon,
} from '../icons';

import { toneCardBg, toneNumber, toneText } from './_shared/tones';

type Props = { content: HooksRecapContent['simulator'] };

const visualMap = {
  click: MousePointerClickIcon,
  box: BoxIcon,
  queue: RepeatIcon,
  replay: FastForwardIcon,
  compute: CpuIcon,
  compare: EqualIcon,
  commit: RocketIcon,
  play: PlayCircleIcon,
};

const KEYWORDS = new Set(['function', 'const', 'return']);
const HOOK_NAMES = new Set(['useState', 'useEffect']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (HOOK_NAMES.has(tok))
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'Counter' || tok === 'console' || tok === 'log')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'count' || tok === 'setCount' || tok === 'c')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'button' || tok === 'onClick')
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (/^\d+$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

const renderCodeLine = (line: string, key: number) => {
  const tokens = line.split(/(\s+|[(){}[\];,.<>=`${}])/);
  return (
    <div key={key} className="flex">
      <span
        aria-hidden="true"
        className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
      >
        {key + 1}
      </span>
      <span className="whitespace-pre">{tokens.map(renderToken)}</span>
    </div>
  );
};

const SimulatorStepCard = ({ step }: { step: SimulatorStep }) => {
  const Icon = visualMap[step.visual];
  return (
    <article
      className={cn(
        'flex items-start gap-3 rounded-xl border-2 p-md transition-all',
        'shadow-[0_1px_0_var(--term-border)] motion-safe:hover:-translate-y-0.5',
        toneCardBg[step.tone],
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums',
          toneNumber[step.tone],
        )}
      >
        {step.number}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-white dark:bg-slate-950/40',
          'border-[var(--term-border)]',
          toneText[step.tone],
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className={cn('font-mono text-xsm font-bold break-all', toneText[step.tone])}>
          {step.title}
        </code>
        <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};

export const IntegratedCounterSimulator = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-simulator"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="simulator"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: code + mock UI */}
        <div className="flex flex-col gap-md">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
            <div className="flex items-center gap-2 border-b border-slate-800 px-md py-2">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">Counter.jsx</span>
            </div>
            <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
              <code>{lines.map((line, i) => renderCodeLine(line, i))}</code>
            </pre>
          </div>

          {/* Mock UI */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-blue-300/70 bg-blue-50/40 dark:border-blue-700/60 dark:bg-blue-950/20',
            )}
          >
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.mockLabel}
            </p>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-blue-400/80 bg-white text-xl font-mono font-bold text-blue-700 dark:border-blue-600/70 dark:bg-blue-950/40 dark:text-blue-200"
              >
                {content.mockValue}
              </span>
              <button
                type="button"
                disabled
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 rounded-xl border-2 px-4 py-2.5',
                  'border-blue-400/80 bg-blue-500 text-white font-mono text-xsm font-bold',
                  'dark:border-blue-700/60 dark:bg-blue-400 dark:text-slate-900',
                  'cursor-default opacity-90',
                )}
                aria-disabled="true"
              >
                <MousePointerClickIcon aria-hidden="true" className="h-3.5 w-3.5" />
                {content.mockButton}
              </button>
            </div>
          </article>
        </div>

        {/* Right: 8 step flow */}
        <ol className="flex flex-col gap-1.5">
          {content.steps.map((step) => (
            <li key={step.number}>
              <SimulatorStepCard step={step} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
