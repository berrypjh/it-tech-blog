import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { commitToneTokens } from '../../_shared/tones';
import type { HeroPhase, HeroPhaseIcon, PassiveEffectsContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  EyeIcon,
  LightbulbIcon,
  PencilIcon,
  ZapIcon,
} from '../icons';

type Props = { content: PassiveEffectsContent['hero'] };

const iconMap: Record<HeroPhaseIcon, typeof ZapIcon> = {
  eye: EyeIcon,
  pencil: PencilIcon,
  zap: ZapIcon,
  clock: ClockIcon,
};

export const PassiveEffectsHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/passive-effects.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// after paint, async'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-teal-200/80 bg-teal-50/60',
          'dark:border-teal-800/70 dark:bg-teal-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-700 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.insight}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <HeroDiagram diagram={content.diagram} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroDiagram = ({ diagram }: { diagram: PassiveEffectsContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-violet-50/40 via-white to-teal-50/55',
      'dark:from-violet-950/20 dark:via-[var(--term-bg)] dark:to-teal-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <h2 className="text-[10px] sm:text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold break-keep">
        {`// ${diagram.title}`}
      </h2>
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        commit + follow-up
      </span>
    </header>

    {/* Desktop: 4 columns */}
    <ol className="hidden md:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-1.5 items-stretch">
      {diagram.phases.map((phase, idx) => (
        <Fragment key={phase.key}>
          <li className="flex">
            <PhaseCard phase={phase} />
          </li>
          {idx < diagram.phases.length - 1 && (
            <li
              aria-hidden="true"
              className="flex items-center justify-center text-[var(--term-dim)]"
            >
              <ArrowRightIcon className="h-4 w-4" strokeDasharray="3 3" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>

    {/* Mobile: vertical */}
    <ol className="md:hidden flex flex-col">
      {diagram.phases.map((phase, idx) => (
        <li key={phase.key} className="flex flex-col">
          <PhaseCard phase={phase} />
          {idx < diagram.phases.length - 1 && (
            <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
              <ArrowDownIcon className="h-4 w-4" />
            </span>
          )}
        </li>
      ))}
    </ol>

    {/* Bottom zone labels (sync vs async) */}
    <ZoneLabels syncLabel={diagram.syncLabel} asyncLabel={diagram.asyncLabel} />
  </div>
);

const PhaseCard = ({ phase }: { phase: HeroPhase }) => {
  const Icon = iconMap[phase.iconName];
  const t = commitToneTokens[phase.tone];
  return (
    <article
      className={cn(
        'relative flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        phase.active
          ? cn('border-2', t.borderStrong, t.bg, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30')
          : t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      {phase.active && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute -top-2 left-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
            'text-[9px] font-mono uppercase tracking-wider font-bold',
            'bg-teal-500 text-white border-teal-600',
            'dark:bg-teal-400 dark:text-slate-950 dark:border-teal-300',
          )}
        >
          active
        </span>
      )}
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-xsm font-bold leading-tight break-keep', t.textStrong)}>
            {phase.title}
          </h3>
          {phase.subtitle && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
              {phase.subtitle}
            </span>
          )}
        </div>
      </header>
      <ul className="flex flex-col gap-0.5 mt-auto">
        {phase.body.map((b) => (
          <li
            key={b}
            className={cn(
              'flex items-center gap-1.5 text-[10.5px] sm:text-[11px] leading-snug break-keep',
              phase.active ? t.text : 'text-[var(--term-muted)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-block h-1 w-1 rounded-full shrink-0',
                phase.active ? t.dot : 'bg-[var(--term-dim)]',
              )}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const ZoneLabels = ({
  syncLabel,
  asyncLabel,
}: {
  syncLabel: { title: string; subtitle: string };
  asyncLabel: { title: string; subtitle: string };
}) => (
  <div className="mt-md pt-md border-t border-dashed border-[var(--term-border)]">
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)] gap-2">
      <ZoneLabel title={syncLabel.title} subtitle={syncLabel.subtitle} variant="sync" />
      <ZoneLabel title={asyncLabel.title} subtitle={asyncLabel.subtitle} variant="async" />
    </div>
  </div>
);

const ZoneLabel = ({
  title,
  subtitle,
  variant,
}: {
  title: string;
  subtitle: string;
  variant: 'sync' | 'async';
}) => {
  const isAsync = variant === 'async';
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-xl border-2 border-dashed p-sm',
        isAsync
          ? 'border-teal-300/80 bg-teal-50/50 dark:border-teal-700/70 dark:bg-teal-950/25'
          : 'border-[var(--term-border)] bg-slate-50/40 dark:bg-slate-900/30',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-block h-2 w-2 rounded-full shrink-0',
          isAsync ? 'bg-teal-500 dark:bg-teal-400' : 'bg-[var(--term-dim)]',
        )}
      />
      <div className="flex flex-col min-w-0">
        <span
          className={cn(
            'text-[10px] sm:text-xsm font-bold leading-tight break-keep',
            isAsync ? 'text-teal-800 dark:text-teal-100' : 'text-[var(--term-fg)]',
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            'text-[9px] sm:text-[10px] uppercase tracking-wider font-mono break-keep',
            isAsync ? 'text-teal-700 dark:text-teal-300' : 'text-[var(--term-muted)]',
          )}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};
