import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FunctionComponentContent } from '../content';
import { CodeIcon, FunctionSquareIcon, SettingsIcon, WorkflowIcon } from '../icons';

type Props = { content: FunctionComponentContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 함수 컴포넌트 코드 → renderWithHooks 호출 → nextChildren(JSX 트리) →
 * reconcileChildren으로 이어지는 Fiber 처리 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const FunctionComponentHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.codeStep.title} → ${diagram.hooksStep.title} (${diagram.hooksStep.description}) → ${diagram.nextChildrenStep.title} (${diagram.nextChildrenStep.description}) → ${diagram.reconcileStep.title} (${diagram.reconcileStep.description})`;

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

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <StepHeader
          tone="sky"
          label={diagram.codeStep.title}
          icon={<FunctionSquareIcon className="h-[18px] w-[18px]" />}
        />
        <CodePreviewPanel code={diagram.codeStep.code} showWindowDots size="md" />

        <DownArrow />

        <StepRow
          tone="teal"
          title={diagram.hooksStep.title}
          description={diagram.hooksStep.description}
          icon={<SettingsIcon className="h-[18px] w-[18px]" />}
          mono
        />

        <DownArrow />

        <StepHeader
          tone="violet"
          label={diagram.nextChildrenStep.title}
          icon={<CodeIcon className="h-[18px] w-[18px]" />}
        />
        <CodePreviewPanel
          code={diagram.nextChildrenStep.code}
          caption={diagram.nextChildrenStep.description}
          size="md"
        />

        <DownArrow />

        <StepRow
          tone="indigo"
          title={diagram.reconcileStep.title}
          description={diagram.reconcileStep.description}
          icon={<WorkflowIcon className="h-[18px] w-[18px]" />}
          mono
        />
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
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const StepRow = ({
  tone,
  title,
  description,
  icon,
  mono,
}: {
  tone: ToneKey;
  title: string;
  description: string;
  icon: React.ReactNode;
  mono?: boolean;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span
          className={cn('text-sm font-bold tracking-tight break-keep', mono && 'font-mono', t.text)}
        >
          {title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {description}
        </span>
      </div>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
