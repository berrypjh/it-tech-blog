import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, HeroFlowCard, HeroFlowCardIcon } from '../content';
import { CpuIcon, GateIcon, GitMergeIcon, LayersIcon } from '../icons';

type Props = { content: CommitRootContent['hero']; className?: string };

const iconMap: Record<HeroFlowCardIcon, typeof CpuIcon> = {
  cpu: CpuIcon,
  gitMerge: GitMergeIcon,
  gate: GateIcon,
  layers: LayersIcon,
};

/**
 * Hero 핵심 비주얼.
 * Render Phase → finishedWork → commitRoot(관문) → Commit Phase로 이어지는
 * 흐름을 위에서 아래로 잇는 컴팩트 stepper. commitRoot가 입구임을 강조한다.
 */
export const CommitRootHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.flowLabel}. ${diagram.cards
    .map((c) => `${c.title} — ${c.subtitle}`)
    .join(' → ')}`;

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

      <div className="relative flex flex-col gap-sm">
        <header className="flex items-center gap-sm" aria-hidden="true">
          <span className="min-w-0 truncate text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {`// ${diagram.flowLabel}`}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {diagram.eyebrow}
          </span>
        </header>

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {diagram.cards.map((card, i) => (
            <li key={card.title} className="flex flex-col gap-sm">
              <FlowCardRow card={card} />
              {i < diagram.cards.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <CodePreviewPanel
          code="commitRoot(root, finishedWork, lanes);"
          showWindowDots
          language="JS"
          size="md"
        />
      </div>
    </div>
  );
};

const FlowCardRow = ({ card }: { card: HeroFlowCard }) => {
  const tone = card.tone;
  const t = toneTokens[tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        card.isGate ? cn('border-2', t.fill.border, t.fill.bg) : 'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cn('text-sm font-bold font-mono tracking-tight break-keep', t.text)}>
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
                className={cn(
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
