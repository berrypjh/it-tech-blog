import { cn } from '@it-tech-blog/utils';

import { Atom, Box, Boxes, Clock, Code, Layers, type LucideIcon, Monitor } from 'lucide-react';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowNode } from '../content';

const nodeIcon: Record<FlowNode['id'], LucideIcon> = {
  'user-code': Code,
  react: Atom,
  reconciler: Boxes,
  renderer: Monitor,
  'dom-native': Box,
};

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
            icon={Clock}
          />
          <SideAxisCard
            title={shared.title}
            subtitle={shared.subtitle}
            description={shared.description}
            tone="amber"
            icon={Layers}
          />
        </aside>
      </div>
    </div>
  );
};

/** 중앙 노드와 보조 축 카드가 공유하는 텍스트 스케일. 모두 가운데 정렬. */
const CARD_CLASS = 'flex flex-col items-center gap-1 text-center';
const TITLE_CLASS = 'text-sm font-bold font-mono tracking-tight';
const SUBTITLE_CLASS = 'text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep';
const DESCRIPTION_CLASS = 'text-xsm leading-relaxed text-[var(--term-muted)] break-keep';

type FlowBoxProps = {
  node: FlowNode;
  compact: boolean;
  emphasized?: boolean;
};

const FlowBox = ({ node, compact, emphasized }: FlowBoxProps) => {
  const tone = toneTokens[node.tone];
  const Icon = nodeIcon[node.id];

  return (
    <article
      className={cn(
        CARD_CLASS,
        'rounded-xl border',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        emphasized ? 'border-[var(--term-accent)]' : 'border-[var(--term-border)]',
        compact ? 'px-3 py-2 w-[14rem]' : 'p-md w-full max-w-[22rem]',
      )}
    >
      <span className="flex items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn(TITLE_CLASS, tone.text)}>{node.label}</span>
      </span>
      {node.subtitle && <span className={SUBTITLE_CLASS}>{node.subtitle}</span>}
      {!compact && node.description && (
        <p className={cn(DESCRIPTION_CLASS, 'mt-1')}>{node.description}</p>
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
  icon: LucideIcon;
};

const SideAxisCard = ({ title, subtitle, description, tone, icon: Icon }: SideAxisCardProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        CARD_CLASS,
        'rounded-xl border-2 border-dashed p-md',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span className="flex items-center gap-2">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn(TITLE_CLASS, t.text)}>{title}</span>
      </span>
      <span className={SUBTITLE_CLASS}>{subtitle}</span>
      {description && <p className={cn(DESCRIPTION_CLASS, 'mt-1')}>{description}</p>}
    </article>
  );
};
