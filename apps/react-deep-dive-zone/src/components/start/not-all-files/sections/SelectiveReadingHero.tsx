import { cn } from '@it-tech-blog/utils';

import { QuestionPathVisual } from '../components/QuestionPathVisual';
import type { HeroInsight, NotAllFilesContent } from '../content';
import { insightIconByName } from '../icons';

type Props = { content: NotAllFilesContent['hero'] };

type InsightTone = HeroInsight['tone'];

const insightToneClasses: Record<
  InsightTone,
  { bg: string; text: string; border: string; iconBg: string; iconText: string }
> = {
  sky: {
    bg: 'bg-sky-50/70 dark:bg-sky-950/40',
    text: 'text-sky-800 dark:text-sky-100',
    border: 'border-sky-200 dark:border-sky-800/70',
    iconBg: 'bg-sky-500 dark:bg-sky-400',
    iconText: 'text-white dark:text-slate-900',
  },
  teal: {
    bg: 'bg-teal-50/70 dark:bg-teal-950/40',
    text: 'text-teal-800 dark:text-teal-100',
    border: 'border-teal-200 dark:border-teal-800/70',
    iconBg: 'bg-teal-500 dark:bg-teal-400',
    iconText: 'text-white dark:text-slate-900',
  },
  violet: {
    bg: 'bg-violet-50/70 dark:bg-violet-950/40',
    text: 'text-violet-800 dark:text-violet-100',
    border: 'border-violet-200 dark:border-violet-800/70',
    iconBg: 'bg-violet-500 dark:bg-violet-400',
    iconText: 'text-white dark:text-slate-900',
  },
};

export const SelectiveReadingHero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* 프롬프트 라인 */}
      <p className="mb-md text-xxsm text-[var(--term-muted)] tabular-nums">
        <span className="text-[var(--term-accent)] font-bold">$</span> grep -r{' '}
        <span className="text-[var(--term-fg)]">&apos;question&apos;</span> packages/
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.04fr)_minmax(0,_0.96fr)] gap-xl lg:gap-2xl items-start">
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

          {/* 3 insight pills — pale blue panel */}
          <div className="mt-sm rounded-lg border border-sky-200/70 dark:border-sky-800/60 bg-sky-50/60 dark:bg-sky-950/30 p-md shadow-[0_2px_0_var(--term-border)]">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-sm sm:gap-md">
              {content.insights.map((insight) => {
                const t = insightToneClasses[insight.tone];
                const Icon = insightIconByName[insight.icon];
                return (
                  <li key={insight.id}>
                    <article
                      className={cn(
                        'flex items-start gap-sm rounded-md border bg-white dark:bg-slate-900 p-sm',
                        t.border,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full',
                          t.iconBg,
                          t.iconText,
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className={cn('text-xsm font-bold tracking-tight', t.text)}>
                          {insight.title}
                        </span>
                        <span className="text-[10px] text-[var(--term-muted)] leading-tight">
                          {insight.description}
                        </span>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 우측 — visual */}
        <div className="order-first lg:order-none">
          <QuestionPathVisual visual={content.visual} />
        </div>
      </div>
    </section>
  );
};
