import { cn } from '@it-tech-blog/utils';

import { CompareVs } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DispatchSetStateEntryContent } from '../content';
import { ArrowLeftRightIcon, CodeIcon, FunctionSquareIcon, InfoIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['compare'] };

const amber = toneTokens.amber;

export const SetCountToDispatchSection = ({ content }: Props) => (
  <section id="section-compare" aria-labelledby="heading-compare" className="space-y-md">
    <SectionHeader
      id="compare"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <CodeComparePanel
        tone="emerald"
        title={content.leftCard.title}
        code={content.leftCard.code}
        icon={<CodeIcon className="h-3.5 w-3.5" />}
      />

      <CompareVs />

      <CodeComparePanel
        tone="sky"
        title={content.rightCard.title}
        code={content.rightCard.code}
        icon={<FunctionSquareIcon className="h-3.5 w-3.5" />}
      />
    </div>

    <aside
      className={cn(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        amber.border,
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="amber" size="sm">
          <InfoIcon className="h-3.5 w-3.5" />
        </ToneIconBox>
        <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', amber.text)}>
          {content.sideNote.title}
        </h3>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {content.sideNote.body}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {content.sideNote.tags.map((tag) => (
          <li
            key={tag}
            className={cn(
              'rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              amber.chip,
            )}
          >
            {tag}
          </li>
        ))}
      </ul>
    </aside>
  </section>
);

type PanelProps = {
  tone: ToneKey;
  title: string;
  code: string;
  icon: React.ReactNode;
};

const CodeComparePanel = ({ tone, title, code, icon }: PanelProps) => {
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

      <pre className="mt-auto overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-3 font-mono text-xsm leading-[1.7] text-[var(--term-fg)]">
        <code>{code}</code>
      </pre>
    </article>
  );
};
