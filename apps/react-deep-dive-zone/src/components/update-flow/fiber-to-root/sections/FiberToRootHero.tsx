import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { toneTokens } from '../../../shared/tones';
import type { FiberStackIconName, FiberStackNode, FiberToRootContent } from '../content';
import {
  ArrowUpIcon,
  FlagIcon,
  LightbulbIcon,
  MoveUpIcon,
  PanelsTopLeftIcon,
  PinIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: FiberToRootContent['hero'] };

const iconMap: Record<FiberStackIconName, typeof FlagIcon> = {
  flag: FlagIcon,
  panels: PanelsTopLeftIcon,
  workflow: WorkflowIcon,
  pin: PinIcon,
};

export const FiberToRootHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="markUpdateLaneFromFiberToRoot"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberConcurrentUpdates.js
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      {/* callout */}
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
      <FiberStackDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);

const FiberStackDiagram = ({ content }: { content: FiberToRootContent['hero'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-violet-50/35 via-white to-emerald-50/30',
      'dark:from-violet-950/20 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-[minmax(0,_1fr)_auto] gap-md items-stretch">
      {/* Fiber stack: rendered top→bottom = Root, Page, Main, Button */}
      <ol className="flex flex-col">
        {content.stack.map((node, idx) => (
          <li key={node.id} className="flex flex-col">
            <StackCard node={node} />
            {idx < content.stack.length - 1 && (
              <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
                <ArrowUpIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Side guide: vertical dashed arrow + label */}
      <aside
        aria-hidden="true"
        className="hidden sm:flex flex-col items-center justify-between gap-2 pl-1"
      >
        <span
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-full border-2',
            'border-emerald-300/80 bg-emerald-50 text-emerald-700',
            'dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
          )}
        >
          <FlagIcon className="h-4 w-4" />
        </span>
        <div className="flex flex-col items-center gap-2 flex-1 py-2">
          <span className="block w-px flex-1 bg-[length:1px_6px] [background-image:linear-gradient(to_bottom,var(--term-border)_50%,transparent_50%)]" />
          <MoveUpIcon className="h-4 w-4 text-sky-500 dark:text-sky-400" />
          <span className="block w-px flex-1 bg-[length:1px_6px] [background-image:linear-gradient(to_bottom,var(--term-border)_50%,transparent_50%)]" />
        </div>
        <span
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-full border-2',
            'border-violet-300/80 bg-violet-50 text-violet-700',
            'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
          )}
        >
          <PinIcon className="h-4 w-4" />
        </span>
      </aside>
    </div>

    {/* Side label / body */}
    <div
      className={cn(
        'mt-md rounded-2xl border-2 border-dashed px-md py-3',
        'border-sky-300/70 bg-white/70 text-center',
        'dark:border-sky-800/70 dark:bg-slate-950/40',
      )}
    >
      <span className="block text-xxsm font-bold uppercase tracking-wider text-sky-700 dark:text-sky-200">
        {content.sideLabel}
      </span>
      <p className="mt-1 text-xsm text-[var(--term-muted)] break-keep">{content.sideBody}</p>
    </div>
  </div>
);

const StackCard = ({ node }: { node: FiberStackNode }) => {
  const Icon = iconMap[node.iconName];
  const t = toneTokens[node.tone];
  return (
    <article
      className={cn(
        'relative grid grid-cols-[auto_minmax(0,_1fr)_auto] gap-sm items-center',
        'rounded-2xl border-2 bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
          t.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
          {node.title}
        </span>
        <code
          className={cn(
            'inline-flex w-fit items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
            'border-slate-800 bg-slate-950 text-slate-100',
          )}
        >
          <span className="text-amber-300">{node.state}</span>
        </code>
      </div>
      <span
        className={cn(
          'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
          t.chip,
        )}
      >
        {node.badge}
      </span>
    </article>
  );
};
