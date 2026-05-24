import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { HooksEntryFlowContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['cta'] };

export const NextPageCTA = ({ content }: Props) => (
  <section aria-label="next-page" className="flex flex-col items-center gap-md text-center">
    <Link
      href={content.href}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4',
        'w-full sm:w-auto sm:min-w-[360px]',
        'bg-blue-600 text-white font-bold text-sm sm:text-md',
        'shadow-[0_4px_0_rgba(29,78,216,0.35)] hover:shadow-[0_6px_0_rgba(29,78,216,0.35)]',
        'transition-all motion-safe:hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        'dark:bg-blue-500 dark:shadow-[0_4px_0_rgba(37,99,235,0.35)] dark:hover:shadow-[0_6px_0_rgba(37,99,235,0.35)]',
      )}
    >
      <span className="break-keep">{content.label}</span>
      <ArrowRightIcon
        aria-hidden="true"
        className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
      />
    </Link>

    <p className="max-w-[60ch] text-xsm sm:text-sm text-[var(--term-muted)] break-keep">
      {content.description}
    </p>
  </section>
);
