import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { WhyOpenSourceContent } from '../content';
import { CodeIcon, ExternalLinkIcon, priorityIconByName } from '../icons';

type Props = { content: WhyOpenSourceContent['readingPriorities'] };

export const ReactGitHubReadingList = ({ content }: Props) => {
  return (
    <section id="section-priorities" aria-labelledby="heading-priorities" className="space-y-lg">
      <SectionHeader
        id="priorities"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      <ol className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] divide-y divide-[var(--term-border)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        {content.rows.map((row) => {
          const t = toneTokens[row.tone];
          const Icon = priorityIconByName[row.icon];
          return (
            <li key={row.id} className="group transition-colors">
              <a
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'grid grid-cols-[auto_auto_1fr_auto] sm:grid-cols-[auto_auto_minmax(120px,_180px)_1fr_auto] items-center gap-sm sm:gap-md',
                  'px-md sm:px-lg py-md sm:py-lg',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-inset',
                  'group-hover:bg-[var(--term-surface)]',
                )}
              >
                {/* 번호 원형 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full',
                    'bg-[var(--term-surface)] border border-[var(--term-border)]',
                    'text-xsm font-bold tabular-nums shadow-[0_1px_0_var(--term-border)]',
                    t.text,
                  )}
                >
                  {row.index}
                </span>

                {/* 아이콘 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded-md bg-[var(--term-surface)]',
                    t.text,
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                {/* 항목명 */}
                <h3 className={cn('text-md sm:text-lg font-bold font-mono tracking-tight', t.text)}>
                  {row.title}
                </h3>

                {/* 설명 — sm+에서만 같은 row, 모바일에서는 col-span 처리 */}
                <p className="hidden sm:block text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep">
                  {row.description}
                </p>

                {/* 외부 링크 ↗ */}
                <span className="sr-only">(새 창에서 열림)</span>
                <span
                  aria-hidden="true"
                  className="text-[var(--term-accent)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                </span>

                {/* 모바일 전용 설명 (밑줄) */}
                <p className="sm:hidden col-span-full -mt-1 text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {row.description}
                </p>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
