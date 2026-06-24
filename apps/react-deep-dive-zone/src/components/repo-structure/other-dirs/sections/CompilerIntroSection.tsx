import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import type { SurroundingContent } from '../content';
import { FolderIcon, InfoIcon } from '../icons';

type Props = { content: SurroundingContent['compiler'] };

export const CompilerIntroSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compiler" className="space-y-md">
      <SectionHeader
        id="compiler"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FolderIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.36fr)_minmax(0,_0.64fr)] gap-md items-stretch">
        <article
          className={cn(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]"
            >
              <FolderIcon className="h-5 w-5" />
            </span>
            <div className="flex flex-col min-w-0">
              <h3 className="text-md sm:text-lg font-bold font-mono tracking-tight text-[var(--term-fg)]">
                {content.treeHeader}
              </h3>
              <span className="text-[11px] text-[var(--term-muted)] break-keep">
                {content.treeSubtitle}
              </span>
            </div>
          </header>

          <pre
            className={cn(
              'rounded-md border bg-[var(--term-surface)] border-[var(--term-border)]',
              'px-md py-3 text-xsm font-mono leading-relaxed text-[var(--term-fg)]',
              'overflow-x-auto',
            )}
          >
            {content.treeRows.map((row, i) => (
              <div key={i}>{row}</div>
            ))}
          </pre>
        </article>

        {/* 우측 설명 카드 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
          )}
        >
          <ul className="flex flex-col gap-1.5">
            {content.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xsm sm:text-sm text-[var(--term-fg)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block w-1 h-1 rounded-full bg-[var(--term-accent)] shrink-0"
                />
                <span className="leading-relaxed break-keep">{bullet}</span>
              </li>
            ))}
          </ul>

          <SectionNote className="mt-auto" icon={<InfoIcon className="h-4 w-4" />}>
            {content.callout}
          </SectionNote>
        </article>
      </div>
    </section>
  );
};
