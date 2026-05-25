import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { UseSuspenseErrorModelContent } from '../content';
import { ArrowRightIcon, AtomIcon } from '../icons';
import { stateTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { iconRegistry } from './_iconRegistry';

type Props = { content: UseSuspenseErrorModelContent['hero'] };

export const UseHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-19-changes/use-suspense-error-model.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // pending → Suspense · fulfilled → value · rejected → Error Boundary'}
        </span>
      }
    />

    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg xl:grid-cols-[minmax(0,_6fr)_minmax(0,_6fr)_minmax(0,_8fr)] lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] items-stretch">
      {/* LEFT: badges + title */}
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

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[46ch]">
          {content.subtitleLines.join(' ')}
        </p>
      </div>

      {/* CENTER: code panel */}
      <div className="flex">
        <CodePanel
          code={content.heroCode.code}
          fileName={content.heroCode.fileName}
          langBadge={content.heroCode.langBadge}
        />
      </div>

      {/* RIGHT: Promise state diagram */}
      <article
        className={cn(
          'relative flex flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-gradient-to-br from-white via-blue-50/40 to-white',
          'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <AtomIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.diagram.title}
          </h3>
        </header>

        <ul className="flex flex-col gap-2">
          {content.diagram.cards.map((card) => {
            const tone = stateTone[card.state];
            const Icon = iconRegistry[card.iconKey];
            return (
              <li key={card.title}>
                <article
                  className={cn(
                    'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-xl border-2 px-3 py-2',
                    'bg-white dark:bg-[var(--term-bg)]',
                    tone.border,
                    'shadow-[0_1px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                      tone.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className={cn('text-xsm font-mono font-bold break-keep', tone.text)}>
                      {card.title}
                    </span>
                    <span className="text-[10px] text-[var(--term-muted)] break-keep">
                      {card.subtitle}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
                      'font-mono text-[10px] font-bold',
                      tone.chip,
                    )}
                  >
                    <ArrowRightIcon aria-hidden="true" className="h-3 w-3" />
                    {card.result.replace('→ ', '')}
                  </span>
                </article>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);
