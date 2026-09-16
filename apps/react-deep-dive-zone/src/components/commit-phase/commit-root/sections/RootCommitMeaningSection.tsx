import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, GitBranch, Layers, PackageOpen, Target } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitRootContent } from '../content';

type Props = { content: CommitRootContent['rootMeaning'] };

export const RootCommitMeaningSection = ({ content }: Props) => (
  <section
    id="root-commit"
    aria-labelledby="heading-root-commit"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="root-commit"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Target className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <p className="mb-md text-sm sm:text-md leading-relaxed text-[var(--term-fg)] font-bold break-keep">
        <span className="block">{content.description.line1}</span>
        <span className="block">{content.description.line2}</span>
        <span className={cx('block', toneTokens.teal.text)}>{content.description.line3}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1.1fr)_auto_minmax(0,_1fr)] gap-2 md:gap-3 items-stretch">
        <SideCard
          title={content.leftCardTitle}
          label={content.leftCardLabel}
          flowLabel={content.flowLabel.left}
          variant="left"
        />
        <Arrow />
        <CenterCard
          title={content.centerCardTitle}
          body={content.centerCardBody}
          flowLabel={content.flowLabel.center}
        />
        <Arrow />
        <SideCard
          title={content.rightCardTitle}
          label={content.rightCardLabel}
          flowLabel={content.flowLabel.right}
          variant="right"
        />
      </div>
    </article>
  </section>
);

const Arrow = () => (
  <div
    aria-hidden="true"
    className={cx('flex items-center justify-center py-1 md:py-0', toneTokens.teal.text)}
  >
    <ArrowRight className="hidden md:inline-block h-5 w-5" aria-hidden="true" />
    <ArrowDown className="md:hidden h-5 w-5" aria-hidden="true" />
  </div>
);

const SideCard = ({
  title,
  label,
  flowLabel,
  variant,
}: {
  title: string;
  label: string;
  flowLabel: string;
  variant: 'left' | 'right';
}) => {
  const tone: ToneKey = variant === 'left' ? 'sky' : 'violet';
  const t = toneTokens[tone];
  const Icon = variant === 'left' ? GitBranch : Layers;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={tone}>
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <span
          className={cx(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {label}
        </span>
      </header>

      <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
        {title}
      </h3>

      <FiberTreeDiagram variant={variant} />

      <span className="mt-auto text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {flowLabel}
      </span>
    </article>
  );
};

const CenterCard = ({
  title,
  body,
  flowLabel,
}: {
  title: string;
  body: string;
  flowLabel: string;
}) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cx(
        'flex h-full flex-col items-center gap-sm rounded-lg border-2 p-md text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-12 w-12 items-center justify-center rounded-lg border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <PackageOpen className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className={cx('text-md sm:text-lg font-bold leading-tight break-keep', t.fill.text)}>
        {title}
      </h3>
      <p className={cx('text-xsm sm:text-sm leading-relaxed break-keep', t.fill.text)}>{body}</p>
      <span
        className={cx(
          'mt-auto inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
          t.chip,
        )}
      >
        {flowLabel}
      </span>
    </article>
  );
};

/**
 * 매우 간단한 fiber tree 시각화. 왼쪽은 점선(계산 진행 중 인상),
 * 오른쪽은 실선(완성된 트리)으로 시각 차이를 둔다.
 */
const FiberTreeDiagram = ({ variant }: { variant: 'left' | 'right' }) => {
  const treeTone = variant === 'left' ? toneTokens.sky : toneTokens.violet;
  const isDashed = variant === 'left';
  return (
    <svg aria-hidden="true" viewBox="0 0 160 80" className="w-full h-16">
      <g
        className={treeTone.stroke}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeDasharray={isDashed ? '4 3' : undefined}
        fill="none"
      >
        <line x1={80} y1={16} x2={40} y2={48} />
        <line x1={80} y1={16} x2={120} y2={48} />
        <line x1={40} y1={48} x2={20} y2={68} />
        <line x1={40} y1={48} x2={60} y2={68} />
        <line x1={120} y1={48} x2={100} y2={68} />
        <line x1={120} y1={48} x2={140} y2={68} />
      </g>
      <g className={treeTone.stroke} fill="currentColor">
        <circle cx={80} cy={16} r={5} />
        <circle cx={40} cy={48} r={4} />
        <circle cx={120} cy={48} r={4} />
        <circle cx={20} cy={68} r={3} />
        <circle cx={60} cy={68} r={3} />
        <circle cx={100} cy={68} r={3} />
        <circle cx={140} cy={68} r={3} />
      </g>
    </svg>
  );
};
