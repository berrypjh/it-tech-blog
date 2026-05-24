import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { JsxIsNotHtmlContent, ValueCard } from '../content';
import { BracesIcon, EyeIcon, LightbulbIcon, PuzzleIcon, TreeIcon } from '../icons';

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
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center shrink-0 w-12 h-12 rounded-2xl border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      </div>
    </article>
  );
};
