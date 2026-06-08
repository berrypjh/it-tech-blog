import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { JsxTransformFlowContent } from '../content';
import { AtomIcon, CodeIcon, SettingsIcon } from '../icons';

type Props = { content: JsxTransformFlowContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 우리가 쓴 JSX → 컴파일 → React가 실행하는 함수 호출 코드로 이어지는
 * 변환 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const JsxTransformHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.inputNote} → ${content.compileNote} → ${content.outputNote}`;

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
          <StepHeader tone="teal" label="JSX" icon={<CodeIcon className="h-[18px] w-[18px]" />} />
          <CodePreviewPanel
            code={content.inputCode}
            showWindowDots
            caption={content.inputCaption}
            size="md"
          />
          <StepNote text={content.inputNote} />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="sky"
            label={content.compileLabel}
            icon={
              <SettingsIcon
                className="h-[18px] w-[18px] animate-[spin_8s_linear_infinite] motion-reduce:animate-none"
                aria-hidden="true"
              />
            }
          />
          <StepNote text={content.compileNote} />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="violet"
            label="jsx() call"
            icon={<AtomIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel
            code={content.outputCode}
            caption={content.outputCaption}
            language="JS"
            size="md"
          />
          <StepNote text={content.outputNote} />
        </li>
      </ol>
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
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
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

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
