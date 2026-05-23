import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberIdentityFieldsContent } from '../content';
import { ArrowRightIcon, HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['quiz'] };

export const IdentityMiniQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        <div className="flex flex-col gap-md">
          {/* Q */}
          <div className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0',
                'bg-sky-100 text-sky-700 font-mono font-bold',
                'dark:bg-sky-950/60 dark:text-sky-200',
              )}
            >
              Q.
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
                {content.questionLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.question}
              </p>
            </div>
          </div>

          {/* A */}
          <div
            className={cn(
              'flex items-start gap-sm rounded-2xl border-2 p-md',
              'border-emerald-300/70 bg-emerald-50/70',
              'dark:border-emerald-700/70 dark:bg-emerald-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0',
                'bg-emerald-600 text-white font-mono font-bold',
                'dark:bg-emerald-500 dark:text-slate-950',
              )}
            >
              A.
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-200">
                {content.answerLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
                {content.answer}
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border px-sm py-2',
              'border-amber-200/80 bg-amber-50/60',
              'dark:border-amber-800/60 dark:bg-amber-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 shrink-0"
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider font-mono text-amber-700/80 dark:text-amber-300/80">
                {content.explanationLabel}
              </span>
              <p className="text-xsm leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
                {content.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Diagram */}
        <ElementVsFiberDiagram diagram={content.diagram} />
      </div>
    </article>
  </section>
);

const ElementVsFiberDiagram = ({
  diagram,
}: {
  diagram: FiberIdentityFieldsContent['quiz']['diagram'];
}) => (
  <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-stretch min-w-0">
    <article
      className={cn(
        'flex flex-col gap-1 rounded-2xl border-2 p-sm',
        'border-slate-200/80 dark:border-slate-800/60 bg-slate-50/60 dark:bg-slate-900/40',
      )}
    >
      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
        {diagram.elementLabel}
      </span>
      <code className="font-mono text-[11.5px] text-amber-700 dark:text-amber-300 break-all">
        {diagram.elementType}
      </code>
    </article>

    <span
      aria-hidden="true"
      className="self-center inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300"
    >
      <ArrowRightIcon className="h-4 w-4" />
    </span>

    <article
      className={cn(
        'flex flex-col gap-1 rounded-2xl border-2 p-sm',
        'border-sky-200/80 dark:border-sky-800/60 bg-sky-50/60 dark:bg-sky-950/30',
      )}
    >
      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-sky-700 dark:text-sky-300">
        {diagram.fiberLabel}
      </span>
      <code className="font-mono text-[11.5px] text-violet-700 dark:text-violet-300 break-all">
        {diagram.fiberElementType}
      </code>
      <code className="font-mono text-[11.5px] text-amber-700 dark:text-amber-300 break-all">
        {diagram.fiberType}
      </code>
    </article>
  </div>
);
