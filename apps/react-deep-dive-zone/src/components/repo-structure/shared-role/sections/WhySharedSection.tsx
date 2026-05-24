import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { SharedContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CircleHelpIcon,
  iconByName,
  SparklesIcon,
} from '../icons';

type Props = { content: SharedContent['why']; sectionId?: string };

export const WhySharedSection = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-why" className="space-y-md scroll-mt-24">
      <SectionHeader
        id="why"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CircleHelpIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,_0.55fr)] gap-0 items-stretch">
          {/* 문제 */}
          <ProblemPanel content={content} />

          {/* 화살표 */}
          <ArrowConnector />

          {/* 해결 */}
          <SolutionPanel content={content} />

          {/* 예시 */}
          <ExamplePanel title={content.exampleTitle} tags={content.exampleTags} />
        </div>
      </div>
    </section>
  );
};

const ArrowConnector = () => (
  <div
    aria-hidden="true"
    className={cn(
      'flex items-center justify-center px-md py-sm lg:py-md',
      'bg-gradient-to-r lg:bg-gradient-to-b from-rose-50/70 to-emerald-50/70',
      'dark:from-rose-950/30 dark:to-emerald-950/30',
    )}
  >
    <span
      className={cn(
        'inline-flex items-center justify-center w-10 h-10 rounded-full',
        'bg-[var(--term-bg)] border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'text-[var(--term-accent)] rotate-90 lg:rotate-0',
      )}
    >
      <ArrowRightIcon className="h-5 w-5" />
    </span>
  </div>
);

type SideProps = { content: SharedContent['why'] };

const ProblemPanel = ({ content }: SideProps) => {
  const AlertIcon = iconByName.triangleAlert;
  return (
    <article
      className={cn('flex flex-col gap-sm p-md sm:p-lg', 'bg-rose-50/70 dark:bg-rose-950/30')}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md',
            'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-950',
          )}
        >
          <AlertIcon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider',
            'border-rose-300 bg-rose-100/80 text-rose-800',
            'dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-200',
          )}
        >
          {content.problemBadge}
        </span>
      </header>
      <p className="text-md sm:text-lg font-bold leading-snug text-rose-900 dark:text-rose-100 break-keep">
        {content.problemCopy}
      </p>
      <ul className="flex flex-col gap-1.5">
        {content.problemList.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-relaxed text-rose-900/90 dark:text-rose-100/90 break-keep"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const SolutionPanel = ({ content }: SideProps) => {
  const FlagIcon = iconByName.folderCheck;
  return (
    <article
      className={cn('flex flex-col gap-sm p-md sm:p-lg', 'bg-emerald-50/70 dark:bg-emerald-950/30')}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md',
            'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
          )}
        >
          <FlagIcon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider',
            'border-emerald-300 bg-emerald-100/80 text-emerald-800',
            'dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200',
          )}
        >
          {content.solutionBadge}
        </span>
      </header>
      <p className="text-md sm:text-lg font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
        {content.solutionCopy}
      </p>
      <ul className="flex flex-col gap-1.5">
        {content.solutionList.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-relaxed text-emerald-900/90 dark:text-emerald-100/90 break-keep"
          >
            <CheckCircleIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

type ExampleProps = { title: string; tags: string[] };

const ExamplePanel = ({ title, tags }: ExampleProps) => (
  <article
    className={cn(
      'flex flex-col gap-sm p-md sm:p-lg',
      'bg-teal-50/70 dark:bg-teal-950/30',
      'border-l border-dashed border-[var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-md',
          'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-950',
        )}
      >
        <SparklesIcon className="h-4 w-4" />
      </span>
      <span className="text-[10px] uppercase tracking-wider font-bold text-teal-800 dark:text-teal-200">
        {title}
      </span>
    </header>
    <ul className="flex flex-col gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className={cn(
              'inline-flex w-full items-center gap-1.5 rounded-md border px-2 py-1.5 text-xsm font-mono break-keep',
              'border-teal-300 bg-teal-50/80 text-teal-900',
              'dark:border-teal-700/60 dark:bg-teal-950/40 dark:text-teal-100',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0"
            />
            {tag}
          </span>
        </li>
      ))}
    </ul>
  </article>
);
