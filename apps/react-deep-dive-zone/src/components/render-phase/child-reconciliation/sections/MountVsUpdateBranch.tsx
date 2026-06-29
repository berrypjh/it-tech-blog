import { cn } from '@it-tech-blog/utils';

import { ComparePanel } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ReconcileChildrenContent } from '../content';
import { GitForkIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['mountVsUpdate'] };

type Branch = ReconcileChildrenContent['mountVsUpdate']['mount'];

const panelTone = (tone: ToneKey) => {
  const t = toneTokens[tone];
  return {
    card: cn(t.border, 'shadow-[0_2px_0_var(--term-border)]'),
    iconBadge: cn('border border-[var(--term-border)] bg-[var(--term-surface)]', t.text),
    header: t.text,
  };
};

export const MountVsUpdateBranch = ({ content }: Props) => (
  <section id="mount-vs-update" aria-labelledby="heading-mount-vs-update" className="space-y-md">
    <SectionHeader
      id="mount-vs-update"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg items-stretch">
      <BranchPanel branch={content.mount} tone="teal" headerId="branch-mount-header" />
      <BranchPanel branch={content.update} tone="violet" headerId="branch-update-header" />
    </div>
  </section>
);

type PanelProps = { branch: Branch; tone: ToneKey; headerId: string };

const BranchPanel = ({ branch, tone, headerId }: PanelProps) => {
  const t = toneTokens[tone];
  return (
    <ComparePanel
      tone={panelTone(tone)}
      icon={<GitForkIcon className="h-3.5 w-3.5" />}
      title={branch.title}
      headerId={headerId}
    >
      <div className="flex flex-wrap items-center gap-2">
        <code
          className={cn(
            'inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm font-bold',
            t.text,
          )}
        >
          {branch.condition}
        </code>
        <code className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm font-bold text-[var(--term-fg)]">
          {branch.fn}
        </code>
      </div>

      <ul className="flex flex-wrap gap-2" aria-hidden="true">
        {branch.outcomes.map((outcome, idx) => (
          <li key={`${outcome}-${idx}`}>
            <OutcomeChip outcome={outcome} fallbackTone={tone} />
          </li>
        ))}
      </ul>

      <p className="mt-auto text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {branch.description}
      </p>
    </ComparePanel>
  );
};

/** outcome 라벨 → 칩 스타일. delete는 의미색(rose), reuse는 중립, 그 외는 패널 톤. */
const OutcomeChip = ({ outcome, fallbackTone }: { outcome: string; fallbackTone: ToneKey }) => {
  const base =
    'inline-flex items-center rounded-full border px-2.5 py-1 text-xxsm font-mono font-bold uppercase tracking-wider';
  if (outcome === 'delete') {
    return (
      <span
        className={cn(
          base,
          'line-through border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800/70 dark:bg-rose-950/40 dark:text-rose-200',
        )}
      >
        {outcome}
      </span>
    );
  }
  if (outcome === 'reuse') {
    return (
      <span
        className={cn(
          base,
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
        )}
      >
        {outcome}
      </span>
    );
  }
  return <span className={cn(base, toneTokens[fallbackTone].chip)}>{outcome}</span>;
};
