import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent } from '../content';
import {
  ChevronRightIcon,
  CodeIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  InfoIcon,
  RepeatIcon,
  RocketIcon,
} from '../icons';

type Props = { content: AdvancedWrapupContent['realCode'] };

const KEYWORDS = new Set(['export', 'function', 'return', 'if', 'const', 'let']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (
    tok === 'queueIfContinuousEvent' ||
    tok === 'replayUnblockedEvents' ||
    tok === 'extractEvents' ||
    tok === 'startHostTransition'
  )
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (
    tok === 'blockedOn' ||
    tok === 'domEventName' ||
    tok === 'eventSystemFlags' ||
    tok === 'targetContainer' ||
    tok === 'nativeEvent' ||
    tok === 'dispatchQueue' ||
    tok === 'maybeTargetInst' ||
    tok === 'nativeEventTarget'
  )
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

type CardProps = {
  fileLabel: string;
  caption: string;
  code: string;
  description: string;
  buttonLabel: string;
  href: string;
  accent: 'sky' | 'emerald';
};

const CodeCard = ({
  fileLabel,
  caption,
  code,
  description,
  buttonLabel,
  href,
  accent,
}: CardProps) => {
  const lines = code.split('\n');
  const isReplay = accent === 'sky';
  return (
    <article className="flex flex-col gap-md">
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
        <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-[10px] font-mono text-slate-500">{fileLabel}</span>
          </div>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold',
              isReplay ? 'bg-sky-500/20 text-sky-300' : 'bg-emerald-500/20 text-emerald-300',
            )}
          >
            {isReplay ? <RepeatIcon className="h-3 w-3" /> : <RocketIcon className="h-3 w-3" />}
            {caption}
          </span>
        </div>
        <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.85] font-mono">
          <code>
            {lines.map((line, i) => {
              const tokens = line.split(/(\s+|[(){}[\];,.])/);
              const isComment = /^\s*\/\//.test(line);
              return (
                <div key={i} className="flex">
                  <span
                    aria-hidden="true"
                    className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                  >
                    {i + 1}
                  </span>
                  {isComment ? (
                    <span className="text-slate-500 italic whitespace-pre">{line}</span>
                  ) : (
                    <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                  )}
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
              isReplay
                ? 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200'
                : 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200',
            )}
          >
            <InfoIcon className="h-4 w-4" />
          </span>
          <span
            className={cn(
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              isReplay
                ? 'text-sky-700 dark:text-sky-300'
                : 'text-emerald-700 dark:text-emerald-300',
            )}
          >
            {caption}
          </span>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {description}
        </p>
      </article>

      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(
          'group flex items-center gap-3 rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'transition-all hover:-translate-y-0.5 hover:border-blue-300/70 dark:hover:border-blue-700/70',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--term-border)] bg-white text-[var(--term-fg)] dark:bg-slate-950/50"
        >
          <GitBranchIcon className="h-4 w-4" />
        </span>
        <span className="flex flex-col min-w-0 flex-1">
          <span className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
            {buttonLabel}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            GitHub <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
          </span>
        </span>
        <ChevronRightIcon
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-[var(--term-muted)] transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
        />
      </a>
    </article>
  );
};

export const RealCodePreview = ({ content }: Props) => (
  <section aria-labelledby="heading-real-code">
    <NumberedSectionHeader
      id="real-code"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-start">
      <CodeCard
        fileLabel={content.cardA.fileLabel}
        caption={content.cardA.caption}
        code={content.cardA.code}
        description={content.cardA.description}
        buttonLabel={content.cardA.buttonLabel}
        href={content.cardA.href}
        accent="sky"
      />
      <CodeCard
        fileLabel={content.cardB.fileLabel}
        caption={content.cardB.caption}
        code={content.cardB.code}
        description={content.cardB.description}
        buttonLabel={content.cardB.buttonLabel}
        href={content.cardB.href}
        accent="emerald"
      />
    </div>
  </section>
);
