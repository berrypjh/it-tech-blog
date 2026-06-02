import Link from 'next/link';

import { MapDecoration } from '../components/MapDecoration';
import type { UsageVsInternalsContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['nextStep'] };

export const NextPageCTA = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-next" className="space-y-md">
      <Link
        href={content.href}
        className="group block rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:border-[var(--term-accent)] hover:shadow-[0_2px_0_var(--term-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          <MapDecoration />

          <div className="flex min-w-0 flex-col gap-1">
            <p className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--term-accent)]">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--term-accent)]"
              />
              {content.eyebrow}
            </p>
            <h2
              id="heading-next"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)] break-keep"
            >
              {content.title}
            </h2>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.description}
            </p>
          </div>

          <span className="inline-flex items-center justify-center gap-2 self-stretch rounded-md bg-[var(--term-accent)] px-lg py-3 text-xsm font-bold text-[var(--term-bg)] transition-transform motion-safe:group-hover:translate-x-0.5 lg:self-auto">
            {content.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </section>
  );
};
