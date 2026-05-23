import { cn } from '@it-tech-blog/utils';

import type { FiberCentralContent, FieldGroup } from '../content';
import { DatabaseIcon, FingerprintIcon, FlagIcon, ListIcon, NetworkIcon, ZapIcon } from '../icons';

import { fiberRowAccent, groupIconBg, groupTitle } from './groupStyles';

type Props = {
  visualTitle: string;
  fiberLabel: string;
  fiberGroupFields: FiberCentralContent['hero']['fiberGroupFields'];
  groups: FieldGroup[];
};

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  list: ListIcon,
  flag: FlagIcon,
  zap: ZapIcon,
} as const;

export const FiberSummaryDiagram = ({
  visualTitle,
  fiberLabel,
  fiberGroupFields,
  groups,
}: Props) => {
  const byId = Object.fromEntries(groups.map((g) => [g.id, g]));
  const groupOrder: FieldGroup['id'][] = [
    'identity',
    'connection',
    'input',
    'state-queue',
    'flags',
    'scheduling',
  ];

  return (
    <div
      className={cn(
        'rounded-3xl border bg-sky-50/30 dark:bg-sky-950/15 p-md sm:p-lg',
        'border-sky-200/60 dark:border-sky-800/40 shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <h3 className="text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)] mb-sm">
        {`// ${visualTitle}`}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.3fr)_minmax(0,_0.4fr)_minmax(0,_0.3fr)] gap-md items-center">
        {/* Left group cards */}
        <ul className="flex flex-col gap-2 min-w-0">
          {groupOrder.slice(0, 3).map((id) => (
            <li key={id}>
              <GroupCard group={byId[id]} />
            </li>
          ))}
        </ul>

        {/* Central dark Fiber object */}
        <article
          className={cn(
            'rounded-2xl border-2 bg-slate-900 dark:bg-slate-950 p-md',
            'border-slate-700/70',
            'shadow-[0_16px_36px_-16px_rgba(2,6,23,0.65)]',
          )}
        >
          <header className="mb-2 flex items-center justify-between">
            <h4 className="font-mono text-sm font-bold text-slate-100">{fiberLabel}</h4>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              object
            </span>
          </header>
          <ul className="flex flex-col gap-2">
            {fiberGroupFields.map((block) => {
              const g = byId[block.id];
              return (
                <li key={block.id}>
                  <ul className="flex flex-col gap-0.5">
                    {block.rows.map((row) => (
                      <li
                        key={row}
                        className={cn(
                          'rounded-md border-l-4 px-2 py-0.5 text-[11px] font-mono',
                          fiberRowAccent[g.tone],
                        )}
                      >
                        {row}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </article>

        {/* Right group cards */}
        <ul className="flex flex-col gap-2 min-w-0">
          {groupOrder.slice(3).map((id) => (
            <li key={id}>
              <GroupCard group={byId[id]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const GroupCard = ({ group }: { group: FieldGroup }) => {
  const Icon = iconMap[group.iconName];
  return (
    <article
      className={cn(
        'flex items-start gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5',
        // border tones
        group.tone === 'sky' && 'border-sky-200/80 dark:border-sky-800/60',
        group.tone === 'emerald' && 'border-emerald-200/80 dark:border-emerald-800/60',
        group.tone === 'violet' && 'border-violet-200/80 dark:border-violet-800/60',
        group.tone === 'amber' && 'border-amber-200/80 dark:border-amber-800/60',
        group.tone === 'rose' && 'border-rose-200/80 dark:border-rose-800/60',
        group.tone === 'teal' && 'border-teal-200/80 dark:border-teal-800/60',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0',
          groupIconBg[group.tone],
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h5 className={cn('text-xsm font-bold leading-tight', groupTitle[group.tone])}>
          {group.title}
        </h5>
        <code className="text-[10px] font-mono text-[var(--term-muted)] break-all leading-snug">
          {group.fields.join(' / ')}
        </code>
      </div>
    </article>
  );
};
