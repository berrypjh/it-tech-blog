import { cx } from '@berrypjh/react-ui';
import { Box, Code2, FunctionSquare, Sliders, Users } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { InputCard, ReactCreateElementContent } from '../content';

type Props = { content: ReactCreateElementContent['input'] };

const iconMap = {
  box: Box,
  sliders: Sliders,
  users: Users,
} as const;

export const CreateElementInputStructure = ({ content }: Props) => (
  <section aria-labelledby="heading-input" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="input"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<FunctionSquare className="h-5 w-5" aria-hidden="true" />}
    />

    {/* Signature card */}
    <div
      className={cx(
        'flex items-center gap-md rounded-2xl border-2 px-md py-4 sm:py-5',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
      >
        <Code2 className="h-5 w-5" aria-hidden="true" />
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
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cx(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          className={cx(
            'inline-flex items-center justify-center w-8 h-8 rounded-full border font-mono text-xsm font-bold tabular-nums',
            t.chip,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>
      <h3 className={cx('font-mono text-md font-bold tracking-tight', t.text)}>{card.title}</h3>
      <p className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.body}
      </p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
