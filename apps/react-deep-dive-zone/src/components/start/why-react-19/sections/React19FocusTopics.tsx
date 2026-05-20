import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { FocusTopic, WhyReact19Content } from '../content';
import { SparkIcon, topicIconByName } from '../icons';

type Props = { content: WhyReact19Content['focusTopics'] };

type TopicTone = FocusTopic['tone'];

const toneClasses: Record<
  TopicTone,
  { iconBg: string; iconText: string; chip: string; border: string; hoverBorder: string }
> = {
  blue: {
    iconBg: 'bg-blue-100 dark:bg-blue-950/60',
    iconText: 'text-blue-600 dark:text-blue-300',
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    border: 'border-blue-200/70 dark:border-blue-800/60',
    hoverBorder: 'hover:border-blue-400/70 dark:hover:border-blue-500/60',
  },
  violet: {
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    border: 'border-violet-200/70 dark:border-violet-800/60',
    hoverBorder: 'hover:border-violet-400/70 dark:hover:border-violet-500/60',
  },
  teal: {
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    border: 'border-teal-200/70 dark:border-teal-800/60',
    hoverBorder: 'hover:border-teal-400/70 dark:hover:border-teal-500/60',
  },
  sky: {
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    border: 'border-sky-200/70 dark:border-sky-800/60',
    hoverBorder: 'hover:border-sky-400/70 dark:hover:border-sky-500/60',
  },
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
                  t.border,
                  t.hoverBorder,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-11 h-11 rounded-full',
                    t.iconBg,
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
