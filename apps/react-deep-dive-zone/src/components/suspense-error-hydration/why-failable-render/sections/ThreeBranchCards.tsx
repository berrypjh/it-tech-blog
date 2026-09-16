import { cx } from '@berrypjh/react-ui';
import {
  AlertTriangle,
  GitBranch,
  Lightbulb,
  type LucideIcon,
  RefreshCw,
  Timer,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BranchId, WhyFailableRenderContent } from '../content';

type Props = { content: WhyFailableRenderContent['branches'] };

const branchIcon: Record<BranchId, LucideIcon> = {
  suspense: Timer,
  error: AlertTriangle,
  hydration: RefreshCw,
};

export const ThreeBranchCards = ({ content }: Props) => (
  <section id="branches" aria-labelledby="heading-branches" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="branches"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranch className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((branch) => {
        const Icon = branchIcon[branch.id];
        return (
          <ToneCardItem
            key={branch.id}
            tone={branch.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={branch.outcome}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[branch.tone].text,
                )}
              >
                {branch.label}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {branch.description}
              </p>
              <ol className="flex flex-col gap-1">
                {branch.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="font-mono text-[10px] tabular-nums text-[var(--term-dim)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] text-[var(--term-fg)] break-keep">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
