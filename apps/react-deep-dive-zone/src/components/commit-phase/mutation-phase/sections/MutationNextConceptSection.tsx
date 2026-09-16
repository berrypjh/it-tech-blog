import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  Crosshair,
  Eraser,
  Lightbulb,
  type LucideIcon,
  Repeat,
  Rocket,
  Target,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ExtraPoint, MutationPhaseContent } from '../content';

type Props = {
  rootCurrent: MutationPhaseContent['rootCurrent'];
  extra: MutationPhaseContent['extra'];
};

const extraIconMap: Record<ExtraPoint['id'], LucideIcon> = {
  sync: Repeat,
  crosshair: Crosshair,
  split: ArrowLeftRight,
  eraser: Eraser,
};

export const MutationNextConceptSection = ({ rootCurrent, extra }: Props) => (
  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-3 items-start">
    <RootCurrentPreviewCard content={rootCurrent} />
    <ExtraPointsCard content={extra} />
  </div>
);

const RootCurrentPreviewCard = ({ content }: { content: MutationPhaseContent['rootCurrent'] }) => (
  <section
    id="root-current-preview"
    aria-labelledby="heading-root-current-preview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="root-current-preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Rocket className="h-5 w-5" aria-hidden="true" />}
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
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const Arrow = () => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center text-[var(--term-dim)] py-1 sm:py-0"
  >
    <ArrowRight className="hidden sm:inline-block h-5 w-5" aria-hidden="true" />
    <ArrowDown className="sm:hidden h-5 w-5" aria-hidden="true" />
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
      className={cx(
        'flex h-full flex-col items-center justify-center gap-1 rounded-lg border-2 p-md text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <code className={cx('text-sm sm:text-md font-bold font-mono break-keep', t.fill.text)}>
        {title}
      </code>
      <span className="text-[11px] text-[var(--term-muted)] break-keep">{subtitle}</span>
    </article>
  );
};

const ExtraPointsCard = ({ content }: { content: MutationPhaseContent['extra'] }) => (
  <section
    id="extra-points"
    aria-labelledby="heading-extra-points"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="extra-points"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Target className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {content.points.map((p) => (
        <li key={p.title} className="flex h-full">
          <PointCard point={p} />
        </li>
      ))}
    </ul>
  </section>
);

const PointCard = ({ point }: { point: ExtraPoint }) => {
  const Icon = extraIconMap[point.id];
  const t = toneTokens[point.tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-1.5 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone={point.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cx('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
          {point.title}
        </h3>
      </header>
      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {point.description}
      </p>
    </article>
  );
};
