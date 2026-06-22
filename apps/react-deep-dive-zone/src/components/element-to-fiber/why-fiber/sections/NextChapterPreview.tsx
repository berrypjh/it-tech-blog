import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { MiniFiberTree } from '../components/MiniFiberTree';
import type { FiberWhyNeededContent } from '../content';
import { LightbulbIcon, NetworkIcon, SparklesIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['preview'] };

export const NextChapterPreview = ({ content }: Props) => (
  <section
    id="preview"
    aria-labelledby="heading-preview"
    className="space-y-md scroll-mt-xl h-full"
  >
    <SectionBadgeHeader
      id="preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-md">
      {/* Question card */}
      <article
        className={cn(
          'flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-sky-300/70 bg-sky-50/70',
          'dark:border-sky-700/70 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
            'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
            'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
          )}
        >
          <LightbulbIcon className="h-6 w-6" />
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep self-center">
          {content.question}
        </p>
      </article>

      {/* Preview card */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1fr)] gap-md items-center">
          <div className="flex flex-col gap-sm min-w-0">
            <span
              className={cn(
                'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5',
                'text-[10px] font-bold uppercase tracking-wider font-mono',
                'border-violet-300/80 bg-violet-50 text-violet-700',
                'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
              )}
            >
              <SparklesIcon className="h-3 w-3" aria-hidden="true" />
              {content.previewLabel}
            </span>
            <h3 className="text-md sm:text-lg font-extrabold tracking-tight text-[var(--term-fg)] break-keep">
              {content.previewTitle}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {content.previewItems.map((item) => (
                <li key={item.id}>
                  <code
                    className={cn(
                      'inline-flex items-center rounded-md border px-2 py-1',
                      'font-mono text-[11px] font-bold',
                      'border-violet-200/80 bg-violet-50 text-violet-700',
                      'dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200',
                    )}
                  >
                    {item.label}
                  </code>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center" aria-hidden="true">
            <MiniFiberTree />
          </div>
        </div>
      </article>
    </div>
  </section>
);
