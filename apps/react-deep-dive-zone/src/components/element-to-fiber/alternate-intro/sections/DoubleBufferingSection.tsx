import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { AlternateFiberContent } from '../content';
import {
  ArrowLeftRightIcon,
  ArrowUpDownIcon,
  FlaskIcon,
  LayersIcon,
  MonitorIcon,
  RefreshIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: AlternateFiberContent['doubleBuffering'] };

export const DoubleBufferingSection = ({ content }: Props) => (
  <section
    id="double-buffering"
    aria-labelledby="heading-double-buffering"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="double-buffering"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'grid items-stretch min-w-0',
        'grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)]',
        'gap-md',
      )}
    >
      <Card
        variant="current"
        icon={<MonitorIcon className="h-6 w-6" />}
        title={content.leftTitle}
        body={content.leftBody}
      />

      {/* center: 준비 중 */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center justify-center w-14 h-14 rounded-full',
              'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
              'shadow-[0_10px_28px_-10px_rgba(2,132,199,0.55)]',
            )}
          >
            <RefreshIcon className="h-6 w-6" />
          </span>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
              'text-[11px] font-bold uppercase tracking-wider font-mono',
              'border-sky-300/80 bg-sky-50 text-sky-700',
              'dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
            )}
          >
            <FlaskIcon className="h-3 w-3" />
            {content.centerLabel}
          </span>
          <span className="text-sky-600 dark:text-sky-300">
            <span className="contents">
              <ArrowUpDownIcon className="h-4 w-4 lg:hidden" />
              <ArrowLeftRightIcon className="h-4 w-4 hidden lg:block" />
            </span>
          </span>
        </div>
      </div>

      <Card
        variant="workInProgress"
        icon={<WorkflowIcon className="h-6 w-6" />}
        title={content.rightTitle}
        body={content.rightBody}
      />
    </div>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'border-sky-300/70 bg-sky-50/70',
        'dark:border-sky-700/70 dark:bg-sky-950/30',
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
        <LayersIcon className="h-6 w-6" />
      </span>
      <p className="text-sm sm:text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep self-center">
        {content.bottomMessage}
      </p>
    </div>
  </section>
);

const Card = ({
  variant,
  icon,
  title,
  body,
}: {
  variant: 'current' | 'workInProgress';
  icon: React.ReactNode;
  title: string;
  body: string;
}) => {
  const isCurrent = variant === 'current';
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg min-w-0',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        isCurrent
          ? 'border-emerald-300/80 dark:border-emerald-700/70'
          : 'border-violet-300/80 dark:border-violet-700/70',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
            isCurrent
              ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950'
              : 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
          )}
        >
          {icon}
        </span>
        <h3
          className={cn(
            'text-sm sm:text-md font-extrabold tracking-tight break-keep',
            isCurrent
              ? 'text-emerald-800 dark:text-emerald-100'
              : 'text-violet-800 dark:text-violet-100',
          )}
        >
          {title}
        </h3>
      </header>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">{body}</p>
    </article>
  );
};
