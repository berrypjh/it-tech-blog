import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { BranchMap } from '../components/BranchMap';
import type { CreateFiberFromTypeAndPropsContent } from '../content';
import { WaypointsIcon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['branchMap'] };

export const TypeBranchMap = ({ content }: Props) => (
  <section id="branch-map" aria-labelledby="heading-branch-map" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="branch-map"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WaypointsIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <BranchMap centerLabel={content.centerLabel} branches={content.branches} size="lg" />
    </article>
  </section>
);
