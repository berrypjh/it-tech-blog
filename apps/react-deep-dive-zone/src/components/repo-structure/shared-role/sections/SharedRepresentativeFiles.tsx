import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { RepFile, SharedContent } from '../content';
import { FileCodeIcon, iconByName } from '../icons';
import { softAccentByTone } from '../tone-accents';

type Props = { content: SharedContent['files'] };

export const SharedRepresentativeFiles = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-files" className="space-y-md">
      <SectionHeader
        id="files"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <FileCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: RepFile };

const FileCard = ({ card }: ItemProps) => {
  const accent = softAccentByTone[card.tone];
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'flex w-full flex-col gap-sm rounded-xl border p-md sm:p-lg',
        'bg-[var(--term-surface)] border-[var(--term-border)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'hover:border-[var(--term-accent)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-md border',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
          accent,
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <header className="flex flex-col gap-0.5">
        <h3 className={cn('text-sm sm:text-md font-bold font-mono tracking-tight', accent)}>
          {card.title}
        </h3>
        <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {card.subtitle}
        </p>
      </header>

      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
        {card.description}
      </p>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <code
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-1 text-[11px] font-mono break-all',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          )}
        >
          {card.codeLabel}
        </code>
      </div>
    </article>
  );
};
