import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { RenderPhaseIntroContent } from '../content';
import { ArrowDownIcon, CheckCircleIcon, CpuIcon, LightbulbIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['hero'] };

export const RenderPhaseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/render-phase.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// what is the render phase?'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.88fr)_minmax(0,_1.12fr)]"
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

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
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
          {content.callout}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <HeroDiagram diagram={content.diagram} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroDiagram = ({ diagram }: { diagram: RenderPhaseIntroContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/50 via-white to-teal-50/40',
      'dark:from-sky-950/25 dark:via-[var(--term-bg)] dark:to-teal-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// render → commit'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        {diagram.eyebrow}
      </span>
    </header>

    <div className="flex flex-col items-stretch gap-2">
      <PhaseCard
        kind="render"
        title={diagram.renderCard.title}
        description={diagram.renderCard.description}
        subDescription={diagram.renderCard.subDescription}
      />
      <span
        aria-hidden="true"
        className={cn(
          'mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full border',
          'border-[var(--term-border)] bg-white text-sky-600',
          'dark:bg-slate-950/60 dark:text-sky-300',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <ArrowDownIcon className="h-4 w-4" />
      </span>
      <PhaseCard
        kind="commit"
        title={diagram.commitCard.title}
        description={diagram.commitCard.description}
        subDescription={diagram.commitCard.subDescription}
      />
    </div>
  </div>
);

type PhaseCardProps = {
  kind: 'render' | 'commit';
  title: string;
  description: string;
  subDescription: string;
};

const PhaseCard = ({ kind, title, description, subDescription }: PhaseCardProps) => {
  const isRender = kind === 'render';
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] gap-md items-center rounded-2xl border-2 p-md sm:p-lg',
        isRender
          ? 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30'
          : 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
          isRender
            ? 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60'
            : 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
        )}
      >
        {isRender ? <CpuIcon className="h-6 w-6" /> : <CheckCircleIcon className="h-6 w-6" />}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h2
          className={cn(
            'text-sm sm:text-md font-bold leading-tight break-keep',
            isRender ? 'text-sky-800 dark:text-sky-100' : 'text-teal-800 dark:text-teal-100',
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            'text-xsm sm:text-sm font-bold leading-snug break-keep',
            isRender ? 'text-sky-700 dark:text-sky-200' : 'text-teal-700 dark:text-teal-200',
          )}
        >
          {description}
        </p>
        <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {subDescription}
        </p>
      </div>
    </article>
  );
};
