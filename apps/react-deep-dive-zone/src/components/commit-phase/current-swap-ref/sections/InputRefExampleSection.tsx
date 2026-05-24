import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { CodePreviewPanel } from '../../../start/_shared/CodePreviewPanel';
import type { RootCurrentRefContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, BoxIcon, LightbulbIcon, LinkIcon } from '../icons';

type Props = { content: RootCurrentRefContent['inputRef'] };

export const InputRefExampleSection = ({ content }: Props) => (
  <section
    id="input-ref-example"
    aria-labelledby="heading-input-ref-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="input-ref-example"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BoxIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
      <CodeCard title={content.codeTitle} code={content.code} />
      <ExplanationCard title={content.explanationTitle} text={content.explanation} />
      <DomCard title={content.domTitle} code={content.domCode} label={content.domLabel} />
    </div>
  </section>
);

const CodeCard = ({ title, code }: { title: string; code: string }) => (
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
        tsx
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={code} language="tsx" />
    </div>
  </article>
);

const ExplanationCard = ({ title, text }: { title: string; text: string }) => (
  <article
    className={cn(
      'flex h-full flex-col items-center justify-center gap-md rounded-2xl border-2 p-md sm:p-lg text-center',
      'border-sky-200/80 bg-sky-50/60',
      'dark:border-sky-800/70 dark:bg-sky-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2',
        'bg-sky-100 text-sky-700 border-sky-200/80',
        'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
      )}
    >
      <LightbulbIcon className="h-6 w-6" />
    </span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300 font-bold">
      {title}
    </span>
    <p className="text-sm sm:text-md leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
      {text}
    </p>
  </article>
);

const DomCard = ({ title, code, label }: { title: string; code: string; label: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
      'border-teal-300/80 dark:border-teal-700/70',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
        {title}
      </h3>
      <span className="inline-flex items-center rounded-md border border-teal-200/80 bg-teal-50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200">
        host
      </span>
    </header>
    <pre className="overflow-x-auto rounded-lg border border-teal-200/60 bg-teal-50/50 p-sm text-xsm leading-snug font-mono text-teal-900 dark:border-teal-800/50 dark:bg-teal-950/25 dark:text-teal-100">
      <code>{code}</code>
    </pre>
    <div className="flex flex-col items-center gap-1 mt-auto pt-2">
      <span aria-hidden="true" className="text-teal-500 dark:text-teal-300">
        <span className="hidden md:inline-block">
          <ArrowDownIcon className="h-5 w-5" />
        </span>
        <span className="md:hidden">
          <ArrowRightIcon className="h-5 w-5" />
        </span>
      </span>
      <code
        className={cn(
          'inline-flex items-center gap-1.5 rounded-md border-2 px-3 py-1 text-xsm font-mono font-bold',
          'border-teal-300/80 bg-teal-100 text-teal-800',
          'dark:border-teal-700/70 dark:bg-teal-950/60 dark:text-teal-100',
        )}
      >
        <LinkIcon aria-hidden="true" className="h-3.5 w-3.5" />
        {label}
      </code>
    </div>
  </article>
);
