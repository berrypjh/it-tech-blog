import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { EagerBailoutContent, SameStateExample } from '../content';
import { CodeIcon, LightbulbIcon } from '../icons';

type Props = { content: EagerBailoutContent['sameStateExamples'] };

export const SameStateExamplesSection = ({ content }: Props) => (
  <section id="examples" aria-labelledby="heading-examples" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="examples"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-emerald-50/15 to-sky-50/15',
        'dark:from-[var(--term-bg)] dark:via-emerald-950/10 dark:to-sky-950/10',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
        {content.examples.map((example) => (
          <CodeExampleCard key={example.fileName} example={example} />
        ))}
        <ExplanationCard explanation={content.explanation} />
      </div>
    </article>
  </section>
);

const CodeExampleCard = ({ example }: { example: SameStateExample }) => {
  const t = toneTokens[example.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border bg-slate-950 text-slate-100',
        'border-slate-800',
        'shadow-[0_8px_24px_-12px_rgba(2,6,23,0.55)]',
        'overflow-hidden',
      )}
    >
      <header className="flex items-center justify-between gap-2 border-b border-slate-800/80 bg-slate-900/70 px-md py-2">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-rose-400/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 truncate text-[10px] font-mono text-slate-300">
            {example.fileName}
          </span>
        </div>
        <span
          className={cn(
            'rounded-md border px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          same
        </span>
      </header>

      <pre className="overflow-x-auto px-md py-md font-mono text-xsm sm:text-sm leading-[1.85]">
        <code>
          <span className="block text-slate-100">{example.code}</span>
          <span className="mt-2 block text-emerald-300/90 italic">{example.comment}</span>
        </code>
      </pre>
    </article>
  );
};

const ExplanationCard = ({
  explanation,
}: {
  explanation: EagerBailoutContent['sameStateExamples']['explanation'];
}) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
      'border-sky-200/80 bg-sky-50/60',
      'dark:border-sky-800/70 dark:bg-sky-950/30',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-2xl self-start',
        'bg-amber-100 text-amber-700 border border-amber-200/80',
        'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
      )}
    >
      <LightbulbIcon className="h-5 w-5" />
    </span>
    <h3 className="text-sm sm:text-md font-bold text-sky-800 dark:text-sky-100 break-keep leading-tight">
      {explanation.title}
    </h3>
    <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
      {explanation.body}
    </p>
  </article>
);
