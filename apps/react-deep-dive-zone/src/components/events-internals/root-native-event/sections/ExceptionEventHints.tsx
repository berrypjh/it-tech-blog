import { cn } from '@it-tech-blog/utils';

import type { RootNativeEventContent, Tone } from '../content';
import { FileTextIcon, GraduationCapIcon, PuzzleIcon, SparklesIcon } from '../icons';
import { NumberedSectionHeader } from '../NumberedSectionHeader';

type Props = { content: RootNativeEventContent['exceptions'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30',
  cyan: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/70 dark:bg-cyan-950/30',
  teal: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
  emerald:
    'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30',
  violet: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/30',
  blue: 'border-blue-300/80 bg-blue-50/60 dark:border-blue-700/70 dark:bg-blue-950/30',
  amber: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/70 dark:bg-amber-950/30',
  rose: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/30',
};

const toneIcon: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
};

const cardIcons = [FileTextIcon, PuzzleIcon, GraduationCapIcon];

export const ExceptionEventHints = ({ content }: Props) => (
  <section aria-labelledby="heading-exceptions">
    <NumberedSectionHeader
      id="exceptions"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card, i) => {
        const Icon = cardIcons[i] ?? FileTextIcon;
        return (
          <article
            key={card.title}
            className={cn(
              'group flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_2px_0_var(--term-border)]',
              toneCard[card.tone],
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                  toneIcon[card.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                hint / {String(i + 1).padStart(2, '0')}
              </span>
            </header>
            <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
              {card.title}
            </h3>
            <p className="mt-auto text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </article>
        );
      })}
    </div>
  </section>
);
