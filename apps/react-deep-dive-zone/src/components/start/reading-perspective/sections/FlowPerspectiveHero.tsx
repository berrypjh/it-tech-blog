import { cn } from '@it-tech-blog/utils';

import { SixStageVerticalRail } from '../components/SixStageVerticalRail';
import type { ReadingPerspectiveContent } from '../content';
import { supportPointIconByName } from '../icons';
import { stageTones } from '../tones';

type Props = { content: ReadingPerspectiveContent['hero'] };

const supportToneToStageTone: Record<'sky' | 'teal' | 'violet', 'blue' | 'teal' | 'lavender'> = {
  sky: 'blue',
  teal: 'teal',
  violet: 'lavender',
};

export const FlowPerspectiveHero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* 프롬프트 라인 */}
      <p className="mb-md text-xxsm text-[var(--term-muted)] tabular-nums">
        <span className="text-[var(--term-accent)] font-bold">$</span> stage{' '}
        <span className="text-[var(--term-fg)]">--first</span>
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

          {/* 3 supporting points */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-sm mt-sm">
            {content.points.map((p) => {
              const t = stageTones[supportToneToStageTone[p.tone]];
              const Icon = supportPointIconByName[p.icon];
              return (
                <li key={p.id}>
                  <article
                    className={cn(
                      'flex flex-col gap-1.5 rounded-md border bg-white dark:bg-slate-900 p-sm h-full',
                      t.border,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex w-fit items-center justify-center w-7 h-7 rounded-md',
                        t.num,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <p className={cn('text-xsm font-bold leading-tight', t.text)}>{p.title}</p>
                    <p className="text-[10px] text-[var(--term-muted)] leading-snug break-keep">
                      {p.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 우측 — vertical rail */}
        <div className="order-first lg:order-none">
          <SixStageVerticalRail rail={content.rail} />
        </div>
      </div>
    </section>
  );
};
