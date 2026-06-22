import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { StartWithQuestionContent } from '../content';
import { FileCodeIcon, MessageCircleQuestionIcon } from '../icons';

type Props = { content: StartWithQuestionContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 파일부터 훑는 file-first 방식 → reframe → 질문에서 출발하는 question-first 방식으로
 * 이어지는 독해 시작 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const StartWithQuestionHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.leftPanel.title}: ${content.leftPanel.caption} ${content.connectorLabel} — ${content.rightPanel.title}: ${content.rightPanel.mainQuestion} (${content.rightPanel.flow.join(
    ' → ',
  )}). ${content.rightPanel.caption}`;

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
        {/* file-first: 파일부터 훑기 */}
        <StepHeader
          tone="amber"
          label={content.leftPanel.title}
          icon={<FileCodeIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
        />
        <ul className="flex flex-col gap-1.5">
          {content.leftPanel.files.map((f) => (
            <li
              key={f.name}
              className={cn(
                'flex items-center gap-2 rounded-md border bg-[var(--term-bg)] px-2 py-1.5',
                'border-[var(--term-border)]',
                f.muted && 'opacity-55',
              )}
            >
              <span
                aria-hidden="true"
                className={cn('block h-1.5 w-1.5 shrink-0 rounded-full', toneTokens.amber.dot)}
              />
              <code className="truncate font-mono text-[11px] text-[var(--term-fg)]">{f.name}</code>
            </li>
          ))}
        </ul>
        <StepNote text={content.leftPanel.caption} />

        <ReframeArrow label={content.connectorLabel} sub={content.connectorSub} />

        {/* question-first: 질문 기반 탐색 */}
        <StepHeader
          tone="cyan"
          label={content.rightPanel.title}
          icon={<MessageCircleQuestionIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
        />
        <CodePreviewPanel
          code={content.rightPanel.mainQuestion}
          language="ASK"
          showWindowDots={false}
          size="md"
        />
        <ol className="flex flex-wrap items-center gap-1.5">
          {content.rightPanel.flow.map((step, i) => (
            <li key={step} className="flex items-center gap-1.5">
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2 py-0.5',
                  'font-mono text-[10px] font-bold',
                  toneTokens.cyan.chip,
                )}
              >
                {step}
              </span>
              {i < content.rightPanel.flow.length - 1 && (
                <span
                  className={cn('text-sm leading-none', toneTokens.cyan.text)}
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <StepNote text={content.rightPanel.caption} />
      </div>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const StepNote = ({ text }: { text: string }) => (
  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{text}</p>
);

const ReframeArrow = ({ label, sub }: { label: string; sub: string }) => (
  <div className="flex flex-col items-center gap-1 py-0.5">
    <span className="text-lg leading-none text-[var(--term-accent)]">↓</span>
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-3 py-1',
        'font-mono text-[10px] font-bold uppercase tracking-wider',
        toneTokens.blue.chip,
      )}
    >
      {label}
    </span>
    <span className="text-[10px] font-mono text-[var(--term-muted)] break-keep text-center">
      {sub}
    </span>
  </div>
);
