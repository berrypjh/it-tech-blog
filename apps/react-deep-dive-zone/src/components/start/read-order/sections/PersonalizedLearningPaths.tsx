import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { PathCard, ReadOrderContent } from '../content';
import { ChevronRightIcon, pathIconByName, RouteIcon } from '../icons';

type Props = { content: ReadOrderContent['paths'] };

type PathTone = PathCard['tone'];

const toneClasses: Record<
  PathTone,
  {
    iconBg: string;
    iconText: string;
    border: string;
    hoverBorder: string;
    title: string;
    pillBg: string;
    pillText: string;
    pillBorder: string;
    chevron: string;
  }
> = {
  teal: {
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    hoverBorder: 'hover:border-teal-400 dark:hover:border-teal-500',
    title: 'text-teal-800 dark:text-teal-100',
    pillBg: 'bg-teal-50 dark:bg-teal-950/60',
    pillText: 'text-teal-800 dark:text-teal-100',
    pillBorder: 'border-teal-200 dark:border-teal-800/70',
    chevron: 'text-teal-500 dark:text-teal-400',
  },
  violet: {
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    border: 'border-violet-200/80 dark:border-violet-800/60',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-500',
    title: 'text-violet-800 dark:text-violet-100',
    pillBg: 'bg-violet-50 dark:bg-violet-950/60',
    pillText: 'text-violet-800 dark:text-violet-100',
    pillBorder: 'border-violet-200 dark:border-violet-800/70',
    chevron: 'text-violet-500 dark:text-violet-400',
  },
  coral: {
    iconBg: 'bg-orange-100 dark:bg-orange-950/60',
    iconText: 'text-orange-600 dark:text-orange-300',
    border: 'border-orange-200/80 dark:border-orange-800/60',
    hoverBorder: 'hover:border-orange-400 dark:hover:border-orange-500',
    title: 'text-orange-800 dark:text-orange-100',
    pillBg: 'bg-orange-50 dark:bg-orange-950/60',
    pillText: 'text-orange-800 dark:text-orange-100',
    pillBorder: 'border-orange-200 dark:border-orange-800/70',
    chevron: 'text-orange-500 dark:text-orange-400',
  },
};

export const PersonalizedLearningPaths = ({ content }: Props) => {
  return (
    <section id="section-paths" aria-labelledby="heading-paths" className="space-y-md">
      <SectionHeader
        id="paths"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RouteIcon className="h-5 w-5" />}
      />

      {/* 보조 문구 */}
      <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep max-w-[60ch]">
        {content.supporting.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md mt-md">
        {content.cards.map((card) => {
          const t = toneClasses[card.tone];
          const Icon = pathIconByName[card.icon];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group flex flex-col w-full h-full gap-sm rounded-lg border bg-[var(--term-bg)]',
                  'p-md sm:p-lg transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                  t.hoverBorder,
                )}
              >
                {/* 상단 아이콘 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-11 h-11 rounded-full shadow-[0_1px_0_var(--term-border)]',
                    t.iconBg,
                    t.iconText,
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                {/* 제목 */}
                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold tracking-tight break-keep leading-snug',
                    t.title,
                  )}
                >
                  {card.title}
                </h3>

                {/* 설명 */}
                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {card.description.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                {/* 추천 순서 라벨 */}
                <p className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold mt-1">
                  recommended order
                </p>

                {/* pill flow */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {card.sequence.map((label, i) => (
                    <Fragment key={label}>
                      <span
                        className={cn(
                          'inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-mono font-bold',
                          t.pillBg,
                          t.pillText,
                          t.pillBorder,
                        )}
                      >
                        {label}
                      </span>
                      {i < card.sequence.length - 1 && (
                        <ChevronRightIcon
                          aria-hidden="true"
                          className={cn('h-3 w-3 shrink-0', t.chevron)}
                        />
                      )}
                    </Fragment>
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
