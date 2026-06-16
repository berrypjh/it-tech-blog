import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { GithubButton } from '../../../shared/GithubButton';
import { SectionHeader } from '../../../shared/SectionHeader';
import type { UsageVsInternalsContent } from '../content';
import { BookIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['sourceCode'] };

export const SourceCodeReferenceCards = ({ content }: Props) => (
  <section
    id="section-source"
    aria-labelledby="heading-source"
    className={cn(
      'space-y-lg rounded-lg border border-[var(--term-border)] p-md sm:p-lg lg:p-xl',
      'bg-[var(--term-surface)]',
    )}
  >
    <SectionHeader
      id="source"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BookIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-md">
      {content.cards.map((card) => (
        <li key={card.num}>
          <article
            className={cn(
              'flex h-full flex-col gap-md rounded-lg border bg-[var(--term-bg)]',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
            )}
          >
            <header className="flex items-start gap-sm">
              <span
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md',
                  'bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]',
                  'text-xsm font-bold tabular-nums shadow-[0_1px_0_var(--term-border)]',
                )}
                aria-hidden="true"
              >
                {card.num}
              </span>
              <div className="min-w-0 flex flex-col gap-0.5">
                <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] font-mono break-all">
                  {card.title}
                </h3>
                <p className="text-xsm text-[var(--term-muted)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </header>

            <CodePreviewPanel
              code={card.code}
              header={card.href.split('/blob/main/')[1]}
              badge="main"
            />

            <GithubButton href={card.href} label={card.linkLabel} className="mt-auto w-full" />
          </article>
        </li>
      ))}
    </ul>
  </section>
);
