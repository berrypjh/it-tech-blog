import { cn } from '@it-tech-blog/utils';

import { CompareVs } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DispatchSetStateContent } from '../content';
import { ArrowLeftRightIcon, BracesIcon, CodeIcon, SparklesIcon } from '../icons';

type Props = { content: DispatchSetStateContent['compare'] };

export const PublicApiInternalCompare = ({ content }: Props) => (
  <section id="section-compare" aria-labelledby="heading-compare" className="space-y-md">
    <SectionHeader
      id="compare"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <CodeComparePanel
        tone="sky"
        title={content.left.title}
        code={content.left.code}
        description={content.left.description}
        icon={<CodeIcon className="h-3.5 w-3.5" />}
      />

      <CompareVs />

      <CodeComparePanel
        tone="violet"
        title={content.right.title}
        code={content.right.code}
        description={content.right.description}
        icon={<BracesIcon className="h-3.5 w-3.5" />}
      />
    </div>

    <div className="flex items-start gap-sm rounded-lg border border-[var(--term-border)] border-l-[3px] border-l-[var(--term-accent)] bg-[var(--term-surface)] p-md">
      <SparklesIcon
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--term-accent)]"
      />
      <p className="text-xsm sm:text-sm font-semibold leading-relaxed text-[var(--term-fg)] break-keep">
        {content.note}
      </p>
    </div>
  </section>
);

type PanelProps = {
  tone: ToneKey;
  title: string;
  code: string;
  description: string;
  icon: React.ReactNode;
};

const CodeComparePanel = ({ tone, title, code, description, icon }: PanelProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-2 pb-sm border-b border-dashed border-[var(--term-border)]">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight break-keep', t.text)}>
          {title}
        </h3>
      </header>

      <pre className="overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-3 font-mono text-xsm leading-[1.7] text-[var(--term-fg)]">
        <code>{code}</code>
      </pre>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {description}
      </p>
    </article>
  );
};
