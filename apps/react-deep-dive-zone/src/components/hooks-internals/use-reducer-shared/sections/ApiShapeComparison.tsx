import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { UseReducerSharedContent } from '../content';
import { CodeIcon, SplitIcon } from '../icons';

type Props = { content: UseReducerSharedContent['apiCompare'] };

const KEYWORDS = new Set(['const']);
const FN_NAMES = new Set(['useState', 'useReducer']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (FN_NAMES.has(tok))
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (
    tok === 'setCount' ||
    tok === 'count' ||
    tok === 'prev' ||
    tok === 'dispatch' ||
    tok === 'reducer' ||
    tok === 'value'
  )
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'increment' || tok === 'decrement' || tok === 'type')
    return (
      <span key={i} className="text-pink-300">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (/^\d+$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-300">
      {tok}
    </span>
  );
};

const renderLine = (line: string, key: number) => {
  const tokens = line.split(/(\s+|[(){}[\];:,.=>])/);
  return (
    <div key={key} className="whitespace-pre">
      {tokens.map(renderToken)}
    </div>
  );
};

type SideProps = {
  title: string;
  code: string;
  examples: string[];
  accent: 'sky' | 'teal';
};

const sideAccent: Record<'sky' | 'teal', { border: string; text: string }> = {
  sky: {
    border:
      'border-sky-300/80 dark:border-sky-700/70 hover:border-sky-400 dark:hover:border-sky-600',
    text: 'text-sky-700 dark:text-sky-200',
  },
  teal: {
    border:
      'border-teal-300/80 dark:border-teal-700/70 hover:border-teal-400 dark:hover:border-teal-600',
    text: 'text-teal-700 dark:text-teal-200',
  },
};

const SideCard = ({ title, code, examples, accent }: SideProps) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-all',
      'motion-safe:hover:-translate-y-0.5',
      sideAccent[accent].border,
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
          accent === 'sky'
            ? 'border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200'
            : 'border-teal-200/80 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200',
        )}
      >
        <CodeIcon className="h-4 w-4" />
      </span>
      <h3 className={cn('text-sm sm:text-md font-bold break-keep', sideAccent[accent].text)}>
        {title}
      </h3>
    </header>

    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
      <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono">
        <code>{renderLine(code, 0)}</code>
      </pre>
    </div>

    <ul className="flex flex-col gap-1.5">
      {examples.map((ex, i) => (
        <li
          key={i}
          className="overflow-hidden rounded-lg border border-[var(--term-border)] bg-[var(--term-border)]/15"
        >
          <pre className="overflow-x-auto px-2.5 py-1.5 text-[11px] font-mono">
            <code>{renderLine(ex, 0)}</code>
          </pre>
        </li>
      ))}
    </ul>
  </article>
);

export const ApiShapeComparison = ({ content }: Props) => (
  <section
    aria-labelledby="heading-api-compare"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="api-compare"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md lg:gap-lg items-stretch">
      <SideCard
        title={content.leftTitle}
        code={content.leftCode}
        examples={content.leftExamples}
        accent="sky"
      />

      <div aria-hidden="true" className="flex items-center justify-center">
        <span
          className={cn(
            'inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full',
            'bg-slate-900 text-white font-mono text-sm sm:text-md font-bold tracking-wider',
            'border-4 border-[var(--term-bg)] shadow-[0_3px_0_var(--term-border)]',
            'dark:bg-slate-200 dark:text-slate-900',
          )}
        >
          {content.vsBadge}
        </span>
      </div>

      <SideCard
        title={content.rightTitle}
        code={content.rightCode}
        examples={content.rightExamples}
        accent="teal"
      />
    </div>

    <aside
      className={cn(
        'mt-md rounded-2xl border-2 p-md',
        'border-blue-300/70 bg-blue-50/60 dark:border-blue-800/60 dark:bg-blue-950/30',
      )}
    >
      <p className="text-xsm sm:text-sm leading-relaxed text-blue-900 dark:text-blue-100 break-keep">
        {content.emphasis}
      </p>
    </aside>
  </section>
);
