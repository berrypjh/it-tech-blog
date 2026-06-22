import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
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
      'bg-[var(--term-surface)] border-y lg:border-x lg:border-y-0 border-dashed border-[var(--term-border)]',
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
    <article className={cn('flex flex-col gap-sm p-md sm:p-lg', 'bg-[var(--term-surface)]')}>
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md border',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-rose-600 dark:text-rose-300',
          )}
        >
          <AlertIcon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-rose-600 dark:text-rose-300',
          )}
        >
          {content.problemBadge}
        </span>
      </header>
      <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.problemCopy}
      </p>
      <ul className="flex flex-col gap-1.5">
        {content.problemList.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-muted)] break-keep"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-rose-400 dark:bg-rose-500 shrink-0"
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
    <article className={cn('flex flex-col gap-sm p-md sm:p-lg', 'bg-[var(--term-surface)]')}>
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md border',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
          )}
        >
          <FlagIcon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
          )}
        >
          {content.solutionBadge}
        </span>
      </header>
      <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.solutionCopy}
      </p>
      <ul className="flex flex-col gap-1.5">
        {content.solutionList.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-muted)] break-keep"
          >
            <CheckCircleIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--term-accent)]"
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
      'bg-[var(--term-surface)]',
      'border-t lg:border-t-0 lg:border-l border-dashed border-[var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-md border',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
        )}
      >
        <SparklesIcon className="h-4 w-4" />
      </span>
      <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-accent)]">
        {title}
      </span>
    </header>
    <ul className="flex flex-col gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className={cn(
              'inline-flex w-full items-center gap-1.5 rounded-md border px-2 py-1.5 text-xsm font-mono break-keep',
              'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)] shrink-0"
            />
            {tag}
          </span>
        </li>
      ))}
    </ul>
  </article>
);
