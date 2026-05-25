import { cn } from '@it-tech-blog/utils';

import type { CodePathCard, RecoveryModelOverviewContent } from '../content';
import { ArrowRightIcon, FileCodeIcon } from '../icons';
import { domainAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: RecoveryModelOverviewContent['codePathMap'] };

const Card = ({ card }: { card: CodePathCard }) => {
  const accent = domainAccent[card.domain];
  return (
    <article
      className={cn(
        'flex flex-col gap-3 h-full rounded-2xl border-2 p-md sm:p-lg',
        accent.border,
        accent.bg,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform motion-safe:hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            accent.iconChip,
          )}
        >
          <FileCodeIcon className="h-4 w-4" />
        </span>
        <code className={cn('text-xsm font-mono font-bold break-all', accent.text)}>
          {card.fileName}
        </code>
      </header>
      <ul className="flex flex-wrap gap-1.5">
        {card.functions.map((fn) => (
          <li
            key={fn}
            className={cn(
              'inline-flex items-center rounded-full border bg-white px-2 py-0.5',
              'dark:bg-[var(--term-bg)]',
              'text-[10.5px] font-mono font-bold break-all',
              accent.border,
              accent.text,
            )}
          >
            {fn}
          </li>
        ))}
      </ul>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
        {card.role}
      </p>
    </article>
  );
};

export const CodePathMapSection = ({ content }: Props) => (
  <section aria-labelledby="codepath-heading" className="flex flex-col gap-md">
    <SectionHeader id="codepath-heading" number={content.number} title={content.title} />

    {/* Desktop: 4 cards with arrows between (horizontal scroll wise) */}
    <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:flex-row items-stretch">
      {content.cards.map((card, i) => {
        const isLast = i === content.cards.length - 1;
        return (
          <li
            key={card.fileName}
            className="flex flex-col lg:flex-row items-stretch gap-2 lg:flex-1"
          >
            <Card card={card} />
            {!isLast && (
              <span
                aria-hidden="true"
                className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
              >
                <ArrowRightIcon className="hidden lg:block h-4 w-4" />
                <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90 mx-auto" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
