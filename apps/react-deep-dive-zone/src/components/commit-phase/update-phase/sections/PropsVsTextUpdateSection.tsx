import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { DiffRow, UpdatePhaseContent } from '../content';
import { LightbulbIcon, LockIcon, SparklesIcon, TypeIcon } from '../icons';

type Props = { content: UpdatePhaseContent['propsVsText'] };

export const PropsVsTextUpdateSection = ({ content }: Props) => (
  <section
    id="props-vs-text"
    aria-labelledby="heading-props-vs-text"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="props-vs-text"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
      <DiffCard
        title={content.propsCard.title}
        description={content.propsCard.description}
        rows={content.propsCard.rows}
        variant="props"
      />
      <DiffCard
        title={content.textCard.title}
        description={content.textCard.description}
        rows={content.textCard.rows}
        variant="text"
      />
      <PointCard title={content.pointTitle} text={content.pointText} />
    </div>
  </section>
);

const DiffCard = ({
  title,
  description,
  rows,
  variant,
}: {
  title: string;
  description: string;
  rows: DiffRow[];
  variant: 'props' | 'text';
}) => {
  const isProps = variant === 'props';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        isProps
          ? 'border-sky-300/80 dark:border-sky-700/70'
          : 'border-teal-300/80 dark:border-teal-700/70',
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        isProps
          ? 'hover:border-sky-400/80 dark:hover:border-sky-500/70'
          : 'hover:border-teal-400/80 dark:hover:border-teal-500/70',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            isProps
              ? 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60'
              : 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
          )}
        >
          {isProps ? <LockIcon className="h-5 w-5" /> : <TypeIcon className="h-5 w-5" />}
        </span>
        <code
          className={cn(
            'text-xsm sm:text-sm font-bold font-mono break-all',
            isProps ? 'text-sky-800 dark:text-sky-100' : 'text-teal-800 dark:text-teal-100',
          )}
        >
          {title}
        </code>
      </header>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {description}
      </p>

      <ul className="flex flex-col gap-2 mt-auto">
        {rows.map((row) => (
          <li
            key={row.label}
            className={cn(
              'flex flex-col gap-0.5 rounded-xl border p-sm',
              isProps
                ? 'border-sky-200/70 bg-sky-50/40 dark:border-sky-800/60 dark:bg-sky-950/15'
                : 'border-teal-200/70 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/15',
            )}
          >
            <span
              className={cn(
                'text-[10px] font-mono uppercase tracking-wider font-bold',
                isProps ? 'text-sky-700 dark:text-sky-300' : 'text-teal-700 dark:text-teal-300',
              )}
            >
              {row.label}
            </span>
            <code className="text-xsm font-mono text-[var(--term-fg)] break-all">{row.value}</code>
          </li>
        ))}
      </ul>
    </article>
  );
};

const PointCard = ({ title, text }: { title: string; text: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
      'border-amber-200/80 bg-amber-50/70',
      'dark:border-amber-800/70 dark:bg-amber-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          'bg-amber-100 text-amber-700 border-amber-200/80',
          'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
        )}
      >
        <LightbulbIcon className="h-5 w-5" />
      </span>
      <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-amber-800 dark:text-amber-200">
        {title}
      </h3>
    </header>

    <p className="text-sm sm:text-md leading-relaxed text-amber-900 dark:text-amber-100 font-bold break-keep">
      {text}
    </p>
  </article>
);
