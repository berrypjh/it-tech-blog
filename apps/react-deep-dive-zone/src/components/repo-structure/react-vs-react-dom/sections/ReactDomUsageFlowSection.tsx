import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { DarkCodePanel } from '../../other-dirs/components/DarkCodePanel';
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
          <DarkCodePanel
            header={content.codeHeader}
            badge={content.codeBadge}
            code={content.code}
            language="tsx"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <ExplanationPill
              dotClass="bg-blue-500 dark:bg-blue-400"
              borderClass="border-blue-200/80 bg-blue-50/70 dark:border-blue-800/60 dark:bg-blue-950/30"
              textClass="text-blue-800 dark:text-blue-200"
              lead={content.pillReact.lead}
              description={content.pillReact.description}
            />
            <ExplanationPill
              dotClass="bg-emerald-500 dark:bg-emerald-400"
              borderClass="border-emerald-200/80 bg-emerald-50/70 dark:border-emerald-800/60 dark:bg-emerald-950/30"
              textClass="text-emerald-800 dark:text-emerald-200"
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
  dotClass: string;
  borderClass: string;
  textClass: string;
  lead: string;
  description: string;
};

const ExplanationPill = ({
  dotClass,
  borderClass,
  textClass,
  lead,
  description,
}: ExplanationPillProps) => (
  <div className={cn('flex items-start gap-2 rounded-lg border p-3', borderClass)}>
    <span aria-hidden="true" className={cn('mt-1 inline-block w-2 h-2 rounded-full', dotClass)} />
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className={cn('text-xsm font-bold font-mono tracking-tight break-keep', textClass)}>
        {lead}
      </span>
      <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {description}
      </span>
    </div>
  </div>
);
