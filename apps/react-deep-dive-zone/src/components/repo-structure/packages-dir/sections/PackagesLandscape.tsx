import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { ToneKey } from '../../../start/_shared/tones';
import { PackagePill } from '../components/PackagePill';
import type { PackagesDirectoryContent } from '../content';
import { LayersIcon, LightbulbIcon } from '../icons';

type Props = { content: PackagesDirectoryContent['landscape']; sectionId?: string };

const coreTones: ToneKey[] = ['blue', 'emerald', 'violet', 'amber', 'teal'];

export const PackagesLandscape = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-landscape" className="space-y-md scroll-mt-24">
      <SectionHeader
        id="landscape"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<LayersIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'p-md sm:p-lg lg:p-xl',
        )}
      >
        {/* core row */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-accent)]">
            core
          </span>
          <ul className="flex flex-wrap gap-2">
            {content.coreNames.map((name, idx) => (
              <li key={name}>
                <PackagePill
                  label={name}
                  tone={coreTones[idx % coreTones.length]}
                  emphasis="core"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* additional row 1 */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            secondary
          </span>
          <ul className="flex flex-wrap gap-2">
            {content.additionalRow1.map((name) => (
              <li key={name}>
                <PackagePill label={name} emphasis="secondary" />
              </li>
            ))}
          </ul>
        </div>

        {/* additional row 2 */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)]">later</span>
          <ul className="flex flex-wrap gap-2">
            {content.additionalRow2.map((name) => (
              <li key={name}>
                <PackagePill label={name} emphasis="muted" />
              </li>
            ))}
          </ul>
        </div>

        {/* bottom banner */}
        <div
          className={cn(
            'mt-xs flex items-start gap-sm rounded-lg border px-md py-3',
            'border-sky-200/80 bg-sky-50/70 text-sky-900',
            'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-7 h-7 rounded-md shrink-0',
              'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950',
            )}
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">
            {content.banner}
          </p>
        </div>
      </div>
    </section>
  );
};
