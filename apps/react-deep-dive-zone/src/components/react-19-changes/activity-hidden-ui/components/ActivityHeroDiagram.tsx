import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ActivityHiddenUiContent } from '../content';
import { EyeIcon, EyeOffIcon, RefreshCcwIcon } from '../icons';

type Props = { content: ActivityHiddenUiContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 조건부 렌더링(언마운트) → Activity의 visible ↔ hidden 모드 전환 → Activity 코드로
 * 이어지는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ActivityHeroDiagram = ({ content, className }: Props) => {
  const { conditionalCode, modeSwitch, activityCode } = content;
  const a11y = `${conditionalCode.title} → ${modeSwitch.title}: ${modeSwitch.visibleLabel}(${modeSwitch.visibleCaption}) ↔ ${modeSwitch.hiddenLabel}(${modeSwitch.hiddenCaption}). ${modeSwitch.footer}. ${activityCode.title}`;

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

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="amber"
            label={conditionalCode.title}
            icon={<EyeOffIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel
            code={conditionalCode.code}
            badge={conditionalCode.langBadge}
            language="JSX"
            size="sm"
          />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="blue"
            label={modeSwitch.title}
            icon={<RefreshCcwIcon className="h-[18px] w-[18px]" />}
          />
          <div className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
            <ModeCard
              tone="teal"
              label={modeSwitch.visibleLabel}
              caption={modeSwitch.visibleCaption}
              icon={<EyeIcon className="h-4 w-4" />}
            />
            <ModeCard
              tone="amber"
              label={modeSwitch.hiddenLabel}
              caption={modeSwitch.hiddenCaption}
              icon={<EyeOffIcon className="h-4 w-4" />}
            />
          </div>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {modeSwitch.footer}
          </p>
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="teal"
            label={activityCode.title}
            icon={<EyeIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel
            code={activityCode.code}
            badge={activityCode.langBadge}
            language="JSX"
            size="sm"
          />
        </li>
      </ol>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const ModeCard = ({
  tone,
  label,
  caption,
  icon,
}: {
  tone: ToneKey;
  label: string;
  caption: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <code className={cn('font-mono text-xsm font-bold', t.text)}>{label}</code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{caption}</span>
      </div>
    </article>
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
