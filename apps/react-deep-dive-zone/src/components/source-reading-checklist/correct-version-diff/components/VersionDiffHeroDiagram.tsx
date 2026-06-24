import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CorrectVersionDiffContent } from '../content';
import { ArchiveIcon, FileCheckIcon, HistoryIcon } from '../icons';

type Props = { content: CorrectVersionDiffContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 오래된 강의 노트 → 버전 확인 → 최신 기준 노트로 이어지는 보정 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const VersionDiffHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.visualTitle}: ${content.leftPanelTitle} (${content.leftItems.join(
    ', ',
  )}) → ${content.connectorLabel} → ${content.rightPanelTitle} (${content.rightItems.join(', ')})`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col gap-sm">
          <NotePanel
            tone="amber"
            title={content.leftPanelTitle}
            icon={<ArchiveIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
            items={content.leftItems}
            caption={content.leftCaption}
          />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <CheckHeader label={content.connectorLabel} />
          <ul className="flex flex-wrap gap-1.5">
            {content.connectorChips.map((chip) => (
              <li key={chip}>
                <Chip>{chip}</Chip>
              </li>
            ))}
          </ul>
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <NotePanel
            tone="blue"
            title={content.rightPanelTitle}
            icon={<FileCheckIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
            items={content.rightItems}
            caption={content.rightCaption}
          />
        </li>
      </ol>
    </div>
  );
};

const NotePanel = ({
  tone,
  title,
  icon,
  items,
  caption,
}: {
  tone: ToneKey;
  title: string;
  icon: React.ReactNode;
  items: string[];
  caption: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
      </header>
      <CodePreviewPanel code={items.join('\n')} showWindowDots language="diff" />
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{caption}</p>
    </article>
  );
};

const CheckHeader = ({ label }: { label: string }) => (
  <div className="flex items-center gap-sm">
    <ToneIconBox tone="violet" size="sm">
      <HistoryIcon className="h-[18px] w-[18px]" aria-hidden="true" />
    </ToneIconBox>
    <span className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.violet.text)}>
      {label}
    </span>
    <span
      aria-hidden="true"
      className="flex-1 border-t border-dashed border-[var(--term-border)]"
    />
  </div>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border px-2 py-0.5',
      'text-[9px] font-mono font-bold uppercase tracking-wider',
      toneTokens.violet.chip,
    )}
  >
    {children}
  </span>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
