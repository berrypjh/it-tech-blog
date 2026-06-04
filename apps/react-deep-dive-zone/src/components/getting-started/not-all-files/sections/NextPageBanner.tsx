import Link from 'next/link';

import type { NotAllFilesContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { content: NotAllFilesContent['nextStep'] };

export const NextPageBanner = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-next" className="space-y-md">
      <Link
        href={content.href}
        className="group block rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:border-[var(--term-accent)] hover:shadow-[0_2px_0_var(--term-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-[var(--term-accent)] font-bold inline-flex items-center gap-1">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
                aria-hidden="true"
              />
              {content.eyebrow}
            </p>
            <h2
              id="heading-next"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)] break-keep"
            >
              {content.title}
            </h2>
            <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
              {content.description}
            </p>
          </div>

          <span className="inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md bg-[var(--term-accent)] text-[var(--term-bg)] text-xsm font-bold transition-transform group-hover:translate-x-0.5 self-stretch lg:self-auto">
            {content.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </section>
  );
};
