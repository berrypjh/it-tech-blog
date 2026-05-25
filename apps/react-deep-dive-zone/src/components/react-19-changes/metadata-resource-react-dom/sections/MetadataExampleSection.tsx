import { cn } from '@it-tech-blog/utils';

import type { MetadataResourceContent } from '../content';
import { GlobeIcon } from '../icons';

import { CodePanel } from './_CodePanel';
import { DomMock } from './_DomMock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: MetadataResourceContent['example'] };

export const MetadataExampleSection = ({ content }: Props) => (
  <section aria-labelledby="example-heading" className="flex flex-col">
    <SectionHeader
      id="example-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2 lg:gap-lg items-stretch">
      {/* LEFT: code */}
      <div className="flex">
        <CodePanel
          code={content.code.code}
          fileName={content.code.fileName}
          langBadge={content.code.langBadge}
        />
      </div>

      {/* RIGHT: DOM result mock */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-teal-50/30 dark:border-teal-700/70 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <GlobeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200 break-keep">
            {content.domTitle}
          </h3>
        </header>
        <DomMock dom={content.dom} ariaLabel={content.domTitle} />
      </article>
    </div>
  </section>
);
