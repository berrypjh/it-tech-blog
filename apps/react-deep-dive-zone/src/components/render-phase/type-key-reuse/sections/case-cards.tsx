import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { CompareSide, ResultCard } from '../content';
import { facetFor } from '../facets';
import { AlertTriangleIcon, BoxIcon, CheckCircleIcon } from '../icons';

export const PreviousCard = ({ side }: { side: CompareSide }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border p-md sm:p-lg',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {side.label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <BoxIcon className="h-4 w-4" />
        </span>
      </header>
      <CodeChip t={t}>{side.code}</CodeChip>
      {side.detail && (
        <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {side.detail}
        </p>
      )}
    </article>
  );
};

export const NextCard = ({ side, kind }: { side: CompareSide; kind: 'reuse' | 'replace' }) => {
  const t = facetFor(kind === 'reuse' ? 'teal' : 'rose');
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border p-md sm:p-lg',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {side.label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <BoxIcon className="h-4 w-4" />
        </span>
      </header>
      <CodeChip t={t}>{side.code}</CodeChip>
      {side.detail && (
        <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {side.detail}
        </p>
      )}
    </article>
  );
};

export const ResultCardView = ({ result }: { result: ResultCard }) => {
  const isReuse = result.kind === 'reuse';
  const t = facetFor(isReuse ? 'teal' : 'rose');
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          result
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          {isReuse ? (
            <CheckCircleIcon className="h-5 w-5" />
          ) : (
            <AlertTriangleIcon className="h-5 w-5" />
          )}
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
        {result.title}
      </h3>
      <ul className="flex flex-col gap-1">
        {result.descriptions.map((d) => (
          <li
            key={d}
            className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep"
          >
            {d}
          </li>
        ))}
      </ul>
    </article>
  );
};

const CodeChip = ({ t, children }: { t: { text: string }; children: React.ReactNode }) => (
  <code
    className={cn(
      'self-start inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm font-bold',
      t.text,
    )}
  >
    {children}
  </code>
);
