import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { SharedContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon, XCircleIcon } from '../icons';
import { accentText, neutralChrome, toneAccent } from '../localTone';

type Props = { content: SharedContent['why'] };

export const WhyShared = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-why" className="space-y-md">
      <SectionHeader
        id="why"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1.05fr)] items-stretch gap-md">
        {/* Problem (부정) */}
        <article
          className={cn(
            'flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-md',
                neutralChrome,
                'text-rose-600 dark:text-rose-300',
              )}
            >
              <XCircleIcon className="h-5 w-5" />
            </span>
            <h3 className="text-md font-bold tracking-tight text-rose-600 dark:text-rose-300">
              {content.problem.title}
            </h3>
          </header>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.problem.body}
          </p>
        </article>

        {/* Arrow */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center text-[var(--term-accent)]"
        >
          <span className="hidden lg:inline-flex">
            <ArrowRightIcon className="h-8 w-8" />
          </span>
          <span className="inline-flex lg:hidden text-3xl leading-none">↓</span>
        </div>

        {/* Solution (긍정) */}
        <article
          className={cn(
            'flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-md',
                neutralChrome,
                'text-[var(--term-accent)]',
              )}
            >
              <CheckCircleIcon className="h-5 w-5" />
            </span>
            <h3 className="text-md font-bold tracking-tight text-[var(--term-accent)]">
              {content.solution.title}
            </h3>
          </header>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.solution.body}
          </p>
        </article>

        {/* Example */}
        <article
          className={cn(
            'flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.example.title}
          </h3>
          <ul className="flex flex-wrap gap-1.5 mt-auto">
            {content.example.tags.map((tag) => (
              <li key={tag.id}>
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-mono font-bold tracking-tight',
                    neutralChrome,
                    accentText[toneAccent(tag.tone)],
                  )}
                >
                  {tag.label}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
