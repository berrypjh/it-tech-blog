import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CodePanel, LayoutPhaseContent, PhaseStripItem } from '../content';
import { CodeIcon, FileCodeIcon, LightbulbIcon, PackageOpenIcon } from '../icons';

type Props = { content: LayoutPhaseContent['checkpoint'] };

export const LayoutCodeCheckpointSection = ({ content }: Props) => (
  <section
    id="code-checkpoint"
    aria-labelledby="heading-code-checkpoint"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="code-checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.6fr)] gap-3">
      <CheckpointInfoCard
        rows={[
          {
            label: content.info.fileLabel,
            icon: FileCodeIcon,
            value: <PathList items={content.info.filePaths} mono />,
          },
          {
            label: content.info.watchLabel,
            icon: PackageOpenIcon,
            value: <PathList items={content.info.watchItems} />,
          },
        ]}
        question={content.info.question}
      />

      <div className="flex flex-col gap-3 min-w-0">
        <PhaseStrip items={content.phaseStrip} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 min-w-0">
          {content.panels.map((panel) => (
            <CodeCard key={panel.title} panel={panel} />
          ))}
        </div>
        <InsightBar text={content.insight} />
      </div>
    </div>
  </section>
);

const PathList = ({ items, mono }: { items: string[]; mono?: boolean }) => (
  <ul className="flex flex-col gap-1">
    {items.map((v) => (
      <li key={v}>
        <code
          className={cn(
            'block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-1 text-xsm text-[var(--term-fg)] break-all',
            mono && 'font-mono font-bold',
          )}
        >
          {v}
        </code>
      </li>
    ))}
  </ul>
);

const PhaseStrip = ({ items }: { items: PhaseStripItem[] }) => (
  <article className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-sm shadow-[0_1px_0_var(--term-border)]">
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold mr-1">
      commit phase strip
    </span>
    {items.map((item, idx) => {
      const t = toneTokens[item.tone];
      return (
        <div key={item.label} className="flex items-center gap-1.5">
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              item.active
                ? cn('border-2', t.fill.border, t.fill.bg, t.fill.text, 'font-bold')
                : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-block h-1.5 w-1.5 rounded-full',
                item.active ? t.dot : 'bg-[var(--term-dim)]',
              )}
            />
            {item.label}
          </span>
          {idx < items.length - 1 && (
            <span aria-hidden="true" className="text-[var(--term-dim)] text-[10px]">
              →
            </span>
          )}
        </div>
      );
    })}
  </article>
);

const CodeCard = ({ panel }: { panel: CodePanel }) => (
  <article className="flex flex-col gap-2 min-w-0">
    <header className="flex items-center justify-between gap-2 px-1">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono break-keep">
        {panel.title}
      </h3>
      <span
        className={cn(
          'inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider rounded-md border px-2 py-0.5',
          toneTokens.teal.chip,
        )}
      >
        <FileCodeIcon aria-hidden="true" className="h-3 w-3" />
        {panel.fileLabel}
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={panel.code} language="ts" />
    </div>
  </article>
);

const InsightBar = ({ text }: { text: string }) => (
  <aside
    className={cn(
      'flex items-start gap-sm rounded-lg border-2 p-md',
      toneTokens.teal.fill.border,
      toneTokens.teal.fill.bg,
    )}
  >
    <ToneIconBox tone="teal" size="sm" className="mt-0.5 shrink-0">
      <LightbulbIcon className="h-4 w-4" />
    </ToneIconBox>
    <p
      className={cn(
        'text-xsm sm:text-sm leading-relaxed break-keep font-bold',
        toneTokens.teal.fill.text,
      )}
    >
      {text}
    </p>
  </aside>
);
