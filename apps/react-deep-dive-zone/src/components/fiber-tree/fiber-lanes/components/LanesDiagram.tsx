import { cn } from '@it-tech-blog/utils';

import type { FiberLanesContent } from '../content';

import { LaneIcon } from './LaneIcon';
import { laneIconBg, laneTitleText } from './laneStyles';

type Props = {
  cardLabel: string;
  fields: FiberLanesContent['hero']['fields'];
  stackTitle: string;
  items: FiberLanesContent['hero']['items'];
};

export const LanesDiagram = ({ cardLabel, fields, stackTitle, items }: Props) => (
  <div
    className={cn(
      'relative rounded-3xl p-md sm:p-lg',
      'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900',
      'border border-slate-800/80',
      'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.7),0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.5fr)_24px_minmax(0,_0.5fr)] gap-md items-center">
      {/* Dark Fiber card */}
      <article className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-md min-w-0">
        <header className="mb-2 flex items-center justify-between">
          <h3 className="font-mono text-xsm font-bold tracking-tight text-slate-100">
            {cardLabel}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
            object
          </span>
        </header>
        <ul className="flex flex-col gap-1">
          {fields.map((row, i) => (
            <li
              key={`${row.field}-${i}`}
              className={cn(
                'rounded-md px-2 py-1 text-[11px] font-mono',
                row.highlight === 'lanes'
                  ? 'border-l-4 border-l-emerald-400 bg-emerald-500/15 text-emerald-200'
                  : row.highlight === 'childLanes'
                    ? 'border-l-4 border-l-violet-400 bg-violet-500/15 text-violet-200'
                    : 'text-slate-400 opacity-80',
              )}
            >
              <span className="font-bold">{row.field}</span>
              {row.value && (
                <>
                  <span className="text-slate-500">: </span>
                  <span
                    className={cn(
                      row.highlight === 'lanes'
                        ? 'text-emerald-100'
                        : row.highlight === 'childLanes'
                          ? 'text-violet-100'
                          : 'text-slate-300',
                    )}
                  >
                    {row.value}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </article>

      {/* connectors */}
      <div aria-hidden="true" className="hidden lg:flex flex-col gap-2 self-stretch py-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={cn(
              'block w-full flex-1 border-t-2 translate-y-1/2',
              i === 0
                ? 'border-emerald-400/70'
                : i === items.length - 1
                  ? 'border-slate-500/40'
                  : 'border-violet-400/40',
            )}
          />
        ))}
      </div>

      {/* Priority stack */}
      <article className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-md min-w-0">
        <h3 className="mb-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
          {`// ${stackTitle}`}
        </h3>
        <ul className="flex flex-col gap-1.5">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                'flex items-center gap-2 rounded-lg border bg-slate-950/50 px-2 py-1.5',
                'border-slate-800/80',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex items-center justify-center w-7 h-7 rounded-md',
                  laneIconBg[item.tone],
                )}
              >
                <LaneIcon iconName={item.iconName} className="h-3.5 w-3.5" />
              </span>
              <div className="flex flex-col min-w-0">
                <code
                  className={cn(
                    'font-mono text-[11.5px] font-bold tracking-tight truncate',
                    laneTitleText[item.tone],
                  )}
                >
                  {item.label}
                </code>
                <span className="text-[10px] text-slate-400 truncate">{item.subtitle}</span>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </div>
);
