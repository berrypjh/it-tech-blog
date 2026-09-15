import { cx } from '@berrypjh/react-ui';
import { ArrowRight, FileText, type LucideIcon, Monitor, ScanSearch, Workflow } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementObjectStructureContent, SummaryPill } from '../content';

type Props = { content: ReactElementObjectStructureContent['overview'] };

const pillIcon: Record<SummaryPill['id'], LucideIcon> = {
  description: FileText,
  'not-dom': Monitor,
  'not-fiber': Workflow,
  'render-input': ArrowRight,
};

export const ElementShapeOverview = ({ content }: Props) => (
  <section id="overview" aria-labelledby="heading-overview" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="overview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ScanSearch className="h-5 w-5" aria-hidden="true" />}
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
  const Icon = pillIcon[pill.id];
  return (
    <article
      className={cx(
        'group flex flex-1 items-start gap-md rounded-2xl border p-md',
        'bg-[var(--term-surface)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={pill.tone} className="rounded-xl shrink-0">
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <div className="flex flex-col gap-1 min-w-0">
        <h3
          className={cx('text-sm font-bold tracking-tight break-keep', toneTokens[pill.tone].text)}
        >
          {pill.title}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{pill.body}</p>
      </div>
    </article>
  );
};
