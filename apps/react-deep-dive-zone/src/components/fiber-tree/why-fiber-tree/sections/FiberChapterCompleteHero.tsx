import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { FiberSummaryDiagram } from '../components/FiberSummaryDiagram';
import type { FiberCentralContent } from '../content';
import { SparklesIcon, TrophyIcon } from '../icons';

type Props = {
  hero: FiberCentralContent['hero'];
  groups: FiberCentralContent['summary']['cards'];
};

export const FiberChapterCompleteHero = ({ hero, groups }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react-reconciler/src/ReactInternalTypes.js" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)] gap-xl lg:gap-2xl items-start">
      <div className="flex flex-col gap-md min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-xxsm font-bold uppercase tracking-wider',
            'border-emerald-300/80 bg-emerald-50 text-emerald-700',
            'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-200',
          )}
        >
          <TrophyIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {hero.badge}
        </span>

        <h1
          id="hero-heading"
          className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.25] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{hero.title.line1}</span>
          <span className="block">{hero.title.line2}</span>
          <span className="block">
            {hero.title.line3.split(hero.emphasisInTitle).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span
                    className={cn(
                      'bg-gradient-to-r from-sky-600 via-violet-500 to-emerald-500 bg-clip-text text-transparent',
                      'dark:from-sky-300 dark:via-violet-300 dark:to-emerald-300',
                    )}
                  >
                    {hero.emphasisInTitle}
                  </span>
                )}
              </span>
            ))}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[62ch] break-keep">
          {hero.description}
        </p>

        <div
          className={cn(
            'flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-sky-300/80 bg-sky-50/70',
            'dark:border-sky-800/60 dark:bg-sky-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
          >
            <SparklesIcon className="h-5 w-5" />
          </span>
          <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
            {hero.emphasisBox}
          </p>
        </div>
      </div>

      <div className="order-first lg:order-none min-w-0">
        <FiberSummaryDiagram
          visualTitle={hero.visualTitle}
          fiberLabel={hero.fiberLabel}
          fiberGroupFields={hero.fiberGroupFields}
          groups={groups}
        />
      </div>
    </div>
  </section>
);
