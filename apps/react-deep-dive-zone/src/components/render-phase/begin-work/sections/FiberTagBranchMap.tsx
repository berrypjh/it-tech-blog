import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { BeginWorkContent, FiberTagItem } from '../content';
import { GitForkIcon, SettingsIcon } from '../icons';

import { tagIconMap, tagPalette } from './tag-palette';

type Props = { content: BeginWorkContent['tagBranch'] };

export const FiberTagBranchMap = ({ content }: Props) => (
  <section
    id="tag-branches"
    aria-labelledby="heading-tag-branches"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="tag-branches"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.15fr)_minmax(0,_0.85fr)] gap-md lg:gap-lg">
      {/* Left: branch map */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <BranchMap
          rootTitle={content.rootTitle}
          rootSubtitle={content.rootSubtitle}
          branches={content.branches}
        />
      </article>

      {/* Right: description list */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="mb-md text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
          {'// branch details'}
        </h3>
        <ul className="flex flex-col gap-2">
          {content.branches.map((branch) => {
            const palette = tagPalette[branch.accent];
            return (
              <li key={branch.id}>
                <article
                  className={cn(
                    'grid grid-cols-[auto_minmax(0,_1fr)] items-start gap-2 rounded-xl border p-sm sm:p-md',
                    palette.border,
                    palette.bg,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn('mt-0.5 inline-block h-1.5 w-1.5 rounded-full', palette.dot)}
                  />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span
                      className={cn(
                        'text-xsm sm:text-sm font-bold leading-tight break-keep',
                        palette.text,
                      )}
                    >
                      {branch.title}
                    </span>
                    {branch.detail && (
                      <span className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                        {branch.detail}
                      </span>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);

type BranchMapProps = {
  rootTitle: string;
  rootSubtitle: string;
  branches: FiberTagItem[];
};

const BranchMap = ({ rootTitle, rootSubtitle, branches }: BranchMapProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,_1fr)] gap-md sm:gap-lg">
    {/* Root */}
    <div className="flex sm:flex-col sm:items-stretch">
      <article
        className={cn(
          'inline-flex w-full sm:w-[180px] items-center gap-2 rounded-2xl border-2 p-md',
          'border-sky-500/80 bg-sky-600 text-white',
          'dark:border-sky-400/70 dark:bg-sky-500 dark:text-slate-950',
          'shadow-[0_2px_0_rgba(0,0,0,0.06)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            'bg-white/15 text-white border-white/30',
            'dark:bg-slate-950/20 dark:text-slate-950 dark:border-slate-950/30',
          )}
        >
          <SettingsIcon className="h-4 w-4" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-sm font-bold leading-tight tracking-tight">{rootTitle}</span>
          <span className="text-[10px] font-mono opacity-90 break-keep">{rootSubtitle}</span>
        </div>
      </article>
    </div>

    {/* Branches as connected cards */}
    <ul className="relative flex flex-col gap-2">
      <span
        aria-hidden="true"
        className="absolute left-3 top-2 bottom-2 hidden sm:block w-px border-l border-dashed border-[var(--term-border)]"
      />
      {branches.map((branch) => {
        const palette = tagPalette[branch.accent];
        const Icon = tagIconMap[branch.iconName];
        return (
          <li key={branch.id} className="relative sm:pl-7">
            <span
              aria-hidden="true"
              className="absolute left-3 top-1/2 hidden sm:block w-3 h-px border-t border-dashed border-[var(--term-border)]"
            />
            <article
              className={cn(
                'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-xl border bg-[var(--term-bg)] p-sm sm:p-md',
                palette.border,
                palette.borderHover,
                'shadow-[0_1px_0_var(--term-border)]',
                'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  palette.chip,
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span
                  className={cn(
                    'text-xsm sm:text-sm font-bold leading-tight break-keep',
                    palette.text,
                  )}
                >
                  {branch.title}
                </span>
                {branch.updateFn && (
                  <code className="font-mono text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-all">
                    {branch.updateFn}
                  </code>
                )}
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  </div>
);
