import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { pointerText } from '../components/pointerStyles';
import type { FiberTreePointersContent } from '../content';
import { HelpCircleIcon, PencilLineIcon } from '../icons';

type Props = { content: FiberTreePointersContent['mission'] };

export const FiberDrawingMission = ({ content }: Props) => (
  <section id="mission" aria-labelledby="heading-mission" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="mission"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<PencilLineIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.35fr)_minmax(0,_0.3fr)_minmax(0,_0.45fr)] gap-md lg:gap-lg items-stretch">
      {/* Problem */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'flex flex-col gap-sm',
        )}
      >
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            'border-amber-300/80 bg-amber-50 text-amber-800',
            'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
          )}
        >
          {content.problemLabel}
        </span>
        <CodePreviewPanel
          code={content.problemJsx}
          caption="problem.jsx"
          language="JSX"
          size="sm"
        />
      </article>

      {/* Question */}
      <article
        className={cn(
          'rounded-3xl border-2 bg-sky-50/60 dark:bg-sky-950/20 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/60',
          'flex flex-col gap-sm justify-center',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200"
        >
          <HelpCircleIcon className="h-5 w-5" />
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.question.prefix}
          <span className={cn('font-mono', pointerText.child)}>{content.question.child}</span>
          {content.question.mid1}
          <span className={cn('font-mono', pointerText.sibling)}>{content.question.sibling}</span>
          {content.question.mid2}
          <span className={cn('font-mono', pointerText.return)}>{content.question.return}</span>
          {content.question.suffix}
        </p>
      </article>

      {/* Drawing area */}
      <article
        className={cn(
          'group rounded-3xl border-2 border-dashed p-md sm:p-lg',
          'border-slate-300/80 bg-slate-50/60 dark:border-slate-700/60 dark:bg-slate-900/40',
          'transition-colors hover:border-sky-400/70 dark:hover:border-sky-500/60',
          'flex items-center justify-center min-h-[180px]',
        )}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white text-slate-500 border border-slate-200/80 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700/70"
          >
            <PencilLineIcon className="h-5 w-5" />
          </span>
          {content.drawingPlaceholder.lines.map((line, i) => (
            <p
              key={i}
              className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep max-w-[36ch]"
            >
              {line}
            </p>
          ))}
        </div>
      </article>
    </div>
  </section>
);
