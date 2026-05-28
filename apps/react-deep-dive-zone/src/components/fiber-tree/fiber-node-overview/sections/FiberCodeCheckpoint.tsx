import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { AnnotatedCodePanel } from '../components/AnnotatedCodePanel';
import type { FiberNodeOverviewContent, InfoRow } from '../content';
import { ExternalLinkIcon, EyeIcon, FileCodeIcon, HelpCircleIcon } from '../icons';

type Props = { content: FiberNodeOverviewContent['checkpoint'] };

const iconMap = {
  file: FileCodeIcon,
  eye: EyeIcon,
  help: HelpCircleIcon,
} as const;

export const FiberCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.55fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
      {/* Info card */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.info.title}
        </h3>
        <ul className="mt-sm flex flex-col gap-sm">
          {content.info.rows.map((row) => (
            <li key={row.label}>
              <InfoRowItem row={row} />
            </li>
          ))}
        </ul>
        <a
          href={content.info.buttonHref}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            'mt-md group inline-flex items-center gap-2 rounded-md px-3 py-2',
            'bg-sky-50 text-sky-700 text-xsm font-bold border border-sky-200/80',
            'transition-colors hover:bg-sky-100',
            'dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/70 dark:hover:bg-sky-950/70',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
          )}
        >
          {content.info.buttonLabel}
          <ExternalLinkIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </article>

      {/* Code panel */}
      <div className="min-w-0">
        <AnnotatedCodePanel
          code={content.code.content}
          language={content.code.language}
          fileName={content.code.fileName}
          annotations={content.code.annotations}
        />
      </div>
    </div>
  </section>
);

const InfoRowItem = ({ row }: { row: InfoRow }) => {
  const Icon = iconMap[row.iconName];
  return (
    <div className="flex items-start gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-lg border shrink-0',
          'border-sky-200/80 bg-sky-50 text-sky-700',
          'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-200',
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
          {row.label}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-fg)] font-mono break-all">
          {row.value}
        </span>
      </div>
    </div>
  );
};
