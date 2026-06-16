import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { RnContent, ToneKey } from '../content';
import { MapIcon, rnIcon } from '../icons';
import { ToneIconBox, toneText } from '../localTone';

type Props = { content: RnContent['common']; sectionId: string };

export const CommonReconcilerSection = ({ content, sectionId }: Props) => {
  const d = content.diagram;
  const a11y = `${d.elementTitle} → ${d.reconcilerTitle} (${d.reconcilerSubtitle}) → ${d.domTitle}/${d.nativeTitle} → ${d.domOutputTitle}/${d.nativeOutputTitle}.`;

  return (
    <section id={sectionId} aria-labelledby="heading-common" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="common"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.3fr)_minmax(0,_0.85fr)] gap-md items-stretch">
        {/* 좌측 보조 카드 */}
        <article
          className={cn(
            'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg order-2 lg:order-1',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
            'hover:border-[var(--term-accent)]',
            'transition-all hover:-translate-y-0.5',
          )}
        >
          <ToneIconBox tone="teal" size="md">
            <rnIcon.cube className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.leftNote}
          </p>
        </article>

        {/* 중앙 다이어그램 */}
        <div
          className={cn(
            'relative order-1 lg:order-2 rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] overflow-hidden',
          )}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(56,189,248,0.10),transparent_55%)]"
          />
          <p className="sr-only">{a11y}</p>

          <div className="relative flex flex-col items-center gap-sm" aria-hidden="true">
            <FlowNode label={d.elementTitle} tone="sky" iconName="layers" />
            <DownArrow />
            <FlowNode
              label={d.reconcilerTitle}
              subtitle={d.reconcilerSubtitle}
              tone="teal"
              iconName="cube"
              emphasized
            />

            {/* 갈래 */}
            <BranchArrows />

            <div className="grid grid-cols-2 gap-sm w-full">
              <FlowNode
                label={d.domTitle}
                subtitle={d.domHost}
                tone="violet"
                iconName="monitor"
                fill
              />
              <FlowNode
                label={d.nativeTitle}
                subtitle={d.nativeHost}
                tone="indigo"
                iconName="smartphone"
                fill
              />
            </div>

            <div className="grid grid-cols-2 gap-sm w-full">
              <div className="flex min-w-0 flex-col items-center gap-sm">
                <DownArrow />
                <FlowNode
                  label={d.domOutputTitle}
                  subtitle={d.domOutputSubtitle}
                  tone="sky"
                  iconName="code"
                  small
                  fill
                />
              </div>
              <div className="flex min-w-0 flex-col items-center gap-sm">
                <DownArrow />
                <FlowNode
                  label={d.nativeOutputTitle}
                  subtitle={d.nativeOutputSubtitle}
                  tone="indigo"
                  iconName="smartphone"
                  small
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        {/* 우측 강조 카드 */}
        <article
          className={cn(
            'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg order-3',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
            'hover:border-[var(--term-accent)]',
            'transition-all hover:-translate-y-0.5',
          )}
        >
          <ToneIconBox tone="violet" size="md">
            <rnIcon.monitor className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>
          <div className="flex flex-col">
            <p className="text-md font-bold tracking-tight break-keep text-violet-600 dark:text-violet-300">
              {content.rightEmphasis.line1}
            </p>
            <p className="text-md font-bold tracking-tight break-keep text-violet-600 dark:text-violet-300">
              {content.rightEmphasis.line2}
            </p>
            <p className="text-md font-bold tracking-tight break-keep text-violet-600 dark:text-violet-300">
              {content.rightEmphasis.line3}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

type FlowNodeProps = {
  label: string;
  subtitle?: string;
  tone: ToneKey;
  iconName: keyof typeof rnIcon;
  emphasized?: boolean;
  small?: boolean;
  /** 그리드 칸을 가득 채워 라벨이 칸 안에서 줄바꿈되게 한다. */
  fill?: boolean;
};

const FlowNode = ({ label, subtitle, tone, iconName, emphasized, small, fill }: FlowNodeProps) => {
  const Icon = rnIcon[iconName];

  return (
    <article
      className={cn(
        'inline-flex min-w-0 flex-col items-center gap-1 rounded-xl border',
        'shadow-[0_2px_0_var(--term-border)]',
        emphasized
          ? 'bg-[var(--term-surface)] border-[var(--term-border)]'
          : 'bg-[var(--term-bg)] border-[var(--term-border)]',
        emphasized && 'lg:shadow-[0_3px_0_var(--term-border)]',
        small ? 'px-2 py-1.5' : 'px-md py-2.5',
        fill ? 'w-full' : '',
      )}
    >
      <span className="flex w-full min-w-0 items-center justify-center gap-2">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cn(
            'min-w-0 font-bold font-mono tracking-tight break-keep',
            small ? 'text-xsm' : 'text-sm',
            toneText(tone),
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
