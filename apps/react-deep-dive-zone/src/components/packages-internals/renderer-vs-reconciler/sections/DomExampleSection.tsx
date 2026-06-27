import { cn } from '@it-tech-blog/utils';

import { ArrowRight } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RvrContent } from '../content';
import { CheckCircleIcon, rvrIcon, StarIcon } from '../icons';

type Props = { content: RvrContent['domExample'] };

export const DomExampleSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-dom-example" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="dom-example"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<rvrIcon.workflow className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        {/* reconciler card */}
        <article
          className={cn(
            'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
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
          <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
        </div>

        {/* DOM renderer card */}
        <article
          className={cn(
            'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-11 h-11 rounded-md border',
                'bg-[var(--term-surface)] border-[var(--term-border)]',
                toneTokens.sky.text,
              )}
            >
              <rvrIcon.monitor className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col min-w-0">
              <h3 className={cn('text-lg font-bold font-mono tracking-tight', toneTokens.sky.text)}>
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
                <span aria-hidden="true" className={cn('shrink-0 mt-0.5', toneTokens.sky.text)}>
                  <CheckCircleIcon className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <SectionNote icon={<StarIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};
