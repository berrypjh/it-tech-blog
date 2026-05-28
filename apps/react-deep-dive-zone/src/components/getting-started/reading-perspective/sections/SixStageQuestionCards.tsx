import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ReadingPerspectiveContent } from '../content';
import { NetworkIcon, stageQuestionIconByName } from '../icons';
import { stageTones } from '../tones';

type Props = { content: ReadingPerspectiveContent['sixStages'] };

export const SixStageQuestionCards = ({ content }: Props) => {
  return (
    <section id="section-six-stages" aria-labelledby="heading-six-stages" className="space-y-lg">
      <SectionHeader
        id="six-stages"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<NetworkIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-md">
        {content.cards.map((card) => {
          const t = stageTones[card.tone];
          const Icon = stageQuestionIconByName[card.icon];
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

                {/* number circle */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-7 h-7 rounded-full text-xsm font-bold tabular-nums',
                    t.num,
                  )}
                >
                  {card.num}
                </span>

                {/* question */}
                <h3 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                  {card.question.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                {/* icon + stage name */}
                <div className="flex items-center gap-sm mt-auto">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
                      t.iconBg,
                      t.iconText,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className={cn('text-xsm font-bold leading-tight break-keep', t.text)}>
                    {card.stage}
                  </p>
                </div>

                {/* tag pills */}
                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {card.tags.map((tag) => (
                    <li
                      key={tag}
                      className={cn(
                        'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border',
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
