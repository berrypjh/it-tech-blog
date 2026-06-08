import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlowStep, ReactElementRefReact19Content } from '../content';
import { NetworkIcon } from '../icons';

type Props = { content: ReactElementRefReact19Content['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * React 18 이전(legacy)의 제한적인 ref 전달과 React 19(modern)의 ref-as-prop 모델을
 * 위에서 아래로 잇는 컴팩트 stepper. 두 흐름을 ↓로 연결한다.
 */
export const React19RefHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle} — ${content.leftColumnTitle}: ${content.leftFlow
    .map((s) => s.label)
    .join(' → ')} / ${content.rightColumnTitle}: ${content.rightFlow
    .map((s) => s.label)
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

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="teal" size="sm">
            <NetworkIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-xsm font-bold tracking-tight text-[var(--term-fg)]">
            {content.diagramTitle}
          </span>
        </header>

        <FlowGroup title={content.leftColumnTitle} steps={content.leftFlow} variant="legacy" />

        <DownArrow />

        <FlowGroup title={content.rightColumnTitle} steps={content.rightFlow} variant="modern" />
      </div>
    </div>
  );
};

const FlowGroup = ({
  title,
  steps,
  variant,
}: {
  title: string;
  steps: HeroFlowStep[];
  variant: 'legacy' | 'modern';
}) => {
  const modern = variant === 'modern';
  const t = toneTokens.teal;

  return (
    <section className="flex flex-col gap-sm">
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
          modern
            ? t.chip
            : 'border-slate-300/80 bg-slate-100 text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200',
        )}
      >
        {title}
      </span>

      <ol className="flex flex-wrap items-stretch gap-2">
        {steps.map((step, i) => (
          <li key={step.id} className="flex min-w-0 items-stretch gap-2">
            <StepChip label={step.label} modern={modern} />
            {i < steps.length - 1 && <Connector />}
          </li>
        ))}
      </ol>
    </section>
  );
};

const StepChip = ({ label, modern }: { label: string; modern: boolean }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex min-w-0 items-center gap-2 rounded-xl border px-md py-2 bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        modern ? cn(t.border, t.borderHover) : 'border-slate-300/70 dark:border-slate-700/70',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
          modern ? t.dot : 'bg-slate-400 dark:bg-slate-500',
        )}
      />
      <span
        className={cn(
          'min-w-0 truncate text-[11px] font-bold font-mono tracking-tight',
          modern ? t.text : 'text-slate-700 dark:text-slate-200',
        )}
      >
        {label}
      </span>
    </article>
  );
};

const Connector = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-sm leading-none"
  >
    →
  </span>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
