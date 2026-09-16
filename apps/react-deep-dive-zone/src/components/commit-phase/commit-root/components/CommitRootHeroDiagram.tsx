import { cx } from '@berrypjh/react-ui';
import { Cpu, DoorOpen, GitMerge, Layers, type LucideIcon } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, HeroFlowCard, HeroFlowCardId } from '../content';

type Props = { content: CommitRootContent['hero'] };

const iconMap: Record<HeroFlowCardId, LucideIcon> = {
  cpu: Cpu,
  gitMerge: GitMerge,
  gate: DoorOpen,
  layers: Layers,
};

/**
 * Hero 핵심 비주얼.
 * Render Phase → finishedWork → commitRoot(관문) → Commit Phase로 이어지는
 * 흐름을 위에서 아래로 잇는 컴팩트 stepper. commitRoot가 입구임을 강조한다.
 */
export const CommitRootHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.flowLabel}. ${diagram.cards
    .map((c) => `${c.title} — ${c.subtitle}`)
    .join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <span className="min-w-0 truncate text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {`// ${diagram.flowLabel}`}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {diagram.eyebrow}
          </span>
        </header>

        <ol className="flex flex-col gap-sm">
          {diagram.cards.map((card, i) => (
            <li key={card.title} className="flex flex-col gap-sm">
              <FlowCardRow card={card} />
              {i < diagram.cards.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <CodePreviewPanel code={diagram.code} showWindowDots language="JS" size="md" />
      </div>
    </HeroDiagramShell>
  );
};

const FlowCardRow = ({ card }: { card: HeroFlowCard }) => {
  const tone = card.tone;
  const t = toneTokens[tone];
  const Icon = iconMap[card.id];
  return (
    <div
      className={cx(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)]',
        card.isGate ? cx('border-2', t.fill.border, t.fill.bg) : 'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cx('text-sm font-bold font-mono tracking-tight break-keep', t.text)}>
          {card.title}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {card.subtitle}
        </span>
        {card.description && (
          <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {card.description}
          </span>
        )}
        {card.items && (
          <ul className="mt-1 flex flex-wrap gap-1">
            {card.items.map((item) => (
              <li
                key={item}
                className={cx(
                  'rounded-md border border-[var(--term-border)] px-1.5 py-0.5',
                  'text-[10px] font-mono tracking-tight break-keep',
                  t.text,
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
