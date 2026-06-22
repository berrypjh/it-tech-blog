import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { ConnectionCard, FiberStateAndQueueContent } from '../content';
import { AnchorIcon, ArrowRightIcon, ComponentIcon, HelpCircleIcon, SendIcon } from '../icons';

type Props = { content: FiberStateAndQueueContent['connections'] };

const iconMap = {
  box: ComponentIcon,
  hook: AnchorIcon,
  send: SendIcon,
} as const;

const tone = {
  emerald: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    title: 'text-emerald-900 dark:text-emerald-100',
    subtitle: 'text-emerald-700/80 dark:text-emerald-200/80',
    button:
      'bg-emerald-50 text-emerald-700 border-emerald-200/80 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/70 dark:hover:bg-emerald-950/70 focus-visible:ring-emerald-400',
  },
  violet: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    title: 'text-violet-900 dark:text-violet-100',
    subtitle: 'text-violet-700/80 dark:text-violet-200/80',
    button:
      'bg-violet-50 text-violet-700 border-violet-200/80 hover:bg-violet-100 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/70 dark:hover:bg-violet-950/70 focus-visible:ring-violet-400',
  },
  sky: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    title: 'text-sky-900 dark:text-sky-100',
    subtitle: 'text-sky-700/80 dark:text-sky-200/80',
    button:
      'bg-sky-50 text-sky-700 border-sky-200/80 hover:bg-sky-100 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/70 dark:hover:bg-sky-950/70 focus-visible:ring-sky-400',
  },
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
  const t = tone[card.tone];
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
      <span
        aria-hidden="true"
        className={cn('inline-flex items-center justify-center w-12 h-12 rounded-xl', t.iconWrap)}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className={cn('text-md font-bold tracking-tight break-keep', t.title)}>{card.title}</h3>
      <p className={cn('text-xsm font-bold leading-snug break-keep', t.subtitle)}>
        {card.subtitle}
      </p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      <Link
        href={card.buttonHref}
        className={cn(
          'mt-auto group inline-flex w-fit items-center gap-2 rounded-md border px-3 py-2',
          'text-xsm font-bold tracking-tight',
          'transition-colors focus-visible:outline-none focus-visible:ring-2',
          t.button,
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
