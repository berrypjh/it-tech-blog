import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { React19ChangeMapContent } from '../content';
import { CompassIcon, LayersIcon } from '../icons';
import { layerTone } from '../tone';

import { iconRegistry } from './_iconRegistry';

type Props = { content: React19ChangeMapContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-19-changes/change-map.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // 6 layers × 6 features → one change map'}
        </span>
      }
    />

    <div className="mt-md grid grid-cols-1 gap-lg lg:gap-xl lg:grid-cols-[minmax(0,_13fr)_minmax(0,_7fr)] items-start">
      {/* LEFT: title + layer diagram */}
      <div className="flex flex-col gap-md">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-200 bg-blue-50/80 pr-3 pl-1 py-1 dark:border-blue-800/70 dark:bg-blue-950/40">
          <span
            aria-hidden="true"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-mono font-bold text-white tabular-nums dark:bg-blue-500"
          >
            {content.badge.number}
          </span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200 break-keep">
            {content.badge.label}
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[46ch]">
          {content.subtitleLines.join(' ')}
        </p>

        {/* Layer diagram */}
        <div
          className={cn(
            'mt-md relative rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white shadow-[0_2px_0_var(--term-border)]',
            'dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          <div className="flex items-center gap-2 mb-md">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <LayersIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.diagram.title}
            </h3>
          </div>

          <ul className="flex flex-col gap-2">
            {content.diagram.layers.map((layer) => {
              const tone = layerTone[layer.layer];
              return (
                <li
                  key={layer.layer}
                  className={cn(
                    'grid grid-cols-1 items-stretch gap-2',
                    'sm:grid-cols-[minmax(0,_1fr)_auto_minmax(140px,_auto)] sm:items-center sm:gap-3',
                  )}
                >
                  {/* Plate */}
                  <article
                    className={cn(
                      'group/plate relative rounded-xl border-2 px-3 py-2.5',
                      tone.plate,
                      tone.border,
                      'shadow-[0_1px_0_var(--term-border)]',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                      'motion-safe:hover:shadow-[0_3px_0_var(--term-border)]',
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-5 w-5 items-center justify-center rounded-md text-[9px] font-mono font-bold tabular-nums',
                          tone.iconChip,
                          'border',
                        )}
                      >
                        {layer.number}
                      </span>
                      <h4
                        className={cn(
                          'text-xsm sm:text-sm font-bold break-keep tracking-tight',
                          tone.text,
                        )}
                      >
                        {layer.name}
                      </h4>
                    </div>
                    <p className="mt-1 text-[11px] sm:text-xxsm text-[var(--term-muted)] break-keep">
                      {layer.caption}
                    </p>
                  </article>

                  {/* Connector */}
                  <span aria-hidden="true" className="hidden sm:flex items-center gap-1">
                    <span
                      className={cn(
                        'block h-px w-8 lg:w-12 border-t border-dashed',
                        tone.connectorBorder,
                      )}
                    />
                    <span className={cn('block h-1.5 w-1.5 rounded-full', tone.dot)} />
                  </span>

                  {/* Feature chip */}
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 self-start sm:self-center',
                      'rounded-full border-2 px-3 py-1.5 font-mono text-xxsm font-bold',
                      'bg-white dark:bg-[var(--term-bg)]',
                      tone.borderStrong,
                      tone.text,
                      'shadow-[0_1px_0_var(--term-border)]',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('block h-1.5 w-1.5 rounded-full', tone.dot)}
                    />
                    {layer.feature}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* RIGHT: question + guide cards */}
      <div className="flex flex-col gap-md">
        {/* Question card */}
        <article
          className={cn(
            'rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-300/80 bg-blue-50/40 dark:border-blue-700/70 dark:bg-blue-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div className="flex items-center gap-2 mb-md">
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-mono font-bold text-white tabular-nums dark:bg-blue-500"
            >
              {content.questionCard.number}
            </span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
              {content.questionCard.eyebrow}
            </span>
          </div>

          <h3 className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.questionCard.questionLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>

          <ul className="mt-md grid grid-cols-3 gap-1.5">
            {content.questionCard.badges.map((badge) => {
              const Icon = iconRegistry[badge.iconKey];
              return (
                <li
                  key={badge.label}
                  className={cn(
                    'flex flex-col items-center gap-1 rounded-xl border p-2 text-center',
                    'border-blue-200 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-blue-700 dark:text-blue-200 break-keep">
                    {badge.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </article>

        {/* Guide card */}
        <article
          className={cn(
            'rounded-2xl border-2 p-md sm:p-lg flex flex-col gap-sm',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-300"
            >
              <CompassIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {content.guideCard.eyebrow}
            </span>
          </div>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.guideCard.bodyLines.join(' ')}
          </p>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
              'border-emerald-300 bg-emerald-50 text-emerald-700',
              'dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-200',
              'text-[10px] font-mono font-bold tabular-nums',
            )}
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {content.guideCard.source}
          </span>
        </article>
      </div>
    </div>
  </section>
);
