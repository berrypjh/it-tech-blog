import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneBadge, ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { EnqueueConcurrentHookUpdateContent } from '../content';
import { ArrowRightIcon, DatabaseIcon, NetworkIcon, SparklesIcon } from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['rootReason'] };

export const RootReasonSection = ({ content }: Props) => (
  <section id="section-root-reason" aria-labelledby="heading-root-reason" className="space-y-md">
    <SectionHeader
      id="root-reason"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <Node
        tone="emerald"
        title={content.leftNode.title}
        body={content.leftNode.body}
        badge={content.leftNode.badge}
        icon={<DatabaseIcon className="h-5 w-5" />}
      />

      <MiddleConnector label={content.middleLabel} />

      <Node
        tone="sky"
        title={content.rightNode.title}
        body={content.rightNode.body}
        badge={content.rightNode.badge}
        icon={<NetworkIcon className="h-5 w-5" />}
      />
    </div>

    <div className="flex items-start gap-sm rounded-lg border border-[var(--term-border)] border-l-[3px] border-l-[var(--term-accent)] bg-[var(--term-surface)] p-md">
      <SparklesIcon
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--term-accent)]"
      />
      <p className="text-xsm sm:text-sm font-semibold leading-relaxed text-[var(--term-fg)] break-keep">
        {content.bottomMessage}
      </p>
    </div>
  </section>
);

const Node = ({
  tone,
  title,
  body,
  badge,
  icon,
}: {
  tone: ToneKey;
  title: string;
  body: string;
  badge: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={tone} size="md">
          {icon}
        </ToneIconBox>
        <ToneBadge tone={tone}>{badge}</ToneBadge>
      </header>
      <h3 className={cn('text-md sm:text-lg font-bold font-mono leading-tight break-keep', t.text)}>
        {title}
      </h3>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {body}
      </p>
    </article>
  );
};

const MiddleConnector = ({
  label,
}: {
  label: EnqueueConcurrentHookUpdateContent['rootReason']['middleLabel'];
}) => (
  <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
    <span
      aria-hidden="true"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
    >
      <ArrowRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
    </span>
    <div className="flex flex-col items-center text-center">
      <span className="text-xxsm font-bold uppercase tracking-wider text-[var(--term-fg)]">
        {label.line1}
      </span>
      <span className="text-[10px] font-mono text-[var(--term-muted)] break-keep max-w-[18ch]">
        {label.line2}
      </span>
    </div>
  </div>
);
