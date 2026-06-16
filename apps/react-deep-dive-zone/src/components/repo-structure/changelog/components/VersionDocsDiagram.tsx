import { cn } from '@it-tech-blog/utils';

import { GithubIcon } from '../../repo-overview/icons';
import type { ChangelogContent } from '../content';
import { BookOpenIcon, FileTextIcon, TagIcon } from '../icons';

type Props = { content: ChangelogContent['hero'] };

/**
 * Hero 우측: version badge + Releases (purple) / CHANGELOG (teal) 카드.
 */
export const VersionDocsDiagram = ({ content }: Props) => {
  return (
    <div
      className={cn(
        '@container relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_3px_0_var(--term-border)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      <div className="relative flex flex-col items-center gap-md">
        {/* Version badge */}
        <VersionBadge version={content.version} badge={content.versionBadge} />

        {/* 두 문서 카드 */}
        <div className="grid grid-cols-1 @lg:grid-cols-2 gap-md w-full">
          <DocCard
            title={content.releasesCard.title}
            description={content.releasesCard.description}
            items={content.releasesCard.items}
            variant="releases"
          />
          <DocCard
            title={content.changelogCard.title}
            description={content.changelogCard.description}
            items={content.changelogCard.items}
            variant="changelog"
          />
        </div>
      </div>
    </div>
  );
};

type VersionProps = { version: string; badge: string };

const VersionBadge = ({ version, badge }: VersionProps) => (
  <span
    className={cn(
      'inline-flex items-center gap-2 rounded-full border px-4 py-1.5',
      'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      'shadow-[0_3px_0_var(--term-border)]',
    )}
  >
    <TagIcon className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300" aria-hidden="true" />
    <span className="text-sm font-bold font-mono tracking-tight">{version}</span>
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
        'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-block w-1 h-1 rounded-full bg-[var(--term-accent)]"
      />
      {badge}
    </span>
  </span>
);

type DocCardProps = {
  title: string;
  description: string;
  items: string[];
  variant: 'releases' | 'changelog';
};

const DocCard = ({ title, description, items, variant }: DocCardProps) => {
  const isReleases = variant === 'releases';
  const Icon = isReleases ? FileTextIcon : BookOpenIcon;
  const labelText = isReleases ? 'Releases' : 'CHANGELOG';
  const tintClass = 'bg-[var(--term-surface)] border-[var(--term-border)]';
  const iconClass = isReleases
    ? 'bg-[var(--term-surface)] border-[var(--term-border)] text-sky-600 dark:text-sky-300'
    : 'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]';
  const titleClass = isReleases ? 'text-sky-600 dark:text-sky-300' : 'text-[var(--term-accent)]';
  const dotClass = isReleases ? 'bg-sky-400 dark:bg-sky-500' : 'bg-[var(--term-accent)]';

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tintClass,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0',
              iconClass,
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
              {labelText}
            </span>
            <h3 className={cn('text-sm font-bold font-mono tracking-tight break-all', titleClass)}>
              {title}
            </h3>
          </div>
        </div>
      </header>

      <p className="text-xsm text-[var(--term-muted)] leading-snug break-keep">{description}</p>

      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-xsm font-mono text-[var(--term-fg)]"
          >
            <span
              aria-hidden="true"
              className={cn('inline-block w-1.5 h-1.5 rounded-full', dotClass)}
            />
            {item}
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'mt-auto pt-sm flex items-center justify-end border-t border-dashed border-[var(--term-border)]',
          titleClass,
        )}
      >
        <GithubIcon className="h-4 w-4" />
      </div>
    </article>
  );
};
