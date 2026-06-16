import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { SurroundingContent } from '../content';
import { houseToneByIndex } from '../houseTones';
import { CheckCircleIcon, CircleAlertIcon, FolderIcon } from '../icons';

type Props = { content: SurroundingContent['compiler'] };

const tone = houseToneByIndex(0);

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
        {/* 좌측 tree card */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-md border',
                tone.chip,
              )}
            >
              <FolderIcon className="h-5 w-5" />
            </span>
            <div className="flex flex-col min-w-0">
              <h3 className={cn('text-md font-bold font-mono tracking-tight', tone.text)}>
                {content.treeHeader}
              </h3>
              <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)]">
                {content.treeSubtitle}
              </p>
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
          <ul className="flex flex-col gap-md">
            {content.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--term-accent)]"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              'mt-auto flex items-start gap-sm rounded-md border border-dashed p-md',
              'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
            )}
          >
            <CircleAlertIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-[var(--term-accent)]"
              aria-hidden="true"
            />
            <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">
              {content.callout}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
