import { cx } from '@berrypjh/react-ui';
import { Atom, Boxes, Code, type LucideIcon, Package, Share2, Star } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PackageNode, SharedContent } from '../content';

type Props = { content: SharedContent['connection'] };

const packageIcon: Record<PackageNode['id'], LucideIcon> = {
  react: Atom,
  'react-dom': Boxes,
  'react-reconciler': Code,
};

export const ConnectionDiagram = ({ content }: Props) => {
  return (
    <section
      id="connection"
      aria-labelledby="heading-connection"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="connection"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Share2 className="h-5 w-5" aria-hidden="true" />}
      />

      <div
        className={cx(
          'relative rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg overflow-hidden',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="relative flex justify-center mb-md">
          <SharedHub label={content.centerLabel} subtitle={content.centerSubtitle} />
        </div>

        <span aria-hidden="true" className="relative hidden md:block">
          <BranchSvg />
        </span>

        <ul className="relative grid grid-cols-1 md:grid-cols-3 gap-md mt-md md:mt-lg">
          {content.packages.map((pkg) => (
            <li key={pkg.id} className="flex min-w-0">
              <PackageCardLarge pkg={pkg} />
            </li>
          ))}
        </ul>

        <ul className="relative flex flex-wrap justify-center gap-1.5 mt-md">
          {content.conceptTags.map((tag) => (
            <li key={tag.id}>
              <span
                className={cx(
                  'inline-flex items-center rounded-full px-3 py-1 text-[10px] font-mono font-bold tracking-tight',
                  'bg-[var(--term-surface)] border border-[var(--term-border)]',
                  'text-[var(--term-accent)]',
                )}
              >
                {tag.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <SectionNote icon={<Star className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};

const SharedHub = ({ label, subtitle }: { label: string; subtitle: string }) => (
  <div
    className={cx(
      'relative inline-flex flex-col items-center justify-center gap-1 px-md py-md min-w-[14rem]',
      'rounded-2xl border-2 border-[var(--term-border)] bg-[var(--term-surface)]',
      'shadow-[0_4px_0_var(--term-border)] overflow-hidden',
    )}
    aria-hidden="true"
  >
    <Package
      strokeWidth={1.6}
      aria-hidden="true"
      className="relative h-7 w-7 text-[var(--term-accent)]"
    />
    <span className="relative text-md font-bold font-mono tracking-tight text-[var(--term-accent)]">
      {label}
    </span>
    <span className="relative text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
      {subtitle}
    </span>
  </div>
);

const PackageCardLarge = ({ pkg }: { pkg: PackageNode }) => {
  const tone = toneTokens[pkg.tone];
  const Icon = packageIcon[pkg.id];

  return (
    <article
      className={cx(
        'group flex min-w-0 flex-1 items-center gap-sm rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={pkg.tone} size="md" className="shrink-0">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex flex-col min-w-0">
        <h3 className={cx('text-sm font-bold font-mono tracking-tight truncate', tone.text)}>
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
