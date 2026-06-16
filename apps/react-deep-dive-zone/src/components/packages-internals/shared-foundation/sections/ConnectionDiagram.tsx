import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { PackageNode, SharedContent } from '../content';
import { sharedIcon, StarIcon } from '../icons';
import { accentText, neutralChrome, toneAccent } from '../localTone';

type Props = { content: SharedContent['connection'] };

export const ConnectionDiagram = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-connection" className="space-y-md">
      <SectionHeader
        id="connection"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<sharedIcon.share className="h-5 w-5" />}
      />

      {/* 다이어그램 */}
      <div
        className={cn(
          'relative rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg overflow-hidden',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* 상단 shared hub */}
        <div className="relative flex justify-center mb-md">
          <SharedHub label={content.centerLabel} subtitle={content.centerSubtitle} />
        </div>

        {/* dashed branch */}
        <span aria-hidden="true" className="relative hidden md:block">
          <BranchSvg />
        </span>

        {/* 3 packages */}
        <ul className="relative grid grid-cols-1 md:grid-cols-3 gap-md mt-md md:mt-lg">
          {content.packages.map((pkg) => (
            <li key={pkg.id} className="flex min-w-0">
              <PackageCardLarge pkg={pkg} />
            </li>
          ))}
        </ul>

        {/* concept tags */}
        <ul className="relative flex flex-wrap justify-center gap-1.5 mt-md">
          {content.conceptTags.map((tag) => (
            <li key={tag.id}>
              <span
                className={cn(
                  'inline-flex items-center rounded-full px-3 py-1 text-[10px] font-mono font-bold tracking-tight',
                  neutralChrome,
                  'text-[var(--term-accent)]',
                )}
              >
                {tag.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 강조 배너 */}
      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

const SharedHub = ({ label, subtitle }: { label: string; subtitle: string }) => (
  <div
    className={cn(
      'relative inline-flex flex-col items-center justify-center gap-1 px-md py-md min-w-[14rem]',
      'rounded-2xl border-2 border-[var(--term-border)] bg-[var(--term-surface)]',
      'shadow-[0_4px_0_var(--term-border)] overflow-hidden',
    )}
    aria-hidden="true"
  >
    <CubeIcon className="relative h-7 w-7 text-[var(--term-accent)]" />
    <span className="relative text-md font-bold font-mono tracking-tight text-[var(--term-accent)]">
      {label}
    </span>
    <span className="relative text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
      {subtitle}
    </span>
  </div>
);

const PackageCardLarge = ({ pkg }: { pkg: PackageNode }) => {
  const accent = accentText[toneAccent(pkg.tone)];
  const Icon = sharedIcon[pkg.iconName];

  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 items-center gap-sm rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] hover:border-[var(--term-accent)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-md shrink-0',
          neutralChrome,
          accent,
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex flex-col min-w-0">
        <h3 className={cn('text-sm font-bold font-mono tracking-tight truncate', accent)}>
          {pkg.name}
        </h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {pkg.subtitle}
        </span>
      </div>
    </article>
  );
};

const BranchSvg = () => (
  <svg
    viewBox="0 0 600 40"
    className="w-full h-8 text-[var(--term-accent)]"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M 300 0 L 300 16 L 100 16 L 100 40"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="4 4"
      fill="none"
    />
    <path
      d="M 300 0 L 300 16 L 300 40"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="4 4"
      fill="none"
    />
    <path
      d="M 300 0 L 300 16 L 500 16 L 500 40"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="4 4"
      fill="none"
    />
  </svg>
);

const CubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
