import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { UpdatePhaseContent } from '../content';
import { ArrowRightIcon, TypeIcon } from '../icons';

type Props = { content: UpdatePhaseContent['textExample'] };

export const TextChangeExampleSection = ({ content }: Props) => (
  <section
    id="text-example"
    aria-labelledby="heading-text-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="text-example"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TypeIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <JsxCard title={content.jsxTitle} code={content.jsxCode} />
        <StateCard title={content.stateTitle} from={content.stateFrom} to={content.stateTo} />
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border p-md',
          'border-teal-200/80 bg-teal-50/60',
          'dark:border-teal-800/70 dark:bg-teal-950/30',
        )}
      >
        <TypeIcon
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-teal-300"
        />
        <p className="text-xsm sm:text-sm leading-relaxed text-teal-900 dark:text-teal-100 break-keep">
          {content.bottomNote}
        </p>
      </aside>
    </article>
  </section>
);

const JsxCard = ({ title, code }: { title: string; code: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
      'border-slate-300/70 dark:border-slate-700/60',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
        {title}
      </h3>
      <span className="inline-flex items-center rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-700 dark:border-slate-700/60 dark:bg-slate-900/40 dark:text-slate-200">
        jsx
      </span>
    </header>
    <pre className="overflow-x-auto rounded-lg border border-slate-200/60 bg-slate-50/50 p-sm text-[11px] sm:text-xsm leading-snug font-mono text-slate-900 dark:border-slate-700/50 dark:bg-slate-900/30 dark:text-slate-100">
      <code>{code}</code>
    </pre>
  </article>
);

const StateCard = ({ title, from, to }: { title: string; from: string; to: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-3 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
      'border-teal-300/80 dark:border-teal-700/70',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
        {title}
      </h3>
      <span className="inline-flex items-center rounded-md border border-teal-200/80 bg-teal-50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200">
        state
      </span>
    </header>
    <div className="flex items-center justify-center gap-3 py-3">
      <StateCircle value={from} variant="from" />
      <ArrowRightIcon aria-hidden="true" className="h-6 w-6 text-teal-500 dark:text-teal-300" />
      <StateCircle value={to} variant="to" />
    </div>
    <p className="text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      count
    </p>
  </article>
);

const StateCircle = ({ value, variant }: { value: string; variant: 'from' | 'to' }) => {
  const isTo = variant === 'to';
  return (
    <span
      aria-label={`count ${variant} ${value}`}
      className={cn(
        'inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 font-mono font-bold text-lg sm:text-xl tabular-nums',
        isTo
          ? 'bg-teal-500 text-white border-teal-600 shadow-[0_2px_0_var(--term-border)] dark:bg-teal-400 dark:text-slate-950 dark:border-teal-300'
          : 'bg-white text-slate-700 border-slate-300 dark:bg-slate-950 dark:text-slate-100 dark:border-slate-700',
      )}
    >
      {value}
    </span>
  );
};
