import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type {
  EnsureRootScheduledContent,
  RoleCard as RoleCardType,
  RoleIconName,
} from '../content';
import { CalendarCheckIcon, ClockIcon, LayersIcon } from '../icons';

type Props = { content: EnsureRootScheduledContent['roles'] };

const iconMap: Record<RoleIconName, typeof ClockIcon> = {
  calendarCheck: CalendarCheckIcon,
  clock: ClockIcon,
};

export const TwoRolesSection = ({ content }: Props) => (
  <section id="roles" aria-labelledby="heading-roles" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="roles"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.number} className="flex">
          <Card card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const Card = ({ card }: { card: RoleCardType }) => {
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
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-md font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>

      <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}>
        {card.title}
      </h3>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.body}
      </p>

      <span
        className={cn(
          'mt-auto inline-flex w-fit items-center rounded-md border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider',
          t.chip,
        )}
      >
        {card.badge}
      </span>
    </article>
  );
};
