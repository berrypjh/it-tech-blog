import { cn } from '@it-tech-blog/utils';

import { SearchIcon } from '../icons';

type MockupKind = 'search-input' | 'skeleton-list' | 'offscreen-placeholder';

type Props = { kind: MockupKind; placeholder?: string };

const SearchInputMockup = ({ placeholder = 'real' }: { placeholder?: string }) => (
  <div
    aria-hidden="true"
    className={cn(
      'flex items-center gap-2 rounded-xl border border-blue-200/80 bg-white px-3 py-2',
      'shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:bg-slate-950/40',
    )}
  >
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
      <SearchIcon className="h-3.5 w-3.5" />
    </span>
    <span className="flex-1 font-mono text-xsm font-medium text-[var(--term-fg)] truncate">
      {placeholder}
      <span className="inline-block w-px h-3 ml-0.5 bg-blue-500 align-middle animate-pulse motion-reduce:animate-none" />
    </span>
    <span className="inline-flex h-6 items-center justify-center rounded-md bg-blue-600 px-2 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
      go
    </span>
  </div>
);

const SkeletonListMockup = () => (
  <div
    aria-hidden="true"
    className={cn(
      'flex flex-col gap-1.5 rounded-xl border border-violet-200/80 bg-white p-3',
      'dark:border-violet-800/60 dark:bg-slate-950/40',
    )}
  >
    {[80, 65, 70, 55].map((w, i) => (
      <div key={i} className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-violet-300/80 dark:bg-violet-700/70" />
        <span
          className="h-2.5 rounded bg-violet-200/80 dark:bg-violet-800/50"
          style={{ width: `${w}%` }}
        />
      </div>
    ))}
    <div className="mt-1 flex items-center justify-between">
      <span className="font-mono text-[9px] uppercase tracking-wider text-violet-700 dark:text-violet-300">
        loading list
      </span>
      <span className="font-mono text-[9px] text-[var(--term-muted)]">N items</span>
    </div>
  </div>
);

const OffscreenPlaceholderMockup = () => (
  <div
    aria-hidden="true"
    className={cn(
      'grid grid-cols-3 gap-2 rounded-xl border border-teal-200/80 bg-white p-3',
      'dark:border-teal-800/60 dark:bg-slate-950/40',
    )}
  >
    <div className="col-span-2 flex flex-col gap-1.5">
      <span className="h-2.5 w-full rounded bg-teal-200/80 dark:bg-teal-800/50" />
      <span className="h-2.5 w-3/4 rounded bg-teal-200/80 dark:bg-teal-800/50" />
      <span className="h-2.5 w-2/3 rounded bg-teal-200/80 dark:bg-teal-800/50" />
    </div>
    <div className="flex items-center justify-center rounded-md border-2 border-dashed border-teal-300/80 bg-teal-50/60 text-[9px] font-mono uppercase tracking-wider text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/30 dark:text-teal-200">
      offscreen
    </div>
  </div>
);

export const ScenarioMockup = ({ kind, placeholder }: Props) => {
  if (kind === 'search-input') return <SearchInputMockup placeholder={placeholder} />;
  if (kind === 'skeleton-list') return <SkeletonListMockup />;
  return <OffscreenPlaceholderMockup />;
};
