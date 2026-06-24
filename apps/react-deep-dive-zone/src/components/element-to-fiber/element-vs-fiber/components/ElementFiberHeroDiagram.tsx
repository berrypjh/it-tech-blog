import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ElementVsFiberContent } from '../content';
import { BoxesIcon, LayersIcon } from '../icons';

type Props = { content: ElementVsFiberContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 작은 설명 객체인 React Element가 더 많은 필드를 가진 Fiber 노드로
 * '확장'되는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ElementFiberHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.elementLabel}는 type, key, props 정도의 작은 정보 객체이고, ${content.fiberLabel}는 트리 연결과 작업 진행을 위한 더 많은 필드를 가집니다.`;

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
          <ObjectHeader
            tone="sky"
            label={content.elementLabel}
            caption="simple"
            icon={<BoxesIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel code={content.elementCode} showWindowDots={false} size="md" />
        </li>

        <DownArrow label={content.arrowLabel} />

        <li className="flex flex-col gap-sm">
          <ObjectHeader
            tone="teal"
            label={content.fiberLabel}
            caption="richer"
            icon={<LayersIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel code={content.fiberCode} showWindowDots={false} size="md" />
        </li>
      </ol>
    </div>
  );
};

const ObjectHeader = ({
  tone,
  label,
  caption,
  icon,
}: {
  tone: ToneKey;
  label: string;
  caption: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span className="ml-auto shrink-0 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {caption}
      </span>
    </div>
  );
};

const DownArrow = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-1" aria-hidden="true">
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      ↓
    </span>
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5',
        'text-[10px] font-bold uppercase tracking-wider font-mono',
        toneTokens.violet.chip,
      )}
    >
      {label}
    </span>
  </div>
);
