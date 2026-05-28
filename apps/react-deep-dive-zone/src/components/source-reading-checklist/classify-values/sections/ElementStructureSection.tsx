import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionHeader } from '../../../shared/SectionHeader';
import type { ValueClassificationContent } from '../content';
import { AtomIcon, CheckCircleIcon, SparkIcon } from '../icons';
import { ValueBadge } from '../ValueBadge';

type Props = { content: ValueClassificationContent['elementStructure'] };

export const ElementStructureSection = ({ content }: Props) => {
  return (
    <section
      id="section-element-structure"
      aria-labelledby="heading-element-structure"
      className="space-y-lg"
    >
      <SectionHeader
        id="element-structure"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<AtomIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_6fr)_minmax(0,_6fr)] gap-md lg:gap-lg items-start">
        {/* LEFT — Code */}
        <div className="flex flex-col gap-2">
          <ValueBadge valueKey="element" size="md" strong className="self-start" />
          <CodePreviewPanel code={content.code} language="js" />
        </div>

        {/* RIGHT — Explanation card */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-200 bg-blue-50/60',
            'dark:border-blue-800/60 dark:bg-blue-950/30',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
        >
          <h3 className="text-md sm:text-lg font-bold leading-snug text-blue-900 dark:text-blue-100 break-keep">
            {content.cardTitle}
          </h3>

          <ul className="flex flex-col gap-2">
            {content.points.map((p) => (
              <li
                key={p}
                className={cn(
                  'flex items-start gap-2 rounded-md border px-3 py-2',
                  'border-blue-200 bg-white',
                  'dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
                )}
              >
                <CheckCircleIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{p}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Key sentence banner */}
      <aside
        className={cn(
          'flex items-start gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-300 bg-blue-100/60',
          'dark:border-blue-700/70 dark:bg-blue-950/40',
        )}
        aria-label="key-sentence"
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
            'border border-blue-300 bg-white text-blue-700',
            'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
          )}
        >
          <SparkIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug text-blue-900 dark:text-blue-100 break-keep">
          {content.keySentence}
        </p>
      </aside>
    </section>
  );
};
