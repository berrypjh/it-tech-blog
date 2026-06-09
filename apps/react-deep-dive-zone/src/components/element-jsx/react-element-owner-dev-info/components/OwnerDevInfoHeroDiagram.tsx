import { cn } from '@it-tech-blog/utils';

import { DownArrow } from '../../../shared/DownArrow';
import { HeroDiagramShell } from '../../../shared/HeroDiagramShell';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FieldChip, ReactElementOwnerDevInfoContent } from '../content';
import { BugIcon, CodeIcon } from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Base Element 위에 개발 모드 전용 Development Info가 얹히는 구조를
 * 위에서 아래로 잇는 컴팩트 stepper. 마지막에 의도(렌더링 변경이 아닌 디버깅)를 강조한다.
 */
export const OwnerDevInfoHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle} — ${content.baseLabel}: ${content.baseFields
    .map((f) => f.label)
    .join(', ')}; ${content.devLabel}: ${content.devFields
    .map((f) => f.label)
    .join(', ')}. ${content.bottomNote}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="sky"
            label={content.baseLabel}
            icon={<CodeIcon className="h-[18px] w-[18px]" />}
          />
          <FieldChips fields={content.baseFields} tone="sky" />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="violet"
            label={content.devLabel}
            icon={<BugIcon className="h-[18px] w-[18px]" />}
          />
          <FieldChips fields={content.devFields} tone="violet" />
        </li>

        <DownArrow />

        <li>
          <p className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-3 text-xsm font-bold leading-relaxed text-[var(--term-accent)] break-keep shadow-[0_2px_0_var(--term-border)]">
            {content.bottomNote}
          </p>
        </li>
      </ol>
    </HeroDiagramShell>
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
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const FieldChips = ({ fields, tone }: { fields: FieldChip[]; tone: ToneKey }) => {
  const t = toneTokens[tone];
  return (
    <ul className="flex flex-wrap gap-1.5">
      {fields.map((field) => (
        <li key={field.id}>
          <code
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-mono font-bold tracking-tight',
              t.chip,
            )}
          >
            {field.label}
          </code>
        </li>
      ))}
    </ul>
  );
};
