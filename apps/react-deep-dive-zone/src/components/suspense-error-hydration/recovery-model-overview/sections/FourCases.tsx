import { cx } from '@berrypjh/react-ui';
import {
  AlertTriangle,
  GitCompare,
  Lightbulb,
  type LucideIcon,
  RefreshCw,
  Timer,
  XCircle,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CaseId, RecoveryModelOverviewContent } from '../content';

type Props = { content: RecoveryModelOverviewContent['cases'] };

const caseIcon: Record<CaseId, LucideIcon> = {
  pending: Timer,
  rejected: XCircle,
  'render-error': AlertTriangle,
  mismatch: RefreshCw,
};

export const FourCases = ({ content }: Props) => (
  <section id="cases" aria-labelledby="heading-cases" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="cases"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompare className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.items.map((item) => {
        const Icon = caseIcon[item.id];
        return (
          <ToneCardItem
            key={item.id}
            tone={item.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={item.boundary}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[item.tone].text,
                )}
              >
                {item.title}
              </h3>
              <code className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10px] text-[var(--term-fg)] [overflow-wrap:anywhere]">
                {item.thrown}
              </code>
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
