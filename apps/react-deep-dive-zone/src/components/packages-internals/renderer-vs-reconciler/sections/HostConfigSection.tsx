import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { HostConfigCodePanel } from '../components/HostConfigCodePanel';
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

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.45fr)] gap-md items-stretch">
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg h-full',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-violet-200/70 dark:border-violet-800/60',
          )}
        >
          <ToneIconBox tone="violet" size="md">
            <rvrIcon.sliders className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>

          <h3 className="text-md sm:text-lg font-bold leading-snug text-violet-700 dark:text-violet-300 break-keep">
            {content.cardTitle}
          </h3>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.cardBody}
          </p>

          <p
            className={cn(
              'mt-auto rounded-lg border px-3 py-2 text-xsm leading-relaxed break-keep',
              'border-dashed border-violet-300/80 bg-violet-50 text-violet-900',
              'dark:border-violet-800/70 dark:bg-violet-950/30 dark:text-violet-100',
            )}
          >
            {content.emphasis}
          </p>
        </article>

        <HostConfigCodePanel caption={content.codeCaption} code={content.code} />
      </div>

      <aside
        className={cn(
          'flex items-start gap-sm rounded-xl border px-md py-md',
          'border-sky-300/80 bg-sky-50 text-sky-900',
          'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-md bg-sky-100 text-sky-700 border border-sky-300/80 dark:bg-sky-900/60 dark:border-sky-700/70 dark:text-sky-200"
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
