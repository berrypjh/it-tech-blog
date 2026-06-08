import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { MetadataResourceContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: MetadataResourceContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 컴포넌트가 선언한 <title>/<meta>/<link>이 react-dom의 hoisting을 거쳐
 * 최종 DOM의 <head>로 끌어올려지는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const MetadataHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const treeCode = diagram.tree.map((line) => `${'  '.repeat(line.indent)}${line.tag}`).join('\n');
  const headCode = diagram.dom
    .filter((line) => line.zone === 'head')
    .map((line) => `${'  '.repeat(line.indent)}${line.tag}`)
    .join('\n');
  const a11y = `${diagram.title}. ${diagram.leftTitle} → ${diagram.centerLabel}(${diagram.centerSubLabel}) → ${diagram.rightTitle}`;

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
        <StepHeader tone="teal" label={diagram.leftTitle} />
        <CodePreviewPanel code={treeCode} showWindowDots language="TSX" size="md" />

        <DownArrow />

        <HoistingNote label={diagram.centerLabel} sub={diagram.centerSubLabel} />

        <DownArrow />

        <StepHeader tone="cyan" label={diagram.rightTitle} />
        <CodePreviewPanel code={headCode} caption="<head>" language="HTML" size="md" />
      </div>
    </div>
  );
};

const StepHeader = ({ tone, label }: { tone: ToneKey; label: string }) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        <SparklesIcon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const HoistingNote = ({ label, sub }: { label: string; sub: string }) => {
  const t = toneTokens.blue;
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        t.borderHover,
      )}
    >
      <ToneIconBox tone="blue" size="sm">
        <SparklesIcon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{label}</span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{sub}</span>
      </div>
    </div>
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
