import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { WhySplitContent } from '../content';
import { architectureIcon, SparklesIcon } from '../icons';
import { ToneIconBox, toneText } from '../localTone';

type Props = { content: WhySplitContent['reasons']; sectionId: string };

export const WhySplitReasons = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-reasons" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="reasons"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => {
          const Icon = architectureIcon[card.iconName];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
                  'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                  'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
                  'hover:border-[var(--term-accent)]',
                )}
              >
                <ToneIconBox tone={card.tone} size="md">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </ToneIconBox>
                <h3
                  className={cn('text-md font-bold tracking-tight break-keep', toneText(card.tone))}
                >
                  {card.title}
                </h3>
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>
              </article>
            </li>
          );
        })}
      </ul>

      {/* 강조 배너 */}
      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};
