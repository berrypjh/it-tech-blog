import { cn } from '@it-tech-blog/utils';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailPanel } from '../../../shared/detail';
import { SectionHeader } from '../../../shared/section';
import type { CompareCard, ReconcilerEntryContent } from '../content';
import { iconByName, SparklesIcon } from '../icons';

type Props = { content: ReconcilerEntryContent['compare'] };

export const ReconcilerVsRenderer = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compare" className="space-y-md">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <CompareCardItem card={content.left} />
        <CompareVs />
        <CompareCardItem card={content.right} />
      </div>
    </section>
  );
};

const CompareCardItem = ({ card }: { card: CompareCard }) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-xl border p-md sm:p-lg transition-all hover:-translate-y-0.5',
      'shadow-[0_2px_0_var(--term-border)]',
      'bg-[var(--term-surface)] border-[var(--term-border)]',
    )}
  >
    <ToneDetailPanel
      tone={card.tone}
      icon={iconByName[card.icon]}
      title={card.title}
      badge={card.tag}
      bullets={card.bullets}
    />
  </article>
);
