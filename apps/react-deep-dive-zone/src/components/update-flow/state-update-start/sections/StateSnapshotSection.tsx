import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { StateUpdateStartContent } from '../content';
import {
  ArrowRightIcon,
  DatabaseIcon,
  LightbulbIcon,
  MonitorCheckIcon,
  MousePointerIcon,
} from '../icons';

type Props = { content: StateUpdateStartContent['snapshot'] };

const sky = toneTokens.sky;

export const StateSnapshotSection = ({ content }: Props) => (
  <section id="section-snapshot" aria-labelledby="heading-snapshot" className="space-y-md">
    <SectionHeader
      id="snapshot"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<DatabaseIcon className="h-5 w-5" />}
    />

    {/* 상단 노트 */}
    <div
      className={cn(
        'flex items-center justify-center gap-sm rounded-lg border bg-[var(--term-bg)] px-md py-3 shadow-[0_2px_0_var(--term-border)]',
        sky.border,
      )}
    >
      <ToneIconBox tone="amber" size="sm">
        <LightbulbIcon className="h-3.5 w-3.5" />
      </ToneIconBox>
      <p className="text-xsm sm:text-sm font-semibold text-center text-[var(--term-fg)] break-keep">
        {content.topNote}
      </p>
    </div>

    {/* 다이어그램 */}
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <SnapshotCard
        tone="sky"
        title={content.leftCard.title}
        subtitle={content.leftCard.subtitle}
        pill={content.leftCard.pill}
        action={content.leftCard.action}
        codeLine={content.leftCard.callLine}
        callout={content.leftCard.callout}
        footnote={content.leftCard.footnote}
        icon={<MousePointerIcon className="h-5 w-5" />}
      />

      <Connector label={content.middle.label} sub={content.middle.sub} />

      <SnapshotCard
        tone="emerald"
        title={content.rightCard.title}
        subtitle={content.rightCard.subtitle}
        pill={content.rightCard.pill}
        action={content.rightCard.action}
        callout={content.rightCard.callout}
        footnote={content.rightCard.footnote}
        icon={<MonitorCheckIcon className="h-5 w-5" />}
      />
    </div>
  </section>
);

type CardProps = {
  tone: ToneKey;
  title: string;
  subtitle: string;
  pill: string;
  action: string;
  codeLine?: string;
  callout: string;
  footnote: string;
  icon: React.ReactNode;
};

const SnapshotCard = ({
  tone,
  title,
  subtitle,
  pill,
  action,
  codeLine,
  callout,
  footnote,
  icon,
}: CardProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-start gap-sm">
        <ToneIconBox tone={tone} size="md">
          {icon}
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}>
            {title}
          </h3>
          <span className="text-xxsm text-[var(--term-muted)] mt-0.5">{subtitle}</span>
        </div>
      </header>

      <span
        className={cn(
          'inline-flex w-fit items-center gap-2 rounded-md border bg-[var(--term-surface)] px-3 py-1.5 text-xxsm font-mono font-bold',
          t.border,
          t.text,
        )}
      >
        <span aria-hidden="true" className={cn('h-1.5 w-1.5 rounded-full', t.dot)} />
        {pill}
      </span>

      <p className="text-xsm sm:text-sm text-[var(--term-fg)] leading-relaxed break-keep whitespace-pre-line">
        {action}
      </p>

      {codeLine && (
        <pre className="overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-2 font-mono text-xxsm text-[var(--term-fg)]">
          <code>{codeLine}</code>
        </pre>
      )}

      <div
        className={cn(
          'mt-auto flex flex-col gap-1 rounded-md border bg-[var(--term-surface)] px-md py-2',
          t.border,
        )}
      >
        <span className={cn('text-xsm sm:text-sm font-bold leading-snug break-keep', t.text)}>
          {callout}
        </span>
        <span className="text-xxsm text-[var(--term-muted)] break-keep">{footnote}</span>
      </div>
    </article>
  );
};

const Connector = ({ label, sub }: { label: string; sub: string }) => (
  <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
    <div className="flex flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-[var(--term-border)] bg-[var(--term-bg)] px-md py-3 shadow-[0_2px_0_var(--term-border)]">
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]"
      >
        <ArrowRightIcon className="h-4 w-4 rotate-90 lg:rotate-0" />
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[var(--term-fg)] text-center leading-snug">
        {label}
      </span>
      <span className="text-[10px] text-[var(--term-muted)] text-center">{sub}</span>
    </div>
  </div>
);
