import { cn } from '@it-tech-blog/utils';

import { Lightbulb, PlayCircle, Search, Sparkles } from 'lucide-react';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchQueueOrderContent } from '../content';

type Props = { content: DispatchQueueOrderContent['separation'] };

const cardIcons = [Search, PlayCircle];

const cardTone = (tone: 'violet' | 'teal') =>
  tone === 'violet'
    ? 'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20'
    : 'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20';

const iconBg = (tone: 'violet' | 'teal') =>
  tone === 'violet'
    ? 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900'
    : 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900';

const accent = (tone: 'violet' | 'teal') =>
  tone === 'violet' ? 'text-violet-700 dark:text-violet-300' : 'text-teal-700 dark:text-teal-300';

export const CollectionExecutionSeparation = ({ content }: Props) => (
  <section aria-labelledby="heading-separation">
    <NumberedSectionHeader
      id="separation"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card, i) => {
        const Icon = cardIcons[i] ?? Search;
        return (
          <article
            key={card.title}
            className={cn(
              'group flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_2px_0_var(--term-border)]',
              cardTone(card.tone),
            )}
          >
            <header className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                  'shadow-[0_3px_0_rgba(0,0,0,0.08)]',
                  iconBg(card.tone),
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    accent(card.tone),
                  )}
                >
                  stage {i + 1}
                </span>
                <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
                  {card.title}
                </h3>
              </div>
            </header>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {card.body}
            </p>
          </article>
        );
      })}
    </div>

    <aside
      className={cn(
        'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-amber-300/80 bg-amber-50/60 dark:border-amber-800/60 dark:bg-amber-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
      >
        <Lightbulb className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
        {content.note}
      </p>
    </aside>
  </section>
);
