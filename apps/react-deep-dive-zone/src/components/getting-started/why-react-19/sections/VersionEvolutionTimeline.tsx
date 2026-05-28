import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { WhyReact19Content } from '../content';
import { ArrowLongRightIcon } from '../icons';

type Props = { content: WhyReact19Content['timeline'] };

const formatInline = (text: string): React.ReactNode => {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="px-1 py-0.5 rounded border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] text-[0.9em] font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export const VersionEvolutionTimeline = ({ content }: Props) => {
  return (
    <section id="section-timeline" aria-labelledby="heading-timeline" className="space-y-lg">
      <SectionHeader
        id="timeline"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ArrowLongRightIcon className="h-5 w-5" />}
      />

      <ol className="relative pl-6 sm:pl-8 flex flex-col gap-md">
        {/* 세로 축 */}
        <span
          aria-hidden="true"
          className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-sky-300 via-blue-400 to-teal-400 dark:from-sky-700 dark:via-blue-600 dark:to-teal-500"
        />

        {content.rows.map((row, idx) => {
          const isLast = idx === content.rows.length - 1;
          return (
            <li key={row.id} className="relative">
              {/* 노드 */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -left-[1.4rem] sm:-left-[1.6rem] top-md inline-flex items-center justify-center w-4 h-4 rounded-full ring-4 ring-[var(--color-canvas)]',
                  row.highlight ? 'bg-teal-500 dark:bg-teal-400' : 'bg-sky-500 dark:bg-sky-400',
                )}
              />

              <article
                className={cn(
                  'group rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
                  'hover:-translate-y-px hover:shadow-[0_3px_0_var(--term-border)]',
                  row.highlight
                    ? 'border-teal-300 dark:border-teal-600 bg-gradient-to-r from-teal-50/60 via-transparent to-transparent dark:from-teal-950/40'
                    : 'border-[var(--term-border)] hover:border-sky-400/70 dark:hover:border-sky-500/60',
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-sm md:gap-md items-start">
                  {/* 좌: 버전 / 연도 */}
                  <div className="flex md:flex-col items-baseline md:items-start gap-2 md:gap-0">
                    <h3
                      className={cn(
                        'text-md sm:text-lg font-bold tracking-tight leading-none',
                        row.highlight
                          ? 'text-teal-700 dark:text-teal-200'
                          : 'text-sky-700 dark:text-sky-200',
                      )}
                    >
                      {row.version}
                    </h3>
                    <span className="text-xsm font-mono tabular-nums text-[var(--term-muted)]">
                      {row.year}
                    </span>
                  </div>

                  {/* 중: 제목 + 설명 */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <h4 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
                      {row.title}
                      {row.highlight && (
                        <span
                          aria-hidden="true"
                          className="ml-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900 align-middle"
                        >
                          NOW
                        </span>
                      )}
                    </h4>
                    <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep">
                      {formatInline(row.description)}
                    </p>
                  </div>

                  {/* 우: 태그 pills */}
                  <ul className="flex flex-wrap gap-1.5 md:max-w-[260px] md:justify-end">
                    {row.tags.map((tag) => (
                      <li
                        key={tag}
                        className={cn(
                          'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono border',
                          row.highlight
                            ? 'border-teal-300/70 dark:border-teal-700/70 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-200'
                            : 'border-sky-200/70 dark:border-sky-800/60 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-200',
                        )}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* 연결 점선 (마지막 제외) */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="block ml-2 my-1 text-[var(--term-dim)] text-[10px] leading-none"
                >
                  ↓
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};
