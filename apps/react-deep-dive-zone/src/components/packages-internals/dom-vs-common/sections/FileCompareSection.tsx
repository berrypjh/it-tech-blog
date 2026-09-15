import { cx } from '@berrypjh/react-ui';
import { FileCode, Scale } from 'lucide-react';

import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DvcContent, FileCard } from '../content';

type Props = { content: DvcContent['fileCompare'] };

export const FileCompareSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-file-compare" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="file-compare"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Scale className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-md">
        <FileCardView card={content.leftFile} />

        {/* 중앙 원형 메시지 */}
        <div
          className="flex lg:flex-col items-center justify-center py-sm lg:py-md"
          aria-hidden="true"
        >
          <div
            className={cx(
              'flex flex-col items-center justify-center text-center gap-1',
              'w-32 h-32 sm:w-36 sm:h-36 rounded-full',
              'border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              'shadow-[0_3px_0_var(--term-border)]',
              'px-3',
            )}
          >
            <Scale className="h-5 w-5 text-[var(--term-accent)]" aria-hidden="true" />
            <span className="text-[10.5px] font-bold leading-snug text-[var(--term-fg)] break-keep">
              {content.centerMessage.line1}
            </span>
            <span className="text-[10.5px] font-bold leading-snug text-[var(--term-fg)] break-keep">
              {content.centerMessage.line2}
            </span>
            <span className="text-[10.5px] font-bold leading-snug text-[var(--term-fg)] break-keep">
              {content.centerMessage.line3}
            </span>
          </div>
        </div>

        <FileCardView card={content.rightFile} />
      </div>
    </section>
  );
};

const FileCardView = ({ card }: { card: FileCard }) => {
  const t = toneTokens[card.tone];

  return (
    <article
      className={cx(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] border-[var(--term-border)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <FileCode className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <h3 className={cx('text-md sm:text-lg font-bold font-mono tracking-tight', t.text)}>
            {card.fileName}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono break-all">
            {card.path}
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-2">
        <span
          className={cx(
            'inline-flex w-fit items-center rounded-full border px-3 py-1 text-xsm font-mono font-bold',
            t.chip,
          )}
        >
          {card.fn}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.role}</p>
      </div>

      <CodePreviewPanel header={card.fn} code={card.code} />

      <GithubButton
        href={card.codeLink.href}
        label={<span className="font-mono">{card.codeLink.label}</span>}
        className="mt-auto min-w-0"
      />
    </article>
  );
};
