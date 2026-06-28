import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ArrowDivider } from '../../../shared/compare';
import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneBadge, ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CreateFiberFromElementContent } from '../content';
import { BoxIcon, BugIcon, LayersIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['devInfo'] };

export const DevModeDebugInfo = ({ content }: Props) => (
  <section id="dev-info" aria-labelledby="heading-dev-info" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="dev-info"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BugIcon className="h-5 w-5" />}
    />

    <ToneBadge tone="amber" className="font-mono uppercase tracking-wider">
      {content.devPill}
    </ToneBadge>

    <ComparisonTable
      caption="DEV 모드의 Element 필드와 Fiber로 전달되는 필드 매핑"
      headers={[content.tableHeader.element, content.tableHeader.fiber]}
      columnWidths={['50%', '50%']}
      rows={content.rows.map((row) => ({
        label: (
          <code className="font-mono font-bold text-[var(--term-fg)] break-all">{row.element}</code>
        ),
        cells: [
          <code className="font-mono font-bold text-[var(--term-accent)] break-all">
            {row.fiber}
          </code>,
        ],
      }))}
    />

    <div className="space-y-sm">
      <p className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
        {content.mappingTitle}
      </p>
      <div
        className={cn(
          'grid grid-cols-1 items-stretch gap-md',
          'lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]',
        )}
      >
        <DebugPanel
          tone="sky"
          label={content.mappingLeftLabel}
          icon={<BoxIcon className="h-[18px] w-[18px]" />}
          code={content.mappingLeftCode}
        />
        <ArrowDivider />
        <DebugPanel
          tone="teal"
          label={content.mappingRightLabel}
          icon={<LayersIcon className="h-[18px] w-[18px]" />}
          code={content.mappingRightCode}
        />
      </div>
    </div>

    <p className="text-[11px] text-[var(--term-muted)] italic text-right break-keep">
      {content.footnote}
    </p>
  </section>
);

type DebugPanelProps = {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
  code: string;
};

const DebugPanel = ({ tone, label, icon, code }: DebugPanelProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <code
          className={cn('min-w-0 truncate font-mono text-xsm font-bold tracking-tight', t.text)}
        >
          {label}
        </code>
      </header>

      <CodePreviewPanel code={code} language="JS" showWindowDots={false} />
    </article>
  );
};
