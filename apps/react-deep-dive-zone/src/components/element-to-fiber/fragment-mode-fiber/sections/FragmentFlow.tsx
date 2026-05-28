import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../shared/CodePanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { FlowSteps } from '../components/FlowSteps';
import type { FragmentModeFiberContent } from '../content';
import { GroupIcon, LightbulbIcon } from '../icons';

type Props = { content: FragmentModeFiberContent['fragmentFlow'] };

export const FragmentFlow = ({ content }: Props) => (
  <section
    id="fragment-flow"
    aria-labelledby="heading-fragment-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="fragment-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GroupIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-md items-stretch">
      {/* JSX */}
      <article className="flex flex-col gap-2 min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2.5 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            'border-violet-300/80 bg-violet-50 text-violet-700',
            'dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-200',
          )}
        >
          {content.jsxLabel}
        </span>
        <CodePanel code={content.jsxCode} caption="fragment.jsx" language="JSX" showWindowDots />
      </article>

      {/* Flow steps */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-violet-700/80 dark:text-violet-300/80">
          fragment flow
        </span>
        <FlowSteps tone="purple" steps={content.steps} />
      </article>

      {/* Info */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg justify-center',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/60 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
            'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
            'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
          )}
        >
          <LightbulbIcon className="h-6 w-6" />
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
          {content.infoBody}
        </p>
      </article>
    </div>
  </section>
);
