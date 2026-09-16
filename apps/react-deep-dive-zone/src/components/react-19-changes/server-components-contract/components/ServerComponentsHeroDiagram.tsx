import { cx } from '@berrypjh/react-ui';
import { Braces, type LucideIcon, Monitor, Server, Split } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroZone, ServerComponentsContractContent, ZoneId } from '../content';

type Props = { content: ServerComponentsContractContent['hero'] };

const zoneIcon: Record<ZoneId, LucideIcon> = {
  server: Server,
  boundary: Split,
  client: Monitor,
  function: Braces,
};

/** Hero 핵심 비주얼: 서버 그래프와 클라이언트 그래프, 그 사이의 두 지시어. */
export const ServerComponentsHeroDiagram = ({ content }: Props) => {
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

        {content.zones.map((zone, i) => (
          <div key={zone.id} className="flex flex-col gap-sm">
            <ZoneRow zone={zone} />
            {i < content.zones.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const ZoneRow = ({ zone }: { zone: HeroZone }) => {
  const Icon = zoneIcon[zone.id];
  const t = toneTokens[zone.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={zone.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-[11px] font-bold tracking-tight', t.text)}>
          {zone.label}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{zone.caption}</span>
      </div>
    </article>
  );
};
