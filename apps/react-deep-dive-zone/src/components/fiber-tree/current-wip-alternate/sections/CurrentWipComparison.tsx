import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { ComparisonTable } from '../components/ComparisonTable';
import type { CurrentWipAlternateContent } from '../content';
import { LayersIcon, LightbulbIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['comparison'] };

export const CurrentWipComparison = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      columnLabel={content.columnLabel}
      currentLabel={content.currentLabel}
      wipLabel={content.wipLabel}
      rows={content.rows}
    />

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-emerald-300/80 bg-emerald-50/70',
        'dark:border-emerald-800/60 dark:bg-emerald-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 shrink-0"
      >
        <LightbulbIcon className="h-5 w-5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);
