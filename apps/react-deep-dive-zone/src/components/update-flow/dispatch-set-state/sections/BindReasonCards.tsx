import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { BindReasonCard, BindReasonIconName, DispatchSetStateContent } from '../content';
import { BoxIcon, Link2Icon, ShieldCheckIcon } from '../icons';

type Props = { content: DispatchSetStateContent['bindReasons'] };

const iconMap: Record<BindReasonIconName, typeof BoxIcon> = {
  box: BoxIcon,
  link: Link2Icon,
  shield: ShieldCheckIcon,
};

export const BindReasonCards = ({ content }: Props) => (
  <section
    id="bind-reasons"
    aria-labelledby="heading-bind-reasons"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="bind-reasons"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Link2Icon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.marker} className="flex">
          <Card card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const Card = ({ card }: { card: BindReasonCard }) => {
  const Icon = iconMap[card.iconName];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg w-full',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span aria-hidden="true" className={cn('text-xl font-mono font-bold leading-none', t.text)}>
          {card.marker}
        </span>
      </header>

      <h3 className={cn('text-md sm:text-lg font-bold leading-snug break-keep', t.text)}>
        {card.title}
      </h3>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.body}
      </p>

      <p
        className={cn(
          'mt-auto rounded-xl border px-3 py-2 text-xxsm font-mono leading-snug break-keep',
          t.chip,
        )}
      >
        {card.sub}
      </p>
    </article>
  );
};
