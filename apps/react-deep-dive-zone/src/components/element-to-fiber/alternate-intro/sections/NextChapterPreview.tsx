import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { MiniFiberTree } from '../components/FiberPairCard';
import type { AlternateFiberContent } from '../content';
import { ArrowLeftRightIcon, LinkIcon, NetworkIcon } from '../icons';

type Props = { content: AlternateFiberContent['preview'] };

export const NextChapterPreview = ({ content }: Props) => (
  <section id="preview" aria-labelledby="heading-preview" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-sky-300/70 dark:border-sky-700/70',
        'bg-gradient-to-br from-sky-50/70 via-white to-sky-50/30',
        'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-sky-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.1fr)] gap-md items-center">
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description}
        </p>

        {/* Right: current tree ↔ workInProgress tree */}
        <div
          className={cn(
            'grid items-stretch min-w-0',
            'grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)]',
            'gap-sm',
          )}
        >
          <TreeBox variant="current" label={content.currentTreeLabel} />
          <CenterLink label={content.alternateLabel} />
          <TreeBox variant="workInProgress" label={content.workTreeLabel} />
        </div>
      </div>
    </article>
  </section>
);

const TreeBox = ({ variant, label }: { variant: 'current' | 'workInProgress'; label: string }) => {
  const isCurrent = variant === 'current';
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border-2 p-md',
        isCurrent
          ? 'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30'
          : 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/30',
      )}
    >
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5',
          'text-[10px] font-bold uppercase tracking-wider font-mono',
          isCurrent
            ? 'border-emerald-300/80 bg-white text-emerald-700 dark:border-emerald-700/60 dark:bg-[var(--term-bg)] dark:text-emerald-200'
            : 'border-violet-300/80 bg-white text-violet-700 dark:border-violet-700/60 dark:bg-[var(--term-bg)] dark:text-violet-200',
        )}
      >
        {label}
      </span>
      <MiniFiberTree variant={variant} />
    </article>
  );
};

const CenterLink = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1.5',
        'bg-gradient-to-br from-sky-50 to-emerald-50',
        'dark:from-sky-950/40 dark:to-emerald-950/40',
        'border-sky-400 dark:border-sky-500/70',
        'shadow-[0_8px_22px_-10px_rgba(2,132,199,0.55)]',
      )}
    >
      <LinkIcon className="h-3.5 w-3.5 text-sky-700 dark:text-sky-300" />
      <code className="font-mono text-xsm font-extrabold tracking-tight text-sky-800 dark:text-sky-100">
        {label}
      </code>
      <ArrowLeftRightIcon className="h-3.5 w-3.5 text-sky-700 dark:text-sky-300" />
    </span>
  </div>
);
