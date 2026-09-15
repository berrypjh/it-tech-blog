import { cx } from '@berrypjh/react-ui';
import { ArrowRight, CircleHelp, FileText, Folder } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RepoOverviewContent, RepoTreeRow } from '../content';

type Props = { content: RepoOverviewContent['overwhelm'] };

export const RepoOverwhelmCard = ({ content }: Props) => {
  const items = [...content.floatingDirs, ...content.floatingDocs];

  return (
    <section aria-labelledby="heading-overwhelm" className="space-y-md">
      <SectionHeader
        id="overwhelm"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CircleHelp className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="overflow-hidden rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)]">
        <div className="grid md:grid-cols-[1.2fr_1fr]">
          <div
            className={cx(
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
          <div className="flex items-center px-md py-md">
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.answer}
            </p>
          </div>
        </div>

        <div
          className={cx(
            'flex items-center gap-2 border-t border-[var(--term-border)] px-md py-sm',
            'bg-[var(--term-surface)] text-[var(--term-accent)] text-xsm font-bold',
          )}
        >
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          {content.highlightPill}
        </div>
      </div>
    </section>
  );
};

type FilePillProps = { row: RepoTreeRow };

const FilePill = ({ row }: FilePillProps) => {
  const Icon = row.kind === 'dir' ? Folder : FileText;
  const toneText = row.tone ? toneTokens[row.tone].text : null;

  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xsm font-medium',
        'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
      )}
    >
      <Icon
        aria-hidden="true"
        className={cx('h-3.5 w-3.5 shrink-0', toneText ?? 'text-[var(--term-muted)]')}
      />
      {row.name}
    </span>
  );
};
