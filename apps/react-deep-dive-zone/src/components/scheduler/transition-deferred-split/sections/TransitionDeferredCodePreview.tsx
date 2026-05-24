import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TransitionDeferredContent } from '../content';
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  GitBranchIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: TransitionDeferredContent['codePreview'] };

const KEYWORDS = new Set(['if', 'return']);
const FN_NAMES = new Set(['requestTransitionLane', 'claimNextTransitionDeferredLane']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (tok.startsWith('//'))
    return (
      <span key={i} className="text-emerald-400/70 italic">
        {tok}
      </span>
    );
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-pink-300 font-semibold">
        {tok}
      </span>
    );
  if (FN_NAMES.has(tok))
    return (
      <span key={i} className="text-cyan-300 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'transition')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'workInProgressDeferredLane')
    return (
      <span key={i} className="text-violet-300 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'null')
    return (
      <span key={i} className="text-rose-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

const CodeCard = ({
  card,
  letter,
}: {
  card: { title: string; fileLabel: string; code: string; note: string };
  letter: 'A' | 'B';
}) => {
  const lines = card.code.split('\n');
  const accentBg =
    letter === 'A' ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-blue-600 dark:bg-blue-500';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-full text-white font-mono font-bold text-xsm',
              accentBg,
            )}
          >
            {letter}
          </span>
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {card.title}
          </h3>
        </div>
      </header>

      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
        <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-red-400/80" />
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
            <span className="ml-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
              {card.fileLabel}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">ts</span>
        </div>
        <pre className="overflow-x-auto px-3 py-3 text-[12px] sm:text-xsm leading-[1.85] font-mono">
          <code>
            {lines.map((line, i) => {
              const tokens = line.split(/(\s+|[(){}[\];,.<>=!/])/);
              return (
                <div key={i} className="flex">
                  <span
                    aria-hidden="true"
                    className="select-none w-6 shrink-0 pr-2 text-right text-slate-600 tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.note}
      </p>
    </article>
  );
};

export const TransitionDeferredCodePreview = ({ content }: Props) => (
  <section aria-labelledby="heading-code">
    <NumberedSectionHeader
      id="code"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      <CodeCard card={content.cardA} letter="A" />
      <CodeCard card={content.cardB} letter="B" />

      {/* GitHub card */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/40',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:bg-blue-500"
          >
            <GitBranchIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {content.githubCard.title}
          </h3>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.githubCard.body}
        </p>

        <ul className="flex flex-wrap gap-2">
          {['requestTransitionLane', 'claimNextTransitionDeferredLane'].map((api) => (
            <li key={api}>
              <code
                className={cn(
                  'inline-flex items-center rounded-md border px-2 py-1 font-mono',
                  'border-violet-200/80 bg-violet-50 text-violet-800 text-[10px] sm:text-[11px] font-semibold',
                  'dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200',
                )}
              >
                {api}()
              </code>
            </li>
          ))}
        </ul>

        <a
          href={content.githubCard.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'mt-auto group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3',
            'border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] font-bold text-xsm sm:text-sm',
            'shadow-[0_2px_0_var(--term-border)] transition-all',
            'motion-safe:hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          )}
        >
          <SparklesIcon aria-hidden="true" className="h-4 w-4" />
          <span className="break-keep">{content.githubCard.button}</span>
          <ExternalLinkIcon
            aria-hidden="true"
            className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
          />
          <ArrowRightIcon aria-hidden="true" className="hidden h-4 w-4" />
        </a>
      </article>
    </div>
  </section>
);
