import { cn } from '@it-tech-blog/utils';

import type { ActionsUpdateFlowContent } from '../content';
import { ArrowRightIcon, AtomIcon } from '../icons';
import { stateTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActionsUpdateFlowContent['quadrant'] };

export const ActionStateQuadrantSection = ({ content }: Props) => (
  <section aria-labelledby="quadrant-heading" className="flex flex-col">
    <SectionHeader
      id="quadrant-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div
      className={cn(
        'relative rounded-2xl border-2 p-md sm:p-lg lg:p-xl',
        'border-slate-200 bg-gradient-to-br from-white via-blue-50/40 to-white',
        'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
        'overflow-hidden',
      )}
    >
      {/* decorative orbits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div className="hidden sm:block h-72 w-72 lg:h-80 lg:w-80 rounded-full border-2 border-dashed border-blue-200/70 dark:border-blue-800/40" />
      </div>

      {(() => {
        const [tl, tr, bl, br] = content.states;
        if (!tl || !tr || !bl || !br) return null;
        return (
          <div className="relative grid grid-cols-1 gap-3 sm:gap-md lg:gap-lg sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-[auto_auto_auto] items-center">
            <QuadrantCard state={tl} align="tl" />
            <span aria-hidden="true" className="hidden sm:block" />
            <QuadrantCard state={tr} align="tr" />

            <span aria-hidden="true" className="hidden sm:block" />
            <div className="col-span-2 sm:col-span-1 flex justify-center">
              <article
                className={cn(
                  'inline-flex flex-col items-center gap-1 rounded-2xl border-2 px-md py-md',
                  'border-blue-700/60 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950',
                  'text-white shadow-[0_4px_0_rgba(15,23,42,0.25)]',
                  'min-w-[170px]',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-300/40 bg-white/10 text-blue-100"
                >
                  <AtomIcon className="h-5 w-5" />
                </span>
                <span className="text-md sm:text-lg font-bold">{content.centerTitle}</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200/80 break-keep">
                  {content.centerSubtitle}
                </span>
              </article>
            </div>
            <span aria-hidden="true" className="hidden sm:block" />

            <QuadrantCard state={bl} align="bl" />
            <span aria-hidden="true" className="hidden sm:block" />
            <QuadrantCard state={br} align="br" />
          </div>
        );
      })()}
    </div>
  </section>
);

const QuadrantCard = ({
  state,
  align,
}: {
  state: ActionsUpdateFlowContent['quadrant']['states'][number];
  align: 'tl' | 'tr' | 'bl' | 'br';
}) => {
  const tone = stateTone[state.state];
  const Icon = iconRegistry[state.iconKey];

  const alignClass = {
    tl: 'sm:items-start sm:text-left',
    tr: 'sm:items-end sm:text-right',
    bl: 'sm:items-start sm:text-left',
    br: 'sm:items-end sm:text-right',
  }[align];

  return (
    <article
      className={cn(
        'flex flex-col items-center text-center gap-2 rounded-2xl border-2 p-md',
        'bg-white dark:bg-[var(--term-bg)]',
        tone.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5',
        alignClass,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
          tone.iconChip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cn('text-sm font-bold break-keep', tone.text)}>{state.title}</h3>
      <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
        {state.description}
      </p>
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
          'font-mono text-[10px] font-bold',
          tone.chip,
        )}
      >
        <ArrowRightIcon aria-hidden="true" className="h-3 w-3" />
        {state.arrowApi}
      </span>
    </article>
  );
};
