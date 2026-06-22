import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { TestAsDocContent } from '../content';
import { AlertTriangleIcon, ScanSearchIcon, TargetIcon } from '../icons';

type Props = { content: TestAsDocContent['whyImplementation'] };

export const WhyImplementationSection = ({ content }: Props) => {
  return (
    <section
      id="section-why-implementation"
      aria-labelledby="heading-why-implementation"
      className="space-y-lg"
    >
      <SectionHeader
        id="why-implementation"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ScanSearchIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <li key={card.number}>
            <article
              className={cn(
                'group flex h-full flex-col gap-sm rounded-xl border-2 p-md',
                'border-amber-200 bg-amber-50/40',
                'dark:border-amber-800/60 dark:bg-amber-950/20',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:border-amber-400 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                'dark:motion-safe:hover:border-amber-500/80',
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-2 py-1',
                    'border-amber-300 bg-white text-amber-800',
                    'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
                    'text-[10px] font-mono font-bold tabular-nums',
                  )}
                >
                  <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-amber-500" />
                  {card.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-md',
                    'border border-amber-300 bg-amber-100 text-amber-700',
                    'dark:border-amber-700/70 dark:bg-amber-900/60 dark:text-amber-200',
                  )}
                >
                  <AlertTriangleIcon className="h-3.5 w-3.5" />
                </span>
              </div>

              <h3 className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.body}
              </p>
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
            <span className="bg-gradient-to-r from-violet-300 to-emerald-300 bg-clip-text text-transparent">
              {content.bannerLines[1]}
            </span>
          </span>
        </p>
      </aside>
    </section>
  );
};
