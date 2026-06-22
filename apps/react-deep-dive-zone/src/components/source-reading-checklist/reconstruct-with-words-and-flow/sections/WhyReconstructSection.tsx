import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ReconstructContent } from '../content';
import { RefreshIcon, SparkIcon, TargetIcon } from '../icons';

type Props = { content: ReconstructContent['whyReconstruct'] };

export const WhyReconstructSection = ({ content }: Props) => {
  return (
    <section
      id="section-why-reconstruct"
      aria-labelledby="heading-why-reconstruct"
      className="space-y-lg"
    >
      <SectionHeader
        id="why-reconstruct"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<RefreshIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <li key={card.number}>
            <article
              className={cn(
                'group flex h-full flex-col gap-sm rounded-xl border-2 p-md',
                'border-blue-200 bg-blue-50/40',
                'dark:border-blue-800/60 dark:bg-blue-950/20',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:border-blue-400 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                'dark:motion-safe:hover:border-blue-500/80',
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-2 py-1',
                    'border-blue-300 bg-white text-blue-800',
                    'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                    'text-[10px] font-mono font-bold tabular-nums',
                  )}
                >
                  <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-blue-500" />
                  {card.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-md',
                    'border border-blue-300 bg-blue-100 text-blue-700',
                    'dark:border-blue-700/70 dark:bg-blue-900/60 dark:text-blue-200',
                  )}
                >
                  <SparkIcon className="h-3.5 w-3.5" />
                </span>
              </div>

              <h3 className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.body}
              </p>

              <div className="mt-auto pt-sm border-t border-dashed border-blue-300/70 dark:border-blue-700/60">
                <p className="text-[11px] italic leading-snug text-blue-800 dark:text-blue-200 break-keep">
                  {card.helper}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <aside
        className={cn(
          'flex items-center gap-3 rounded-xl border-2 p-md sm:p-lg',
          'border-slate-800 bg-slate-900 text-slate-50',
          'dark:border-slate-700 dark:bg-slate-950',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
        aria-label="emphasis"
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
            'border border-violet-400/60 bg-violet-500/15 text-violet-200',
          )}
        >
          <TargetIcon className="h-5 w-5" />
        </span>
        <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug break-keep">
          <span className="block text-slate-300">{content.bannerLines[0]}</span>
          <span className="block text-white">
            <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
              {content.bannerLines[1]}
            </span>
          </span>
        </p>
      </aside>
    </section>
  );
};
