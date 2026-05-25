import { cn } from '@it-tech-blog/utils';

import { CheckCircleIcon, LoaderIcon, TriangleAlertIcon } from '../icons';

type FulfilledProps = { code: string; label?: string };

export const FulfilledPreview = ({ code, label }: FulfilledProps) => (
  <div
    className={cn(
      'flex flex-col gap-2 rounded-xl border-2 p-3',
      'border-emerald-200 bg-emerald-50/60 dark:border-emerald-800/60 dark:bg-emerald-950/30',
    )}
  >
    {label && (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
        <CheckCircleIcon className="h-3 w-3" aria-hidden="true" />
        {label}
      </span>
    )}
    <pre className="overflow-x-auto rounded-lg border border-emerald-200/70 bg-white px-3 py-2 text-xsm font-mono text-emerald-900 dark:border-emerald-800/60 dark:bg-slate-900 dark:text-emerald-200">
      <code>{code}</code>
    </pre>
  </div>
);

export const PendingPreview = ({ label }: { label: string }) => (
  <div
    className={cn(
      'flex flex-col gap-2 rounded-xl border-2 p-3',
      'border-violet-200 bg-violet-50/60 dark:border-violet-800/60 dark:bg-violet-950/30',
    )}
  >
    <span className="inline-flex items-center gap-1.5 text-xsm font-bold text-violet-700 dark:text-violet-300">
      <LoaderIcon className="h-3.5 w-3.5 motion-safe:animate-spin" aria-hidden="true" />
      {label}
    </span>
    <div className="flex flex-col gap-1.5">
      <span
        aria-hidden="true"
        className="block h-2 w-5/6 rounded bg-violet-200 dark:bg-violet-800/60"
      />
      <span
        aria-hidden="true"
        className="block h-2 w-3/5 rounded bg-violet-200/70 dark:bg-violet-800/40"
      />
      <span
        aria-hidden="true"
        className="block h-1 w-full overflow-hidden rounded-full bg-violet-100 dark:bg-violet-900/50"
      >
        <span className="block h-full w-1/3 rounded-full bg-violet-500 dark:bg-violet-400" />
      </span>
    </div>
  </div>
);

type RejectedProps = { title: string; body?: string };

export const RejectedPreview = ({ title, body }: RejectedProps) => (
  <div
    className={cn(
      'flex items-start gap-2 rounded-xl border-2 p-3',
      'border-rose-200 bg-rose-50/60 dark:border-rose-800/60 dark:bg-rose-950/30',
    )}
  >
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
    >
      <TriangleAlertIcon className="h-3.5 w-3.5" />
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-xsm font-bold text-rose-700 dark:text-rose-200 break-keep">
        {title}
      </span>
      {body && (
        <span className="text-[11px] text-rose-700/80 dark:text-rose-200/80 break-keep">
          {body}
        </span>
      )}
    </div>
  </div>
);
