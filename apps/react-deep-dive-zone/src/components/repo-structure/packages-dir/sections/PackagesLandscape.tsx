import { cx } from '@berrypjh/react-ui';
import { Layers } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import type { ToneKey } from '../../../shared/tones';
import { PackagePill } from '../components/PackagePill';
import type { PackagesDirectoryContent } from '../content';

type Props = { content: PackagesDirectoryContent['landscape'] };

const coreTones: ToneKey[] = ['blue', 'emerald', 'violet', 'amber', 'teal'];

export const PackagesLandscape = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-landscape" className="space-y-md">
      <SectionHeader
        id="landscape"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Layers className="h-5 w-5" aria-hidden="true" />}
      />

      <div
        className={cx(
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
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            later
          </span>
          <ul className="flex flex-wrap gap-2">
            {content.additionalRow2.map((name) => (
              <li key={name}>
                <PackagePill label={name} emphasis="muted" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
