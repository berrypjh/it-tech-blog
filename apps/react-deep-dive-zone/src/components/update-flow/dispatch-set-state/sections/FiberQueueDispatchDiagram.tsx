import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DispatchSetStateContent, MemoryNode, RuntimeStep } from '../content';
import { ArrowDownIcon, memoryIconByName, NetworkIcon, runtimeIconByName } from '../icons';

type Props = { content: DispatchSetStateContent['relationship'] };

export const FiberQueueDispatchDiagram = ({ content }: Props) => (
  <section id="section-relationship" aria-labelledby="heading-relationship" className="space-y-md">
    <SectionHeader
      id="relationship"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.25fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* 메모리 구조 (좌) */}
      <PanelShell
        tone="emerald"
        title={content.leftTitle}
        subtitle={content.leftSubtitle}
        badge="memory"
      >
        <ol className="flex flex-col">
          {content.nodes.map((node, idx) => (
            <li key={node.id} className="flex flex-col">
              <MemoryNodeCard node={node} />
              {idx < content.nodes.length - 1 && <Connector label={node.connectorLabel ?? '↓'} />}
            </li>
          ))}
        </ol>
      </PanelShell>

      {/* 실행 흐름 (우) */}
      <PanelShell
        tone="amber"
        title={content.rightTitle}
        subtitle={content.rightSubtitle}
        badge="runtime"
      >
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
      </PanelShell>
    </div>
  </section>
);

const PanelShell = ({
  tone,
  title,
  subtitle,
  badge,
  children,
}: {
  tone: ToneKey;
  title: string;
  subtitle: string;
  badge: string;
  children: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article className="flex flex-col gap-md rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="flex items-center justify-between gap-sm">
        <div className="flex flex-col min-w-0">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
            {title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {subtitle}
          </span>
        </div>
        <span
          className={cn(
            'shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {badge}
        </span>
      </header>
      {children}
    </article>
  );
};

const MemoryNodeCard = ({ node }: { node: MemoryNode }) => {
  const Icon = memoryIconByName[node.icon];
  const t = toneTokens[node.tone];
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
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
        <ul className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2.5 py-2 font-mono text-[11px] leading-[1.7] text-[var(--term-fg)]">
          {node.fields.map((f) => (
            <li key={f} className="truncate">
              <span className="text-[var(--term-dim)]">·</span>{' '}
              <span className={f === '…' ? 'text-[var(--term-dim)]' : ''}>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {node.body && (
        <p className={cn('rounded-md border px-2.5 py-2 text-xxsm font-mono leading-snug', t.chip)}>
          {node.body}
        </p>
      )}
    </div>
  );
};

const Connector = ({ label }: { label: string }) => (
  <div aria-hidden="true" className="flex items-center justify-center gap-2 py-1.5">
    <span className="block h-3 w-px bg-[var(--term-border)]" />
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </span>
    <span className="block h-3 w-px bg-[var(--term-border)]" />
  </div>
);

const RuntimeStepCard = ({ step }: { step: RuntimeStep }) => {
  const Icon = runtimeIconByName[step.icon];
  const t = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex items-start gap-sm rounded-lg border bg-[var(--term-bg)] p-sm shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border',
          t.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full border px-1.5 text-[10px] font-mono font-bold tabular-nums',
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
