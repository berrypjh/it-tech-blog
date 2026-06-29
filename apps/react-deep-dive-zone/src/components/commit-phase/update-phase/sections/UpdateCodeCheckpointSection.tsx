import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent } from '../content';
import { CodeIcon, FileCodeIcon, PackageOpenIcon } from '../icons';

type Props = { content: UpdatePhaseContent['checkpoint'] };

export const UpdateCodeCheckpointSection = ({ content }: Props) => (
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

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_0.7fr)_minmax(0,_1.2fr)] gap-3">
      <CheckpointInfoCard
        rows={[
          {
            label: content.info.fileLabel,
            icon: FileCodeIcon,
            value: <code className="font-mono break-all">{content.info.filePath}</code>,
          },
          {
            label: content.info.watchLabel,
            icon: PackageOpenIcon,
            value: <PathList items={content.info.watchItems} />,
          },
        ]}
        question={content.info.question}
      />
      <FunctionsCard title={content.functionsTitle} functions={content.functions} />
      <CodeCard code={content.code} />
    </div>
  </section>
);

const PathList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-1">
    {items.map((v) => (
      <li key={v}>
        <code className="block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-1 text-xsm font-mono font-bold text-[var(--term-fg)] break-all">
          {v}
        </code>
      </li>
    ))}
  </ul>
);

const FunctionsCard = ({
  title,
  functions,
}: {
  title: string;
  functions: UpdatePhaseContent['checkpoint']['functions'];
}) => (
  <article className="flex h-full flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
    <header className="flex items-center gap-2">
      <ToneIconBox tone="violet" size="sm">
        <CodeIcon className="h-4 w-4" />
      </ToneIconBox>
      <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
        {title}
      </h3>
    </header>

    <ul className="flex flex-col gap-2">
      {functions.map((fn) => {
        const t = toneTokens[fn.tone];
        return (
          <li key={fn.name}>
            <article
              className={cn(
                'flex flex-col gap-1 rounded-lg border-2 p-sm sm:p-md',
                t.fill.border,
                t.fill.bg,
              )}
            >
              <code
                className={cn('text-xsm sm:text-sm font-bold font-mono break-all', t.fill.text)}
              >
                {fn.name}
              </code>
              <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {fn.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </article>
);

const CodeCard = ({ code }: { code: UpdatePhaseContent['checkpoint']['code'] }) => (
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
