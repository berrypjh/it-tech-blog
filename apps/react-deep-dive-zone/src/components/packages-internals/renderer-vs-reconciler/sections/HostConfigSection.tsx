import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RvrContent } from '../content';
import { InfoIcon, MapIcon, rvrIcon } from '../icons';

type Props = { content: RvrContent['hostConfig'] };

export const HostConfigSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-host-config" className="space-y-md">
      <SectionHeader
        id="host-config"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
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
              toneTokens.sky.text,
            )}
          >
            <rvrIcon.sliders className="h-5 w-5" aria-hidden="true" />
          </span>

          <h3
            className={cn(
              'text-md sm:text-lg font-bold leading-snug break-keep',
              toneTokens.sky.text,
            )}
          >
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

      <SectionNote icon={<InfoIcon className="h-4 w-4" />}>{content.infoBanner}</SectionNote>
    </section>
  );
};
