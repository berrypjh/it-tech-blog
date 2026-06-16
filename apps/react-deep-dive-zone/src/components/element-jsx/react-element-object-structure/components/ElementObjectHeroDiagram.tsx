import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { DownArrow } from '../../../shared/DownArrow';
import { HeroDiagramShell } from '../../../shared/HeroDiagramShell';
import type { HeroCallout, ReactElementObjectStructureContent } from '../content';
import { BoxIcon, FingerprintIcon, KeyIcon, PanelIcon, UserIcon } from '../icons';
import { toneBorderHover, ToneChip, ToneIconBox, toneText } from '../localTone';

type Props = { content: ReactElementObjectStructureContent['hero']; className?: string };

/** 필드명으로 아이콘을 고른다. 본문 필드 카드와 동일한 매핑을 따른다. */
const fieldIcon: Record<string, typeof BoxIcon> = {
  $$typeof: FingerprintIcon,
  type: BoxIcon,
  key: KeyIcon,
  props: PanelIcon,
  _owner: UserIcon,
};

/**
 * Hero 핵심 비주얼.
 * React Element 객체 코드 → ↓ → 필드별 카드로 이어지는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ElementObjectHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.codeCardLabel} — ${content.callouts
    .map((c) => `${c.field}: ${c.label}`)
    .join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <div className="relative flex flex-col items-stretch gap-sm">
        <CodePreviewPanel
          code={content.code}
          language="JS"
          showWindowDots
          caption={content.codeCardLabel}
          size="sm"
        />

        <DownArrow />

        <ol className="grid grid-cols-1 @sm:grid-cols-2 gap-sm items-stretch" aria-hidden="true">
          {content.callouts.map((callout) => (
            <li key={callout.id} className="flex min-w-0">
              <FieldCard callout={callout} />
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const FieldCard = ({ callout }: { callout: HeroCallout }) => {
  const Icon = fieldIcon[callout.field] ?? BoxIcon;
  return (
    <article
      className={cn(
        'group flex flex-1 min-w-0 items-start gap-sm rounded-xl border bg-[var(--term-surface)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        toneBorderHover,
      )}
    >
      <ToneIconBox tone={callout.tone} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <ToneChip
          tone={callout.tone}
          className="rounded-md text-[11px] font-mono font-bold tracking-tight"
        >
          {callout.field}
        </ToneChip>
        <h3 className={cn('text-sm font-bold tracking-tight', toneText(callout.tone))}>
          {callout.label}
        </h3>
      </div>
    </article>
  );
};
