import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from '../../../getting-started/_shared/tones';
import type { PreviewRole } from '../content';
import {
  DatabaseIcon,
  FingerprintIcon,
  FlagIcon,
  LayersIcon,
  NetworkIcon,
  ZapIcon,
} from '../icons';

type Props = { role: PreviewRole };

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  flag: FlagIcon,
  zap: ZapIcon,
  layers: LayersIcon,
} as const;

const iconWrap: Record<ToneKey, string> = {
  sky: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
  violet:
    'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
  emerald:
    'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
  blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
  teal: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
  indigo:
    'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
  amber:
    'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/70',
};

const fieldsText: Record<ToneKey, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  violet: 'text-violet-700 dark:text-violet-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  blue: 'text-blue-700 dark:text-blue-200',
  teal: 'text-teal-700 dark:text-teal-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
  amber: 'text-amber-800 dark:text-amber-200',
};

const hoverBorder: Record<ToneKey, string> = {
  sky: 'hover:border-sky-400/70 dark:hover:border-sky-500/60',
  cyan: 'hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  violet: 'hover:border-violet-400/70 dark:hover:border-violet-500/60',
  emerald: 'hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  blue: 'hover:border-blue-400/70 dark:hover:border-blue-500/60',
  teal: 'hover:border-teal-400/70 dark:hover:border-teal-500/60',
  indigo: 'hover:border-indigo-400/70 dark:hover:border-indigo-500/60',
  amber: 'hover:border-amber-400/70 dark:hover:border-amber-500/60',
};

export const FiberRoleRow = ({ role }: Props) => {
  const Icon = iconMap[role.iconName];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        hoverBorder[role.tone],
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-9 h-9 rounded-lg border shrink-0',
          iconWrap[role.tone],
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code
          className={cn(
            'font-mono text-[12.5px] sm:text-xsm font-bold tracking-tight break-keep',
            fieldsText[role.tone],
          )}
        >
          {role.fields}
        </code>
        <span className="text-[11.5px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {role.description}
        </span>
      </div>
    </article>
  );
};
