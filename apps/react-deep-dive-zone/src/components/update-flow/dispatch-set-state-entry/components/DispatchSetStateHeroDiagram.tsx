import { cx } from '@berrypjh/react-ui';
import { FileCode, GitBranch, Sparkles, User } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DispatchSetStateEntryContent } from '../content';

type Props = { content: DispatchSetStateEntryContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * 사용자 코드(setCount) → React 내부 진입점(dispatchSetState) → 내부 처리 위임으로
 * 이어지는 setState 진입 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const DispatchSetStateHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.leftCard.title}: ${content.leftCard.code} → ${content.centerCard.title}: ${content.centerCard.main}${content.centerCard.sub} → ${content.rightCard.title}: ${content.rightCard.code}. ${content.bottomCallout}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <ol className="flex flex-col gap-sm">
          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="emerald"
              label={content.leftCard.title}
              icon={<User className="h-4 w-4" />}
            />
            <CodePreviewPanel code={content.leftCard.code} showWindowDots size="md" />
            <DownArrow />
          </li>

          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="sky"
              label={content.centerCard.title}
              icon={<GitBranch className="h-4 w-4" />}
            />
            <EntryRow main={content.centerCard.main} sub={content.centerCard.sub} />
            <DownArrow />
          </li>

          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="violet"
              label={content.rightCard.title}
              icon={<FileCode className="h-4 w-4" />}
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
    </HeroDiagramShell>
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
}) => (
  <div className="flex items-center gap-sm">
    <ToneIconBox tone={tone} size="sm">
      {icon}
    </ToneIconBox>
    <span
      className={cx(
        'min-w-0 truncate font-mono text-sm font-bold tracking-tight',
        toneTokens[tone].text,
      )}
    >
      {label}
    </span>
  </div>
);

const EntryRow = ({ main, sub }: { main: string; sub: string }) => (
  <div
    className={cx(
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
  <p className="mt-sm flex items-center gap-2 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
    <Sparkles className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" />
    {text}
  </p>
);
