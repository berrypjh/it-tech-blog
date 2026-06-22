import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { ReconcileChildrenContent } from '../content';
import { GitForkIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['mountVsUpdate'] };

export const MountVsUpdateBranch = ({ content }: Props) => (
  <section
    id="mount-vs-update"
    aria-labelledby="heading-mount-vs-update"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="mount-vs-update"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      <BranchCard
        kind="mount"
        condition={content.mount.condition}
        fn={content.mount.fn}
        title={content.mount.title}
        description={content.mount.description}
      />
      <BranchCard
        kind="update"
        condition={content.update.condition}
        fn={content.update.fn}
        title={content.update.title}
        description={content.update.description}
      />
    </div>
  </section>
);

type BranchProps = {
  kind: 'mount' | 'update';
  condition: string;
  fn: string;
  title: string;
  description: string;
};

const BranchCard = ({ kind, condition, fn, title, description }: BranchProps) => {
  const isMount = kind === 'mount';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
        isMount
          ? 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20'
          : 'border-violet-300/80 bg-violet-50/40 dark:border-violet-700/70 dark:bg-violet-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex flex-wrap items-center gap-2">
        <code
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
            'border-slate-800 bg-slate-950',
            isMount ? 'text-teal-300' : 'text-violet-300',
          )}
        >
          {condition}
        </code>
        <code
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
            isMount
              ? 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60'
              : 'border-violet-300/70 bg-white/70 text-violet-700 dark:bg-slate-950/60 dark:text-violet-200 dark:border-violet-700/60',
          )}
        >
          {fn}
        </code>
      </header>

      <h3
        className={cn(
          'text-md sm:text-lg font-bold leading-tight break-keep',
          isMount ? 'text-teal-800 dark:text-teal-100' : 'text-violet-800 dark:text-violet-100',
        )}
      >
        {title}
      </h3>

      {/* Mini visual */}
      <div
        className={cn(
          'rounded-2xl border-2 p-md',
          isMount
            ? 'border-teal-200/70 bg-white/70 dark:border-teal-800/60 dark:bg-slate-950/40'
            : 'border-violet-200/70 bg-white/70 dark:border-violet-800/60 dark:bg-slate-950/40',
        )}
      >
        <MiniBrowser kind={kind} />
      </div>

      <p
        className={cn(
          'text-xsm sm:text-sm leading-relaxed break-keep',
          isMount ? 'text-teal-900 dark:text-teal-100' : 'text-violet-900 dark:text-violet-100',
        )}
      >
        {description}
      </p>
    </article>
  );
};

const MiniBrowser = ({ kind }: { kind: 'mount' | 'update' }) => {
  const isMount = kind === 'mount';
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border bg-white dark:bg-slate-950',
        'border-slate-200/80 dark:border-slate-800/70',
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-slate-200/80 dark:border-slate-800/70 px-2 py-1.5">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red-400/80" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-300/80" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400/80" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-2">
        {isMount ? (
          <>
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                aria-hidden="true"
                className={cn(
                  'flex h-8 items-center justify-center rounded-md border-2 border-dashed text-[10px] font-mono font-bold',
                  'border-teal-300/80 bg-teal-50 text-teal-700',
                  'dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
                )}
              >
                new
              </span>
            ))}
          </>
        ) : (
          <>
            <span
              aria-hidden="true"
              className={cn(
                'flex h-8 items-center justify-center rounded-md border text-[10px] font-mono font-bold',
                'border-slate-300/80 bg-slate-100 text-slate-600',
                'dark:border-slate-700/70 dark:bg-slate-900/40 dark:text-slate-300',
              )}
            >
              reuse
            </span>
            <span
              aria-hidden="true"
              className={cn(
                'flex h-8 items-center justify-center rounded-md border-2 text-[10px] font-mono font-bold',
                'border-violet-300/80 bg-violet-50 text-violet-700',
                'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
              )}
            >
              update
            </span>
            <span
              aria-hidden="true"
              className={cn(
                'flex h-8 items-center justify-center rounded-md border-2 border-dashed text-[10px] font-mono font-bold line-through opacity-70',
                'border-rose-300/80 bg-rose-50 text-rose-700',
                'dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200',
              )}
            >
              delete
            </span>
          </>
        )}
      </div>
    </div>
  );
};
