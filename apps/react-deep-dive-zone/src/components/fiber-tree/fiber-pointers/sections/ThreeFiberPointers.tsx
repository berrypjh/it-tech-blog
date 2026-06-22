import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { MiniPointerDiagram } from '../components/MiniPointerDiagram';
import { pointerCardBorder, pointerIconBg, pointerText } from '../components/pointerStyles';
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
      number={content.number}
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
  const Icon = iconMap[card.id];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        pointerCardBorder[card.id],
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-xl',
            pointerIconBg[card.id],
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <code className={cn('font-mono text-md font-bold tracking-tight', pointerText[card.id])}>
          {card.id}
        </code>
      </header>

      <h3 className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>

      <div
        className={cn(
          'mt-auto rounded-2xl border border-dashed p-sm',
          'border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/40',
          'flex items-center justify-center min-h-[88px]',
        )}
      >
        <MiniPointerDiagram kind={card.id} />
      </div>
    </article>
  );
};
