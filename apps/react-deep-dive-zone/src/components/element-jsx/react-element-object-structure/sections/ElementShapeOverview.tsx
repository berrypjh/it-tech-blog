import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementObjectStructureContent, SummaryPill } from '../content';
import { ArrowRightIcon, FileTextIcon, MonitorIcon, ScanSearchIcon, WorkflowIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['overview'] };

const iconMap = {
  fileText: FileTextIcon,
  monitor: MonitorIcon,
  workflow: WorkflowIcon,
  arrowRight: ArrowRightIcon,
} as const;

export const ElementShapeOverview = ({ content }: Props) => (
  <section id="overview" aria-labelledby="heading-overview" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="overview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ScanSearchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-md items-stretch">
      <div className="flex flex-col gap-sm min-w-0">
        <CodePreviewPanel
          code={content.objectShape}
          language="JS"
          showWindowDots
          caption="React Element shape"
          size="md"
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-md">
        {content.pills.map((pill) => (
          <li key={pill.id} className="flex">
            <PillCard pill={pill} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const PillCard = ({ pill }: { pill: SummaryPill }) => {
  const t = toneTokens[pill.tone];
  const Icon = iconMap[pill.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 items-start gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-xl border shrink-0',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{pill.title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{pill.body}</p>
      </div>
    </article>
  );
};
