import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { ExtraPoint, MutationPhaseContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CrosshairIcon,
  EraserIcon,
  RepeatIcon,
  RocketIcon,
  SparklesIcon,
  SplitIcon,
  TargetIcon,
} from '../icons';

type Props = {
  rootCurrent: MutationPhaseContent['rootCurrent'];
  extra: MutationPhaseContent['extra'];
};

const extraIconMap: Record<ExtraPoint['iconName'], typeof RepeatIcon> = {
  sync: RepeatIcon,
  crosshair: CrosshairIcon,
  split: SplitIcon,
  eraser: EraserIcon,
};

export const MutationNextConceptSection = ({ rootCurrent, extra }: Props) => (
  <section
    id="next-concept"
    aria-labelledby="heading-next-concept"
    className="space-y-md scroll-mt-xl"
  >
    <h2 id="heading-next-concept" className="sr-only">
      root.current preview and extra points
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-3 items-start">
      <RootCurrentPreviewCard content={rootCurrent} />
      <ExtraPointsCard content={extra} />
    </div>
  </section>
);

const RootCurrentPreviewCard = ({ content }: { content: MutationPhaseContent['rootCurrent'] }) => (
  <div className="space-y-md">
    <SectionBadgeHeader
      id="root-current-preview"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RocketIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <p className="mb-md text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {content.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-2 sm:gap-3 items-stretch">
        <FlowCard title={content.leftTitle} subtitle={content.leftSubtitle} tone="violet" />
        <Arrow />
        <FlowCard title={content.rightTitle} subtitle={content.rightSubtitle} tone="teal" />
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border p-md',
          'border-sky-200/80 bg-sky-50/60',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-sky-100 text-sky-700 border border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 break-keep">
          {content.bottomNote}
        </p>
      </aside>
    </article>
  </div>
);

const Arrow = () => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center text-[var(--term-dim)] py-1 sm:py-0"
  >
    <span className="hidden sm:inline-block">
      <ArrowRightIcon className="h-5 w-5" />
    </span>
    <span className="sm:hidden">
      <ArrowDownIcon className="h-5 w-5" />
    </span>
  </div>
);

const FlowCard = ({
  title,
  subtitle,
  tone,
}: {
  title: string;
  subtitle: string;
  tone: 'violet' | 'teal';
}) => {
  const t = commitToneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-1 rounded-2xl border-2 p-md text-center',
        t.borderStrong,
        t.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <code className={cn('text-sm sm:text-md font-bold font-mono break-keep', t.textStrong)}>
        {title}
      </code>
      <span className="text-[11px] text-[var(--term-muted)] break-keep">{subtitle}</span>
    </article>
  );
};

const ExtraPointsCard = ({ content }: { content: MutationPhaseContent['extra'] }) => (
  <div className="space-y-md">
    <SectionBadgeHeader
      id="extra-points"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {content.points.map((p) => (
        <li key={p.title} className="flex h-full">
          <PointCard point={p} />
        </li>
      ))}
    </ol>
  </div>
);

const PointCard = ({ point }: { point: ExtraPoint }) => {
  const Icon = extraIconMap[point.iconName];
  const t = commitToneTokens[point.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1.5 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
            t.chipSolid,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
          {point.title}
        </h3>
      </header>
      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {point.description}
      </p>
    </article>
  );
};
