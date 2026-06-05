import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { ActionsUpdateFlowContent } from '../content';
import { AtomIcon } from '../icons';
import { stateTone } from '../tone';

import { iconRegistry } from './_iconRegistry';

type Props = { content: ActionsUpdateFlowContent['hero'] };

export const ActionsHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/actions-update-flow.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // pending + error + form + optimistic → one declarative model'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[46ch]">{content.subtitleLines.join(' ')}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn className="w-full">
      {/* Action Orbit Diagram */}
      <div
        className={cn(
          'relative rounded-2xl border-2 p-md sm:p-lg lg:p-xl overflow-hidden',
          'border-slate-200 bg-gradient-to-br from-white via-blue-50/30 to-white',
          'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* dotted orbit rings (decorative) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="relative">
            <div className="hidden sm:block h-56 w-56 lg:h-64 lg:w-64 rounded-full border-2 border-dashed border-blue-200/70 dark:border-blue-800/40" />
            <div className="hidden sm:block absolute inset-4 rounded-full border border-dashed border-blue-200/50 dark:border-blue-800/30" />
          </div>
        </div>

        {(() => {
          const [tl, tr, bl, br] = content.diagram.cards;
          if (!tl || !tr || !bl || !br) return null;
          return (
            <div className="relative grid grid-cols-2 gap-3 sm:gap-md sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-[auto_auto_auto] items-center">
              {/* top-left: Pending */}
              <OrbitCard card={tl} corner="tl" />
              {/* spacer center top (desktop) */}
              <span aria-hidden="true" className="hidden sm:block" />
              {/* top-right: Error */}
              <OrbitCard card={tr} corner="tr" />

              {/* center: spacer + core + spacer */}
              <span aria-hidden="true" className="hidden sm:block" />
              <div className="col-span-2 sm:col-span-1 flex justify-center">
                <article
                  className={cn(
                    'inline-flex flex-col items-center gap-1 rounded-2xl border-2 px-md py-md',
                    'border-blue-700/60 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950',
                    'text-white shadow-[0_4px_0_rgba(15,23,42,0.25)]',
                    'min-w-[150px]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-300/40 bg-white/10 text-blue-100"
                  >
                    <AtomIcon className="h-5 w-5" />
                  </span>
                  <span className="text-md sm:text-lg font-bold">
                    {content.diagram.centerTitle}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200/80">
                    {content.diagram.centerSubtitle}
                  </span>
                </article>
              </div>
              <span aria-hidden="true" className="hidden sm:block" />

              {/* bottom-left: Form Submission */}
              <OrbitCard card={bl} corner="bl" />
              <span aria-hidden="true" className="hidden sm:block" />
              {/* bottom-right: Optimistic */}
              <OrbitCard card={br} corner="br" />
            </div>
          );
        })()}
      </div>
    </HeroVisualColumn>
  </HeroSection>
);

type OrbitCardProps = {
  card: ActionsUpdateFlowContent['hero']['diagram']['cards'][number];
  corner: 'tl' | 'tr' | 'bl' | 'br';
};

const OrbitCard = ({ card, corner }: OrbitCardProps) => {
  const tone = stateTone[card.state];
  const Icon = iconRegistry[card.iconKey];

  const align = {
    tl: 'sm:items-start sm:text-left',
    tr: 'sm:items-end sm:text-right',
    bl: 'sm:items-start sm:text-left',
    br: 'sm:items-end sm:text-right',
  }[corner];

  return (
    <article
      className={cn(
        'relative flex flex-col items-center text-center gap-2 rounded-2xl border-2 p-3',
        'bg-white dark:bg-[var(--term-bg)]',
        tone.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5',
        'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        align,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
          tone.iconChip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', tone.text)}>{card.title}</h3>
      <p className="text-[11px] text-[var(--term-muted)] break-keep">{card.caption}</p>
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
          'font-mono text-[10px] font-bold',
          tone.chip,
        )}
      >
        <span aria-hidden="true" className={cn('block h-1 w-1 rounded-full', tone.dot)} />
        {card.keyword}
      </span>
    </article>
  );
};
