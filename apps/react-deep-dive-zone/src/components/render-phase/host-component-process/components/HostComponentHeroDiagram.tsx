import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HostComponentContent } from '../content';
import { BoxIcon, FileTextIcon, LayersIcon } from '../icons';

type Props = { content: HostComponentContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * JSX 한 줄 → HostComponent Fiber → children 추출 → reconcileChildren으로
 * 이어지는 Host Component 처리 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const HostComponentHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.jsxStep.title} → ${diagram.fiberStep.title} (${diagram.fiberStep.description}) → ${diagram.childrenStep.title} (${diagram.childrenStep.description} = ${diagram.childrenStep.result} ${diagram.childrenStep.resultDetail}) → ${diagram.reconcileStep.title}: ${diagram.reconcileStep.description}`;

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
        <header className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {diagram.jsxStep.title}
          </span>
          <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {diagram.title}
          </h2>
        </header>

        <CodePreviewPanel code={diagram.jsxStep.code} showWindowDots language="JSX" size="md" />

        <DownArrow />

        <FlowRow tone="teal" icon={<BoxIcon className="h-[18px] w-[18px]" />}>
          <span className="font-mono text-sm font-bold tracking-tight text-teal-600 dark:text-teal-300 break-keep">
            {diagram.fiberStep.title}
          </span>
          <code className="font-mono text-xsm leading-relaxed text-[var(--term-muted)] break-all">
            {diagram.fiberStep.description}
          </code>
        </FlowRow>

        <DownArrow />

        <FlowRow tone="violet" icon={<FileTextIcon className="h-[18px] w-[18px]" />}>
          <span className="text-sm font-bold tracking-tight text-violet-600 dark:text-violet-300 break-keep">
            {diagram.childrenStep.title}
          </span>
          <code className="font-mono text-xsm leading-relaxed text-[var(--term-muted)] break-all">
            {diagram.childrenStep.description}
          </code>
          <span className="mt-0.5 inline-flex w-fit items-center gap-1.5 rounded-md border border-dashed border-violet-200 px-2 py-0.5 dark:border-violet-800/70">
            <code className="font-mono text-xsm font-bold text-violet-700 dark:text-violet-200">
              {diagram.childrenStep.result}
            </code>
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {diagram.childrenStep.resultDetail}
            </span>
          </span>
        </FlowRow>

        <DownArrow />

        <FlowRow tone="sky" icon={<LayersIcon className="h-[18px] w-[18px]" />}>
          <code className="font-mono text-sm font-bold tracking-tight text-sky-600 dark:text-sky-300 break-all">
            {diagram.reconcileStep.title}
          </code>
          <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {diagram.reconcileStep.description}
          </span>
        </FlowRow>
      </div>
    </div>
  );
};

const FlowRow = ({
  tone,
  icon,
  children,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">{children}</div>
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
