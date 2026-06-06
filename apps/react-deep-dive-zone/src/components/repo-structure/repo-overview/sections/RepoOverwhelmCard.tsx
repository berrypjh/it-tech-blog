import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { RepoOverviewContent, RepoTreeRow } from '../content';
import { ArrowRightIcon, FileTextIcon, FolderIcon, HelpCircleIcon } from '../icons';

type Props = { content: RepoOverviewContent['overwhelm'] };

export const RepoOverwhelmCard = ({ content }: Props) => {
  const items = [...content.floatingDirs, ...content.floatingDocs];

  return (
    <section aria-labelledby="heading-overwhelm" className="space-y-md">
      <SectionHeader
        id="overwhelm"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <div className="overflow-hidden rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)]">
        {/* 문제 영역: 쏟아지는 파일 | 왜 막막한지 */}
        <div className="grid md:grid-cols-[1.2fr_1fr]">
          {/* 왼쪽: 한꺼번에 쏟아지는 폴더와 문서 */}
          <div
            className={cn(
              'bg-[var(--term-surface)] px-md py-md',
              'border-b border-dashed border-[var(--term-border)]',
              'md:border-b-0 md:border-r',
            )}
          >
            <ul className="flex flex-wrap gap-1.5">
              {items.map((row) => (
                <li key={row.id}>
                  <FilePill row={row} />
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽: 왜 막막한지에 대한 답 */}
          <div className="flex items-center px-md py-md">
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.answer}
            </p>
          </div>
        </div>

        {/* 결론 바: 양쪽을 묶고 다음 순서로 이어주는 한 줄 */}
        <div
          className={cn(
            'flex items-center gap-2 border-t border-[var(--term-border)] px-md py-sm',
            'bg-emerald-50 text-emerald-800 text-xsm font-bold',
            'dark:bg-emerald-950/40 dark:text-emerald-200',
          )}
        >
          <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          {content.highlightPill}
        </div>
      </div>
    </section>
  );
};

type FilePillProps = { row: RepoTreeRow };

const FilePill = ({ row }: FilePillProps) => {
  const Icon = row.kind === 'dir' ? FolderIcon : FileTextIcon;
  const tone = row.tone ? toneTokens[row.tone] : null;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xsm font-medium',
        tone ? tone.chip : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
      )}
    >
      <Icon
        aria-hidden="true"
        className={cn('h-3.5 w-3.5 shrink-0', tone ? '' : 'text-[var(--term-muted)]')}
      />
      {row.name}
    </span>
  );
};
