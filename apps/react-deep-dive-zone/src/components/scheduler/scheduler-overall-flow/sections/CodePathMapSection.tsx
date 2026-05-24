import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { FullFlowContent } from '../content';
import { FileCodeIcon, MapIcon } from '../icons';

type Props = { content: FullFlowContent['codePath'] };

export const CodePathMapSection = ({ content }: Props) => (
  <section aria-labelledby="heading-code-path">
    <NumberedSectionHeader
      id="code-path"
      number={content.number}
      eyebrow={content.helper}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.fileName} className="h-full">
          <article
            className={cn(
              'group flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
              'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/30',
              'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/10',
              'shadow-[0_2px_0_var(--term-border)] transition-all',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white dark:bg-blue-500"
              >
                <FileCodeIcon className="h-4 w-4" />
              </span>
              <h3 className="font-mono text-xsm sm:text-sm font-bold text-blue-900 dark:text-blue-100 break-words leading-snug">
                {card.fileName}
              </h3>
            </header>

            <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.description}
            </p>

            <ul className="mt-auto flex flex-wrap gap-1.5">
              {card.chips.map((chip) => (
                <li key={chip}>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-md border px-2 py-0.5',
                      'font-mono text-[10px] font-medium',
                      'border-blue-200 bg-blue-100/80 text-blue-900 dark:border-blue-700/60 dark:bg-blue-950/40 dark:text-blue-200',
                    )}
                  >
                    {chip}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
