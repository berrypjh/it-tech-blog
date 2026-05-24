import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { FullFlowContent } from '../content';
import { CheckCircleIcon, FileSearchIcon, ListChecksIcon } from '../icons';

type Props = { content: FullFlowContent['checklist'] };

export const ReadingChecklistSection = ({ content }: Props) => (
  <section aria-labelledby="heading-checklist">
    <NumberedSectionHeader
      id="checklist"
      number={content.number}
      eyebrow={content.helper}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.items.map((item, i) => (
        <li key={item.question} className="h-full">
          <article
            className={cn(
              'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
              'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
              'transition-all motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
            )}
          >
            <header className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200"
              >
                <CheckCircleIcon className="h-4 w-4" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)] mt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
            </header>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug">
              {item.question}
            </h3>
            <p className="mt-auto flex items-start gap-1.5 text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              <FileSearchIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500 dark:text-blue-400"
              />
              <span className="font-mono">{item.hint}</span>
            </p>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
