import { cx } from '@berrypjh/react-ui';
import { Code2, Layers, type LucideIcon, MousePointerClick } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Layer, LayerId, WhyEventSystemContent } from '../content';

type Props = { content: WhyEventSystemContent['hero'] };

const layerIcon: Record<LayerId, LucideIcon> = {
  jsx: Code2,
  system: Layers,
  handler: MousePointerClick,
};

/**
 * Hero 핵심 비주얼.
 * 가운데 이벤트 시스템 층만 실선 프레임으로 감싸 "사이에 계층이 하나 더 있다"를 보여준다.
 */
export const WhyEventSystemHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <div className="flex items-center justify-between">
          <TerminalBadge dotClassName="bg-[var(--term-accent)]">
            {content.diagramBadge}
          </TerminalBadge>
          <span className="font-mono text-[10px] text-[var(--term-muted)]">
            {'//'} {content.diagramCaption}
          </span>
        </div>

        {content.layers.map((layer, i) => (
          <div key={layer.id} className="flex flex-col gap-sm">
            <LayerCard layer={layer} framed={layer.id === 'system'} />
            {i < content.layers.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const LayerCard = ({ layer, framed }: { layer: Layer; framed?: boolean }) => {
  const Icon = layerIcon[layer.id];
  const t = toneTokens[layer.tone];
  return (
    <article
      className={cx(
        'flex items-center gap-sm rounded-xl bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        framed ? cx('border-2', t.border) : 'border border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={layer.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-xsm font-bold tracking-tight break-all', t.text)}>
          {layer.label}
        </code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{layer.caption}</span>
      </div>
    </article>
  );
};
