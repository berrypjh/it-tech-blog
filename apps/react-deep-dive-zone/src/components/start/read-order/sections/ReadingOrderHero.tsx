import { cn } from '@it-tech-blog/utils';

import { StairLearningRoadmap } from '../components/StairLearningRoadmap';
import type { ReadOrderContent } from '../content';
import { supportPointIconByName } from '../icons';

type Props = { content: ReadOrderContent['hero'] };

export const ReadingOrderHero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* 프롬프트 라인 */}
      <p className="mb-md text-xxsm text-[var(--term-muted)] tabular-nums">
        <span className="text-[var(--term-accent)] font-bold">$</span> tree --depth=8{' '}
        <span className="text-[var(--term-fg)]">react/internals</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.96fr)_minmax(0,_1.04fr)] gap-xl lg:gap-2xl items-start">
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

          {/* 3 supporting points */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-sm mt-sm">
            {content.points.map((p) => {
              const Icon = supportPointIconByName[p.icon];
              return (
                <li key={p.id}>
                  <article
                    className={cn(
                      'flex flex-col gap-1.5 rounded-md border border-teal-200/80 dark:border-teal-800/60 bg-teal-50/40 dark:bg-teal-950/30 p-sm h-full',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex w-fit items-center justify-center w-7 h-7 rounded-md bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-xsm font-bold text-[var(--term-fg)] leading-snug break-keep">
                      {p.title.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    <p className="text-[10px] text-[var(--term-muted)] leading-tight">
                      {p.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 우측 — stair visual */}
        <div className="order-first lg:order-none">
          <StairLearningRoadmap stair={content.stair} />
        </div>
      </div>
    </section>
  );
};
