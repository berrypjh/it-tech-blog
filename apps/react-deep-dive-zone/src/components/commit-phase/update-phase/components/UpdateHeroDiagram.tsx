import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent } from '../content';
import { LockIcon, PencilIcon, RepeatIcon, TypeIcon } from '../icons';

type Props = { content: UpdatePhaseContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 재사용된 기존 host node → Update flag(변경 필요 표시) → props update / text update로
 * 이어지는 commitUpdate 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const UpdateHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.leftTitle}: ${diagram.leftCode} → ${diagram.centerTitle}(${diagram.centerSubtitle}) → ${diagram.branch1Title}: ${diagram.branch1Detail}, ${diagram.branch2Title}: ${diagram.branch2Detail}`;

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
        <StepHeader
          tone="indigo"
          label={diagram.leftTitle}
          icon={<RepeatIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
        />
        <CodePreviewPanel
          code={diagram.leftCode}
          showWindowDots
          caption={diagram.leftPreview}
          language="JSX"
          size="md"
        />

        <DownArrow />

        <FlagRow title={diagram.centerTitle} subtitle={diagram.centerSubtitle} />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="sky"
              label={diagram.branch1Title}
              detail={diagram.branch1Detail}
              icon={<LockIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
            />
            <CodePreviewPanel code={diagram.branch1Code} showWindowDots={false} language="JSX" />
          </li>

          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="teal"
              label={diagram.branch2Title}
              detail={diagram.branch2Detail}
              icon={<TypeIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
            />
            <DiffRow before={diagram.branch2BeforeCode} after={diagram.branch2AfterCode} />
          </li>
        </ol>
      </div>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  detail,
  icon,
}: {
  tone: ToneKey;
  label: string;
  detail?: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm" aria-hidden="true">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
        {label}
      </span>
      {detail ? (
        <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {detail}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      )}
    </div>
  );
};

const FlagRow = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border px-md py-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        t.chip,
        t.border,
      )}
      aria-hidden="true"
    >
      <ToneIconBox tone="sky" size="sm">
        <PencilIcon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {subtitle}
        </span>
      </div>
    </article>
  );
};

const DiffRow = ({ before, after }: { before: string; after: string }) => {
  const t = toneTokens.teal;
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-lg border px-md py-2',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
      aria-hidden="true"
    >
      <code className="font-mono text-[12px] text-[var(--term-fg)]">{before}</code>
      <DownArrow horizontal />
      <code className={cn('font-mono text-[12px] font-bold', t.text)}>{after}</code>
    </div>
  );
};

const DownArrow = ({ horizontal }: { horizontal?: boolean }) => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    {horizontal ? '→' : '↓'}
  </span>
);
