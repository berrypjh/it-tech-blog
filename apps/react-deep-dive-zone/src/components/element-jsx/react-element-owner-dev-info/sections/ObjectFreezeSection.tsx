import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FreezeCard, ReactElementOwnerDevInfoContent } from '../content';
import { LockIcon, ShieldCheckIcon, UnlockIcon } from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['freeze'] };

const iconMap = {
  unlock: UnlockIcon,
  lock: LockIcon,
} as const;

/** mutable=위험(부정, rose), frozen=안전(긍정, accent). 2-side 의미를 소프트화해 유지한다. */
const cardTone = (id: FreezeCard['id']) =>
  id === 'mutable'
    ? {
        text: 'text-rose-600 dark:text-rose-300',
        chip: 'bg-[var(--term-surface)] text-rose-600 dark:text-rose-300 border-[var(--term-border)]',
      }
    : {
        text: 'text-[var(--term-accent)]',
        chip: 'bg-[var(--term-surface)] text-[var(--term-accent)] border-[var(--term-border)]',
      };

export const ObjectFreezeSection = ({ content }: Props) => (
  <section aria-labelledby="heading-freeze" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="freeze"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LockIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <SectionNote icon={<ShieldCheckIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
  </section>
);

const CardView = ({ card }: { card: FreezeCard }) => {
  const t = cardTone(card.id);
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      </header>
      <CodePreviewPanel code={card.code} language="JS" />
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
