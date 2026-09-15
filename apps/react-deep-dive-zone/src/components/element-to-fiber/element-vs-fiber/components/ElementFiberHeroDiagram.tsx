import { cx } from '@berrypjh/react-ui';
import { Boxes, Layers } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ElementVsFiberContent } from '../content';

type Props = { content: ElementVsFiberContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * 작은 설명 객체인 React Element가 더 많은 필드를 가진 Fiber 노드로
 * '확장'되는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ElementFiberHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.elementLabel} → ${content.arrowLabel} → ${content.fiberLabel}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col gap-sm">
          <ObjectHeader
            tone="sky"
            label={content.elementLabel}
            caption="simple"
            icon={<Boxes className="h-[18px] w-[18px]" aria-hidden="true" />}
          />
          <CodePreviewPanel code={content.elementCode} showWindowDots={false} size="md" />
        </li>

        <LabeledArrow label={content.arrowLabel} />

        <li className="flex flex-col gap-sm">
          <ObjectHeader
            tone="teal"
            label={content.fiberLabel}
            caption="richer"
            icon={<Layers className="h-[18px] w-[18px]" aria-hidden="true" />}
          />
          <CodePreviewPanel code={content.fiberCode} showWindowDots={false} size="md" />
        </li>
      </ol>
    </HeroDiagramShell>
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
      <span className={cx('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span className="ml-auto shrink-0 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {caption}
      </span>
    </div>
  );
};

const LabeledArrow = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-1" aria-hidden="true">
    <DownArrow />
    <span
      className={cx(
        'inline-flex items-center rounded-full border px-2 py-0.5',
        'text-[10px] font-bold uppercase tracking-wider font-mono',
        toneTokens.violet.chip,
      )}
    >
      {label}
    </span>
  </div>
);
