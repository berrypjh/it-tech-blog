import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { HostComponentContent } from '../content';
import { FileCodeIcon, MessageCircleIcon } from '../icons';

type Props = { content: HostComponentContent['userCode'] };

export const HostUserCodeExample = ({ content }: Props) => (
  <section id="user-code" aria-labelledby="heading-user-code" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="user-code"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Code card */}
      <article
        className={cn(
          'overflow-hidden rounded-2xl border bg-slate-50 dark:bg-slate-950',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header
          className={cn(
            'flex items-center justify-between gap-2 border-b border-[var(--term-border)] px-md py-2',
            'bg-white/80 dark:bg-slate-950/60',
          )}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
              Profile.jsx
            </code>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            jsx
          </span>
        </header>
        <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-sm leading-[1.7] font-mono text-slate-800 dark:text-slate-100">
          <code className="whitespace-pre">{highlight(content.code)}</code>
        </pre>
      </article>

      {/* Explanation card */}
      <article
        className={cn(
          'flex items-start gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 bg-sky-50/60',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
            'bg-white text-sky-700 border-sky-200/80',
            'dark:bg-slate-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <MessageCircleIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
            props · children
          </span>
          <p className="text-sm sm:text-md leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
            {content.explanation}
          </p>
        </div>
      </article>
    </div>
  </section>
);

const highlight = (code: string): React.ReactNode => {
  // Simple JSX-flavored highlight
  // Split into tokens preserving spaces and special chars
  const tokens = code.split(/(\s+|[<>"'/={}])/);
  return tokens.map((tok, idx) => {
    if (!tok) return null;
    if (/^["'`].*["'`]$/.test(tok)) {
      return (
        <span key={idx} className="text-emerald-700 dark:text-emerald-300">
          {tok}
        </span>
      );
    }
    if (tok === '<' || tok === '</' || tok === '>' || tok === '/>' || tok === '/' || tok === '=') {
      return (
        <span key={idx} className="text-slate-500 dark:text-slate-400">
          {tok}
        </span>
      );
    }
    if (/^[a-z][a-z0-9-]*$/.test(tok)) {
      return (
        <span key={idx} className="text-sky-700 dark:text-sky-300">
          {tok}
        </span>
      );
    }
    if (/^[A-Z][A-Za-z0-9]*$/.test(tok)) {
      return (
        <span key={idx} className="text-amber-700 dark:text-amber-200">
          {tok}
        </span>
      );
    }
    return (
      <span key={idx} className="text-slate-800 dark:text-slate-100">
        {tok}
      </span>
    );
  });
};
