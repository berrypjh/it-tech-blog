import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { RvrContent } from '../content';
import { InfoIcon, MapIcon, rvrIcon } from '../icons';

type Props = { content: RvrContent['hostConfig']; sectionId: string };

export const HostConfigSection = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-host-config"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="host-config"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.45fr)] gap-md items-start">
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg h-full',
            'bg-[var(--term-surface)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-11 h-11 rounded-md border',
              'bg-[var(--term-surface)] border-[var(--term-border)]',
              'text-sky-600 dark:text-sky-300',
            )}
          >
            <rvrIcon.sliders className="h-5 w-5" aria-hidden="true" />
          </span>

          <h3 className="text-md sm:text-lg font-bold leading-snug text-sky-600 dark:text-sky-300 break-keep">
            {content.cardTitle}
          </h3>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.cardBody}
          </p>

          <p
            className={cn(
              'mt-auto rounded-lg border px-3 py-2 text-xsm leading-relaxed break-keep',
              'border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
            )}
          >
            {content.emphasis}
          </p>
        </article>

        <CodePreviewPanel code={content.code} language="ts" />
      </div>

      <aside
        className={cn(
          'flex items-start gap-sm rounded-xl border px-md py-md',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-md bg-[var(--term-surface)] text-sky-600 border border-[var(--term-border)] dark:text-sky-300"
        >
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed font-bold break-keep">
          {content.infoBanner}
        </p>
      </aside>
    </section>
  );
};
