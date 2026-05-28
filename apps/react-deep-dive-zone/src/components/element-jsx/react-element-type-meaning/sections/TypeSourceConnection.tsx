import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../shared/CodePanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementTypeMeaningContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, CodeIcon, FileTextIcon } from '../icons';

type Props = { content: ReactElementTypeMeaningContent['source'] };

export const TypeSourceConnection = ({ content }: Props) => (
  <section aria-labelledby="heading-source" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="source"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-stretch">
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200"
        >
          <CodeIcon className="h-5 w-5" />
        </span>
        <h3 className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.descriptionTitle}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.descriptionBody}
        </p>

        <ul className="flex flex-col gap-2 pt-sm border-t border-dashed border-[var(--term-border)]">
          {content.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5"
              >
                <CheckCircleIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{bullet}</p>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-sm pt-sm border-t border-dashed border-[var(--term-border)]">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-7 h-7 rounded-lg border border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200"
          >
            <FileTextIcon className="h-3.5 w-3.5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
              {content.fileLabel}
            </span>
            <code className="font-mono text-xsm font-bold text-[var(--term-fg)]">
              {content.fileName}
            </code>
          </div>
        </div>
      </article>

      <div className="min-w-0">
        <CodePanel code={content.code} language="JS" showWindowDots caption={content.fileName} />
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-sm justify-center pt-sm">
      <a
        href={content.primaryHref}
        className={cn(
          'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
          'bg-sky-600 text-white text-xsm font-bold tracking-tight',
          'transition-colors hover:bg-sky-700',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
        )}
      >
        {content.primaryCta}
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
      <a
        href={content.secondaryHref}
        className={cn(
          'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
          'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
          'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
        )}
      >
        {content.secondaryCta}
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  </section>
);
