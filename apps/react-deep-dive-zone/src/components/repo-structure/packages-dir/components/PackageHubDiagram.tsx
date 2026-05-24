import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import type { CorePackage, PackagesDirectoryContent } from '../content';
import { FolderIcon, packageIconByName } from '../icons';

import { PackagePill } from './PackagePill';

type Props = { content: PackagesDirectoryContent['hero'] };

/**
 * Hero 우측 다이어그램.
 * 상단 packages 허브 카드 → 가지가 갈라져 → 5개 핵심 패키지 카드.
 * 그 아래 보조 패키지 pill을 흐리게 배치한다.
 */
export const PackageHubDiagram = ({ content }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'px-md py-lg sm:p-lg',
        'overflow-hidden',
      )}
    >
      {/* 옅은 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(56,189,248,0.12),transparent_55%)]"
      />

      <div className="relative flex flex-col items-center">
        {/* 허브 카드 */}
        <HubCard label={content.hubLabel} caption={content.hubCaption} />

        {/* 트렁크 → 분기 */}
        <span
          aria-hidden="true"
          className="block w-px h-md border-l border-dashed border-[var(--term-border)]"
        />

        {/* 5개 핵심 패키지 */}
        <div className="relative w-full">
          {/* 상단 가로 trunk */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-[10%] right-[10%] border-t border-dashed border-[var(--term-border)]"
          />
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {content.coreNodes.map((pkg) => (
              <li key={pkg.id} className="flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className="block w-px h-md border-l border-dashed border-[var(--term-border)]"
                />
                <CoreNodeCard pkg={pkg} />
              </li>
            ))}
          </ul>
        </div>

        {/* 보조 패키지 pill */}
        <div className="mt-md flex flex-wrap justify-center gap-1.5 max-w-md">
          {content.secondaryNodes.map((label) => (
            <PackagePill key={label} label={label} emphasis="muted" />
          ))}
        </div>
      </div>
    </div>
  );
};

type HubCardProps = { label: string; caption: string };

const HubCard = ({ label, caption }: HubCardProps) => (
  <div
    className={cn(
      'inline-flex flex-col items-center gap-1 rounded-xl border px-md py-md',
      'border-sky-300/80 bg-sky-50/80 text-sky-900',
      'dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-100',
      'shadow-[0_3px_0_var(--term-border)]',
    )}
  >
    <span className="inline-flex items-center gap-2">
      <FolderIcon className="h-4 w-4" aria-hidden="true" />
      <span className="text-md font-bold font-mono tracking-tight">{label}</span>
    </span>
    <span className="text-[10px] uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80">
      {caption}
    </span>
  </div>
);

type CoreNodeCardProps = { pkg: CorePackage };

const CoreNodeCard = ({ pkg }: CoreNodeCardProps) => {
  const Icon = packageIconByName[pkg.icon];
  const tone = toneTokens[pkg.tone];

  return (
    <article
      className={cn(
        'group flex w-full flex-col items-center gap-1 rounded-lg border',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'px-2 py-2.5 text-center transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-7 h-7 rounded-md border',
          tone.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className={cn('text-[11px] font-bold font-mono tracking-tight', tone.text)}>
        {pkg.name}
      </span>
      <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
        {pkg.shortDescription}
      </span>
    </article>
  );
};
