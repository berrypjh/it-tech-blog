import { cn } from '@it-tech-blog/utils';

import type { FlowStep, React19ErrorReportingContent } from '../content';
import {
  ArrowRightIcon,
  AtomIcon,
  BellRingIcon,
  GlobeIcon,
  LayersIcon,
  ServerIcon,
  SignalHighIcon,
  ZapIcon,
} from '../icons';
import { callbackAccent } from '../tone';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = {
  content: React19ErrorReportingContent['createRoot'] | React19ErrorReportingContent['hydrateRoot'];
  note?: string;
};

const stepStyle: Record<
  FlowStep['kind'],
  { border: string; iconChip: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  app: {
    border: 'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
    Icon: AtomIcon,
  },
  callbacks: {
    border: 'border-slate-200 bg-slate-50/40 dark:border-slate-700 dark:bg-slate-900/30',
    iconChip:
      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700',
    Icon: ZapIcon,
  },
  monitoring: {
    border: 'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    Icon: SignalHighIcon,
  },
  server: {
    border: 'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
    Icon: ServerIcon,
  },
  hydrate: {
    border: 'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    Icon: GlobeIcon,
  },
  internal: {
    border: 'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    Icon: LayersIcon,
  },
};

const CALLBACK_KINDS: Array<'caught' | 'uncaught' | 'recoverable'> = [
  'caught',
  'uncaught',
  'recoverable',
];

const renderStepContent = (step: FlowStep) => {
  if (step.kind === 'callbacks') {
    return (
      <ul className="flex flex-col gap-1.5">
        {step.lines.map((line, i) => {
          const kind = CALLBACK_KINDS[i] ?? 'caught';
          const accent = callbackAccent[kind];
          return (
            <li
              key={line}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 w-fit',
                'text-[11px] font-mono font-bold',
                accent.chip,
              )}
            >
              <span
                aria-hidden="true"
                className={cn('block h-1.5 w-1.5 rounded-full', accent.solidBg)}
              />
              {line}
            </li>
          );
        })}
      </ul>
    );
  }
  if (step.kind === 'monitoring') {
    return (
      <ul className="flex flex-col gap-1">
        {step.lines.map((line) => (
          <li
            key={line}
            className="flex items-start gap-1.5 text-[11px] text-[var(--term-fg)] break-keep"
          >
            <BellRingIcon
              aria-hidden="true"
              className="mt-0.5 h-3 w-3 shrink-0 text-teal-600 dark:text-teal-300"
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="text-[11px] text-[var(--term-muted)] break-keep">{step.lines.join(' · ')}</p>
  );
};

export const RootExampleSection = ({ content, note }: Props) => (
  <section aria-labelledby={`root-example-${content.number}`} className="flex flex-col gap-md">
    <SectionHeader
      id={`root-example-${content.number}`}
      number={content.number}
      title={content.title}
    />

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch">
      {/* code */}
      <article
        className={cn(
          'overflow-hidden rounded-2xl border-2 bg-slate-950',
          'border-slate-800 shadow-[0_4px_0_var(--term-border)]',
          'transition-shadow motion-safe:hover:shadow-[0_6px_0_var(--term-border)]',
        )}
      >
        <CodeBlock code={content.code.content} fileLabel={content.code.fileLabel} language="ts" />
      </article>

      {/* flow */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">{content.flowTitle}</h3>
        <ol className="flex flex-col gap-2">
          {content.steps.map((step, i) => {
            const style = stepStyle[step.kind];
            const Icon = style.Icon;
            const isLast = i === content.steps.length - 1;
            return (
              <li key={step.title} className="flex flex-col gap-1">
                <div className={cn('flex items-start gap-3 rounded-xl border-2 p-3', style.border)}>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                      style.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <h4 className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                      {step.title}
                    </h4>
                    {renderStepContent(step)}
                  </div>
                </div>
                {!isLast && (
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 mx-auto rotate-90 text-blue-400 dark:text-blue-500"
                  />
                )}
              </li>
            );
          })}
        </ol>
        {note && (
          <p
            className={cn(
              'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
              'text-[11px] font-mono font-bold',
              'border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200',
            )}
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-teal-500" />
            {note}
          </p>
        )}
      </article>
    </div>
  </section>
);
