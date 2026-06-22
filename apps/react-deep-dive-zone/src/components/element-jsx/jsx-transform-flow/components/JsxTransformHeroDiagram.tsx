import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { DownArrow } from '../../../shared/DownArrow';
import { HeroDiagramShell } from '../../../shared/hero';
import type { JsxTransformFlowContent, ToneKey } from '../content';
import { AtomIcon, CodeIcon, SettingsIcon } from '../icons';
import { localTone } from '../localTone';

type Props = { content: JsxTransformFlowContent['hero']; className?: string };

export const JsxTransformHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.inputNote} → ${content.compileNote} → ${content.outputNote}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
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
}) => {
  const t = localTone(tone);
  return (
    <div className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn('inline-flex h-9 w-9 items-center justify-center rounded-md', t.chip, t.text)}
      >
        {icon}
      </span>
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
