import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../getting-started/_shared/tones';
import type { FlowNode } from '../content';
import { pdIcon } from '../icons';

type Props = {
  main: FlowNode[];
  scheduler: { title: string; subtitle: string; description?: string };
  shared: { title: string; subtitle: string; description?: string };
  a11y: string;
  compact?: boolean;
  className?: string;
};

/**
 * 챕터 최종 다이어그램.
 * 중앙: 사용자 코드 → react → react-reconciler → renderer → DOM/Native (5단계 stepper)
 * 우측: scheduler / shared 두 보조 축 (dashed connector)
 */
export const FinalArchitectureDiagram = ({
  main,
  scheduler,
  shared,
  a11y,
  compact = false,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        compact ? 'px-md py-md sm:p-md' : 'px-md py-lg sm:p-lg',
        'overflow-hidden',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_82%_85%,rgba(251,191,36,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div
        className={cn(
          'relative grid gap-md',
          'grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)]',
        )}
      >
        {/* 중앙 main flow */}
        <ol className="flex flex-col items-center gap-sm" aria-hidden="true">
          {main.map((node, i) => (
            <li key={node.id} className="flex flex-col items-center gap-sm w-full">
              <FlowBox node={node} compact={compact} emphasized={i === 2 /* reconciler */} />
              {i < main.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        {/* 우측 보조 축 */}
        <aside className="flex flex-col gap-md justify-center" aria-hidden="true">
          <SideAxisCard
            title={scheduler.title}
            subtitle={scheduler.subtitle}
            description={scheduler.description}
            tone="cyan"
            iconName="clock"
          />
          <SideAxisCard
            title={shared.title}
            subtitle={shared.subtitle}
            description={shared.description}
            tone="amber"
            iconName="layers"
          />
        </aside>
      </div>
    </div>
  );
};

type FlowBoxProps = {
  node: FlowNode;
  compact: boolean;
  emphasized?: boolean;
};

const FlowBox = ({ node, compact, emphasized }: FlowBoxProps) => {
  const tone = toneTokens[node.tone];
  const Icon = pdIcon[node.iconName];

  return (
    <article
      className={cn(
        'inline-flex flex-col items-center gap-1 rounded-xl border',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        emphasized ? tone.chip : 'border-[var(--term-border)]',
        emphasized && tone.border,
        !emphasized && tone.borderHover,
        compact ? 'px-3 py-2 w-[14rem]' : 'px-md py-3 w-[16rem]',
      )}
    >
      <span className="inline-flex items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>
          {node.label}
        </span>
      </span>
      {node.subtitle && (
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep text-center">
          {node.subtitle}
        </span>
      )}
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="text-[var(--term-accent)] text-xl leading-none inline-flex items-center justify-center"
  >
    ↓
  </span>
);

type SideAxisCardProps = {
  title: string;
  subtitle: string;
  description?: string;
  tone: ToneKey;
  iconName: keyof typeof pdIcon;
};

const SideAxisCard = ({ title, subtitle, description, tone, iconName }: SideAxisCardProps) => {
  const t = toneTokens[tone];
  const Icon = pdIcon[iconName];
  return (
    <article
      className={cn(
        'flex flex-col gap-1 rounded-xl border-2 border-dashed p-md',
        t.border,
        t.chip,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span className="flex items-center gap-2">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn('text-sm font-bold font-mono tracking-tight', t.text)}>{title}</span>
      </span>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
        {subtitle}
      </span>
      {description && (
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-1">
          {description}
        </p>
      )}
    </article>
  );
};
