import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ParentChildFiberTree } from '../components/ParentChildFiberTree';
import type { FiberLanesContent } from '../content';
import { CylinderIcon, LayersIcon, ListTreeIcon } from '../icons';

type Props = { content: FiberLanesContent['comparison'] };

export const LanesChildLanesComparison = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <ConceptCard
        tone="emerald"
        icon={<CylinderIcon className="h-6 w-6" />}
        title={content.lanesCard.title}
        description={content.lanesCard.description}
      />
      <div className="flex items-center justify-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-full',
            'bg-slate-900 text-white border-2 border-slate-700',
            'dark:bg-slate-950 dark:border-slate-700',
            'shadow-[0_8px_20px_-8px_rgba(15,23,42,0.55)]',
            'font-bold text-sm tracking-wider',
          )}
        >
          {content.vs}
        </span>
      </div>
      <ConceptCard
        tone="violet"
        icon={<ListTreeIcon className="h-6 w-6" />}
        title={content.childLanesCard.title}
        description={content.childLanesCard.description}
      />
    </div>

    <ParentChildFiberTree
      parentTitle={content.parentTitle}
      parentLanes={content.parentLanes}
      parentChildLanes={content.parentChildLanes}
      children={content.children}
      legend={content.legend}
    />
  </section>
);

const ConceptCard = ({
  tone,
  icon,
  title,
  description,
}: {
  tone: 'emerald' | 'violet';
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  const cls = {
    emerald: {
      border:
        'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
      iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
      title: 'text-emerald-900 dark:text-emerald-100',
      desc: 'text-emerald-700/90 dark:text-emerald-200',
    },
    violet: {
      border:
        'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
      iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
      title: 'text-violet-900 dark:text-violet-100',
      desc: 'text-violet-700/90 dark:text-violet-200',
    },
  }[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cls.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl',
            cls.iconWrap,
          )}
        >
          {icon}
        </span>
        <code className={cn('font-mono text-md font-bold tracking-tight', cls.title)}>{title}</code>
      </header>
      <p className={cn('text-sm font-bold leading-snug break-keep', cls.desc)}>{description}</p>
    </article>
  );
};
