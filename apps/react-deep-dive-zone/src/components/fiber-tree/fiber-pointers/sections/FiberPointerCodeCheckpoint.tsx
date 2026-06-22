import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberTreePointersContent } from '../content';
import { ExternalLinkIcon, EyeIcon, FileCodeIcon, HelpCircleIcon } from '../icons';

type Props = { content: FiberTreePointersContent['checkpoint'] };

export const FiberPointerCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.info.title}
        </h3>
        <dl className="mt-sm flex flex-col gap-sm">
          <InfoRow icon={<FileCodeIcon className="h-4 w-4" />} label={content.info.filesLabel}>
            <span className="font-mono text-xsm text-[var(--term-fg)] break-all">
              {content.info.file}
            </span>
          </InfoRow>
          <InfoRow icon={<EyeIcon className="h-4 w-4" />} label={content.info.lookForLabel}>
            <span className="font-mono text-xsm text-[var(--term-fg)]">{content.info.lookFor}</span>
          </InfoRow>
          <InfoRow icon={<HelpCircleIcon className="h-4 w-4" />} label={content.info.questionLabel}>
            <span className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.info.question}
            </span>
          </InfoRow>
        </dl>
        <a
          href={content.info.buttonHref}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            'mt-md group inline-flex items-center gap-2 rounded-md px-3 py-2',
            'bg-sky-50 text-sky-700 text-xsm font-bold border border-sky-200/80',
            'transition-colors hover:bg-sky-100',
            'dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/70 dark:hover:bg-sky-950/70',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
          )}
        >
          {content.info.buttonLabel}
          <ExternalLinkIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </article>

      <div className="min-w-0">
        <PointerCodePanel
          code={content.code.content}
          fileName={content.code.fileName}
          language={content.code.language}
        />
      </div>
    </div>
  </section>
);

const InfoRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-sm">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-lg border shrink-0',
        'border-sky-200/80 bg-sky-50 text-sky-700',
        'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-200',
      )}
    >
      {icon}
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
        {label}
      </span>
      {children}
    </div>
  </div>
);

const PointerCodePanel = ({
  code,
  fileName,
  language,
}: {
  code: string;
  fileName: string;
  language: string;
}) => {
  const lines = code.split('\n');
  const lineKind = (line: string): 'child' | 'sibling' | 'return' | 'comment' | undefined => {
    if (line.includes('// Singly Linked List Tree Structure')) return 'comment';
    if (line.includes('child: Fiber')) return 'child';
    if (line.includes('sibling: Fiber')) return 'sibling';
    if (line.includes('return: Fiber')) return 'return';
    return undefined;
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_12px_32px_-16px_rgba(15,23,42,0.6),0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/70 px-md py-2">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
            {fileName}
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
          {language}
        </span>
      </header>

      <pre className="overflow-x-auto py-md font-mono leading-[1.75] text-[12.5px]">
        <code className="block">
          {lines.map((line, i) => {
            const kind = lineKind(line);
            return (
              <div
                key={i}
                className={cn(
                  'flex px-md',
                  kind === 'child' && 'bg-emerald-500/15',
                  kind === 'sibling' && 'bg-violet-500/15',
                  kind === 'return' && 'bg-sky-500/15',
                  kind === 'comment' && 'bg-amber-500/10',
                )}
              >
                <span
                  aria-hidden="true"
                  className="select-none w-7 shrink-0 pr-3 text-right tabular-nums text-slate-600"
                >
                  {i + 1}
                </span>
                <span className="whitespace-pre">
                  {kind === 'comment' ? (
                    <span className="text-emerald-300/90">{line}</span>
                  ) : kind === 'child' ? (
                    <span>
                      <span className="text-emerald-300"> child</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-amber-200">Fiber</span>
                      <span className="text-slate-400"> | </span>
                      <span className="text-fuchsia-300">null</span>
                      <span className="text-slate-400">;</span>
                    </span>
                  ) : kind === 'sibling' ? (
                    <span>
                      <span className="text-violet-300"> sibling</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-amber-200">Fiber</span>
                      <span className="text-slate-400"> | </span>
                      <span className="text-fuchsia-300">null</span>
                      <span className="text-slate-400">;</span>
                    </span>
                  ) : kind === 'return' ? (
                    <span>
                      <span className="text-sky-300"> return</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-amber-200">Fiber</span>
                      <span className="text-slate-400"> | </span>
                      <span className="text-fuchsia-300">null</span>
                      <span className="text-slate-400">;</span>
                    </span>
                  ) : (
                    <span className="text-slate-300">{line}</span>
                  )}
                </span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
};
