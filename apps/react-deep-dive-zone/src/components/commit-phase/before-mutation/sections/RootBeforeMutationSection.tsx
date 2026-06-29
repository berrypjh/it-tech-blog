import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { BeforeMutationContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CameraIcon,
  GitBranchIcon,
  LayersIcon,
  TargetIcon,
} from '../icons';

type Props = { content: BeforeMutationContent['rootPerspective'] };

export const RootBeforeMutationSection = ({ content }: Props) => (
  <section
    id="root-perspective"
    aria-labelledby="heading-root-perspective"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="root-perspective"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <p className="mb-md text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
        <span className="block">{content.description.line1}</span>
        <span className={cn('block font-bold', toneTokens.teal.text)}>
          {content.description.line2}
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1.1fr)_auto_minmax(0,_1fr)] gap-2 md:gap-3 items-stretch">
        <SideCard title={content.leftCardTitle} label={content.leftCardLabel} variant="left" />
        <Arrow />
        <CenterCard title={content.centerCardTitle} label={content.centerCardLabel} />
        <Arrow />
        <SideCard title={content.rightCardTitle} label={content.rightCardLabel} variant="right" />
      </div>
    </article>
  </section>
);

const Arrow = () => (
  <div
    aria-hidden="true"
    className={cn('flex items-center justify-center py-1 md:py-0', toneTokens.teal.text)}
  >
    <ArrowRightIcon className="hidden md:inline-block h-5 w-5" />
    <ArrowDownIcon className="md:hidden h-5 w-5" />
  </div>
);

const SideCard = ({
  title,
  label,
  variant,
}: {
  title: string;
  label: string;
  variant: 'left' | 'right';
}) => {
  const tone: ToneKey = variant === 'left' ? 'sky' : 'amber';
  const t = toneTokens[tone];
  const Icon = variant === 'left' ? GitBranchIcon : LayersIcon;
  return (
    <article
      className={cn(
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
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {label}
        </span>
      </header>

      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
        {title}
      </h3>

      <FiberTreeSvg variant={variant} />
    </article>
  );
};

const CenterCard = ({ title, label }: { title: string; label: string }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-sm rounded-lg border-2 p-md text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-14 w-14 items-center justify-center rounded-lg border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <CameraIcon className="h-7 w-7" />
      </span>
      <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.fill.text)}>
        {title}
      </h3>
      <span
        className={cn(
          'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
          t.chip,
        )}
      >
        {label}
      </span>
    </article>
  );
};

const FiberTreeSvg = ({ variant }: { variant: 'left' | 'right' }) => {
  const treeTone = variant === 'left' ? toneTokens.sky : toneTokens.amber;
  return (
    <svg
      role="img"
      aria-label={variant === 'left' ? 'fiber tree before' : 'fiber tree after'}
      viewBox="0 0 160 80"
      className="w-full h-16"
    >
      <g className={treeTone.stroke} stroke="currentColor" strokeWidth={1.5} fill="none">
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
      {variant === 'right' && (
        <g className={toneTokens.teal.stroke} stroke="currentColor" strokeWidth={1.5} fill="none">
          <circle cx={100} cy={68} r={5} />
          <circle cx={60} cy={68} r={5} />
        </g>
      )}
    </svg>
  );
};
