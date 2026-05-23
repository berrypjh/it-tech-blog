import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberFlagsContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, PencilIcon, ShieldCheckIcon, StarIcon } from '../icons';

type Props = { content: FiberFlagsContent['commitPreview'] };

export const CommitPhasePreview = ({ content }: Props) => (
  <section id="commit" aria-labelledby="heading-commit" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="commit"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ShieldCheckIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <PhaseCard
        tone="sky"
        icon={<PencilIcon className="h-6 w-6" />}
        title={content.renderCard.title}
        subtitle={content.renderCard.subtitle}
        body={content.renderCard.body}
      />

      <div className="flex flex-col items-center justify-center gap-1">
        <span
          aria-hidden="true"
          className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 border-2 border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300 shadow-[0_8px_20px_-8px_rgba(2,132,199,0.45)]"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </span>
        <span
          aria-hidden="true"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 border-2 border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300"
        >
          <ArrowDownIcon className="h-5 w-5" />
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-sky-700 dark:text-sky-300 text-center max-w-[120px] break-keep">
          {content.arrowLabel}
        </span>
      </div>

      <PhaseCard
        tone="emerald"
        icon={<ShieldCheckIcon className="h-6 w-6" />}
        title={content.commitCard.title}
        subtitle={content.commitCard.subtitle}
        body={content.commitCard.body}
      />
    </div>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-sky-300/80 bg-sky-50/70',
        'dark:border-sky-800/60 dark:bg-sky-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
      >
        <StarIcon className="h-5 w-5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

const PhaseCard = ({
  tone,
  icon,
  title,
  subtitle,
  body,
}: {
  tone: 'sky' | 'emerald';
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  body: string;
}) => {
  const cls = {
    sky: {
      border:
        'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
      iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
      title: 'text-sky-900 dark:text-sky-100',
      subtitle:
        'bg-sky-50 text-sky-800 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    },
    emerald: {
      border:
        'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
      iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
      title: 'text-emerald-900 dark:text-emerald-100',
      subtitle:
        'bg-emerald-50 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    },
  }[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cls.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl',
            cls.iconWrap,
          )}
        >
          {icon}
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md font-bold tracking-tight', cls.title)}>{title}</h3>
          <span
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-2 py-0.5 mt-0.5 font-mono text-[10px] font-bold uppercase tracking-wider',
              cls.subtitle,
            )}
          >
            {subtitle}
          </span>
        </div>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </article>
  );
};
