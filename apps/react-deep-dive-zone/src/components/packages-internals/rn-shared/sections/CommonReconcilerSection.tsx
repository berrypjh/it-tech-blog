import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import type { RnContent } from '../content';
import { CheckCircleIcon, MapIcon, rnIcon, StarIcon } from '../icons';

type Props = { content: RnContent['common']; sectionId: string };

export const CommonReconcilerSection = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-common" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="common"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.4fr)_minmax(0,_0.7fr)] gap-md items-stretch">
        {/* 좌측 note */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-sky-200/70 dark:border-sky-800/60',
          )}
        >
          <ToneIconBox tone="sky" size="md">
            <StarIcon className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.leftNote}
          </p>
        </article>

        {/* 중앙 다이어그램 */}
        <DiagramCard diagram={content.diagram} />

        {/* 우측 강조 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'border-teal-300/80 bg-teal-50 text-teal-900',
            'dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-100',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <ToneIconBox tone="teal" size="md">
            <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>
          <div className="flex flex-col gap-1">
            <p className="text-md sm:text-lg font-bold tracking-tight break-keep">
              {content.rightEmphasis.line1}
            </p>
            <p className="text-md sm:text-lg font-bold tracking-tight break-keep">
              {content.rightEmphasis.line2}
            </p>
            <p className="text-md sm:text-lg font-bold tracking-tight break-keep">
              {content.rightEmphasis.line3}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

const DiagramCard = ({ diagram }: { diagram: RnContent['common']['diagram'] }) => {
  const a11y = `${diagram.elementTitle} ${diagram.elementCode} → ${diagram.reconcilerTitle} (${diagram.reconcilerSubtitle}) → ${diagram.domTitle}/${diagram.nativeTitle} → ${diagram.domOutputTitle}/${diagram.nativeOutputTitle}.`;

  return (
    <div
      className={cn(
        'relative rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg overflow-hidden',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col items-center gap-sm" aria-hidden="true">
        {/* Element */}
        <article className="inline-flex flex-col items-center gap-1 rounded-xl border bg-[var(--term-bg)] border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] px-md py-2">
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)]">
            {diagram.elementTitle}
          </span>
          <code className="text-[11px] font-mono leading-snug rounded-md border border-dashed border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)] px-2 py-0.5">
            {diagram.elementCode}
          </code>
        </article>

        <DownArrow />

        {/* Reconciler */}
        <article
          className={cn(
            'relative inline-flex flex-col items-center gap-1 rounded-xl border px-md py-md min-w-[12rem] overflow-hidden',
            'border-teal-300/80 bg-teal-50 text-teal-900',
            'dark:border-teal-700/60 dark:bg-teal-950/40 dark:text-teal-100',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.18),transparent_60%)]"
          />
          <CubeIcon className="relative h-6 w-6 text-teal-600 dark:text-teal-300" />
          <span className="relative text-md font-bold font-mono tracking-tight text-teal-700 dark:text-teal-200">
            {diagram.reconcilerTitle}
          </span>
          <span className="relative text-[10px] uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80">
            {diagram.reconcilerSubtitle}
          </span>
        </article>

        <BranchArrows />

        {/* Two renderers */}
        <div className="grid grid-cols-2 gap-sm w-full">
          <RendererBranch
            title={diagram.domTitle}
            host={diagram.domHost}
            outputTitle={diagram.domOutputTitle}
            outputSubtitle={diagram.domOutputSubtitle}
            tone="sky"
            iconName="monitor"
          />
          <RendererBranch
            title={diagram.nativeTitle}
            host={diagram.nativeHost}
            outputTitle={diagram.nativeOutputTitle}
            outputSubtitle={diagram.nativeOutputSubtitle}
            tone="violet"
            iconName="smartphone"
          />
        </div>
      </div>
    </div>
  );
};

type RendererBranchProps = {
  title: string;
  host: string;
  outputTitle: string;
  outputSubtitle: string;
  tone: 'sky' | 'violet';
  iconName: 'monitor' | 'smartphone';
};

const RendererBranch = ({
  title,
  host,
  outputTitle,
  outputSubtitle,
  tone,
  iconName,
}: RendererBranchProps) => {
  const Icon = rnIcon[iconName];
  const isSky = tone === 'sky';
  return (
    <div className="flex flex-col items-center gap-sm">
      <article
        className={cn(
          'flex flex-col gap-1 rounded-lg border p-2.5 w-full',
          'shadow-[0_2px_0_var(--term-border)]',
          isSky
            ? 'border-sky-300/80 bg-sky-50/60 dark:border-sky-800/70 dark:bg-sky-950/30'
            : 'border-violet-300/80 bg-violet-50/60 dark:border-violet-800/70 dark:bg-violet-950/30',
        )}
      >
        <span className="flex items-center gap-1.5">
          <ToneIconBox tone={tone} size="sm">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          </ToneIconBox>
          <span
            className={cn(
              'text-[11px] font-bold font-mono tracking-tight',
              isSky ? 'text-sky-700 dark:text-sky-200' : 'text-violet-700 dark:text-violet-200',
            )}
          >
            {title}
          </span>
        </span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {host}
        </span>
      </article>

      <DownArrow />

      <article
        className={cn(
          'flex flex-col gap-0.5 rounded-md border px-2.5 py-1.5 w-full text-center',
          'bg-[var(--term-bg)] border-[var(--term-border)]',
        )}
      >
        <span className="text-xsm font-bold tracking-tight text-[var(--term-fg)] font-mono">
          {outputTitle}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {outputSubtitle}
        </span>
      </article>
    </div>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="text-[var(--term-accent)] text-lg leading-none inline-flex items-center justify-center"
  >
    ↓
  </span>
);

const BranchArrows = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 32"
    preserveAspectRatio="none"
    className="w-full max-w-md h-7 text-[var(--term-accent)]"
  >
    <path
      d="M 100 0 L 100 12 L 50 12 L 50 28"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
    />
    <path
      d="M 100 0 L 100 12 L 150 12 L 150 28"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
    />
    <path d="M 46 28 L 50 32 L 54 28 Z" fill="currentColor" />
    <path d="M 146 28 L 150 32 L 154 28 Z" fill="currentColor" />
  </svg>
);

const CubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
