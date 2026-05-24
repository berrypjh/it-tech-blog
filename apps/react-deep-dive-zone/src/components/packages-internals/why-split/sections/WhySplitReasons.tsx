import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { WhySplitContent } from '../content';
import { architectureIcon, SparklesIcon } from '../icons';

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
          const tone = toneTokens[card.tone];
          const Icon = architectureIcon[card.iconName];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
                  'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                  'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
                  tone.borderHover,
                )}
              >
                <ToneIconBox tone={card.tone} size="md">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </ToneIconBox>
                <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>
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
          'border-teal-300/80 bg-teal-50 text-teal-900',
          'dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-teal-600 dark:text-teal-300">
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};
