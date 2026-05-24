import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { DifficultyLevel, ReadOrderContent } from '../content';
import { GaugeIcon } from '../icons';

type Props = { content: ReadOrderContent['difficulty'] };

type LevelTone = DifficultyLevel['tone'];

const toneClasses: Record<
  LevelTone,
  { iconBg: string; iconText: string; border: string; bar: string; title: string; chip: string }
> = {
  mint: {
    iconBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    iconText: 'text-emerald-600 dark:text-emerald-300',
    border: 'border-emerald-200/80 dark:border-emerald-800/60',
    bar: 'bg-emerald-500 dark:bg-emerald-400',
    title: 'text-emerald-700 dark:text-emerald-200',
    chip: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/70 dark:border-emerald-800/60',
  },
  teal: {
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    bar: 'bg-teal-500 dark:bg-teal-400',
    title: 'text-teal-700 dark:text-teal-200',
    chip: 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200/70 dark:border-teal-800/60',
  },
  cyan: {
    iconBg: 'bg-cyan-100 dark:bg-cyan-950/60',
    iconText: 'text-cyan-600 dark:text-cyan-300',
    border: 'border-cyan-200/80 dark:border-cyan-800/60',
    bar: 'bg-cyan-500 dark:bg-cyan-400',
    title: 'text-cyan-700 dark:text-cyan-200',
    chip: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200/70 dark:border-cyan-800/60',
  },
  blue: {
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    border: 'border-sky-200/80 dark:border-sky-800/60',
    bar: 'bg-sky-500 dark:bg-sky-400',
    title: 'text-sky-700 dark:text-sky-200',
    chip: 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200/70 dark:border-sky-800/60',
  },
  indigo: {
    iconBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    iconText: 'text-indigo-600 dark:text-indigo-300',
    border: 'border-indigo-200/80 dark:border-indigo-800/60',
    bar: 'bg-indigo-500 dark:bg-indigo-400',
    title: 'text-indigo-700 dark:text-indigo-200',
    chip: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200/70 dark:border-indigo-800/60',
  },
};

export const DifficultyMap = ({ content }: Props) => {
  const total = content.levels.length;
  return (
    <section id="section-difficulty" aria-labelledby="heading-difficulty" className="space-y-lg">
      <SectionHeader
        id="difficulty"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<GaugeIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md items-end">
        {content.levels.map((level, idx) => {
          const t = toneClasses[level.tone];
          const lift = idx * 6; // 카드 점진 상승 인상
          return (
            <li key={level.id} className="flex">
              <article
                className={cn(
                  'group flex flex-col w-full gap-sm rounded-lg border bg-[var(--term-bg)]',
                  'p-md sm:p-lg transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                )}
                style={{ marginBottom: `${lift}px` }}
              >
                {/* level bar (난이도 상승) */}
                <div className="flex items-end gap-0.5 mb-1">
                  {Array.from({ length: total }).map((_, j) => (
                    <span
                      key={j}
                      aria-hidden="true"
                      className={cn(
                        'flex-1 rounded-sm',
                        j <= idx ? t.bar : 'bg-[var(--term-border)]',
                      )}
                      style={{ height: `${4 + j * 2}px` }}
                    />
                  ))}
                </div>

                {/* index + title */}
                <header className="flex items-center justify-between gap-sm">
                  <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', t.title)}>
                    {level.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-[10px] font-mono tabular-nums text-[var(--term-dim)]"
                  >
                    Lv.{level.index}
                  </span>
                </header>

                {/* topics */}
                <ul className="flex flex-col gap-1.5 mt-sm">
                  {level.topics.map((topic) => (
                    <li
                      key={topic}
                      className={cn(
                        'inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xsm font-mono border',
                        t.chip,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('inline-block w-1 h-1 rounded-full', t.bar)}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
