import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ConnectionCard, FiberStateAndQueueContent } from '../content';
import { AnchorIcon, ArrowRightIcon, ComponentIcon, HelpCircleIcon, SendIcon } from '../icons';

type Props = { content: FiberStateAndQueueContent['connections'] };

const iconMap = {
  box: ComponentIcon,
  hook: AnchorIcon,
  send: SendIcon,
} as const;

export const HooksClassConnection = ({ content }: Props) => (
  <section
    id="connections"
    aria-labelledby="heading-connections"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="connections"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <ConnectionCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ConnectionCardItem = ({ card }: { card: ConnectionCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ToneIconBox tone={card.tone}>
        <Icon className="h-6 w-6" />
      </ToneIconBox>
      <h3 className={cn('text-md font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      <p className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>{card.subtitle}</p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      <Link
        href={card.buttonHref}
        className={cn(
          'mt-auto group inline-flex w-fit items-center gap-2 rounded-md border px-3 py-2',
          'text-xsm font-bold tracking-tight',
          'transition-colors hover:bg-[var(--term-surface)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
          t.chip,
        )}
      >
        {card.buttonLabel}
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
};
