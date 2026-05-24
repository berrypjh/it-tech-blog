import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import {
  FormInputIcon,
  LayoutGridIcon,
  MousePointerIcon,
  RocketIcon,
  ScrollIcon,
  SparklesIcon,
  TargetIcon,
  TypeIcon,
} from '../icons';
import { SectionFrame } from '../SectionFrame';
import { toneAccent, toneCard, toneIconBox } from '../styles';

type Props = { content: PluginEventSystemContent['pluginRoles'] };

const largeIcons = [MousePointerIcon, FormInputIcon, RocketIcon];
const smallIcons = [TypeIcon, TargetIcon, ScrollIcon];

export const PluginRoleCards = ({ content }: Props) => (
  <SectionFrame
    id="plugin-roles"
    sectionNumber={content.sectionNumber}
    title={content.title}
    icon={<LayoutGridIcon className="h-5 w-5" />}
  >
    {/* Large cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.large.map((card, i) => {
        const Icon = largeIcons[i] ?? MousePointerIcon;
        return (
          <article
            key={card.name}
            className={cn(
              'group flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_2px_0_var(--term-border)]',
              toneCard[card.tone],
            )}
          >
            <header className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                  toneIconBox[card.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    toneAccent[card.tone],
                  )}
                >
                  plugin
                </span>
                <code
                  className={cn(
                    'font-mono text-sm sm:text-md font-bold leading-tight break-all',
                    toneAccent[card.tone],
                  )}
                >
                  {card.name}
                </code>
              </div>
            </header>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {card.summary}
            </p>

            {card.bullets && (
              <ul className="mt-auto flex flex-col gap-1.5">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full',
                        toneAccent[card.tone],
                      )}
                      style={{ backgroundColor: 'currentColor' }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>

    {/* Small cards */}
    <div className="mt-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
      {content.small.map((card, i) => {
        const Icon = smallIcons[i] ?? SparklesIcon;
        return (
          <article
            key={card.name}
            className={cn(
              'group flex items-start gap-3 rounded-2xl border-2 p-md transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              toneCard[card.tone],
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                toneIconBox[card.tone],
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold break-all',
                  toneAccent[card.tone],
                )}
              >
                {card.name}
              </code>
              <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                {card.summary}
              </p>
            </div>
          </article>
        );
      })}
    </div>

    {/* More extension card */}
    <article
      className={cn(
        'mt-md flex items-center gap-3 rounded-2xl border-2 border-dashed p-md transition-colors',
        'border-rose-300/70 bg-rose-50/40 dark:border-rose-700/60 dark:bg-rose-950/20',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
          toneIconBox[content.more.tone],
        )}
      >
        <SparklesIcon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <code
          className={cn(
            'font-mono text-xsm sm:text-sm font-bold break-keep',
            toneAccent[content.more.tone],
          )}
        >
          {content.more.name}
        </code>
        <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {content.more.summary}
        </p>
      </div>
    </article>
  </SectionFrame>
);
