import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FragmentModeFiberContent, WorkTagCard } from '../content';
import { GroupIcon, HexagonIcon, InfoIcon, ShieldCheckIcon, TagIcon } from '../icons';

type Props = { content: FragmentModeFiberContent['workTags'] };

const toneByVariant: Record<WorkTagCard['variant'], ToneKey> = {
  fragment: 'violet',
  mode: 'emerald',
  info: 'sky',
};

export const WorkTagCards = ({ content }: Props) => (
  <section id="work-tags" aria-labelledby="heading-work-tags" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="work-tags"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TagIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: WorkTagCard }) => {
  if (card.variant === 'info') return <InfoCard card={card} />;
  return <ValueCard card={card} />;
};

const ValueCard = ({ card }: { card: WorkTagCard }) => {
  const tone = toneByVariant[card.variant];
  const t = toneTokens[tone];
  const Icon = card.variant === 'fragment' ? GroupIcon : ShieldCheckIcon;
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone}>
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <div className="flex flex-col">
          <code
            className={cn('font-mono text-sm sm:text-md font-extrabold tracking-tight', t.text)}
          >
            {card.title}
          </code>
          <code className={cn('font-mono text-[11px]', t.text)}>{card.subtitle}</code>
        </div>
      </header>

      <div
        className={cn('flex items-center justify-between gap-sm rounded-xl border-2 p-md', t.chip)}
      >
        <ToneIconBox tone={tone}>
          <HexagonIcon className="h-5 w-5" />
        </ToneIconBox>
        <code className={cn('font-mono text-md sm:text-lg font-extrabold tabular-nums', t.text)}>
          {card.value}
        </code>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

const InfoCard = ({ card }: { card: WorkTagCard }) => {
  const tone = toneByVariant.info;
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone}>
          <InfoIcon className="h-5 w-5" />
        </ToneIconBox>
        <h3 className={cn('font-mono text-sm sm:text-md font-extrabold tracking-tight', t.text)}>
          {card.title}
        </h3>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
