import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { pipelineTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['pluginRole'] };

export const FormActionPluginRoleGrid = ({ content }: Props) => (
  <section aria-labelledby="plugin-role-heading" className="flex flex-col">
    <SectionHeader
      id="plugin-role-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
      {content.cards.map((card, i) => {
        const tone = pipelineTone[card.pipeline];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
                'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                'hover:border-blue-300 dark:hover:border-blue-700/70',
              )}
            >
              {/* top accent line */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-x-0 top-0 h-1',
                  tone.solidBg,
                  'opacity-80 group-hover:opacity-100 transition-opacity',
                )}
              />

              <div className="flex items-start justify-between gap-2 pt-1">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    tone.iconChip,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                    tone.chip,
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className={cn('text-sm sm:text-md font-bold break-keep leading-snug', tone.text)}>
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.body}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
