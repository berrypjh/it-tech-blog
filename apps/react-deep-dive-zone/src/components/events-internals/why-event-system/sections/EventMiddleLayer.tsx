import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { Tone, WhyEventSystemContent } from '../content';
import {
  ArrowDownIcon,
  AtomIcon,
  ComponentIcon,
  GlobeIcon,
  LayersIcon,
  LightbulbIcon,
} from '../icons';

type Props = { content: WhyEventSystemContent['middle'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30',
  cyan: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/70 dark:bg-cyan-950/30',
  teal: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
  emerald:
    'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30',
  violet: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/30',
  blue: 'border-blue-300/80 bg-blue-50/60 dark:border-blue-700/70 dark:bg-blue-950/30',
  amber: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/70 dark:bg-amber-950/30',
  rose: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/30',
};

const toneIcon: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
};

const layerIcons = [GlobeIcon, AtomIcon, ComponentIcon];

export const EventMiddleLayer = ({ content }: Props) => (
  <section aria-labelledby="heading-middle">
    <SectionHeader
      id="middle"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col gap-2">
        {content.layers.map((layer, i) => {
          const Icon = layerIcons[i] ?? AtomIcon;
          const isLast = i === content.layers.length - 1;
          const isMiddle = i === 1;
          return (
            <li key={layer.title} className="flex flex-col">
              <article
                className={cn(
                  'group flex items-center gap-3 sm:gap-4 rounded-2xl border-2 px-md py-3 sm:py-4 transition-colors',
                  'hover:-translate-y-0.5 motion-reduce:transform-none',
                  toneCard[layer.tone],
                  isMiddle && 'ring-1 ring-violet-200/70 dark:ring-violet-700/40',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full',
                    'text-xsm font-mono font-bold tabular-nums',
                    'bg-white shadow-sm dark:bg-slate-950/60',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                    toneIcon[layer.tone],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
                    {layer.title}
                  </h3>
                  <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                    {layer.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden sm:inline-flex h-7 px-2 items-center justify-center rounded-md font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-bg)]"
                >
                  layer {i + 1}
                </span>
              </article>

              {!isLast && (
                <span aria-hidden="true" className="self-center my-1 text-[var(--term-muted)]">
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* Closing note */}
      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-amber-300/80 bg-amber-50/60',
          'dark:border-amber-800/60 dark:bg-amber-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
          {content.closingNote}
        </p>
      </aside>
    </div>
  </section>
);
