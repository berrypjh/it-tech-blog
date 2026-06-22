import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { InputCard, ReactCreateElementContent } from '../content';
import { BoxIcon, Code2Icon, FunctionSquareIcon, SlidersIcon, UsersIcon } from '../icons';
import { localTone } from '../localTone';

type Props = { content: ReactCreateElementContent['input'] };

const iconMap = {
  box: BoxIcon,
  sliders: SlidersIcon,
  users: UsersIcon,
} as const;

export const CreateElementInputStructure = ({ content }: Props) => (
  <section aria-labelledby="heading-input" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="input"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<FunctionSquareIcon className="h-5 w-5" />}
    />

    {/* Signature card */}
    <div
      className={cn(
        'flex items-center gap-md rounded-2xl border-2 px-md py-4 sm:py-5',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
      >
        <Code2Icon className="h-5 w-5" />
      </span>
      <code className="font-mono text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)] break-all">
        {content.signature}
      </code>
    </div>

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <InputPartCard card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const InputPartCard = ({ card }: { card: InputCard }) => {
  const t = localTone(card.tone);
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-xsm font-bold tabular-nums',
            t.chip,
            t.text,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl',
            t.chip,
            t.text,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>
      <h3 className={cn('font-mono text-md font-bold tracking-tight', t.text)}>{card.title}</h3>
      <p className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.body}
      </p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
