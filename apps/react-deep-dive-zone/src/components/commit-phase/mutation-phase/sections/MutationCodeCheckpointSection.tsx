import { cx } from '@berrypjh/react-ui';
import { Code2, FileCode, Flag, PackageOpen, Sparkles } from 'lucide-react';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { MutationPhaseContent } from '../content';

type Props = { content: MutationPhaseContent['checkpoint'] };

export const MutationCodeCheckpointSection = ({ content }: Props) => (
  <section
    id="code-checkpoint"
    aria-labelledby="heading-code-checkpoint"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="code-checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.65fr)_minmax(0,_1.7fr)] gap-3">
      <CheckpointInfoCard
        rows={[
          {
            label: content.info.fileLabel,
            icon: FileCode,
            value: <PathList items={content.info.filePaths} mono />,
          },
          {
            label: content.info.watchLabel,
            icon: PackageOpen,
            value: <PathList items={content.info.watchItems} mono />,
          },
        ]}
        question={content.info.question}
      />
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1.55fr)_minmax(0,_0.55fr)] gap-3 min-w-0">
        <CodeCard code={content.code} />
        <MaskCallout callout={content.maskCallout} />
      </div>
    </div>

    <CorePointsCard title={content.corePointsTitle} points={content.corePoints} />
  </section>
);

const PathList = ({ items, mono }: { items: string[]; mono?: boolean }) => (
  <ul className="flex flex-col gap-1">
    {items.map((v) => (
      <li key={v}>
        <code
          className={cx(
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

const CodeCard = ({ code }: { code: MutationPhaseContent['checkpoint']['code'] }) => (
  <article className="flex flex-col gap-2 min-w-0">
    <header className="flex items-center justify-between gap-2 px-1">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono break-keep">
        {code.title}
      </h3>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        ts
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={code.code} language="ts" />
    </div>
  </article>
);

const MaskCallout = ({
  callout,
}: {
  callout: MutationPhaseContent['checkpoint']['maskCallout'];
}) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cx(
        'flex flex-col gap-sm rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="teal" size="sm">
          <Flag className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-xsm sm:text-sm font-bold break-keep', t.fill.text)}>
          {callout.title}
        </h3>
      </header>
      <ul className="flex flex-col gap-1.5">
        {callout.items.map((item) => (
          <li
            key={item}
            className={cx(
              'flex items-start gap-2 text-[11px] sm:text-xsm leading-snug break-keep',
              t.fill.text,
            )}
          >
            <span
              aria-hidden="true"
              className={cx('mt-1.5 inline-block h-1 w-1 rounded-full shrink-0', t.dot)}
            />
            <code className="font-mono">{item}</code>
          </li>
        ))}
      </ul>
    </article>
  );
};

const CorePointsCard = ({ title, points }: { title: string; points: string[] }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cx(
        'rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="mb-sm flex items-center gap-2">
        <ToneIconBox tone="sky" size="sm">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-sm sm:text-md font-bold', t.fill.text)}>{title}</h3>
      </header>
      <ul className="flex flex-col gap-1.5">
        {points.map((p) => (
          <li
            key={p}
            className={cx(
              'flex items-start gap-2 text-xsm sm:text-sm leading-snug break-keep',
              t.fill.text,
            )}
          >
            <span
              aria-hidden="true"
              className={cx('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
