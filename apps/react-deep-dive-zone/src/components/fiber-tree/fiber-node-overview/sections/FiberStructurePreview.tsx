import { cn } from '@it-tech-blog/utils';

import { Database, Fingerprint, Flag, Layers, ListTree, Network } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent, FieldArea } from '../content';

type Props = { content: FiberNodeOverviewContent['preview'] };

const iconMap = {
  fingerprint: Fingerprint,
  network: Network,
  database: Database,
  flag: Flag,
  layers: Layers,
} as const;

export const FiberStructurePreview = ({ content }: Props) => (
  <section id="preview" aria-labelledby="heading-preview" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListTree className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-md items-stretch">
      <div className="min-w-0">
        <CodePreviewPanel code={content.code} language="TS" size="sm" />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-sm">
        {content.areas.map((area, index) => (
          <li key={area.id} className="flex">
            <AreaCard area={area} number={String(index + 1).padStart(2, '0')} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const AreaCard = ({ area, number }: { area: FieldArea; number: string }) => {
  const Icon = iconMap[area.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 items-start gap-md rounded-2xl border p-md',
        'bg-[var(--term-surface)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={area.tone} className="rounded-xl shrink-0">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex flex-col gap-1.5 min-w-0">
        <h3 className="flex items-baseline gap-2 text-sm font-bold tracking-tight break-keep">
          <span className="text-xxsm tabular-nums text-[var(--term-muted)]">{number}</span>
          <span className={toneTokens[area.tone].text}>{area.title}</span>
        </h3>
        <ul className="flex flex-wrap gap-1">
          {area.fields.map((field) => (
            <li
              key={field}
              className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
            >
              {field}
            </li>
          ))}
        </ul>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {area.description}
        </p>
      </div>
    </article>
  );
};
