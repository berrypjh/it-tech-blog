import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { FocusTopic, WhyReact19Content } from '../content';
import { SparkIcon, topicIconByName } from '../icons';

type Props = { content: WhyReact19Content['focusTopics'] };

type TopicTone = FocusTopic['tone'];

type ToneClasses = { iconText: string; chip: string };

/** 중립 크롬 공통값 — 색은 텍스트 액센트에만 입힌다. */
const surfaceChip = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

/** A: amber(테마 액센트) / B: sky / C: violet */
const accentA: ToneClasses = {
  iconText: 'text-[var(--term-accent)]',
  chip: `${surfaceChip} text-[var(--term-accent)]`,
};
const accentB: ToneClasses = {
  iconText: 'text-sky-600 dark:text-sky-300',
  chip: `${surfaceChip} text-sky-600 dark:text-sky-300`,
};
const accentC: ToneClasses = {
  iconText: 'text-violet-600 dark:text-violet-300',
  chip: `${surfaceChip} text-violet-600 dark:text-violet-300`,
};

/** 선언 순서대로 A·B·C·A 순환 — 중립 크롬 위 부드러운 3색 액센트. */
const toneClasses: Record<TopicTone, ToneClasses> = {
  blue: accentA,
  violet: accentB,
  teal: accentC,
  sky: accentA,
};

export const React19FocusTopics = ({ content }: Props) => {
  return (
    <section id="section-focus" aria-labelledby="heading-focus" className="space-y-lg">
      <SectionHeader
        id="focus"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparkIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const t = toneClasses[card.tone];
          const Icon = topicIconByName[card.icon];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group flex flex-col w-full h-full rounded-lg border bg-[var(--term-bg)]',
                  'p-md sm:p-lg gap-sm transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  'border-[var(--term-border)] hover:border-[var(--term-accent)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-11 h-11 rounded-full',
                    'bg-[var(--term-surface)] border border-[var(--term-border)]',
                    t.iconText,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                  {card.title}
                </h3>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {card.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 pt-1 mt-auto">
                  {card.tags.map((tag) => (
                    <li
                      key={tag}
                      className={cn(
                        'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono border',
                        t.chip,
                      )}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
