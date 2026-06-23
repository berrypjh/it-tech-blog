import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { WhyReact19Content } from '../content';
import { ArrowLongRightIcon } from '../icons';

type Props = { content: WhyReact19Content['timeline'] };

/** 타임라인 행의 위치별 강조색(3색 순환). 표준 toneTokens 참조. */
const accents = [toneTokens.amber, toneTokens.sky, toneTokens.violet];

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
          className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-[var(--term-border)]"
        />

        {content.rows.map((row, idx) => {
          const accent = accents[idx % accents.length];
          return (
            <li key={row.id} className="relative">
              {/* 노드 */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -left-[1.4rem] sm:-left-[1.6rem] top-md inline-flex items-center justify-center w-4 h-4 rounded-full ring-4 ring-[var(--color-canvas)]',
                  accent.dot,
                )}
              />

              <article
                className={cn(
                  'group rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
                  'hover:-translate-y-px hover:shadow-[0_3px_0_var(--term-border)]',
                  'border-[var(--term-border)] hover:border-[var(--term-accent)]',
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-sm md:gap-md items-start">
                  {/* 좌: 버전 / 연도 */}
                  <div className="flex md:flex-col items-baseline md:items-start gap-2 md:gap-0">
                    <h3
                      className={cn(
                        'text-md sm:text-lg font-bold tracking-tight leading-none',
                        accent.text,
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
                          className={cn(
                            'ml-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold align-middle',
                            'bg-[var(--term-surface)] border border-[var(--term-border)]',
                            accent.text,
                          )}
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
                          'bg-[var(--term-surface)] border-[var(--term-border)]',
                          accent.text,
                        )}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
