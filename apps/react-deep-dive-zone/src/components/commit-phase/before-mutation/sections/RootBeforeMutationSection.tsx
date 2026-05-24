import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
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
    <SectionBadgeHeader
      id="root-perspective"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <p className="mb-md text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
        <span className="block">{content.description.line1}</span>
        <span className="block text-teal-700 dark:text-teal-300 font-bold">
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
    className="flex items-center justify-center text-teal-500 dark:text-teal-300 py-1 md:py-0"
  >
    <span className="hidden md:inline-block">
      <ArrowRightIcon className="h-5 w-5" />
    </span>
    <span className="md:hidden">
      <ArrowDownIcon className="h-5 w-5" />
    </span>
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
  const tone = variant === 'left' ? commitToneTokens.sky : commitToneTokens.orange;
  const Icon = variant === 'left' ? GitBranchIcon : LayersIcon;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
        tone.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            tone.chipSolid,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            tone.chip,
          )}
        >
          {label}
        </span>
      </header>

      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', tone.textStrong)}>
        {title}
      </h3>

      <FiberTreeSvg variant={variant} />
    </article>
  );
};

const CenterCard = ({ title, label }: { title: string; label: string }) => {
  const tone = commitToneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-sm rounded-2xl border-2 p-md text-center',
        tone.borderStrong,
        tone.bg,
        'shadow-[0_1px_0_var(--term-border)]',
        'ring-2 ring-teal-300/40 dark:ring-teal-500/30',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2',
          'bg-teal-100 text-teal-700 border-teal-300/80',
          'dark:bg-teal-950/60 dark:text-teal-100 dark:border-teal-700/70',
        )}
      >
        <CameraIcon className="h-7 w-7" />
      </span>
      <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', tone.textStrong)}>
        {title}
      </h3>
      <span
        className={cn(
          'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
          tone.chip,
        )}
      >
        {label}
      </span>
    </article>
  );
};

const FiberTreeSvg = ({ variant }: { variant: 'left' | 'right' }) => {
  const stroke = variant === 'left' ? '#0284c7' : '#ea580c';
  return (
    <svg
      role="img"
      aria-label={variant === 'left' ? 'fiber tree before' : 'fiber tree after'}
      viewBox="0 0 160 80"
      className="w-full h-16"
    >
      <g stroke={stroke} strokeWidth={1.5} fill="none">
        <line x1={80} y1={16} x2={40} y2={48} />
        <line x1={80} y1={16} x2={120} y2={48} />
        <line x1={40} y1={48} x2={20} y2={68} />
        <line x1={40} y1={48} x2={60} y2={68} />
        <line x1={120} y1={48} x2={100} y2={68} />
        <line x1={120} y1={48} x2={140} y2={68} />
      </g>
      <g fill={stroke}>
        <circle cx={80} cy={16} r={5} />
        <circle cx={40} cy={48} r={4} />
        <circle cx={120} cy={48} r={4} />
        <circle cx={20} cy={68} r={3} />
        <circle cx={60} cy={68} r={3} />
        <circle cx={100} cy={68} r={3} />
        <circle cx={140} cy={68} r={3} />
      </g>
      {variant === 'right' && (
        <g>
          <circle cx={100} cy={68} r={5} fill="none" stroke="#14b8a6" strokeWidth={1.5} />
          <circle cx={60} cy={68} r={5} fill="none" stroke="#14b8a6" strokeWidth={1.5} />
        </g>
      )}
    </svg>
  );
};
