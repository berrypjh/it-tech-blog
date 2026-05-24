import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
import { MiniCodePanel } from '../components/MiniCodePanel';
import type { DvcContent, FileCard } from '../content';
import { dvcIcon, ScaleIcon } from '../icons';

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
        <div className="flex md:flex-col items-center justify-center md:py-md" aria-hidden="true">
          <div
            className={cn(
              'flex flex-col items-center justify-center text-center gap-1',
              'w-32 h-32 sm:w-36 sm:h-36 rounded-full',
              'border-2 border-sky-400/80 bg-[var(--term-bg)] text-[var(--term-fg)]',
              'shadow-[0_3px_0_var(--term-border)]',
              'dark:border-sky-500',
              'px-3',
            )}
          >
            <ScaleIcon className="h-5 w-5 text-sky-600 dark:text-sky-300" />
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
  const tone = toneTokens[card.tone];
  const Icon = dvcIcon[card.iconName];
  const accentForCode = card.tone === 'teal' ? 'teal' : 'violet';

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        tone.chip,
        tone.border,
        tone.borderHover,
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
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
            'bg-[var(--term-bg)]',
            tone.border,
            tone.text,
          )}
        >
          {card.fn}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.role}</p>
      </div>

      <MiniCodePanel caption={card.path} code={card.code} accent={accentForCode} />
    </article>
  );
};
