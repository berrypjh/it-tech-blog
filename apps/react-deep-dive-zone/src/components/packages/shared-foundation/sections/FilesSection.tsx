import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { FileCard, SharedContent } from '../content';
import { sharedIcon, SparklesIcon } from '../icons';

type Props = { content: SharedContent['files'] };

export const FilesSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-files" className="space-y-md">
      <SectionHeader
        id="files"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <FileCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const FileCardView = ({ card }: { card: FileCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = sharedIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border font-mono font-bold text-md',
            tone.chip,
          )}
        >
          {card.badge}
        </span>
        <Icon className={cn('h-5 w-5', tone.text)} aria-hidden="true" />
      </header>

      <h3 className={cn('text-sm font-bold font-mono tracking-tight truncate', tone.text)}>
        {card.fileName}
      </h3>

      <p className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
        {card.title}
      </p>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
