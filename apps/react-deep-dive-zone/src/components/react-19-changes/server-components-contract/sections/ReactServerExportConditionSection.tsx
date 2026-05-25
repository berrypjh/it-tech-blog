import { cn } from '@it-tech-blog/utils';

import type { ServerComponentsContractContent } from '../content';
import { CheckCircleIcon, PackageIcon, SparklesIcon } from '../icons';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ServerComponentsContractContent['reactServerExport'] };

export const ReactServerExportConditionSection = ({ content }: Props) => (
  <section aria-labelledby="react-server-export-heading" className="flex flex-col">
    <SectionHeader
      id="react-server-export-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_4fr)_minmax(0,_5fr)_minmax(0,_4fr)] lg:gap-md items-stretch">
      {/* LEFT: description card */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-purple-200/80 bg-purple-50/30 dark:border-purple-700/70 dark:bg-purple-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-800/60 dark:bg-purple-950/60 dark:text-purple-200"
          >
            <PackageIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-purple-700 dark:text-purple-200 break-keep">
            {content.descriptionCardTitle}
          </h3>
        </header>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.descriptionCardBody}
        </p>
      </article>

      {/* MIDDLE: package.json code */}
      <div className="flex">
        <CodePanel
          code={content.code.code}
          fileName={content.code.fileName}
          langBadge={content.code.langBadge}
          toneBorder="border-purple-700/70"
        />
      </div>

      {/* RIGHT: explanation */}
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <SparklesIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200 break-keep leading-snug">
            {content.explanationTitle}
          </h3>
        </header>
        <ul className="flex flex-col gap-1.5">
          {content.explanationPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-300"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <p className="mt-1 inline-flex items-center gap-1.5 self-start rounded-md border border-teal-200 bg-white px-2 py-1 dark:border-teal-800/60 dark:bg-[var(--term-bg)] font-mono text-[10px] text-teal-700 dark:text-teal-200">
          <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-teal-500" />
          {content.note}
        </p>
      </article>
    </div>
  </section>
);
