import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { FiberPairCard, MiniFiberTree } from '../components/FiberPairCard';
import type { AlternateFiberContent } from '../content';
import { GitCompareIcon } from '../icons';

type Props = { content: AlternateFiberContent['pair'] };

export const CurrentWorkInProgressSection = ({ content }: Props) => (
  <section id="pair" aria-labelledby="heading-pair" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="pair"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      <PairBlock
        variant="current"
        badge={content.currentBadge}
        title={content.currentTitle}
        items={content.currentItems}
      />
      <PairBlock
        variant="workInProgress"
        badge={content.workBadge}
        title={content.workTitle}
        items={content.workItems}
      />
    </div>
  </section>
);

const PairBlock = ({
  variant,
  badge,
  title,
  items,
}: {
  variant: 'current' | 'workInProgress';
  badge: string;
  title: string;
  items: string[];
}) => (
  <div className="flex flex-col gap-md min-w-0">
    <FiberPairCard variant={variant} badge={badge} title={title} items={items} />
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border p-md',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
        {variant === 'current' ? 'tree · reflected on DOM' : 'tree · being computed'}
      </span>
      <MiniFiberTree variant={variant} />
    </article>
  </div>
);
