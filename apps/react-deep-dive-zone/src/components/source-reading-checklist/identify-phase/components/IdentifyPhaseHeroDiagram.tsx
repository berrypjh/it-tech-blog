import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroPhaseCard, PhaseDetectionContent } from '../content';
import { CalendarClockIcon, MonitorIcon, RouteIcon, WorkflowIcon } from '../icons';
import { PhaseBadge } from '../PhaseBadge';
import { phaseToneKey } from '../phaseTone';

type Props = { content: PhaseDetectionContent['hero']; className?: string };

const heroPhaseIcon = {
  calendarClock: CalendarClockIcon,
  workflow: WorkflowIcon,
  monitor: MonitorIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * setState 시작점 → Scheduling / Render / Commit phase로 이어지는 흐름을 위에서 아래로 잇고,
 * 각 phase가 답하는 질문을 함께 보여주는 컴팩트 stepper.
 */
export const IdentifyPhaseHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.visualTitle}: ${content.flowStart} → ${content.phaseCards
    .map((c) => `${c.subtitle} (${c.question})`)
    .join(' → ')}. ${content.visualCaption}`;

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="blue" size="sm">
            <RouteIcon className="h-[18px] w-[18px]" aria-hidden="true" />
          </ToneIconBox>
          <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.visualTitle}
          </h2>
        </header>

        <CodePreviewPanel code={`${content.flowStart}();`} showWindowDots language="JS" size="md" />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.phaseCards.map((card, i) => (
            <li key={card.phase} className="flex flex-col gap-sm">
              <PhaseCard card={card} />
              {i < content.phaseCards.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.visualCaption}
        </p>
      </div>
    </div>
  );
};

const PhaseCard = ({ card }: { card: HeroPhaseCard }) => {
  const t = toneTokens[phaseToneKey[card.phase]];
  const Icon = heroPhaseIcon[card.iconKey];
  return (
    <article
      className={cn(
        'group flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <div className="flex items-center gap-sm">
        <ToneIconBox tone={phaseToneKey[card.phase]} size="sm">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <PhaseBadge phase={card.phase} size="sm" />
        <span className={cn('ml-auto text-[10px] italic break-keep text-right', t.text)}>
          {card.subtitle}
        </span>
      </div>

      <ul className="flex flex-wrap gap-1">
        {card.functions.map((fn) => (
          <li key={fn}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-1.5 py-0.5',
                t.border,
                'bg-[var(--term-bg)] font-mono text-[10.5px] text-[var(--term-fg)]',
              )}
            >
              {fn}
            </code>
          </li>
        ))}
      </ul>

      <div className="flex items-start gap-1.5 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1">
        <span className={cn('font-bold text-[10px]', t.text)}>Q.</span>
        <p className="text-[11px] leading-snug text-[var(--term-fg)] break-keep">{card.question}</p>
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
