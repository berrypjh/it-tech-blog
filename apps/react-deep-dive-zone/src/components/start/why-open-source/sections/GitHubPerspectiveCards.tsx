import { cn } from '@it-tech-blog/utils';

import { StepSectionHeader } from '../../usage-vs-internals/components/StepSectionHeader';
import type { PerspectiveCard, WhyOpenSourceContent } from '../content';
import { perspectiveIconByName } from '../icons';

type Props = { content: WhyOpenSourceContent['perspectives'] };

type PerspectiveTone = PerspectiveCard['tone'];

const toneClasses: Record<
  PerspectiveTone,
  {
    iconBg: string;
    iconText: string;
    border: string;
    hoverBorder: string;
    subtitle: string;
    ribbon: string;
  }
> = {
  blue: {
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    border: 'border-sky-200/80 dark:border-sky-800/60',
    hoverBorder: 'hover:border-sky-400 dark:hover:border-sky-500',
    subtitle: 'text-sky-700 dark:text-sky-300',
    ribbon: 'bg-sky-500 dark:bg-sky-400',
  },
  teal: {
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    hoverBorder: 'hover:border-teal-400 dark:hover:border-teal-500',
    subtitle: 'text-teal-700 dark:text-teal-300',
    ribbon: 'bg-teal-500 dark:bg-teal-400',
  },
  lavender: {
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    border: 'border-violet-200/80 dark:border-violet-800/60',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-500',
    subtitle: 'text-violet-700 dark:text-violet-300',
    ribbon: 'bg-violet-500 dark:bg-violet-400',
  },
  coral: {
    iconBg: 'bg-rose-100 dark:bg-rose-950/60',
    iconText: 'text-rose-600 dark:text-rose-300',
    border: 'border-rose-200/80 dark:border-rose-800/60',
    hoverBorder: 'hover:border-rose-400 dark:hover:border-rose-500',
    subtitle: 'text-rose-700 dark:text-rose-300',
    ribbon: 'bg-rose-500 dark:bg-rose-400',
  },
};

export const GitHubPerspectiveCards = ({ content }: Props) => {
  return (
    <section
      id="section-perspectives"
      aria-labelledby="heading-perspectives"
      className="space-y-lg"
    >
      <StepSectionHeader id="perspectives" num={content.sectionNum} title={content.title} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const t = toneClasses[card.tone];
          const Icon = perspectiveIconByName[card.icon];
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
                {/* 상단 컬러 ribbon */}
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

                <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                  {card.title}
                </h3>

                <p className={cn('text-xsm font-bold', t.subtitle)}>{card.subtitle}</p>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {card.description}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
