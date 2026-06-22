import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitToneKey } from '../../_shared/tones';
import type { BeforeMutationContent, PhaseTimelineStep } from '../content';
import { CameraIcon, EyeIcon } from '../icons';

type Props = { content: BeforeMutationContent['hero']; className?: string };

/** 공유 ToneKey에 없는 commit 전용 tone을 가장 가까운 ToneKey로 매핑한다. */
const toneKeyMap: Record<CommitToneKey, ToneKey> = {
  sky: 'sky',
  blue: 'blue',
  cyan: 'cyan',
  teal: 'teal',
  violet: 'violet',
  indigo: 'indigo',
  rose: 'amber',
  amber: 'amber',
  orange: 'amber',
  emerald: 'emerald',
};

/**
 * Hero 핵심 비주얼.
 * 변경 전 DOM → snapshot 캡처 → 변경 후 DOM으로 이어지는 before-mutation 흐름을
 * 위에서 아래로 잇고, 그 아래 commit phase 4단계 stepper로 위치를 보여준다.
 */
export const BeforeMutationHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.leftTitle} → ${diagram.centerLabel} → ${diagram.rightTitle}. ${diagram.phaseTimeline.map((s) => s.title).join(' → ')}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm">
        <header className="flex items-center gap-sm" aria-hidden="true">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {'// current DOM → snapshot → next DOM'}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            snapshot
          </span>
        </header>

        <h2 className="text-center text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
          {diagram.title}
        </h2>

        <DomStep tone="teal" label={diagram.leftTitle} code={diagram.leftCode} />

        <DownArrow />

        <SnapshotStep label={diagram.centerLabel} />

        <DownArrow />

        <DomStep tone="sky" label={diagram.rightTitle} code={diagram.rightCode} />

        <ol
          className="mt-sm pt-md border-t border-dashed border-[var(--term-border)] grid grid-cols-2 @xl:grid-cols-4 gap-2"
          aria-hidden="true"
        >
          {diagram.phaseTimeline.map((step) => (
            <li key={step.key} className="min-w-0">
              <PhaseStep step={step} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const DomStep = ({ tone, label, code }: { tone: ToneKey; label: string; code: string }) => {
  const t = toneTokens[tone];
  return (
    <div className="flex flex-col gap-sm">
      <div className="flex items-center gap-sm" aria-hidden="true">
        <span className={cn('text-xsm font-bold tracking-tight break-keep', t.text)}>{label}</span>
        <span className="flex-1 border-t border-dashed border-[var(--term-border)]" />
      </div>
      <CodePreviewPanel code={code} language="html" showWindowDots />
    </div>
  );
};

const SnapshotStep = ({ label }: { label: string }) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'transition-all hover:-translate-y-0.5',
      toneTokens.teal.borderHover,
    )}
    aria-hidden="true"
  >
    <ToneIconBox tone="teal" size="sm">
      <CameraIcon className="h-[18px] w-[18px]" aria-hidden="true" />
    </ToneIconBox>
    <span className={cn('text-sm font-bold tracking-tight break-keep', toneTokens.teal.text)}>
      {label}
    </span>
  </article>
);

const PhaseStep = ({ step }: { step: PhaseTimelineStep }) => {
  const tone = toneKeyMap[step.tone];
  const t = toneTokens[tone];
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
        'shadow-[0_2px_0_var(--term-border)]',
        step.active ? cn(t.chip, t.border) : cn('border-[var(--term-border)]', t.borderHover),
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {step.active ? (
          <EyeIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        ) : (
          <span className={cn('block h-1.5 w-1.5 rounded-full', t.dot)} aria-hidden="true" />
        )}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span
          className={cn(
            'text-[11px] sm:text-xsm font-bold leading-tight break-keep',
            step.active ? t.text : 'text-[var(--term-fg)]',
          )}
        >
          {step.title}
        </span>
        <span className="text-[10px] leading-tight text-[var(--term-muted)] break-keep">
          {step.subtitle}
        </span>
      </div>
    </div>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
