import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionHeader } from '../../../shared/SectionHeader';
import type { RvrContent } from '../content';
import { CheckCircleIcon, rvrIcon, StarIcon } from '../icons';

type Props = { content: RvrContent['domExample']; sectionId: string };

export const DomExampleSection = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-dom-example"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="dom-example"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<rvrIcon.workflow className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-md">
        {/* reconciler card */}
        <article
          className={cn(
            'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-surface)] hover:border-[var(--term-accent)]',
            'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-11 h-11 rounded-md border',
                'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]',
              )}
            >
              <rvrIcon.cube className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-bold font-mono tracking-tight text-[var(--term-accent)]">
              {content.reconciler.title}
            </h3>
          </header>

          <blockquote
            className={cn(
              'rounded-lg border px-3 py-2 text-md font-bold italic',
              'border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
            )}
          >
            {content.reconciler.headline}
          </blockquote>

          <ul className="flex flex-col gap-1.5">
            {content.reconciler.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <span aria-hidden="true" className="text-[var(--term-accent)] shrink-0 mt-0.5">
                  <CheckCircleIcon className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* center arrow */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center text-[var(--term-accent)]"
        >
          <CenterArrow />
        </div>

        {/* DOM renderer card */}
        <article
          className={cn(
            'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-surface)] hover:border-[var(--term-accent)]',
            'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-11 h-11 rounded-md border',
                'bg-[var(--term-surface)] border-[var(--term-border)] text-sky-600 dark:text-sky-300',
              )}
            >
              <rvrIcon.monitor className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col min-w-0">
              <h3 className="text-lg font-bold font-mono tracking-tight text-sky-600 dark:text-sky-300">
                {content.renderer.title}
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
                {content.renderer.subtitle}
              </span>
            </div>
          </header>

          <CodePreviewPanel code={content.renderer.code} language="js" />

          <ul className="flex flex-col gap-1.5">
            {content.renderer.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <span aria-hidden="true" className="text-sky-600 dark:text-sky-300 shrink-0 mt-0.5">
                  <CheckCircleIcon className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-sky-600 dark:text-sky-300">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

const CenterArrow = () => (
  <>
    <svg
      viewBox="0 0 64 24"
      className="hidden md:block w-12 h-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M 0 10 H 48 V 4 L 64 12 L 48 20 V 14 H 0 Z" />
    </svg>
    <svg viewBox="0 0 24 64" className="md:hidden w-6 h-12" fill="currentColor" aria-hidden="true">
      <path d="M 10 0 V 48 H 4 L 12 64 L 20 48 H 14 V 0 Z" />
    </svg>
  </>
);
