import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection as HeroLayout,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { ChangeMapHeroDiagram } from '../components/ChangeMapHeroDiagram';
import type { React19ChangeMapContent } from '../content';
import { LayersIcon } from '../icons';
import { layerTone } from '../tone';

type Props = { content: React19ChangeMapContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroLayout
    promptCommand="cat"
    promptPath="react-19-changes/change-map.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // 6 layers × 6 features → one change map'}</span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_13fr)_minmax(0,_7fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[46ch]">{content.subtitleLines.join(' ')}</HeroDescription>

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
    </HeroTextColumn>

    <HeroVisualColumn id="hero-react-19-change-map">
      <ChangeMapHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroLayout>
);
