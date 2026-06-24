import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroPhase, HeroPhaseIcon, PassiveEffectsContent } from '../content';
import { ClockIcon, EyeIcon, PencilIcon, ZapIcon } from '../icons';

type Props = { content: PassiveEffectsContent['hero']; className?: string };

const iconMap: Record<HeroPhaseIcon, typeof ZapIcon> = {
  eye: EyeIcon,
  pencil: PencilIcon,
  zap: ZapIcon,
  clock: ClockIcon,
};

/**
 * Hero 핵심 비주얼.
 * 동기 Commit Phase(Before Mutation → Mutation → Layout) 이후
 * 브라우저 paint를 거쳐 비동기로 flush되는 Passive Effects(useEffect)까지
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const PassiveEffectsHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.phases
    .map((p) => p.title)
    .join(' → ')}. ${diagram.syncLabel.title} → ${diagram.asyncLabel.title}`;

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
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {`// ${diagram.title}`}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            commit + follow-up
          </span>
        </header>

        <ZoneTag label={diagram.syncLabel} variant="sync" />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {diagram.phases.map((phase, i) => (
            <li key={phase.key} className="flex flex-col gap-sm">
              {i === diagram.phases.length - 1 && (
                <ZoneTag label={diagram.asyncLabel} variant="async" />
              )}
              <PhaseRow phase={phase} />
              {i < diagram.phases.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <CodePreviewPanel
          code={'useEffect(() => {\n  // setup\n  return cleanup;\n}, [deps]);'}
          showWindowDots
          language="JS"
          caption="passive effect — flushed async after paint"
          size="sm"
        />
      </div>
    </div>
  );
};

const PhaseRow = ({ phase }: { phase: HeroPhase }) => {
  const tone: ToneKey = phase.tone === 'rose' || phase.tone === 'orange' ? 'amber' : phase.tone;
  const t = toneTokens[tone];
  const Icon = iconMap[phase.iconName];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        phase.active ? cn(t.chip, t.border) : cn('border-[var(--term-border)]', t.borderHover),
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="flex items-center gap-2">
          <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
            {phase.title}
          </span>
          {phase.subtitle && (
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
              {phase.subtitle}
            </span>
          )}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {phase.body.join(' · ')}
        </span>
      </div>
    </article>
  );
};

const ZoneTag = ({
  label,
  variant,
}: {
  label: { title: string; subtitle: string };
  variant: 'sync' | 'async';
}) => {
  const isAsync = variant === 'async';
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-lg border border-dashed px-md py-1.5',
        isAsync
          ? 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20'
          : 'border-[var(--term-border)]',
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
          isAsync ? 'bg-teal-500 dark:bg-teal-400' : 'bg-[var(--term-dim)]',
        )}
      />
      <span
        className={cn(
          'text-xsm font-bold tracking-tight break-keep',
          isAsync ? 'text-teal-800 dark:text-teal-100' : 'text-[var(--term-fg)]',
        )}
      >
        {label.title}
      </span>
      <span className="ml-auto text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
        {label.subtitle}
      </span>
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
