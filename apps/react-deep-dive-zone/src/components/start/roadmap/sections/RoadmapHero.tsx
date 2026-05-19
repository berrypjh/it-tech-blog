import { cn } from '@it-tech-blog/utils';

import { ExplorationMapVisual } from '../components/ExplorationMapVisual';
import type { RoadmapContent } from '../content';
import { heroSupportIconByName } from '../icons';
import { tones } from '../tones';

type Props = { content: RoadmapContent['hero'] };

export const RoadmapHero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* 프롬프트 라인 */}
      <p className="mb-md text-xxsm text-[var(--term-muted)] tabular-nums">
        <span className="text-[var(--term-accent)] font-bold">$</span> ready{' '}
        <span className="text-[var(--term-fg)]">--launch</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-xl lg:gap-2xl items-start">
        {/* 좌측 */}
        <div className="flex flex-col gap-md min-w-0">
          {/* Step badge */}
          <span className="inline-flex w-fit items-center gap-1.5 px-2 py-1 rounded-md bg-sky-500 text-white text-xxsm font-bold tracking-wide dark:bg-sky-400 dark:text-slate-900 shadow-[0_1px_0_var(--term-border)]">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-white/80"
              aria-hidden="true"
            />
            {content.stepBadge}
          </span>

          {/* h1 */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-[2.625rem] font-bold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep"
          >
            {content.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* description */}
          <div className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
            {content.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* 4 supporting items panel */}
          <div className="mt-sm rounded-lg border border-sky-200/70 dark:border-sky-800/60 bg-sky-50/40 dark:bg-sky-950/30 p-md shadow-[0_2px_0_var(--term-border)]">
            <p className="text-[10px] uppercase tracking-wider text-sky-600 dark:text-sky-300 font-bold mb-sm">
              {content.supportTitle}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              {content.supports.map((s) => {
                const t = tones[s.tone];
                const Icon = heroSupportIconByName[s.icon];
                return (
                  <li key={s.id}>
                    <article
                      className={cn(
                        'flex items-start gap-sm rounded-md border bg-white dark:bg-slate-900 p-sm h-full',
                        t.border,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-md',
                          t.num,
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <p className={cn('text-xsm font-bold leading-tight break-keep', t.text)}>
                          {s.title}
                        </p>
                        <p className="text-[10px] text-[var(--term-muted)] leading-tight break-keep">
                          {s.description}
                        </p>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 우측: exploration map */}
        <div className="order-first lg:order-none">
          <ExplorationMapVisual visual={content.visual} />
        </div>
      </div>
    </section>
  );
};
