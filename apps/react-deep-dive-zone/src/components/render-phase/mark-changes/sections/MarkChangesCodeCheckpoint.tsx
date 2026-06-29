import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { SectionHeader } from '../../../shared/section';
import type { FlagCard, MarkChangesContent } from '../content';
import { CodeIcon, FileCodeIcon, markIconByName } from '../icons';
import { facetFor } from '../markFacet';

type Props = { content: MarkChangesContent['code'] };

export const MarkChangesCodeCheckpoint = ({ content }: Props) => (
  <section
    id="source-checkpoint"
    aria-labelledby="heading-source-checkpoint"
    className="space-y-md"
  >
    <SectionHeader
      id="source-checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
      <CheckpointInfoCard
        rows={[
          {
            label: content.fileLabel,
            value: (
              <ul className="flex flex-col gap-1">
                {content.files.map((file) => (
                  <li key={file}>
                    <code className="font-mono break-all">{file}</code>
                  </li>
                ))}
              </ul>
            ),
            icon: FileCodeIcon,
          },
        ]}
        question={content.learningQuestion}
      />

      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="flex items-center justify-between gap-2 border-b border-[var(--term-border)] pb-2">
          <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-all">
            {content.panelHeader}
          </code>
          <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
            <CodeIcon className="inline h-3.5 w-3.5" aria-hidden="true" /> flags
          </span>
        </header>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {content.cards.map((card) => (
            <li key={card.name} className="flex h-full">
              <Card card={card} />
            </li>
          ))}
        </ol>

        <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {content.bottomNote}
        </p>
      </article>
    </div>
  </section>
);

const Card = ({ card }: { card: FlagCard }) => {
  const t = facetFor(card.tone);
  const Icon = markIconByName[card.icon];
  return (
    <article
      className={cn(
        'flex w-full flex-col gap-2 rounded-lg border p-md',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          flag
        </span>
      </header>
      <code
        className={cn(
          'self-start inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm sm:text-sm font-bold',
          t.text,
        )}
      >
        {card.name}
      </code>
      <p className={cn('text-xsm leading-snug font-bold break-keep', t.text)}>{card.description}</p>
      <code className="font-mono text-xxsm sm:text-xsm text-[var(--term-muted)] break-all">
        {card.bit}
      </code>
    </article>
  );
};
