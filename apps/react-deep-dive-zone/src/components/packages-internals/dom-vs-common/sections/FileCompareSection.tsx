import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { DvcContent, FileCard } from '../content';
import { dvcIcon, ScaleIcon } from '../icons';
import { localTone, LocalToneIconBox } from '../tone-house';

type Props = { content: DvcContent['fileCompare']; sectionId: string };

export const FileCompareSection = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-file-compare"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="file-compare"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ScaleIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-md">
        <FileCardView card={content.leftFile} />

        {/* 중앙 원형 메시지 */}
        <div
          className="flex lg:flex-col items-center justify-center py-sm lg:py-md"
          aria-hidden="true"
        >
          <div
            className={cn(
              'flex flex-col items-center justify-center text-center gap-1',
              'w-32 h-32 sm:w-36 sm:h-36 rounded-full',
              'border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              'shadow-[0_3px_0_var(--term-border)]',
              'px-3',
            )}
          >
            <ScaleIcon className="h-5 w-5 text-[var(--term-accent)]" />
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
  const tone = localTone(card.tone);
  const Icon = dvcIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] border-[var(--term-border)]',
        tone.borderHover,
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <LocalToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </LocalToneIconBox>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md sm:text-lg font-bold font-mono tracking-tight', tone.text)}>
            {card.fileName}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono break-all">
            {card.path}
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-2">
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-3 py-1 text-xsm font-mono font-bold',
            'bg-[var(--term-bg)] border-[var(--term-border)]',
            tone.text,
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
