import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { LayoutPhaseContent, WorkItem, WorkItemIcon } from '../content';
import { ComponentIcon, LayersIcon, LinkIcon, ZapIcon } from '../icons';

type Props = { content: LayoutPhaseContent['workItems'] };

const iconMap: Record<WorkItemIcon, typeof ZapIcon> = {
  zap: ZapIcon,
  component: ComponentIcon,
  link: LinkIcon,
};

export const LayoutWorkItemsSection = ({ content }: Props) => (
  <section
    id="layout-work-items"
    aria-labelledby="heading-layout-work-items"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="layout-work-items"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {content.items.map((item, idx) => (
        <li key={item.title} className="flex h-full">
          <Card item={item} index={idx + 1} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ item, index }: { item: WorkItem; index: number }) => {
  const Icon = iconMap[item.iconName];
  const t = commitToneTokens[item.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider tabular-nums rounded-md border px-1.5 py-0.5',
            t.chipSolid,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>

      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight font-mono break-keep',
          t.textStrong,
        )}
      >
        {item.title}
      </h3>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {item.description}
      </p>

      <span
        className={cn(
          'mt-auto inline-flex items-center self-start gap-1.5 rounded-md border px-2 py-1',
          'text-[10px] font-mono uppercase tracking-wider',
          t.chip,
        )}
      >
        <span aria-hidden="true" className={cn('inline-block h-1.5 w-1.5 rounded-full', t.dot)} />
        {item.pill}
      </span>
    </article>
  );
};
