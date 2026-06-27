import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { SharedContent } from '../content';
import { sharedIcon } from '../icons';

type Props = { content: SharedContent['symbolsCheckpoint'] };

export const SymbolsCheckpoint = ({ content }: Props) => {
  const cp = content.checkpoint;

  return (
    <section aria-labelledby="heading-symbols-checkpoint" className="space-y-md">
      <SectionHeader
        id="symbols-checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckHeaderIcon />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {content.callouts.map((callout) => (
          <li key={callout.id}>
            <CalloutCard title={callout.title} code={callout.code} />
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        <CheckpointInfoCard
          rows={[
            {
              label: cp.file.label,
              value: <code className="font-mono break-all">{cp.file.value}</code>,
              icon: sharedIcon.fileText,
            },
            {
              label: cp.look.label,
              value: (
                <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                  {cp.look.values.join(', ')}
                </code>
              ),
              icon: sharedIcon.fileCode,
            },
          ]}
          question={cp.question.value}
        />

        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <GithubButton href={content.primaryHref} label={content.primaryCta} />
        </div>
      </div>
    </section>
  );
};

const CalloutCard = ({ title, code }: { title: string; code: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-1.5 rounded-xl border p-md',
      'bg-[var(--term-bg)] border-[var(--term-border)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="text-[10px] uppercase tracking-wider font-bold font-mono text-[var(--term-muted)]">
      {title}
    </span>
    <code className="text-xsm font-mono leading-snug break-all text-[var(--term-fg)]">{code}</code>
  </article>
);

const CheckHeaderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
