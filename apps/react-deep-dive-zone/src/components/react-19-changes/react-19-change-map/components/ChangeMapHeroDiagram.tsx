import { cx } from '@berrypjh/react-ui';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { HeroLayer, React19ChangeMapContent } from '../content';

type Props = { content: React19ChangeMapContent['hero'] };

/** Hero 핵심 비주얼: 여섯 레이어와 각 레이어에 얹힌 React 19 기능. */
export const ChangeMapHeroDiagram = ({ content }: Props) => {
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

        {content.layers.map((layer) => (
          <LayerRow key={layer.id} layer={layer} />
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const LayerRow = ({ layer }: { layer: HeroLayer }) => {
  const t = toneTokens[layer.tone];
  return (
    <article className="flex items-center gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2 shadow-[0_2px_0_var(--term-border)]">
      <span aria-hidden="true" className={cx('h-8 w-1 shrink-0 rounded-full', t.dot)} />
      <span className="min-w-0 flex-1 text-[11px] font-bold text-[var(--term-fg)] break-keep">
        {layer.label}
      </span>
      <code
        className={cx(
          'shrink-0 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[10px] font-bold',
          t.text,
        )}
      >
        {layer.feature}
      </code>
    </article>
  );
};
