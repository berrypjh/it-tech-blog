import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DispatchSetStateEntryContent } from '../content';
import { FileCodeIcon, GitBranchIcon, SparklesIcon, UserIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 사용자 코드(setCount) → React 내부 진입점(dispatchSetState) → 내부 처리 위임으로
 * 이어지는 setState 진입 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const DispatchSetStateHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.leftCard.title}: ${content.leftCard.code} → ${content.centerCard.title}: ${content.centerCard.main}${content.centerCard.sub} → ${content.rightCard.title}: ${content.rightCard.code}. ${content.bottomCallout}`;

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
          <StepHeader
            tone="emerald"
            label={content.leftCard.title}
            icon={<UserIcon className="h-[18px] w-[18px]" />}
            badge="call"
          />
          <CodePreviewPanel code={content.leftCard.code} showWindowDots size="md" />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="sky"
            label={content.centerCard.title}
            icon={<GitBranchIcon className="h-[18px] w-[18px]" />}
            badge="entry"
          />
          <EntryRow main={content.centerCard.main} sub={content.centerCard.sub} />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="violet"
            label={content.rightCard.title}
            icon={<FileCodeIcon className="h-[18px] w-[18px]" />}
            badge="delegate"
          />
          <CodePreviewPanel
            code={content.rightCard.code}
            showWindowDots={false}
            language="JS"
            size="md"
          />
        </li>
      </ol>

      <Callout text={content.bottomCallout} />
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
  badge,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
  badge: string;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('min-w-0 truncate font-mono text-sm font-bold tracking-tight', t.text)}>
        {label}
      </span>
      <span
        className={cn(
          'ml-auto shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
          t.chip,
        )}
      >
        {badge}
      </span>
    </div>
  );
};

const EntryRow = ({ main, sub }: { main: string; sub: string }) => (
  <div
    className={cn(
      'flex flex-col items-center gap-0.5 rounded-lg border px-md py-2.5 text-center',
      'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <code className="font-mono text-sm font-bold tracking-tight text-[var(--term-accent)]">
      {main}
    </code>
    <span className="font-mono text-[11px] text-[var(--term-muted)]">{sub}</span>
  </div>
);

const Callout = ({ text }: { text: string }) => (
  <p className="relative mt-sm flex items-center gap-2 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
    <SparklesIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" />
    {text}
  </p>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
