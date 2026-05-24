import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { FiberToRootContent } from '../content';
import {
  ArrowRightIcon,
  FlagIcon,
  MousePointerClickIcon,
  MoveUpIcon,
  PanelsTopLeftIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: FiberToRootContent['returnPointer'] };

const iconMap = {
  mousePointer: MousePointerClickIcon,
  workflow: WorkflowIcon,
  panels: PanelsTopLeftIcon,
  flag: FlagIcon,
} as const;

export const ReturnPointerReasonSection = ({ content }: Props) => (
  <section
    id="return-pointer"
    aria-labelledby="heading-return-pointer"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="return-pointer"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MoveUpIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.3fr)] gap-md lg:gap-lg items-stretch">
      {/* Left */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/35 to-amber-50/20',
          'dark:from-[var(--term-bg)] dark:via-sky-950/20 dark:to-amber-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
              'bg-amber-100 text-amber-700 border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <MoveUpIcon className="h-5 w-5" />
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
            no Root backpointer
          </span>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5">
          <li className="rounded-md border border-[var(--term-border)] bg-white/70 px-2 py-0.5 text-[10px] font-mono text-[var(--term-muted)] dark:bg-slate-950/40">
            queue → ✗ Root
          </li>
          <li className="rounded-md border border-sky-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-sky-700 dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-200">
            child.return → parent
          </li>
        </ul>
      </article>

      {/* Right flow */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-violet-50/20 to-emerald-50/25',
          'dark:from-[var(--term-bg)] dark:via-violet-950/10 dark:to-emerald-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-200">
            ↑ {content.flowLabel}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80 rounded-md border border-emerald-200/70 dark:border-emerald-800/60 px-2 py-0.5">
            until HostRoot
          </span>
        </header>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-2 items-stretch">
          {content.nodes.map((node, idx) => (
            <li key={node.title} className="contents">
              <Node node={node} />
              {idx < content.nodes.length - 1 && <Arrow />}
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);

type NodeProps = {
  node: FiberToRootContent['returnPointer']['nodes'][number];
};

const Node = ({ node }: NodeProps) => {
  const Icon = iconMap[node.iconName];
  const t = toneTokens[node.tone];
  return (
    <article
      className={cn(
        'flex flex-col items-center gap-2 rounded-2xl bg-[var(--term-bg)] p-md text-center',
        node.isRoot ? 'border-2' : 'border',
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
      <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
        {node.title}
      </h4>
      <span className="text-[10px] font-mono text-[var(--term-muted)]">{node.sub}</span>
    </article>
  );
};

const Arrow = () => (
  <div
    aria-hidden="true"
    className="hidden lg:flex items-center justify-center text-[var(--term-dim)]"
  >
    <span
      className={cn(
        'inline-flex h-7 w-7 items-center justify-center rounded-full border',
        'border-sky-200/80 bg-sky-50 text-sky-700',
        'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300',
      )}
    >
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </span>
  </div>
);
