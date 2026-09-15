import { cx } from '@berrypjh/react-ui';
import { Cylinder, Layers, ListTree } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import { ParentChildFiberTree } from '../components/ParentChildFiberTree';
import type { FiberLanesContent } from '../content';

type Props = { content: FiberLanesContent['comparison'] };

export const LanesChildLanesComparison = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <ConceptCard
        tone="emerald"
        icon={<Cylinder className="h-5 w-5" aria-hidden="true" />}
        title={content.lanesCard.title}
        description={content.lanesCard.description}
      />
      <CompareVs />
      <ConceptCard
        tone="violet"
        icon={<ListTree className="h-5 w-5" aria-hidden="true" />}
        title={content.childLanesCard.title}
        description={content.childLanesCard.description}
      />
    </div>

    <ParentChildFiberTree
      parentTitle={content.parentTitle}
      parentLanes={content.parentLanes}
      parentChildLanes={content.parentChildLanes}
      children={content.children}
      legend={content.legend}
    />
  </section>
);

const ConceptCard = ({
  tone,
  icon,
  title,
  description,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone}>{icon}</ToneIconBox>
        <code className={cx('font-mono text-md font-bold tracking-tight', t.text)}>{title}</code>
      </header>
      <p className={cx('text-sm font-bold leading-snug break-keep', t.text)}>{description}</p>
    </article>
  );
};
