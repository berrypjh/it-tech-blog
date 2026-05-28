import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { VerticalAlternateLink } from '../components/AlternateLink';
import type { AlternateFiberContent } from '../content';
import { HexagonIcon, LightbulbIcon, LinkIcon, MonitorIcon, WorkflowIcon } from '../icons';

type Props = { content: AlternateFiberContent['connection'] };

export const AlternateConnectionDiagram = ({ content }: Props) => (
  <section id="connection" aria-labelledby="heading-connection" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="connection"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LinkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-md items-stretch">
      {/* Central vertical diagram */}
      <article
        className={cn(
          'flex flex-col items-center justify-center gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <DiagramNode variant="current" label={content.currentLabel} />
        <VerticalAlternateLink label={content.centerLabel} />
        <DiagramNode variant="workInProgress" label={content.workLabel} />
      </article>

      {/* Info card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg justify-center',
          'border-sky-300/70 bg-sky-50/70',
          'dark:border-sky-700/70 dark:bg-sky-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm">
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
          <h3 className="text-md sm:text-lg font-extrabold leading-snug text-sky-900 dark:text-sky-100 break-keep">
            {content.infoTitle}
          </h3>
        </header>
        <p className="text-sm sm:text-md leading-relaxed text-sky-900/90 dark:text-sky-100/90 break-keep">
          {content.infoDescription}
        </p>
      </article>
    </div>
  </section>
);

const DiagramNode = ({
  variant,
  label,
}: {
  variant: 'current' | 'workInProgress';
  label: string;
}) => {
  const isCurrent = variant === 'current';
  const Icon = isCurrent ? MonitorIcon : WorkflowIcon;
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-2xl border-2 p-md min-w-[240px]',
        isCurrent
          ? 'border-emerald-400 bg-emerald-50/70 dark:border-emerald-500/70 dark:bg-emerald-950/30'
          : 'border-violet-400 bg-violet-50/70 dark:border-violet-500/70 dark:bg-violet-950/30',
        'shadow-[0_8px_22px_-12px_rgba(0,0,0,0.25)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
          isCurrent
            ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950'
            : 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col">
        <span
          className={cn(
            'text-[10px] uppercase tracking-wider font-mono font-bold',
            isCurrent
              ? 'text-emerald-700/80 dark:text-emerald-300/80'
              : 'text-violet-700/80 dark:text-violet-300/80',
          )}
        >
          {isCurrent ? 'current' : 'workInProgress'}
        </span>
        <code
          className={cn(
            'font-mono text-sm sm:text-md font-extrabold tracking-tight',
            isCurrent
              ? 'text-emerald-800 dark:text-emerald-100'
              : 'text-violet-800 dark:text-violet-100',
          )}
        >
          {label}
        </code>
      </div>
      <span
        aria-hidden="true"
        className={cn(
          'ml-auto inline-flex items-center justify-center w-9 h-9 rounded-full',
          isCurrent
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200'
            : 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
        )}
      >
        <HexagonIcon className="h-4 w-4" />
      </span>
    </article>
  );
};
