import { cx } from '@berrypjh/react-ui';
import { Camera, Eye } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { BeforeMutationContent, PhaseTimelineStep } from '../content';

type Props = { content: BeforeMutationContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * 변경 전 DOM → snapshot 캡처 → 변경 후 DOM으로 이어지는 before-mutation 흐름을
 * 위에서 아래로 잇고, 그 아래 commit phase 4단계 stepper로 위치를 보여준다.
 */
export const BeforeMutationHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.leftTitle} → ${diagram.centerLabel} → ${diagram.rightTitle}. ${diagram.phaseTimeline.map((s) => s.title).join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <span className="text-center text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
          {diagram.title}
        </span>

        <DomStep tone="teal" label={diagram.leftTitle} code={diagram.leftCode} />

        <DownArrow />

        <SnapshotStep label={diagram.centerLabel} />

        <DownArrow />

        <DomStep tone="sky" label={diagram.rightTitle} code={diagram.rightCode} />

        <ol className="mt-sm pt-md border-t border-dashed border-[var(--term-border)] grid grid-cols-2 @xl:grid-cols-4 gap-2">
          {diagram.phaseTimeline.map((step) => (
            <li key={step.key} className="min-w-0">
              <PhaseStep step={step} />
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const DomStep = ({ tone, label, code }: { tone: ToneKey; label: string; code: string }) => {
  const t = toneTokens[tone];
  return (
    <div className="flex flex-col gap-sm">
      <div className="flex items-center gap-sm">
        <span className={cx('text-xsm font-bold tracking-tight break-keep', t.text)}>{label}</span>
        <span className="flex-1 border-t border-dashed border-[var(--term-border)]" />
      </div>
      <CodePreviewPanel code={code} language="html" showWindowDots />
    </div>
  );
};

const SnapshotStep = ({ label }: { label: string }) => (
  <div
    className={cx(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="teal" size="sm">
      <Camera className="h-4 w-4" />
    </ToneIconBox>
    <span className={cx('text-sm font-bold tracking-tight break-keep', toneTokens.teal.text)}>
      {label}
    </span>
  </div>
);

const PhaseStep = ({ step }: { step: PhaseTimelineStep }) => {
  const tone = step.tone;
  const t = toneTokens[tone];
  return (
    <div
      className={cx(
        'flex items-center gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
        'shadow-[0_2px_0_var(--term-border)]',
        step.active ? cx(t.chip, t.border) : 'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {step.active ? (
          <Eye className="h-4 w-4" />
        ) : (
          <span className={cx('block h-1.5 w-1.5 rounded-full', t.dot)} />
        )}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span
          className={cx(
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
