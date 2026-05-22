import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import { GithubMark } from '../components/GithubMark';
import type { CreateFiberFromElementContent, MissionStep } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ExternalLinkIcon, ListChecksIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['mission'] };

export const CodeReadingMission = ({ content }: Props) => (
  <section id="mission" aria-labelledby="heading-mission" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="mission"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1fr)] gap-md items-stretch">
        {/* Mission steps */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-sm items-stretch">
          {content.steps.map((step, idx) => (
            <li key={step.id} className="relative flex">
              <StepCard step={step} />
              {idx < content.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute z-10 hidden',
                    // arrow placement: between sm:grid pairs (1-2 row, 2-3 col, 3-4 row)
                    'sm:flex items-center justify-center w-6 h-6 rounded-full',
                    'bg-[var(--term-bg)] border border-sky-200/80 text-sky-600 dark:border-sky-800/60 dark:text-sky-300',
                    // odd indices (1, 3) → between top/bottom rows
                    idx % 2 === 0
                      ? 'top-1/2 -right-3 -translate-y-1/2'
                      : 'left-1/2 -bottom-3 -translate-x-1/2',
                  )}
                >
                  <span className="contents">
                    {idx % 2 === 0 ? (
                      <ArrowRightIcon className="h-3 w-3" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3" />
                    )}
                  </span>
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* GitHub CTA */}
        <a
          href={content.githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group flex flex-col items-center justify-center gap-sm rounded-2xl border-2 p-md sm:p-lg text-center',
            'border-sky-500 bg-sky-600 text-white',
            'dark:border-sky-400 dark:bg-sky-500 dark:text-slate-950',
            'shadow-[0_10px_30px_-12px_rgba(2,132,199,0.55)]',
            'transition-all hover:-translate-y-0.5 hover:bg-sky-700 dark:hover:bg-sky-400',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-14 h-14 rounded-2xl',
              'bg-white/15 ring-1 ring-white/30',
              'dark:bg-slate-950/20 dark:ring-slate-950/40',
            )}
          >
            <GithubMark className="h-7 w-7" />
          </span>
          <span className="text-md sm:text-lg font-bold tracking-tight break-keep">
            {content.githubCta}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xsm font-mono opacity-90">
            <ExternalLinkIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            facebook/react · ReactFiber.js
          </span>
        </a>
      </div>
    </article>
  </section>
);

const StepCard = ({ step }: { step: MissionStep }) => (
  <article
    className={cn(
      'group flex flex-1 items-start gap-sm rounded-xl border p-md',
      'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      'hover:border-sky-300/70 dark:hover:border-sky-700/60',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
        'bg-sky-600 text-white font-mono text-sm font-bold tabular-nums',
        'dark:bg-sky-500 dark:text-slate-950',
        'shadow-[0_4px_10px_-4px_rgba(2,132,199,0.55)]',
      )}
    >
      {step.number}
    </span>
    <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep self-center">
      {step.text}
    </p>
  </article>
);
