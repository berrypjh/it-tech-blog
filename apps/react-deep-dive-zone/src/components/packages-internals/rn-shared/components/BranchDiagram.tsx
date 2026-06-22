import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import type { RnContent } from '../content';
import { rnIcon } from '../icons';
import { ToneIconBox } from '../localTone';

type Props = { hero: RnContent['hero']; className?: string };

/**
 * Hero 우측 다이어그램.
 * React Element → react-reconciler → Web/Native 분기 구조.
 * 데스크톱은 가로 분기, 모바일은 세로 stack.
 */
export const BranchDiagram = ({ hero, className }: Props) => {
  return (
    <HeroDiagramShell
      a11yLabel={hero.a11y}
      className={className}
      padding="px-md py-lg sm:p-lg"
      gradient="radial-gradient(circle at 50% 25%, rgba(245,158,11,0.12), transparent 55%)"
    >
      <div className="relative flex flex-col items-center gap-sm" aria-hidden="true">
        {/* Top: React Element */}
        <ElementCard label={hero.elementLabel} code={hero.elementCode} />

        <DownArrow />

        {/* Center: react-reconciler */}
        <ReconcilerCenter label={hero.reconcilerLabel} subtitle={hero.reconcilerSubtitle} />

        {/* Branch */}
        <BranchArrows />

        {/* Two branches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm w-full">
          <BranchColumn
            title={hero.webBranch.title}
            steps={hero.webBranch.steps}
            tone="sky"
            iconName="monitor"
          />
          <BranchColumn
            title={hero.nativeBranch.title}
            steps={hero.nativeBranch.steps}
            tone="violet"
            iconName="smartphone"
          />
        </div>
      </div>
    </HeroDiagramShell>
  );
};

const ElementCard = ({ label, code }: { label: string; code: string }) => (
  <article
    className={cn(
      'inline-flex flex-col items-center gap-1 rounded-xl border px-md py-2.5',
      'bg-[var(--term-bg)] border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="text-sm font-bold font-mono tracking-tight text-[var(--term-fg)]">
      {label}
    </span>
    <code
      className={cn(
        'rounded-md border px-2 py-0.5 text-[11px] font-mono leading-snug',
        'border-dashed border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      )}
    >
      {code}
    </code>
  </article>
);

const ReconcilerCenter = ({ label, subtitle }: { label: string; subtitle: string }) => (
  <article
    className={cn(
      'relative inline-flex flex-col items-center gap-1 rounded-xl border px-md py-md',
      'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      'shadow-[0_3px_0_var(--term-border)] overflow-hidden',
      'min-w-[12rem]',
    )}
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.16),transparent_60%)]"
    />
    <CubeIcon className="relative h-7 w-7 text-[var(--term-accent)]" />
    <span className="relative text-md font-bold font-mono tracking-tight text-[var(--term-accent)]">
      {label}
    </span>
    <span className="relative text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
      {subtitle}
    </span>
  </article>
);

type BranchColumnProps = {
  title: string;
  steps: string[];
  tone: 'sky' | 'violet';
  iconName: 'monitor' | 'smartphone';
};

const BranchColumn = ({ title, steps, tone, iconName }: BranchColumnProps) => {
  const Icon = rnIcon[iconName];
  const isSky = tone === 'sky';
  const accent = isSky ? 'text-sky-600 dark:text-sky-300' : 'text-violet-600 dark:text-violet-300';
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cn('text-sm font-bold font-mono tracking-tight', accent)}>{title}</h3>
      </header>
      <ul className="flex flex-col gap-1.5">
        {steps.map((step, i) => (
          <li
            key={step}
            className={cn(
              'flex items-stretch gap-2 rounded-md border px-2 py-1.5 text-[11px] leading-snug',
              'bg-[var(--term-bg)] border-[var(--term-border)] text-[var(--term-fg)] break-keep',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-5 h-5 rounded-full font-mono text-[10px] font-bold shrink-0',
                'bg-[var(--term-surface)] border border-[var(--term-border)]',
                accent,
              )}
            >
              {i + 1}
            </span>
            <span className="self-center">{step}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const BranchArrows = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 36"
    preserveAspectRatio="none"
    className="w-full max-w-md h-8 text-[var(--term-accent)]"
  >
    <path
      d="M 100 0 L 100 16 L 50 16 L 50 32"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
    />
    <path
      d="M 100 0 L 100 16 L 150 16 L 150 32"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
    />
    <path d="M 46 32 L 50 36 L 54 32 Z" fill="currentColor" />
    <path d="M 146 32 L 150 36 L 154 32 Z" fill="currentColor" />
  </svg>
);

const CubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
