import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { InputCard, ReactCreateElementContent } from '../content';
import { BoxIcon, Code2Icon, FunctionSquareIcon, SlidersIcon, UsersIcon } from '../icons';

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
        'border-sky-300/80 bg-sky-50/60',
        'dark:border-sky-700/70 dark:bg-sky-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-sky-300/80 bg-sky-100 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
      >
        <Code2Icon className="h-5 w-5" />
      </span>
      <code className="font-mono text-md sm:text-lg lg:text-xl font-bold tracking-tight text-sky-900 dark:text-sky-100 break-all">
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
  const t = toneTokens[card.tone];
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
            'inline-flex items-center justify-center w-8 h-8 rounded-full border font-mono text-xsm font-bold tabular-nums',
            t.chip,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            t.chip,
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
