import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { GithubIcon } from '../../repo-overview/icons';
import type { ChangelogContent } from '../content';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  iconByName,
  TagIcon,
} from '../icons';

type Props = { content: ChangelogContent['latest'] };

export const LatestReleaseExample = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-latest" className="space-y-md">
      <SectionHeader
        id="latest"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<TagIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.46fr)_minmax(0,_0.54fr)] gap-md items-stretch">
        <CurrentReleaseCard content={content} />
        <div className="flex flex-col gap-md min-w-0">
          <ChecklistCard title={content.checklistTitle} items={content.checklistItems} />
          <HighlightsCard content={content} />
        </div>
      </div>
    </section>
  );
};

type CurrentProps = { content: ChangelogContent['latest'] };

const CurrentReleaseCard = ({ content }: CurrentProps) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'p-md sm:p-lg',
    )}
  >
    <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
      {content.versionLabel}
    </span>

    <div className="flex items-center justify-between gap-sm">
      <div className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl border-2',
            'border-slate-700 bg-slate-900 text-emerald-300',
          )}
        >
          <BadgeCheckIcon className="h-6 w-6" />
        </span>
        <div className="flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[var(--term-fg)]">
            {content.version}
          </h3>
          <span className="inline-flex items-center gap-1.5 self-start rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-400 text-emerald-950">
            <span aria-hidden="true" className="inline-block w-1 h-1 rounded-full bg-emerald-900" />
            {content.versionBadge}
          </span>
        </div>
      </div>
    </div>

    <span className="text-xsm text-[var(--term-muted)] font-mono">{content.meta}</span>

    <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
      {content.descriptionText}
    </p>

    <ul className="grid grid-cols-3 gap-2 mt-auto">
      {content.stats.map((stat) => {
        const Icon = iconByName[stat.icon];
        return (
          <li
            key={stat.label}
            className={cn(
              'flex flex-col items-center gap-1 rounded-lg border p-2.5 text-center',
              'border-[var(--term-border)] bg-[var(--term-surface)]',
            )}
          >
            <Icon className="h-4 w-4 text-[var(--term-accent)]" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
              {stat.label}
            </span>
            <span className="text-md sm:text-lg font-bold font-mono tabular-nums text-[var(--term-fg)]">
              {stat.value}
            </span>
          </li>
        );
      })}
    </ul>

    <div className="flex flex-col sm:flex-row gap-2">
      <a
        href={content.primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold',
          'bg-violet-600 text-white transition-colors hover:bg-violet-700',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          'dark:bg-violet-500 dark:hover:bg-violet-400 dark:text-slate-950',
        )}
      >
        <GithubIcon className="h-3.5 w-3.5" />
        {content.primaryCta}
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
      <a
        href={content.secondaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold',
          'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
          'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        )}
      >
        {content.secondaryCta}
        <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  </article>
);

type ChecklistProps = { title: string; items: string[] };

const ChecklistCard = ({ title, items }: ChecklistProps) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'p-md sm:p-lg',
    )}
  >
    <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)]">{title}</h3>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
        >
          <CheckCircleIcon
            className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-300"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </article>
);

type HighlightsProps = { content: ChangelogContent['latest'] };

const HighlightsCard = ({ content }: HighlightsProps) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-xl border',
      'border-violet-200/80 bg-violet-50/60 dark:border-violet-800/60 dark:bg-violet-950/30',
      'shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
    )}
  >
    <header className="flex items-center justify-between gap-sm">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            'border-violet-300 bg-violet-100 text-violet-700',
            'dark:border-violet-700/60 dark:bg-violet-950/60 dark:text-violet-200',
          )}
        >
          <TagIcon className="h-4 w-4" />
        </span>
        <div className="flex flex-col">
          <h3 className="text-md font-bold font-mono tracking-tight text-violet-800 dark:text-violet-100">
            {content.highlightsTitle}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-violet-700/80 dark:text-violet-200/80">
            {content.highlightsSubtitle}
          </span>
        </div>
      </div>
    </header>

    <ul className="flex flex-col gap-1.5">
      {content.highlightsItems.map((item) => (
        <li key={item.kind} className="flex items-start gap-2 text-xsm leading-relaxed break-keep">
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0',
              'border-violet-300 bg-violet-100 text-violet-800',
              'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200',
            )}
          >
            {item.kind}
          </span>
          <span className="text-[var(--term-fg)]">{item.text}</span>
        </li>
      ))}
    </ul>

    <span className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)] inline-flex items-center gap-1 text-xsm font-bold text-violet-700 dark:text-violet-200">
      {content.linkText}
    </span>
  </article>
);
