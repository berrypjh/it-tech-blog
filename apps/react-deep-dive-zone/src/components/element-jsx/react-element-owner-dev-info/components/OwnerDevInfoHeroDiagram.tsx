import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import type { ToneKey } from '../../../shared/tones';
import type { FieldChip, ReactElementOwnerDevInfoContent } from '../content';
import { BugIcon, CodeIcon } from '../icons';
import { localTone } from '../localTone';

type Props = { content: ReactElementOwnerDevInfoContent['hero']; className?: string };

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
  const t = localTone(tone);
  return (
    <div className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn('inline-flex items-center justify-center w-9 h-9 rounded-md border', t.chip)}
      >
        {icon}
      </span>
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const FieldChips = ({ fields, tone }: { fields: FieldChip[]; tone: ToneKey }) => {
  const t = localTone(tone);
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
