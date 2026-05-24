import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type {
  DispatchSetStateContent,
  MemoryNode,
  MemoryNodeIconName,
  RuntimeStep,
  RuntimeStepIconName,
} from '../content';
import {
  ArrowDownIcon,
  CuboidIcon,
  DatabaseIcon,
  FunctionSquareIcon,
  HandIcon,
  LayersIcon,
  LoaderIcon,
  NetworkIcon,
  ZapIcon,
} from '../icons';

type Props = { content: DispatchSetStateContent['relationship'] };

const memoryIconMap: Record<MemoryNodeIconName, typeof CuboidIcon> = {
  cuboid: CuboidIcon,
  layers: LayersIcon,
  database: DatabaseIcon,
  functionSquare: FunctionSquareIcon,
};

const runtimeIconMap: Record<RuntimeStepIconName, typeof HandIcon> = {
  hand: HandIcon,
  zap: ZapIcon,
  database: DatabaseIcon,
  loader: LoaderIcon,
};

export const FiberQueueDispatchDiagram = ({ content }: Props) => (
  <section
    id="relationship"
    aria-labelledby="heading-relationship"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="relationship"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.25fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Memory layout (left) */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-emerald-50/20 to-violet-50/20',
          'dark:from-[var(--term-bg)] dark:via-emerald-950/15 dark:to-violet-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
              {content.leftTitle}
            </h3>
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
              {content.leftSubtitle}
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80 rounded-md border border-emerald-200/70 dark:border-emerald-800/60 px-2 py-0.5">
            memory
          </span>
        </header>

        <ol className="flex flex-col">
          {content.nodes.map((node, idx) => (
            <li key={node.id} className="flex flex-col">
              <MemoryNodeCard node={node} />
              {idx < content.nodes.length - 1 && <Connector label={node.connectorLabel ?? '↓'} />}
            </li>
          ))}
        </ol>
      </article>

      {/* Runtime flow (right) */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-amber-50/30 to-sky-50/20',
          'dark:from-[var(--term-bg)] dark:via-amber-950/15 dark:to-sky-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
              {content.rightTitle}
            </h3>
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
              {content.rightSubtitle}
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700/80 dark:text-amber-300/80 rounded-md border border-amber-200/70 dark:border-amber-800/60 px-2 py-0.5">
            runtime
          </span>
        </header>

        <ol className="flex flex-col">
          {content.runtimeSteps.map((step, idx) => (
            <li key={step.number} className="flex flex-col">
              <RuntimeStepCard step={step} />
              {idx < content.runtimeSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="my-1 flex justify-center text-[var(--term-dim)]"
                >
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);

const MemoryNodeCard = ({ node }: { node: MemoryNode }) => {
  const Icon = memoryIconMap[node.iconName];
  const t = toneTokens[node.tone];
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex flex-col min-w-0">
          <span
            className={cn(
              'text-xsm sm:text-sm font-bold font-mono leading-tight break-keep',
              t.text,
            )}
          >
            {node.title}
          </span>
          <span className="text-[10px] text-[var(--term-muted)] leading-snug">{node.subtitle}</span>
        </div>
      </header>

      {node.fields && (
        <ul
          className={cn(
            'rounded-lg border px-2.5 py-2 font-mono text-[11px] leading-[1.7]',
            'border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/40 text-[var(--term-fg)]',
          )}
        >
          {node.fields.map((f) => (
            <li key={f} className="truncate">
              <span className="text-[var(--term-dim)]">·</span>{' '}
              <span className={f === '…' ? 'text-[var(--term-dim)]' : ''}>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {node.body && (
        <p className={cn('rounded-lg border px-2.5 py-2 text-xxsm font-mono leading-snug', t.chip)}>
          {node.body}
        </p>
      )}
    </div>
  );
};

const Connector = ({ label }: { label: string }) => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center gap-2 py-1.5 text-[var(--term-dim)]"
  >
    <span className="block h-3 w-px bg-[var(--term-border)]" />
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </span>
    <span className="block h-3 w-px bg-[var(--term-border)]" />
  </div>
);

const RuntimeStepCard = ({ step }: { step: RuntimeStep }) => {
  const Icon = runtimeIconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border bg-[var(--term-bg)] p-sm',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
          t.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5',
              'text-[10px] font-mono font-bold tabular-nums',
              t.chip,
            )}
          >
            {step.number}
          </span>
          <h4 className={cn('text-xsm sm:text-sm font-bold break-keep', t.text)}>{step.title}</h4>
        </div>
        <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">
          {step.subtitle}
        </p>
      </div>
    </div>
  );
};
