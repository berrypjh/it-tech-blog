import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { RoleFlowDiagram } from '../components/RoleFlowDiagram';
import type { ReactVsReactDomContent } from '../content';
import { CodeIcon } from '../icons';

type Props = { content: ReactVsReactDomContent['usage'] };

export const ReactDomUsageFlowSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-usage" className="space-y-md">
      <SectionHeader
        id="usage"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
        {/* 좌측 dark code + explanation pills */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel
            header={content.codeHeader}
            badge={content.codeBadge}
            code={content.code}
            language="tsx"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <ExplanationPill
              accentClass="text-[var(--term-accent)]"
              lead={content.pillReact.lead}
              description={content.pillReact.description}
            />
            <ExplanationPill
              accentClass={toneTokens.sky.text}
              lead={content.pillReactDom.lead}
              description={content.pillReactDom.description}
            />
          </div>
        </div>

        {/* 우측 flow diagram */}
        <RoleFlowDiagram content={content} />
      </div>
    </section>
  );
};

type ExplanationPillProps = {
  accentClass: string;
  lead: string;
  description: string;
};

const ExplanationPill = ({ accentClass, lead, description }: ExplanationPillProps) => (
  <div className="flex items-start gap-2 rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-3">
    <span
      aria-hidden="true"
      className={cn('mt-1 inline-block w-2 h-2 rounded-full bg-current', accentClass)}
    />
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className={cn('text-xsm font-bold font-mono tracking-tight break-keep', accentClass)}>
        {lead}
      </span>
      <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {description}
      </span>
    </div>
  </div>
);
