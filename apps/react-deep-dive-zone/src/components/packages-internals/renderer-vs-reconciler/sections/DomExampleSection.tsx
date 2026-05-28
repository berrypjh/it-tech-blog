import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
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
            'border-teal-300/80 bg-teal-50/60',
            'dark:border-teal-800/70 dark:bg-teal-950/30',
            'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="teal" size="md">
              <rvrIcon.cube className="h-5 w-5" aria-hidden="true" />
            </ToneIconBox>
            <h3 className="text-lg font-bold font-mono tracking-tight text-teal-700 dark:text-teal-300">
              {content.reconciler.title}
            </h3>
          </header>

          <blockquote
            className={cn(
              'rounded-lg border px-3 py-2 text-md font-bold italic',
              'border-dashed border-teal-300/80 bg-[var(--term-bg)] text-teal-900',
              'dark:border-teal-800/70 dark:text-teal-100',
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
                <span
                  aria-hidden="true"
                  className="text-teal-600 dark:text-teal-300 shrink-0 mt-0.5"
                >
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
            'border-violet-300/80 bg-violet-50/60',
            'dark:border-violet-800/70 dark:bg-violet-950/30',
            'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="violet" size="md">
              <rvrIcon.monitor className="h-5 w-5" aria-hidden="true" />
            </ToneIconBox>
            <div className="flex flex-col min-w-0">
              <h3 className="text-lg font-bold font-mono tracking-tight text-violet-700 dark:text-violet-300">
                {content.renderer.title}
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
                {content.renderer.subtitle}
              </span>
            </div>
          </header>

          <pre
            className={cn(
              'overflow-x-auto rounded-lg border p-md text-[11.5px] sm:text-[12px] leading-relaxed font-mono',
              'border-slate-700 bg-slate-950 text-slate-100',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <code>{content.renderer.code}</code>
          </pre>

          <ul className="flex flex-col gap-1.5">
            {content.renderer.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="text-violet-600 dark:text-violet-300 shrink-0 mt-0.5"
                >
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
          'border-sky-300/80 bg-sky-50 text-sky-900',
          'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
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
