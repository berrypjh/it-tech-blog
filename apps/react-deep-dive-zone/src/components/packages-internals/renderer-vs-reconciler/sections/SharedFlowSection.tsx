import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { RvrContent } from '../content';
import { rvrIcon } from '../icons';

type Props = { content: RvrContent['flow'] };

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
          tone="teal"
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
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(56,189,248,0.10),transparent_55%)]"
          />
          <p className="sr-only">{a11y}</p>

          <div className="relative flex flex-col items-center gap-sm" aria-hidden="true">
            <FlowNode label={content.elementLabel} tone="sky" iconName="layers" />
            <DownArrow />
            <FlowNode
              label={content.reconcilerLabel}
              subtitle={content.reconcilerSubtitle}
              tone="teal"
              iconName="cube"
              emphasized
              wide
            />

            {/* 갈래 */}
            <BranchArrows />

            <div className="grid grid-cols-2 gap-sm w-full">
              <FlowNode
                label={content.domRendererLabel}
                subtitle={content.domRendererSubtitle}
                tone="violet"
                iconName="monitor"
              />
              <FlowNode
                label={content.nativeRendererLabel}
                subtitle={content.nativeRendererSubtitle}
                tone="indigo"
                iconName="smartphone"
              />
            </div>

            <div className="grid grid-cols-2 gap-sm w-full">
              <div className="flex flex-col items-center gap-sm">
                <DownArrow />
                <FlowNode
                  label={content.domNodeLabel}
                  subtitle={content.domNodeSubtitle}
                  tone="sky"
                  iconName="code"
                  small
                />
              </div>
              <div className="flex flex-col items-center gap-sm">
                <DownArrow />
                <FlowNode
                  label={content.nativeViewLabel}
                  subtitle={content.nativeViewSubtitle}
                  tone="indigo"
                  iconName="smartphone"
                  small
                />
              </div>
            </div>
          </div>
        </div>

        {/* 우측 보조 카드 */}
        <HelperCard
          helper={content.rightHelper}
          tone="violet"
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
  tone: ToneKey;
  iconName: keyof typeof rvrIcon;
  emphasized?: boolean;
  wide?: boolean;
  small?: boolean;
};

const FlowNode = ({ label, subtitle, tone, iconName, emphasized, wide, small }: FlowNodeProps) => {
  const t = toneTokens[tone];
  const Icon = rvrIcon[iconName];

  return (
    <article
      className={cn(
        'inline-flex flex-col items-center gap-1 rounded-xl border',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        emphasized ? `${t.chip} ${t.border}` : `${t.border}`,
        emphasized && 'lg:shadow-[0_3px_0_var(--term-border)]',
        small ? 'px-2 py-1.5' : 'px-md py-2.5',
        wide ? 'w-full max-w-md' : '',
      )}
    >
      <span className="inline-flex items-center gap-2">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cn(
            'font-bold font-mono tracking-tight',
            small ? 'text-xsm' : 'text-sm',
            t.text,
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
  tone,
  iconName,
  className,
}: {
  helper: { title: string; body: string };
  tone: ToneKey;
  iconName: keyof typeof rvrIcon;
  className?: string;
}) => {
  const t = toneTokens[tone];
  const Icon = rvrIcon[iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        t.borderHover,
        'transition-all hover:-translate-y-0.5',
        className,
      )}
    >
      <ToneIconBox tone={tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>
      <h3 className={cn('text-md font-bold tracking-tight break-keep', t.text)}>{helper.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{helper.body}</p>
    </article>
  );
};
