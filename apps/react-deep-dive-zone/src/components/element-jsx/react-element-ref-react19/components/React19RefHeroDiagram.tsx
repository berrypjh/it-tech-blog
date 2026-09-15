import { cx } from '@berrypjh/react-ui';
import { Network } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import type { HeroFlowStep, ReactElementRefReact19Content } from '../content';

type Props = { content: ReactElementRefReact19Content['hero'] };

export const React19RefHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.diagramTitle} — ${content.leftColumnTitle}: ${content.leftFlow
    .map((s) => s.label)
    .join(' → ')} / ${content.rightColumnTitle}: ${content.rightFlow
    .map((s) => s.label)
    .join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]">
            <Network className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <span className="text-xsm font-bold tracking-tight text-[var(--term-fg)]">
            {content.diagramTitle}
          </span>
        </header>

        <FlowGroup title={content.leftColumnTitle} steps={content.leftFlow} variant="legacy" />

        <DownArrow />

        <FlowGroup title={content.rightColumnTitle} steps={content.rightFlow} variant="modern" />
      </div>
    </HeroDiagramShell>
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

  return (
    <section className="flex flex-col gap-sm">
      <span
        className={cx(
          'inline-flex w-fit items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
          modern ? 'text-[var(--term-accent)]' : 'text-[var(--term-muted)]',
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

const StepChip = ({ label, modern }: { label: string; modern: boolean }) => (
  <article
    className={cx(
      'flex min-w-0 items-center gap-2 rounded-xl border border-[var(--term-border)] px-md py-2 bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
    )}
  >
    <span
      aria-hidden="true"
      className={cx(
        'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
        modern ? 'bg-[var(--term-accent)]' : 'bg-[var(--term-muted)]',
      )}
    />
    <span
      className={cx(
        'min-w-0 truncate text-[11px] font-bold font-mono tracking-tight',
        modern ? 'text-[var(--term-accent)]' : 'text-[var(--term-muted)]',
      )}
    >
      {label}
    </span>
  </article>
);

const Connector = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-sm leading-none"
  >
    →
  </span>
);
