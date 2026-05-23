import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { LaneUpdateObjectContent, UpdateField, UpdateFieldIconName } from '../content';
import {
  BracesIcon,
  CrosshairIcon,
  GaugeIcon,
  Link2Icon,
  PackageIcon,
  SparklesIcon,
  UndoIcon,
  ZapIcon,
} from '../icons';

type Props = { content: LaneUpdateObjectContent['fields'] };

const iconMap: Record<UpdateFieldIconName, typeof BracesIcon> = {
  crosshair: CrosshairIcon,
  zap: ZapIcon,
  undo: UndoIcon,
  gauge: GaugeIcon,
  sparkles: SparklesIcon,
  link: Link2Icon,
};

export const UpdateFieldsSection = ({ content }: Props) => (
  <section id="fields" aria-labelledby="heading-fields" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="fields"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<PackageIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.name} className="flex">
          <Card field={card} />
        </li>
      ))}
    </ul>
  </section>
);

const Card = ({ field }: { field: UpdateField }) => {
  const Icon = iconMap[field.iconName];
  const t = toneTokens[field.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg w-full',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {field.badge}
        </span>
      </header>

      <h3
        className={cn(
          'inline-flex w-fit items-center rounded-lg border px-2.5 py-1 font-mono text-sm sm:text-md font-bold',
          'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        <span className="text-amber-300">{field.name}</span>
      </h3>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {field.body}
      </p>
    </article>
  );
};
