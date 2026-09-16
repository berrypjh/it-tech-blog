import { cx } from '@berrypjh/react-ui';
import { Link2, ListPlus, type LucideIcon, PlayCircle, Route } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Foundation, FoundationId, React19HooksContent } from '../content';

type Props = { content: React19HooksContent['hero'] };

const foundationIcon: Record<FoundationId, LucideIcon> = {
  dispatcher: Route,
  'linked-list': Link2,
  'update-queue': ListPlus,
  effect: PlayCircle,
};

/** Hero 핵심 비주얼: 새 API 층이 이미 읽은 기반 층 위에 얹혀 있다는 2단 구조. */
export const React19HooksHeroDiagram = ({ content }: Props) => {
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

        <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {'//'} {content.apiLabel}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {content.apis.map((api) => (
              <li key={api}>
                <code
                  className={cx(
                    'inline-block rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
                    toneTokens.amber.chip,
                  )}
                >
                  {api}
                </code>
              </li>
            ))}
          </ul>
        </article>

        <DownArrow />

        <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] p-md shadow-[0_2px_0_var(--term-border)]">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {'//'} {content.foundationLabel}
          </p>
          <ul className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
            {content.foundations.map((item) => (
              <li key={item.id} className="min-w-0">
                <FoundationRow item={item} />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </HeroDiagramShell>
  );
};

const FoundationRow = ({ item }: { item: Foundation }) => {
  const Icon = foundationIcon[item.id];
  const t = toneTokens[item.tone];
  return (
    <div className="flex items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-sm py-2">
      <ToneIconBox tone={item.tone} size="sm" className="h-7 w-7">
        <Icon className="h-3.5 w-3.5" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <code className={cx('font-mono text-[11px] font-bold break-all', t.text)}>
          {item.label}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{item.caption}</span>
      </div>
    </div>
  );
};
