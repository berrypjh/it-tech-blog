import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ElementVsFiberContent, WhyFiberCard } from '../content';
import { FlagIcon, LoaderIcon, NetworkIcon, RefreshIcon, SparklesIcon } from '../icons';

type Props = { content: ElementVsFiberContent['whyFiber'] };

const iconMap = {
  tree: NetworkIcon,
  refresh: RefreshIcon,
  loader: LoaderIcon,
  flag: FlagIcon,
} as const;

export const WhyFiberNeeded = ({ content }: Props) => (
  <section id="why-fiber" aria-labelledby="heading-why-fiber" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="why-fiber"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: WhyFiberCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 items-start gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
        'min-h-[120px]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-14 h-14 rounded-2xl border shrink-0',
          t.chip,
        )}
      >
        <Icon className="h-7 w-7" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className={cn('text-sm sm:text-md font-bold tracking-tight break-keep', t.text)}>
          {card.title}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      </div>
    </article>
  );
};
