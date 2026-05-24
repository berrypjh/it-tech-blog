import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { DataStructure, HooksRecapContent } from '../content';
import { ArrowDownIcon, BoxIcon, BracesIcon } from '../icons';

import { toneCardBg, toneChip, toneText } from './_shared/tones';

type Props = { content: HooksRecapContent['dataStructures'] };

const StructureCard = ({ item }: { item: DataStructure }) => (
  <article
    className={cn(
      'h-full flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-all',
      'motion-safe:hover:-translate-y-0.5',
      toneCardBg[item.tone],
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-white dark:bg-slate-950/40',
          'border-[var(--term-border)]',
          toneText[item.tone],
        )}
      >
        <BoxIcon className="h-4 w-4" />
      </span>
      <code
        className={cn('font-mono text-xsm sm:text-sm font-bold break-all', toneText[item.tone])}
      >
        {item.title}
      </code>
    </header>
    <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
      {item.description}
    </p>

    {/* Visual or fields */}
    {item.visualLines && (
      <div
        className={cn(
          'rounded-xl border bg-white p-3 dark:bg-slate-950/40',
          'border-[var(--term-border)]',
        )}
      >
        <ul className="flex flex-col items-center gap-1.5">
          {item.visualLines.map((line, i, arr) => {
            const isLast = i === arr.length - 1;
            return (
              <li key={line} className="flex flex-col items-center gap-1">
                <code
                  className={cn(
                    'inline-flex items-center rounded-lg border px-3 py-1.5 font-mono text-[11px] font-bold break-all',
                    toneChip[item.tone],
                  )}
                >
                  {line}
                </code>
                {!isLast && (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className={cn('h-3 w-3', toneText[item.tone])}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    )}

    {item.fields && (
      <ul className="flex flex-col gap-1">
        {item.fields.map((field) => (
          <li key={field}>
            <code
              className={cn(
                'inline-flex w-full rounded-lg border px-3 py-1.5 font-mono text-[11px] font-bold break-all',
                toneChip[item.tone],
              )}
            >
              {field}
            </code>
          </li>
        ))}
      </ul>
    )}
  </article>
);

export const CoreDataStructures = ({ content }: Props) => (
  <section
    aria-labelledby="heading-data-structures"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="data-structures"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BracesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.items.map((item) => (
        <li key={item.title}>
          <StructureCard item={item} />
        </li>
      ))}
    </ul>
  </section>
);
