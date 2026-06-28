import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import { MiniPointerDiagram } from '../components/MiniPointerDiagram';
import { pointerTone } from '../components/pointerStyles';
import type { FiberTreePointersContent, PointerCard } from '../content';
import { GitBranchIcon, MoveDownIcon, MoveRightIcon, MoveUpIcon } from '../icons';

type Props = { content: FiberTreePointersContent['pointers'] };

const iconMap = {
  child: MoveDownIcon,
  sibling: MoveRightIcon,
  return: MoveUpIcon,
} as const;

export const ThreeFiberPointers = ({ content }: Props) => (
  <section id="pointers" aria-labelledby="heading-pointers" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="pointers"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <PointerCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const PointerCardItem = ({ card }: { card: PointerCard }) => {
  const tone = pointerTone[card.id];
  const t = toneTokens[tone];
  const Icon = iconMap[card.id];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone}>
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <code className={cn('font-mono text-md font-bold tracking-tight', t.text)}>{card.id}</code>
      </header>

      <h3 className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>

      <div
        className={cn(
          'mt-auto flex min-h-[88px] items-center justify-center rounded-xl border border-dashed p-sm',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <MiniPointerDiagram kind={card.id} />
      </div>
    </article>
  );
};
