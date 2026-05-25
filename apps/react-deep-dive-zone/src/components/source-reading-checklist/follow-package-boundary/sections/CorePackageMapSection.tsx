import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { CorePackage, FollowPackageBoundaryContent, PackageIconKey } from '../content';
import {
  AtomIcon,
  BoxesIcon,
  FileCodeIcon,
  GitBranchIcon,
  MonitorIcon,
  PuzzleIcon,
  ScanSearchIcon,
  TimerIcon,
} from '../icons';
import { getPackageClasses, PackageBadge } from '../PackageBadge';

type Props = { content: FollowPackageBoundaryContent['coreMap'] };

const iconMap: Record<PackageIconKey, React.ComponentType<{ className?: string }>> = {
  atom: AtomIcon,
  monitor: MonitorIcon,
  gitBranch: GitBranchIcon,
  timer: TimerIcon,
  puzzle: PuzzleIcon,
};

export const CorePackageMapSection = ({ content }: Props) => {
  const reconciler = content.packages.find((p) => p.spotlight);
  const others = content.packages.filter((p) => !p.spotlight);

  return (
    <section
      id="section-core-map"
      aria-labelledby="heading-core-map"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="core-map"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<BoxesIcon className="h-5 w-5" />}
      />

      {/* Spotlight: react-reconciler full width */}
      {reconciler && (
        <PackageCard
          pkg={reconciler}
          filesLabel={content.filesLabel}
          readingPointLabel={content.readingPointLabel}
          variant="spotlight"
        />
      )}

      {/* Other 4 packages in 2x2 / 4-col grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {others.map((pkg) => (
          <li key={pkg.key}>
            <PackageCard
              pkg={pkg}
              filesLabel={content.filesLabel}
              readingPointLabel={content.readingPointLabel}
              variant="compact"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

type CardProps = {
  pkg: CorePackage;
  filesLabel: string;
  readingPointLabel: string;
  variant: 'spotlight' | 'compact';
};

const PackageCard = ({ pkg, filesLabel, readingPointLabel, variant }: CardProps) => {
  const Icon = iconMap[pkg.iconKey];
  const t = getPackageClasses(pkg.key);

  if (variant === 'spotlight') {
    return (
      <article
        className={cn(
          'group relative overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
          'bg-white dark:bg-[var(--term-bg)]',
          'shadow-[0_3px_0_var(--term-border)]',
          t.border,
          'transition-all motion-safe:hover:-translate-y-0.5',
          t.borderHover,
        )}
      >
        {/* Spotlight ribbon */}
        <span
          className={cn(
            'absolute top-0 right-0 px-3 py-1 rounded-bl-xl',
            t.chip,
            'border-l border-b',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
          )}
          aria-hidden="true"
        >
          core
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] gap-md lg:gap-lg">
          {/* Left: name + role + description */}
          <div className="flex flex-col gap-md">
            <header className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2',
                  t.border,
                  t.chip,
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <Icon className="h-6 w-6" />
              </span>
              <div className="flex flex-col gap-1.5">
                <PackageBadge packageKey={pkg.key} size="md" strong>
                  {pkg.name}
                </PackageBadge>
                <span className={cn('text-sm font-bold break-keep', t.text)}>{pkg.role}</span>
              </div>
            </header>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {pkg.description}
            </p>

            <div className="mt-auto flex items-start gap-2 rounded-md border border-dashed p-3 border-[var(--term-border)] bg-[var(--term-surface)]">
              <ScanSearchIcon
                className={cn('h-4 w-4 shrink-0 mt-0.5', t.text)}
                aria-hidden="true"
              />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] block mb-1">
                  {readingPointLabel}
                </span>
                <p className="text-[11px] leading-relaxed text-[var(--term-fg)] break-keep">
                  {pkg.readingPoint}
                </p>
              </div>
            </div>
          </div>

          {/* Right: files */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {filesLabel}
            </span>
            <ul className="flex flex-col gap-1.5">
              {pkg.files.map((file) => (
                <li key={file}>
                  <code
                    className={cn(
                      'flex items-center gap-1.5 overflow-x-auto rounded-md border px-2.5 py-1.5',
                      'border-[var(--term-border)] bg-[var(--term-surface)]',
                      'font-mono text-[11px] text-[var(--term-fg)]',
                    )}
                  >
                    <FileCodeIcon className={cn('h-3 w-3 shrink-0', t.text)} aria-hidden="true" />
                    <span className="whitespace-nowrap">{file}</span>
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }

  // compact
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
        'bg-white dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
        t.border,
        'transition-all motion-safe:hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <PackageBadge packageKey={pkg.key} size="md" strong>
          {pkg.name}
        </PackageBadge>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>

      <span className={cn('text-xsm font-bold break-keep', t.text)}>{pkg.role}</span>

      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {pkg.description}
      </p>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {filesLabel}
        </span>
        <ul className="flex flex-col gap-1">
          {pkg.files.map((file) => (
            <li key={file}>
              <code
                className={cn(
                  'flex items-center gap-1 overflow-x-auto rounded-md border px-2 py-1',
                  'border-[var(--term-border)] bg-[var(--term-surface)]',
                  'font-mono text-[10.5px] text-[var(--term-fg)]',
                )}
              >
                <FileCodeIcon className={cn('h-2.5 w-2.5 shrink-0', t.text)} aria-hidden="true" />
                <span className="whitespace-nowrap">{file}</span>
              </code>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-sm flex items-start gap-1.5 border-t border-dashed border-[var(--term-border)]">
        <ScanSearchIcon className={cn('h-3 w-3 shrink-0 mt-0.5', t.text)} aria-hidden="true" />
        <p className="text-[10.5px] leading-relaxed text-[var(--term-muted)] break-keep">
          {pkg.readingPoint}
        </p>
      </div>
    </article>
  );
};
