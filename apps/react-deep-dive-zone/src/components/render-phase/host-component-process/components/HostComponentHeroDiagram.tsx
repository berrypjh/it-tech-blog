import { cx } from '@berrypjh/react-ui';
import { Box, FileText, Layers } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HostComponentContent } from '../content';

type Props = { content: HostComponentContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * JSX 한 줄 → HostComponent Fiber → children 추출 → reconcileChildren으로
 * 이어지는 Host Component 처리 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const HostComponentHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.jsxStep.title} → ${diagram.fiberStep.title} (${diagram.fiberStep.description}) → ${diagram.childrenStep.title} (${diagram.childrenStep.description} = ${diagram.childrenStep.result} ${diagram.childrenStep.resultDetail}) → ${diagram.reconcileStep.title}: ${diagram.reconcileStep.description}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex flex-col">
          <span className="text-xxsm uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {diagram.jsxStep.title}
          </span>
          <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {diagram.title}
          </h2>
        </header>

        <CodePreviewPanel code={diagram.jsxStep.code} showWindowDots language="JSX" size="md" />

        <DownArrow />

        <FlowRow tone="teal" icon={<Box className="h-[18px] w-[18px]" aria-hidden="true" />}>
          <span
            className={cx(
              'font-mono text-sm font-bold tracking-tight break-keep',
              toneTokens.teal.text,
            )}
          >
            {diagram.fiberStep.title}
          </span>
          <code className="font-mono text-xsm leading-relaxed text-[var(--term-muted)] break-all">
            {diagram.fiberStep.description}
          </code>
        </FlowRow>

        <DownArrow />

        <FlowRow tone="violet" icon={<FileText className="h-[18px] w-[18px]" aria-hidden="true" />}>
          <span
            className={cx('text-sm font-bold tracking-tight break-keep', toneTokens.violet.text)}
          >
            {diagram.childrenStep.title}
          </span>
          <code className="font-mono text-xsm leading-relaxed text-[var(--term-muted)] break-all">
            {diagram.childrenStep.description}
          </code>
          <span
            className={cx(
              'mt-0.5 inline-flex w-fit items-center gap-1.5 rounded-md border border-dashed px-2 py-0.5',
              toneTokens.violet.border,
            )}
          >
            <code className={cx('font-mono text-xsm font-bold', toneTokens.violet.text)}>
              {diagram.childrenStep.result}
            </code>
            <span className="text-xxsm uppercase tracking-wider text-[var(--term-muted)]">
              {diagram.childrenStep.resultDetail}
            </span>
          </span>
        </FlowRow>

        <DownArrow />

        <FlowRow tone="sky" icon={<Layers className="h-[18px] w-[18px]" aria-hidden="true" />}>
          <code
            className={cx(
              'font-mono text-sm font-bold tracking-tight break-all',
              toneTokens.sky.text,
            )}
          >
            {diagram.reconcileStep.title}
          </code>
          <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {diagram.reconcileStep.description}
          </span>
        </FlowRow>
      </div>
    </HeroDiagramShell>
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
      className={cx(
        'flex items-start gap-sm rounded-lg border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        t.border,
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
