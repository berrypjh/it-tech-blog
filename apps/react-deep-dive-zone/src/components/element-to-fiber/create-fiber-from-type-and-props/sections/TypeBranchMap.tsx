import { cn } from '@it-tech-blog/utils';

import { Waypoints } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { BranchMap } from '../components/BranchMap';
import type { CreateFiberFromTypeAndPropsContent } from '../content';

type Props = { content: CreateFiberFromTypeAndPropsContent['branchMap'] };

export const TypeBranchMap = ({ content }: Props) => (
  <section id="branch-map" aria-labelledby="heading-branch-map" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="branch-map"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Waypoints className="h-5 w-5" aria-hidden="true" />}
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
