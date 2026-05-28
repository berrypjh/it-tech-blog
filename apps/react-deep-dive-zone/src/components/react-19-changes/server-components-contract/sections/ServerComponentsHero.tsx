import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { BoundaryCard, ServerComponentsContractContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CheckCircleIcon } from '../icons';
import { boundaryTone } from '../tone';

import { iconRegistry } from './_iconRegistry';

type Props = { content: ServerComponentsContractContent['hero'] };

export const ServerComponentsHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-19-changes/server-components-contract.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {
            " // Server Component · Client Component · Server Function — 'use client' / 'use server'"
          }
        </span>
      }
    />

    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,_8fr)_minmax(0,_12fr)] items-stretch">
      {/* LEFT: badges + title + subtitle */}
      <div className="flex flex-col gap-md">
        <ul className="flex flex-wrap items-center gap-2">
          {content.badges.map((badge) => (
            <li
              key={badge.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                badge.tone === 'solid'
                  ? 'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500'
                  : 'border border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/50 dark:text-blue-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1.5 w-1.5 rounded-full',
                  badge.tone === 'solid' ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                )}
              />
              {badge.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.3rem] xl:text-[2.5rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[2]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[48ch]">
          {content.subtitleLines.join(' ')}
        </p>
      </div>

      {/* RIGHT: boundary diagram */}
      <article
        className={cn(
          'relative flex flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-gradient-to-br from-white via-blue-50/30 to-white',
          'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header>
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
            {content.diagram.title}
          </p>
        </header>

        <ol
          className={cn(
            'grid grid-cols-1 gap-2',
            'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-2 lg:items-stretch',
          )}
        >
          {/* Server Component card */}
          {(() => {
            const [serverCard, clientCard, fnCard] = content.diagram.cards;
            if (!serverCard || !clientCard || !fnCard) return null;
            return (
              <>
                <HeroCard card={serverCard} />
                <BoundaryLabel
                  primary={content.diagram.boundaryLabels.useClient.primary}
                  secondary={content.diagram.boundaryLabels.useClient.secondary}
                />
                <HeroCard card={clientCard} />
                <BoundaryLabel
                  primary={content.diagram.boundaryLabels.useServer.primary}
                  secondary={content.diagram.boundaryLabels.useServer.secondary}
                />
                <HeroCard card={fnCard} />
              </>
            );
          })()}
        </ol>

        {/* footer label */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <span
            aria-hidden="true"
            className="block h-px w-8 border-t-2 border-dashed border-blue-300 dark:border-blue-700/60"
          />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
            {content.diagram.footer}
          </span>
          <span
            aria-hidden="true"
            className="block h-px w-8 border-t-2 border-dashed border-blue-300 dark:border-blue-700/60"
          />
        </div>
      </article>
    </div>
  </section>
);

const HeroCard = ({ card }: { card: BoundaryCard }) => {
  const tone = boundaryTone[card.boundary];
  const Icon = iconRegistry[card.iconKey];
  return (
    <li>
      <article
        className={cn(
          'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
          tone.border,
          'bg-white dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-all motion-safe:hover:-translate-y-0.5',
          'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl border',
            tone.iconChip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-sm font-bold break-keep', tone.text)}>{card.title}</h3>
        <p className="text-[11px] text-[var(--term-muted)] break-keep">{card.caption}</p>
        <ul className="mt-auto flex flex-col gap-1">
          {card.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-1.5 text-[11px] leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className={cn('mt-0.5 h-3 w-3 shrink-0', tone.text)}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
};

const BoundaryLabel = ({ primary, secondary }: { primary: string; secondary: string }) => (
  <li aria-hidden="true" className="flex lg:flex-col items-center justify-center gap-1">
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200">
      <span className="hidden lg:inline-flex">
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </span>
      <span className="inline-flex lg:hidden">
        <ArrowDownIcon className="h-3.5 w-3.5" />
      </span>
    </span>
    <div className="flex flex-col items-center text-center">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
        {primary}
      </span>
      <code className="font-mono text-[11px] font-bold text-blue-700 dark:text-blue-200">
        {secondary}
      </code>
    </div>
  </li>
);
