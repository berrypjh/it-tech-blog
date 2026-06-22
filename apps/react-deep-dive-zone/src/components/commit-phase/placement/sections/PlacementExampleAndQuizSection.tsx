import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { PlacementContent } from '../content';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  HelpCircleIcon,
  LayersIcon,
  SparklesIcon,
} from '../icons';

type Props = {
  example: PlacementContent['example'];
  quiz: PlacementContent['quiz'];
};

export const PlacementExampleAndQuizSection = ({ example, quiz }: Props) => (
  <section
    id="example-and-quiz"
    aria-labelledby="heading-example-and-quiz"
    className="space-y-md scroll-mt-xl"
  >
    <h2 id="heading-example-and-quiz" className="sr-only">
      Easy list example and mini quiz
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_0.8fr)] gap-3 items-start">
      <EasyExample example={example} />
      <MiniQuiz quiz={quiz} />
    </div>
  </section>
);

const EasyExample = ({ example }: { example: PlacementContent['example'] }) => (
  <div className="space-y-md">
    <SectionBadgeHeader
      id="easy-example"
      number={example.number}
      eyebrow={example.eyebrow}
      title={example.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <DomCard
          title={example.beforeTitle}
          code={example.beforeCode}
          preview={example.beforePreview}
          variant="before"
        />
        <CenterArrow lines={example.centerLines} />
        <DomCard
          title={example.afterTitle}
          code={example.afterCode}
          preview={example.afterPreview}
          variant="after"
          newBadge={example.newBadge}
        />
      </div>
    </article>
  </div>
);

const CenterArrow = ({ lines }: { lines: string[] }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
        'border-violet-300/80 bg-gradient-to-br from-violet-100 to-sky-100',
        'dark:border-violet-700/70 dark:from-violet-950/70 dark:to-sky-950/60',
        'text-violet-700 dark:text-violet-200',
        'shadow-[0_1px_0_var(--term-border)]',
        'ring-2 ring-violet-300/30 dark:ring-violet-500/20',
      )}
    >
      <span className="hidden md:inline-block">
        <ChevronRightIcon className="h-6 w-6" />
      </span>
      <span className="md:hidden">
        <ArrowDownIcon className="h-6 w-6" />
      </span>
    </span>
    <ul
      className={cn(
        'flex flex-col gap-0.5 rounded-xl border-2 px-sm py-1.5 text-center',
        'border-violet-300/80 bg-violet-50/70',
        'dark:border-violet-700/70 dark:bg-violet-950/30',
      )}
    >
      {lines.map((line) => (
        <li
          key={line}
          className="text-[11px] font-mono font-bold text-violet-800 dark:text-violet-100 break-keep"
        >
          {line}
        </li>
      ))}
    </ul>
  </div>
);

const DomCard = ({
  title,
  code,
  preview,
  variant,
  newBadge,
}: {
  title: string;
  code: string;
  preview: string[];
  variant: 'before' | 'after';
  newBadge?: string;
}) => {
  const isAfter = variant === 'after';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        isAfter
          ? 'border-teal-300/80 dark:border-teal-700/70'
          : 'border-sky-300/70 dark:border-sky-700/60',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            isAfter ? 'text-teal-700 dark:text-teal-300' : 'text-sky-700 dark:text-sky-300',
          )}
        >
          {title}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isAfter
              ? 'border-teal-200/80 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200'
              : 'border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200',
          )}
        >
          {isAfter ? 'after' : 'before'}
        </span>
      </header>

      <pre
        className={cn(
          'overflow-x-auto rounded-lg border p-sm text-[11px] sm:text-xsm leading-snug font-mono',
          isAfter
            ? 'border-teal-200/60 bg-teal-50/50 text-teal-900 dark:border-teal-800/50 dark:bg-teal-950/25 dark:text-teal-100'
            : 'border-sky-200/60 bg-sky-50/50 text-sky-900 dark:border-sky-800/50 dark:bg-sky-950/25 dark:text-sky-100',
        )}
      >
        <code>{code}</code>
      </pre>

      <ul
        className={cn(
          'flex flex-col gap-1 rounded-lg border p-sm',
          'border-[var(--term-border)] bg-slate-50/40 dark:bg-slate-900/30',
        )}
      >
        <li className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-1">
          preview
        </li>
        {preview.map((item, idx) => {
          const isNew = isAfter && idx === preview.length - 1;
          return (
            <li
              key={item}
              className={cn(
                'flex items-center gap-2 rounded-md border px-2 py-1 text-xsm font-mono',
                isNew
                  ? 'border-teal-300/80 bg-teal-50/80 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-100'
                  : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-block h-1.5 w-1.5 rounded-full',
                  isNew ? 'bg-teal-500 dark:bg-teal-300' : 'bg-[var(--term-dim)]',
                )}
              />
              <span>{item}</span>
              {isNew && newBadge && (
                <span className="ml-auto text-[9px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300 font-bold">
                  {newBadge}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const MiniQuiz = ({ quiz }: { quiz: PlacementContent['quiz'] }) => (
  <div className="space-y-md">
    <SectionBadgeHeader
      id="mini-quiz"
      number={quiz.number}
      eyebrow={quiz.eyebrow}
      title={quiz.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-3">
      <article
        className={cn(
          'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
          'border-sky-200/80 bg-sky-50/60',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border-2',
              'bg-sky-100 text-sky-700 border-sky-200/80 font-mono font-bold',
              'dark:bg-sky-950/60 dark:text-sky-100 dark:border-sky-800/60',
            )}
          >
            Q
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            question
          </span>
          <HelpCircleIcon
            aria-hidden="true"
            className="ml-auto h-4 w-4 text-sky-700 dark:text-sky-300"
          />
        </header>
        <p className="text-sm sm:text-md leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
          {quiz.question}
        </p>
      </article>

      <ArrowDownIcon aria-hidden="true" className="h-4 w-4 mx-auto text-[var(--term-dim)]" />

      <article
        className={cn(
          'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-teal-50/60',
          'dark:border-teal-800/70 dark:bg-teal-950/30',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border-2',
                'bg-teal-100 text-teal-700 border-teal-200/80 font-mono font-bold',
                'dark:bg-teal-950/60 dark:text-teal-100 dark:border-teal-800/60',
              )}
            >
              A
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300">
              answer
            </span>
          </div>
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-full',
              'bg-teal-100 text-teal-700 border border-teal-200/80',
              'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
            )}
          >
            <CheckCircleIcon className="h-5 w-5" />
          </span>
        </header>
        <p className="text-sm sm:text-md leading-relaxed text-teal-900 dark:text-teal-100 font-bold break-keep">
          {quiz.answer}
        </p>
      </article>
    </div>
  </div>
);
