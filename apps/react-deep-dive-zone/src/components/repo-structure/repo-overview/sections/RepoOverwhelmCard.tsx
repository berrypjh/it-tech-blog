import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { RepoOverviewContent, RepoTreeRow } from '../content';
import { FileTextIcon, FolderIcon, HelpCircleIcon, ReactAtomIcon } from '../icons';

type Props = { content: RepoOverviewContent['overwhelm'] };

export const RepoOverwhelmCard = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-overwhelm" className="space-y-md">
      <SectionHeader
        id="overwhelm"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'px-md py-lg sm:p-lg lg:p-xl',
        )}
      >
        {/* 배경 장식: ? + atom + 흐릿한 dot grid */}
        <BackgroundDecorations />

        <div className="relative flex flex-col items-center gap-md sm:gap-lg">
          {/* 1행: dir pills */}
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl">
            {content.floatingDirs.map((row) => (
              <li key={row.id}>
                <FloatingPill row={row} />
              </li>
            ))}
          </ul>

          {/* 중앙 메시지 */}
          <div className="flex flex-col items-center text-center gap-sm">
            <p
              className={cn(
                'inline-flex items-center gap-2 text-md sm:text-lg lg:text-xl font-bold tracking-tight',
                'text-[var(--term-fg)] break-keep max-w-[28ch]',
              )}
            >
              <span aria-hidden="true" className="text-2xl sm:text-3xl">
                😥
              </span>
              {content.centerMessage}
            </p>

            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5',
                'border-emerald-300 bg-emerald-50 text-emerald-800 text-xsm font-bold',
                'dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200',
              )}
            >
              <span aria-hidden="true" className="text-base leading-none">
                ✨
              </span>
              {content.highlightPill}
            </span>
          </div>

          {/* 2행: doc pills */}
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl">
            {content.floatingDocs.map((row) => (
              <li key={row.id}>
                <FloatingPill row={row} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FloatingPillProps = { row: RepoTreeRow };

const FloatingPill = ({ row }: FloatingPillProps) => {
  const Icon = row.kind === 'dir' ? FolderIcon : FileTextIcon;
  const tone = row.tone ? toneTokens[row.tone] : null;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'text-xsm font-medium text-[var(--term-fg)]',
        tone ? tone.border : 'border-[var(--term-border)]',
      )}
    >
      <Icon
        aria-hidden="true"
        className={cn('h-3.5 w-3.5 shrink-0', tone ? tone.text : 'text-[var(--term-dim)]')}
      />
      {row.name}
    </span>
  );
};

const BackgroundDecorations = () => (
  <>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -left-4 top-6 text-[5rem] font-bold leading-none text-sky-200/40 dark:text-sky-800/30 select-none"
    >
      ?
    </span>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-2 bottom-4 text-[5rem] font-bold leading-none text-violet-200/40 dark:text-violet-800/30 select-none"
    >
      ?
    </span>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-8 top-8 opacity-30 text-sky-400 dark:text-sky-700"
    >
      <ReactAtomIcon className="h-10 w-10" />
    </span>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-6 bottom-6 opacity-30 text-emerald-400 dark:text-emerald-700"
    >
      <ReactAtomIcon className="h-8 w-8" />
    </span>
  </>
);
