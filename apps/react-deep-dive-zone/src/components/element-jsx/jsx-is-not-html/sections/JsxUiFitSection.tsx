import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { JsxIsNotHtmlContent, ValueCard } from '../content';
import { BracesIcon, EyeIcon, LightbulbIcon, PuzzleIcon, TreeIcon } from '../icons';
import { accentText, chromeChip, chromeHover } from '../toneLocal';

type Props = { content: JsxIsNotHtmlContent['uiFit'] };

const iconMap = {
  eye: EyeIcon,
  braces: BracesIcon,
  puzzle: PuzzleIcon,
  tree: TreeIcon,
} as const;

export const JsxUiFitSection = ({ content }: Props) => (
  <section aria-labelledby="heading-uifit" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="uifit"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LightbulbIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <ValueCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ValueCardView = ({ card }: { card: ValueCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        chromeHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center shrink-0 w-12 h-12 rounded-2xl',
          chromeChip,
          accentText(card.tone),
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className={cn('text-sm font-bold tracking-tight break-keep', accentText(card.tone))}>
          {card.title}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      </div>
    </article>
  );
};
