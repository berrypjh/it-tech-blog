import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { ExpansionArrow } from '../components/ExpansionArrow';
import { ObjectCard } from '../components/ObjectCard';
import type { ElementVsFiberContent } from '../content';
import { ArrowRightIcon, MapIcon, PlayCircleIcon, SparklesIcon } from '../icons';

type Props = { content: ElementVsFiberContent['hero'] };

export const ElementFiberHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react-reconciler/INTRO.md" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text column */}
      <div className="flex flex-col gap-md min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-xxsm font-bold uppercase tracking-wider',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[60ch] break-keep">
          {content.description}
        </p>

        <p
          className={cn(
            'text-3xl sm:text-[2.5rem] lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight break-keep',
            'bg-gradient-to-r from-sky-600 via-violet-500 to-teal-500 bg-clip-text text-transparent',
            'dark:from-sky-300 dark:via-violet-300 dark:to-teal-300',
          )}
        >
          <span className="block">{content.emphasis.line1}</span>
          <span className="block">{content.emphasis.line2}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-sky-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
            )}
          >
            <MapIcon className="h-4 w-4" aria-hidden="true" />
            {content.primaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={content.secondaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'border border-sky-300/80 bg-[var(--term-bg)] text-sky-700 text-xsm font-bold',
              'transition-colors hover:bg-sky-50',
              'dark:border-sky-700/70 dark:text-sky-200 dark:hover:bg-sky-950/30',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
            )}
          >
            <PlayCircleIcon className="h-4 w-4" aria-hidden="true" />
            {content.secondaryCta}
          </a>
        </div>
      </div>

      {/* Right visual */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-sky-50/80 via-white to-teal-50/80',
            'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/30',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div className="flex flex-col gap-md min-w-0">
            <div
              className={cn(
                'grid items-stretch min-w-0',
                'grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.15fr)]',
                'gap-sm lg:gap-md',
              )}
            >
              <ObjectCard
                label={content.elementLabel}
                code={content.elementCode}
                variant="element"
                caption="simple"
              />
              <div className="self-center justify-self-center">
                <ExpansionArrow label={content.arrowLabel} />
              </div>
              <ObjectCard
                label={content.fiberLabel}
                code={content.fiberCode}
                variant="fiber"
                caption="richer"
              />
            </div>

            <p className="sr-only">
              {content.elementLabel}는 type, key, props 정도의 작은 정보 객체이고,
              {content.fiberLabel}는 트리 연결과 작업 진행을 위한 더 많은 필드를 가집니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
