import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { HostComponentFiberContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, BracesIcon, CheckCircleIcon } from '../icons';

type Props = { content: HostComponentFiberContent['example'] };

export const ExampleJsxTypeCheck = ({ content }: Props) => (
  <section id="example" aria-labelledby="heading-example" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="example"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BracesIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'grid items-stretch min-w-0',
        'grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)]',
        'gap-sm lg:gap-md',
      )}
    >
      {/* JSX panel */}
      <article className="flex flex-col gap-2 min-w-0">
        <Label>{content.jsxLabel}</Label>
        <CodePreviewPanel
          code={content.jsxCode}
          caption="button.jsx"
          language="JSX"
          showWindowDots
        />
      </article>

      <Connector />

      {/* Element object panel */}
      <article className="flex flex-col gap-2 min-w-0">
        <Label>{content.elementLabel}</Label>
        <CodePreviewPanel
          code={content.elementCode}
          caption="element"
          language="JS"
          showWindowDots
        />
      </article>

      <Connector />

      {/* Key point card */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg justify-center',
          'border-emerald-300/80 bg-emerald-50/60',
          'dark:border-emerald-700/70 dark:bg-emerald-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-full',
            'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
            'shadow-[0_6px_18px_-6px_rgba(16,185,129,0.55)]',
          )}
        >
          <CheckCircleIcon className="h-5 w-5" />
        </span>
        <code className="font-mono text-sm sm:text-md font-bold text-emerald-900 dark:text-emerald-100 break-all">
          {content.keyPointTitle}
        </code>
        <p className="text-xsm sm:text-sm leading-relaxed text-emerald-900/90 dark:text-emerald-100/90 break-keep font-bold">
          {content.keyPointDescription}
        </p>
      </article>
    </div>
  </section>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <span
    className={cn(
      'inline-flex w-fit items-center rounded-full border px-2.5 py-0.5',
      'text-[10px] font-bold uppercase tracking-wider font-mono',
      'border-slate-300/80 bg-slate-100 text-slate-700 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-200',
    )}
  >
    {children}
  </span>
);

const Connector = () => (
  <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300">
      <span className="contents">
        <ArrowDownIcon className="h-4 w-4 lg:hidden" />
        <ArrowRightIcon className="h-4 w-4 hidden lg:block" />
      </span>
    </span>
  </div>
);
