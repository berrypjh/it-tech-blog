import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ReconstructContent } from '../content';
import { Code2Icon, MessageSquareTextIcon, RepeatIcon, WorkflowIcon } from '../icons';

type Props = { content: ReconstructContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 읽은 코드 조각 → 압축·연결·재구성 → 내 말과 흐름도로 이어지는
 * 재구성 과정을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ReconstructHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.visualTitle}: ${content.leftPanelTitle}(${content.leftItems.join(
    ', ',
  )}) → ${content.connectorLabels.join(' → ')} → ${content.rightPanelTitle}(${content.rightItems.join(
    ', ',
  )}). ${content.rightCaption}`;

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="blue" size="sm">
            <WorkflowIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.visualTitle}
          </span>
        </header>

        <ReadPanel title={content.leftPanelTitle} caption={content.leftCaption}>
          <CodePreviewPanel code={content.leftItems.join('\n')} header="read.js" showWindowDots />
        </ReadPanel>

        <DownArrow />

        <ol className="flex flex-wrap items-center justify-center gap-1.5">
          {content.connectorLabels.map((label, i) => (
            <li key={label}>
              <span
                className={cn(
                  'inline-flex items-center gap-1 rounded-full border px-2.5 py-1',
                  'font-mono text-[10px] font-bold uppercase tracking-wider',
                  toneTokens.blue.chip,
                )}
              >
                <RepeatIcon className="h-3 w-3" />
                {i + 1}. {label}
              </span>
            </li>
          ))}
        </ol>

        <DownArrow />

        <WordsPanel
          title={content.rightPanelTitle}
          items={content.rightItems}
          caption={content.rightCaption}
        />
      </div>
    </div>
  );
};

const Panel = ({
  tone,
  icon,
  title,
  caption,
  children,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  caption: string;
  children: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <h3 className={cn('text-xsm font-bold tracking-tight break-keep', t.text)}>{title}</h3>
      </header>
      {children}
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{caption}</p>
    </article>
  );
};

const ReadPanel = ({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) => (
  <Panel tone="amber" icon={<Code2Icon className="h-4 w-4" />} title={title} caption={caption}>
    {children}
  </Panel>
);

const WordsPanel = ({
  title,
  items,
  caption,
}: {
  title: string;
  items: string[];
  caption: string;
}) => (
  <Panel
    tone="emerald"
    icon={<MessageSquareTextIcon className="h-4 w-4" />}
    title={title}
    caption={caption}
  >
    <ul className="flex flex-wrap gap-1">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
        >
          {item}
        </li>
      ))}
    </ul>
  </Panel>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
