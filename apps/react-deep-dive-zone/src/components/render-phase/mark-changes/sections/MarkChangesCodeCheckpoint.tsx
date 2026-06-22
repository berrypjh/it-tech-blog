import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FlagCard, MarkChangesContent } from '../content';
import {
  CodeIcon,
  FileCodeIcon,
  FlagIcon,
  HelpCircleIcon,
  PencilIcon,
  Trash2Icon,
  ZapIcon,
} from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: MarkChangesContent['code'] };

const flagIconMap = {
  flag: FlagIcon,
  trash: Trash2Icon,
  pencil: PencilIcon,
  zap: ZapIcon,
} as const;

export const MarkChangesCodeCheckpoint = ({ content }: Props) => (
  <section
    id="source-checkpoint"
    aria-labelledby="heading-source-checkpoint"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="source-checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.28fr)_minmax(0,_0.72fr)] gap-md lg:gap-lg items-stretch">
      {/* Left file card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {content.fileLabel}
          </span>
          <ul className="flex flex-col gap-1.5">
            {content.files.map((file) => (
              <li key={file} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                    'bg-sky-50 text-sky-700 border-sky-200/80',
                    'dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
                  )}
                >
                  <FileCodeIcon className="h-4 w-4" />
                </span>
                <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-all">
                  {file}
                </code>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {content.learningLabel}
          </span>
          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border-2 p-sm sm:p-md',
              'border-sky-200/80 bg-sky-50/70',
              'dark:border-sky-800/70 dark:bg-sky-950/40',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                'bg-white text-sky-700 border-sky-200/80',
                'dark:bg-slate-950/60 dark:text-sky-200 dark:border-sky-800/60',
              )}
            >
              <HelpCircleIcon className="h-4 w-4" />
            </span>
            <p className="text-xsm sm:text-sm leading-snug text-sky-900 dark:text-sky-100 font-bold break-keep">
              {content.learningQuestion}
            </p>
          </div>
        </div>
      </article>

      {/* Right flag grid */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2 border-b border-[var(--term-border)] pb-2">
          <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-all">
            {content.panelHeader}
          </code>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            preview
          </span>
        </header>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {content.cards.map((card) => (
            <li key={card.name} className="flex h-full">
              <Card card={card} />
            </li>
          ))}
        </ol>

        <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {content.bottomNote}
        </p>
      </article>
    </div>
  </section>
);

const Card = ({ card }: { card: FlagCard }) => {
  const palette = tonePalette[card.tone];
  const Icon = flagIconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex w-full flex-col gap-2 rounded-2xl border-2 p-md',
        palette.border,
        palette.bg,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            palette.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            palette.chip,
          )}
        >
          flag
        </span>
      </header>
      <code
        className={cn(
          'self-start inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm sm:text-sm font-bold',
          'border-slate-800 bg-slate-950',
          card.tone === 'teal'
            ? 'text-teal-300'
            : card.tone === 'rose'
              ? 'text-rose-300'
              : card.tone === 'sky'
                ? 'text-sky-300'
                : 'text-violet-300',
        )}
      >
        {card.name}
      </code>
      <p className={cn('text-xsm leading-snug font-bold break-keep', palette.text)}>
        {card.description}
      </p>
      <code className="font-mono text-[10px] sm:text-xsm text-[var(--term-muted)] break-all">
        {card.bit}
      </code>
    </article>
  );
};
