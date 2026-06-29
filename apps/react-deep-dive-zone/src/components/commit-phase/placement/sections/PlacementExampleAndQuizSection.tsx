import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
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
    <SectionHeader
      id="easy-example"
      eyebrow={example.eyebrow}
      title={example.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
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

const CenterArrow = ({ lines }: { lines: string[] }) => {
  const t = toneTokens.violet;
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <ChevronRightIcon className="hidden md:inline-block h-6 w-6" />
        <ArrowDownIcon className="md:hidden h-6 w-6" />
      </span>
      <ul
        className={cn(
          'flex flex-col gap-0.5 rounded-lg border-2 px-sm py-1.5 text-center',
          t.fill.border,
          t.fill.bg,
        )}
      >
        {lines.map((line) => (
          <li key={line} className={cn('text-[11px] font-mono font-bold break-keep', t.fill.text)}>
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
  const t = toneTokens[isAfter ? 'teal' : 'sky'];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border-2 bg-[var(--term-bg)] p-md',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            t.text,
          )}
        >
          {title}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {isAfter ? 'after' : 'before'}
        </span>
      </header>

      <pre
        className={cn(
          'overflow-x-auto rounded-md border bg-[var(--term-surface)] p-sm text-[11px] sm:text-xsm leading-snug font-mono',
          t.fill.border,
          t.fill.text,
        )}
      >
        <code>{code}</code>
      </pre>

      <ul className="flex flex-col gap-1 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm">
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
                  ? cn(
                      toneTokens.teal.fill.border,
                      toneTokens.teal.fill.bg,
                      toneTokens.teal.fill.text,
                    )
                  : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-block h-1.5 w-1.5 rounded-full',
                  isNew ? toneTokens.teal.dot : 'bg-[var(--term-dim)]',
                )}
              />
              <span>{item}</span>
              {isNew && newBadge && (
                <span
                  className={cn(
                    'ml-auto text-[9px] font-mono uppercase tracking-wider font-bold',
                    toneTokens.teal.text,
                  )}
                >
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

const MiniQuiz = ({ quiz }: { quiz: PlacementContent['quiz'] }) => {
  const q = toneTokens.sky;
  const a = toneTokens.emerald;
  return (
    <div className="space-y-md">
      <SectionHeader
        id="mini-quiz"
        eyebrow={quiz.eyebrow}
        title={quiz.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="flex flex-col gap-3">
        <article
          className={cn(
            'flex flex-col gap-2 rounded-lg border-2 p-md sm:p-lg',
            q.fill.border,
            q.fill.bg,
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-lg border font-mono font-bold',
                q.fill.bg,
                q.fill.border,
                q.fill.text,
              )}
            >
              Q
            </span>
            <span className={cn('text-[10px] font-mono uppercase tracking-wider', q.text)}>
              question
            </span>
            <HelpCircleIcon aria-hidden="true" className={cn('ml-auto h-4 w-4', q.text)} />
          </header>
          <p className={cn('text-sm sm:text-md leading-relaxed font-bold break-keep', q.fill.text)}>
            {quiz.question}
          </p>
        </article>

        <ArrowDownIcon aria-hidden="true" className="h-4 w-4 mx-auto text-[var(--term-dim)]" />

        <article
          className={cn(
            'flex flex-col gap-2 rounded-lg border-2 p-md sm:p-lg',
            a.fill.border,
            a.fill.bg,
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-lg border font-mono font-bold',
                  a.fill.bg,
                  a.fill.border,
                  a.fill.text,
                )}
              >
                A
              </span>
              <span className={cn('text-[10px] font-mono uppercase tracking-wider', a.text)}>
                answer
              </span>
            </div>
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full border',
                a.chip,
              )}
            >
              <CheckCircleIcon className="h-5 w-5" />
            </span>
          </header>
          <p className={cn('text-sm sm:text-md leading-relaxed font-bold break-keep', a.fill.text)}>
            {quiz.answer}
          </p>
        </article>
      </div>
    </div>
  );
};
