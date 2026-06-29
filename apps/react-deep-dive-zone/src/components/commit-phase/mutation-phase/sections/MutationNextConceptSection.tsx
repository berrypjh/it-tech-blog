import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
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
    <SectionHeader
      id="root-current-preview"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RocketIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
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
          'mt-md flex items-start gap-sm rounded-lg border-2 p-md',
          toneTokens.sky.fill.border,
          toneTokens.sky.fill.bg,
        )}
      >
        <ToneIconBox tone="sky" size="sm" className="mt-0.5 shrink-0">
          <SparklesIcon className="h-4 w-4" />
        </ToneIconBox>
        <p
          className={cn('text-xsm sm:text-sm leading-relaxed break-keep', toneTokens.sky.fill.text)}
        >
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
    <ArrowRightIcon className="hidden sm:inline-block h-5 w-5" />
    <ArrowDownIcon className="sm:hidden h-5 w-5" />
  </div>
);

const FlowCard = ({
  title,
  subtitle,
  tone,
}: {
  title: string;
  subtitle: string;
  tone: ToneKey;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-1 rounded-lg border-2 p-md text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <code className={cn('text-sm sm:text-md font-bold font-mono break-keep', t.fill.text)}>
        {title}
      </code>
      <span className="text-[11px] text-[var(--term-muted)] break-keep">{subtitle}</span>
    </article>
  );
};

const ExtraPointsCard = ({ content }: { content: MutationPhaseContent['extra'] }) => (
  <div className="space-y-md">
    <SectionHeader
      id="extra-points"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {content.points.map((p) => (
        <li key={p.title} className="flex h-full">
          <PointCard point={p} />
        </li>
      ))}
    </ul>
  </div>
);

const PointCard = ({ point }: { point: ExtraPoint }) => {
  const Icon = extraIconMap[point.iconName];
  const t = toneTokens[point.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1.5 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone={point.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
          {point.title}
        </h3>
      </header>
      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {point.description}
      </p>
    </article>
  );
};
