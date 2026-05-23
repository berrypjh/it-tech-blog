import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { bitText } from '../components/laneStyles';
import type { FiberLanesContent } from '../content';
import { BinaryIcon } from '../icons';

type Props = { content: FiberLanesContent['bitfield'] };

const laneLabelClass: Record<string, string> = {
  SyncLane: 'text-emerald-300 border-emerald-700/60 bg-emerald-500/15',
  DefaultLane: 'text-cyan-300 border-cyan-700/60 bg-cyan-500/15',
  TransitionLanes: 'text-violet-300 border-violet-700/60 bg-violet-500/15',
};

export const BitfieldVisualization = ({ content }: Props) => (
  <section id="bitfield" aria-labelledby="heading-bitfield" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="bitfield"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BinaryIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_12px_32px_-16px_rgba(15,23,42,0.6),0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/70 px-md py-2">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
            lanes.bin
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
          binary
        </span>
      </header>

      <div className="px-md py-md">
        <ul className="flex flex-col gap-2 font-mono text-[13px] sm:text-sm">
          {content.rows.map((row) => (
            <li
              key={row.lane}
              className={cn(
                'flex flex-wrap items-center gap-3 rounded-md px-2 py-2',
                'transition-colors motion-safe:hover:bg-slate-900/60',
              )}
            >
              <code className={cn('whitespace-pre tracking-wider', bitText[row.tone])}>
                {row.bits}
              </code>
              <span aria-hidden="true" className="text-slate-500">
                →
              </span>
              <span
                className={cn(
                  'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
                  laneLabelClass[row.lane] ?? 'text-slate-300 border-slate-700/60 bg-slate-800/40',
                )}
              >
                {row.lane}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-md border-t border-dashed border-slate-800/80 pt-md text-xsm sm:text-sm leading-relaxed text-slate-300 break-keep">
          {content.description}
        </p>
      </div>
    </div>
  </section>
);
