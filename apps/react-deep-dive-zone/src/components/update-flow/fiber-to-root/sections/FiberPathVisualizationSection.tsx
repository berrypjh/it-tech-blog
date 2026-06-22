import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberPathNode, FiberStackIconName, FiberToRootContent } from '../content';
import {
  ArrowRightIcon,
  FlagIcon,
  NetworkIcon,
  PanelsTopLeftIcon,
  PinIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: FiberToRootContent['fiberPath'] };

const iconMap: Record<FiberStackIconName, typeof FlagIcon> = {
  flag: FlagIcon,
  panels: PanelsTopLeftIcon,
  workflow: WorkflowIcon,
  pin: PinIcon,
};

export const FiberPathVisualizationSection = ({ content }: Props) => (
  <section id="fiber-path" aria-labelledby="heading-fiber-path" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="fiber-path"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-violet-50/20 to-emerald-50/25',
        'dark:from-[var(--term-bg)] dark:via-violet-950/10 dark:to-emerald-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// source → ... → host root'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          parent path
        </span>
      </header>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-2 items-stretch">
        {content.nodes.map((node, idx) => (
          <li key={node.id} className="contents">
            <PathCard node={node} />
            {idx < content.nodes.length - 1 && <ReturnArrow />}
          </li>
        ))}
      </ol>

      {/* Bottom propagation label */}
      <div aria-hidden="true" className="mt-md relative h-3">
        <span className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-px [background-image:linear-gradient(to_right,var(--term-border)_50%,transparent_50%)] [background-size:6px_1px]" />
      </div>
      <p className="mt-1 text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        ↑ {content.bottomLabel}
      </p>
    </article>
  </section>
);

const PathCard = ({ node }: { node: FiberPathNode }) => {
  const Icon = iconMap[node.iconName];
  const t = toneTokens[node.tone];
  return (
    <article
      className={cn(
        'relative flex flex-col gap-sm rounded-2xl bg-[var(--term-bg)] p-md',
        node.isSource ? 'border-2' : 'border',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        {node.isSource && (
          <span
            className={cn(
              'inline-flex items-center rounded-md border px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider',
              t.chip,
            )}
          >
            source
          </span>
        )}
      </header>

      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
        {node.title}
      </h3>

      <code
        className={cn(
          'inline-flex w-fit items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
          'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        <span className="text-amber-300">{node.state}</span>
      </code>

      <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">{node.body}</p>
    </article>
  );
};

const ReturnArrow = () => (
  <div aria-hidden="true" className="hidden lg:flex flex-col items-center justify-center gap-1">
    <span
      className={cn(
        'inline-flex h-7 w-7 items-center justify-center rounded-full border',
        'border-sky-200/80 bg-sky-50 text-sky-700',
        'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300',
      )}
    >
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </span>
    <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      return
    </span>
  </div>
);
