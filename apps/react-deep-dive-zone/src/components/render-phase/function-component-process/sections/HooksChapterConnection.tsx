import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FunctionComponentContent } from '../content';
import { ArrowRightIcon, LinkIcon, PlayCircleIcon } from '../icons';

type Props = { content: FunctionComponentContent['hooksLink'] };

export const HooksChapterConnection = ({ content }: Props) => (
  <section id="hooks-link" aria-labelledby="heading-hooks-link" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="hooks-link"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LinkIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-teal-50/25 to-violet-50/25',
        'dark:from-[var(--term-bg)] dark:via-teal-950/15 dark:to-violet-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_0.6fr)] gap-md lg:gap-lg items-stretch">
        {/* Chapter chain */}
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-2">
          <ChapterCard
            label={content.currentChapter.label}
            title={content.currentChapter.title}
            description={content.currentChapter.description}
            kind="current"
          />
          <span
            aria-hidden="true"
            className="flex items-center justify-center text-[var(--term-muted)] py-2"
          >
            <ArrowRightIcon className="h-5 w-5 sm:rotate-0 rotate-90" />
          </span>
          <ChapterCard
            label={content.nextChapter.label}
            title={content.nextChapter.title}
            description={content.nextChapter.description}
            kind="next"
          />
        </div>

        {/* Side points */}
        <aside
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-violet-200/80 bg-violet-50/40',
            'dark:border-violet-800/70 dark:bg-violet-950/20',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                'bg-violet-100 text-violet-700 border-violet-200/80',
                'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
              )}
            >
              <PlayCircleIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-violet-800 dark:text-violet-100 break-keep">
              {content.sidePointTitle}
            </h3>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.sidePoints.map((point) => (
              <li
                key={point.text}
                className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-violet-900 dark:text-violet-100 break-keep"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 dark:bg-violet-400"
                />
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  </section>
);

const ChapterCard = ({
  label,
  title,
  description,
  kind,
}: {
  label: string;
  title: string;
  description: string;
  kind: 'current' | 'next';
}) => {
  const isCurrent = kind === 'current';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
        isCurrent
          ? 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20'
          : 'border-sky-300/80 bg-sky-50/40 dark:border-sky-700/70 dark:bg-sky-950/20',
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
          isCurrent
            ? 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60'
            : 'border-sky-300/70 bg-white/70 text-sky-700 dark:bg-slate-950/60 dark:text-sky-200 dark:border-sky-700/60',
        )}
      >
        {label}
      </span>
      <h4
        className={cn(
          'text-md sm:text-lg font-bold leading-tight break-keep',
          isCurrent ? 'text-teal-800 dark:text-teal-100' : 'text-sky-800 dark:text-sky-100',
        )}
      >
        {title}
      </h4>
      <p className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
        {description}
      </p>
    </article>
  );
};
