import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { KeyFiberReuseContent } from '../content';
import { CheckCircleIcon, GitBranchIcon, XIcon } from '../icons';

type Props = { content: KeyFiberReuseContent['stableVsChanged'] };

export const KeyStableComparison = ({ content }: Props) => (
  <section
    id="stable-vs-changed"
    aria-labelledby="heading-stable-vs-changed"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="stable-vs-changed"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="emerald"
        icon={CheckCircleIcon}
        title={content.stableTitle}
        description={content.stableMain}
        bullets={content.stableItems}
        className="h-full"
      />

      <CompareVs />

      <ToneDetailCard
        tone="violet"
        icon={XIcon}
        title={content.changedTitle}
        description={content.changedMain}
        bullets={content.changedItems}
        className="h-full"
      />
    </div>
  </section>
);
