import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { NotAllFilesContent, QuestionCard } from '../content';
import { questionCardIconByName, QuestionIcon } from '../icons';

type Props = { content: NotAllFilesContent['questions'] };

type CardTone = QuestionCard['tone'];

const toneClasses: Record<
  CardTone,
  {
    iconBg: string;
    iconText: string;
    border: string;
    hoverBorder: string;
    chip: string;
    ribbon: string;
  }
> = {
  blue: {
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    border: 'border-sky-200/80 dark:border-sky-800/60',
    hoverBorder: 'hover:border-sky-400 dark:hover:border-sky-500',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    ribbon: 'bg-sky-500 dark:bg-sky-400',
  },
  lavender: {
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    border: 'border-violet-200/80 dark:border-violet-800/60',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-500',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    ribbon: 'bg-violet-500 dark:bg-violet-400',
  },
  mint: {
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    hoverBorder: 'hover:border-teal-400 dark:hover:border-teal-500',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    ribbon: 'bg-teal-500 dark:bg-teal-400',
  },
  coral: {
    iconBg: 'bg-rose-100 dark:bg-rose-950/60',
    iconText: 'text-rose-600 dark:text-rose-300',
    border: 'border-rose-200/80 dark:border-rose-800/60',
    hoverBorder: 'hover:border-rose-400 dark:hover:border-rose-500',
    chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    ribbon: 'bg-rose-500 dark:bg-rose-400',
  },
};

export const QuestionCenteredCards = ({ content }: Props) => {
  return (
    <section id="section-questions" aria-labelledby="heading-questions" className="space-y-lg">
      <SectionHeader
        id="questions"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<QuestionIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const t = toneClasses[card.tone];
          const Icon = questionCardIconByName[card.icon];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group relative flex flex-col w-full h-full gap-sm rounded-lg border bg-[var(--term-bg)]',
                  'p-md sm:p-lg pt-lg transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                  t.hoverBorder,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn('absolute top-0 left-3 right-3 h-0.5 rounded-b-full', t.ribbon)}
                />

                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-12 h-12 rounded-full',
                    t.iconBg,
                    t.iconText,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <Icon className="h-[1.25rem] w-[1.25rem]" />
                </span>

                <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                  {card.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <ul className="flex flex-col gap-1.5 pt-1 mt-auto">
                  {card.tags.map((tag) => (
                    <li
                      key={tag}
                      className={cn(
                        'inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border w-fit',
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
