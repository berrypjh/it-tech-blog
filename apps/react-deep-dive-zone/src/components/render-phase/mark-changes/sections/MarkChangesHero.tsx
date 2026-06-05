import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { MarkChangesContent, Tone } from '../content';
import { BoxIcon, FlagIcon, LightbulbIcon, ListChecksIcon, PencilIcon, Trash2Icon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: MarkChangesContent['hero'] };

const flagIconMap = {
  flag: FlagIcon,
  trash: Trash2Icon,
  pencil: PencilIcon,
} as const;

export const MarkChangesHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/mark-changes.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// flags only'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

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

const HeroDiagram = ({ diagram }: { diagram: MarkChangesContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-teal-50/40 via-white to-violet-50/40',
      'dark:from-teal-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// Fiber → flags & deletions'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        marks only
      </span>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-md items-stretch">
      {/* Fiber card */}
      <article
        className={cn(
          'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
          'border-violet-300/80 bg-white',
          'dark:border-violet-700/70 dark:bg-slate-950/40',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
              'bg-violet-100 text-violet-700 border-violet-200/80',
              'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
            )}
          >
            <BoxIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col gap-0.5 min-w-0">
            <h2 className="text-sm sm:text-md font-bold text-violet-900 dark:text-violet-100">
              {diagram.fiberCard.title}
            </h2>
            <code className="font-mono text-[10px] text-violet-700/80 dark:text-violet-300/80">
              {diagram.fiberCard.subtitle}
            </code>
          </div>
        </header>
        <ul className="flex flex-col gap-0.5 mt-1">
          {diagram.fiberCard.fields.map((field) => (
            <li key={field.label} className="flex items-center gap-2">
              <code className="font-mono text-[10px] sm:text-xsm text-violet-700/80 dark:text-violet-300/80 w-[64px] shrink-0">
                {field.label}:
              </code>
              <code className="font-mono text-[10px] sm:text-xsm text-violet-900 dark:text-violet-100 break-all">
                {field.value}
              </code>
            </li>
          ))}
        </ul>
      </article>

      {/* Flag cards column */}
      <div className="flex flex-col gap-2">
        {diagram.flagCards.map((card) => {
          const palette = tonePalette[card.tone as Tone];
          const Icon = flagIconMap[card.iconName];
          return (
            <article
              key={card.title}
              className={cn(
                'grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-2 rounded-xl border p-sm sm:p-md',
                palette.border,
                palette.bg,
                'shadow-[0_1px_0_var(--term-border)]',
                'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                  palette.chip,
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <code
                  className={cn(
                    'font-mono text-xsm sm:text-sm font-bold leading-tight break-keep',
                    palette.text,
                  )}
                >
                  {card.title}
                </code>
                <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>

    {/* deletions card (bottom) */}
    <article
      className={cn(
        'mt-3 grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-2 rounded-xl border-2 p-sm sm:p-md',
        'border-rose-300/80 bg-rose-50/60',
        'dark:border-rose-700/70 dark:bg-rose-950/25',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
          'bg-rose-100 text-rose-700 border-rose-200/80',
          'dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
        )}
      >
        <ListChecksIcon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className="font-mono text-xsm sm:text-sm font-bold leading-tight text-rose-900 dark:text-rose-100">
          {diagram.deletionsCard.title}
        </code>
        <p className="text-[10px] sm:text-xsm leading-snug text-rose-800/80 dark:text-rose-200/80 break-keep">
          {diagram.deletionsCard.description}
        </p>
      </div>
    </article>
  </div>
);
