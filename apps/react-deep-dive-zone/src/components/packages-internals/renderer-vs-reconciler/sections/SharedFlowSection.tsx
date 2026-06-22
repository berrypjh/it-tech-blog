import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { RvrContent } from '../content';
import { rvrIcon } from '../icons';

type Props = { content: RvrContent['flow'] };

/** A=amber(reconciler), B=sky(renderer/DOM), C=violet(native). */
type Accent = 'A' | 'B' | 'C';

const accentText: Record<Accent, string> = {
  A: 'text-[var(--term-accent)]',
  B: 'text-sky-600 dark:text-sky-300',
  C: 'text-violet-600 dark:text-violet-300',
};

export const SharedFlowSection = ({ content }: Props) => {
  const a11y = `${content.elementLabel} → ${content.reconcilerLabel} (${content.reconcilerSubtitle}) → ${content.domRendererLabel}/${content.nativeRendererLabel} → ${content.domNodeLabel}/${content.nativeViewLabel}.`;

  return (
    <section aria-labelledby="heading-flow" className="space-y-md">
      <SectionHeader
        id="flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<rvrIcon.gitBranch className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.3fr)_minmax(0,_0.85fr)] gap-md items-stretch">
        {/* 좌측 보조 카드 */}
        <HelperCard
          helper={content.leftHelper}
          accent="A"
          iconName="cube"
          className="order-2 lg:order-1"
        />

        {/* 중앙 다이어그램 */}
        <div
          className={cn(
            'relative order-1 lg:order-2 rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] overflow-hidden',
          )}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,var(--term-accent-soft),transparent_55%)] opacity-50"
          />
          <p className="sr-only">{a11y}</p>

          <div className="relative flex flex-col items-center gap-sm" aria-hidden="true">
            <FlowNode label={content.elementLabel} accent="B" iconName="layers" />
            <DownArrow />
            <FlowNode
              label={content.reconcilerLabel}
              subtitle={content.reconcilerSubtitle}
              accent="A"
              iconName="cube"
              emphasized
            />

            {/* 갈래 */}
            <BranchArrows />

            <div className="grid grid-cols-2 gap-sm w-full">
              <FlowNode
                label={content.domRendererLabel}
                subtitle={content.domRendererSubtitle}
                accent="B"
                iconName="monitor"
                fill
              />
              <FlowNode
                label={content.nativeRendererLabel}
                subtitle={content.nativeRendererSubtitle}
                accent="C"
                iconName="smartphone"
                fill
              />
            </div>

            <div className="grid grid-cols-2 gap-sm w-full">
              <div className="flex min-w-0 flex-col items-center gap-sm">
                <DownArrow />
                <FlowNode
                  label={content.domNodeLabel}
                  subtitle={content.domNodeSubtitle}
                  accent="B"
                  iconName="code"
                  small
                  fill
                />
              </div>
              <div className="flex min-w-0 flex-col items-center gap-sm">
                <DownArrow />
                <FlowNode
                  label={content.nativeViewLabel}
                  subtitle={content.nativeViewSubtitle}
                  accent="C"
                  iconName="smartphone"
                  small
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        {/* 우측 보조 카드 */}
        <HelperCard
          helper={content.rightHelper}
          accent="B"
          iconName="monitor"
          className="order-3"
        />
      </div>
    </section>
  );
};

type FlowNodeProps = {
  label: string;
  subtitle?: string;
  accent: Accent;
  iconName: keyof typeof rvrIcon;
  emphasized?: boolean;
  small?: boolean;
  /** 그리드 칸을 가득 채워 라벨이 칸 안에서 줄바꿈되게 한다. */
  fill?: boolean;
};

const FlowNode = ({
  label,
  subtitle,
  accent,
  iconName,
  emphasized,
  small,
  fill,
}: FlowNodeProps) => {
  const text = accentText[accent];
  const Icon = rvrIcon[iconName];

  return (
    <article
      className={cn(
        'inline-flex min-w-0 flex-col items-center gap-1 rounded-xl border',
        'shadow-[0_2px_0_var(--term-border)]',
        emphasized
          ? 'bg-[var(--term-surface)] border-[var(--term-accent)]'
          : 'bg-[var(--term-bg)] border-[var(--term-border)]',
        emphasized && 'lg:shadow-[0_3px_0_var(--term-border)]',
        small ? 'px-2 py-1.5' : 'px-md py-2.5',
        fill ? 'w-full' : '',
      )}
    >
      <span className="flex w-full min-w-0 items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            'bg-[var(--term-surface)] border-[var(--term-border)]',
            text,
          )}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span
          className={cn(
            'min-w-0 font-bold font-mono tracking-tight break-keep',
            small ? 'text-xsm' : 'text-sm',
            text,
          )}
        >
          {label}
        </span>
      </span>
      {subtitle && (
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] text-center break-keep">
          {subtitle}
        </span>
      )}
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

const BranchArrows = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 40"
    className="w-full max-w-md h-8"
    preserveAspectRatio="none"
  >
    <path
      d="M 100 0 L 100 16 L 50 16 L 50 36"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
      className="text-[var(--term-accent)]"
    />
    <path
      d="M 100 0 L 100 16 L 150 16 L 150 36"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
      className="text-[var(--term-accent)]"
    />
    <path d="M 46 36 L 50 40 L 54 36 Z" fill="currentColor" className="text-[var(--term-accent)]" />
    <path
      d="M 146 36 L 150 40 L 154 36 Z"
      fill="currentColor"
      className="text-[var(--term-accent)]"
    />
  </svg>
);

const HelperCard = ({
  helper,
  accent,
  iconName,
  className,
}: {
  helper: { title: string; body: string };
  accent: Accent;
  iconName: keyof typeof rvrIcon;
  className?: string;
}) => {
  const text = accentText[accent];
  const Icon = rvrIcon[iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-surface)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] hover:border-[var(--term-accent)]',
        'transition-all hover:-translate-y-0.5',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-md border',
          'bg-[var(--term-surface)] border-[var(--term-border)]',
          text,
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className={cn('text-md font-bold tracking-tight break-keep', text)}>{helper.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{helper.body}</p>
    </article>
  );
};
