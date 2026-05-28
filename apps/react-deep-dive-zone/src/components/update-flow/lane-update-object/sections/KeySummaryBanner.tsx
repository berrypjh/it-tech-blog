import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { LaneUpdateObjectContent, SummaryPill } from '../content';
import { CrosshairIcon, LayersIcon, Link2Icon, TargetIcon, ZapIcon } from '../icons';

type Props = { content: LaneUpdateObjectContent['summary'] };

const pillIconMap: Record<SummaryPill['iconName'], typeof CrosshairIcon> = {
  crosshair: CrosshairIcon,
  zap: ZapIcon,
  link: Link2Icon,
};

export const KeySummaryBanner = ({ content }: Props) => (
  <section id="summary" aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="summary"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border-2 px-md py-lg sm:px-lg sm:py-xl',
        'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950',
        'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.8),0_2px_0_var(--term-border)]',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_rgba(148,163,184,0.35)_1px,_transparent_0)] [background-size:18px_18px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-16 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.4fr)] gap-lg items-center">
        <div className="flex items-center justify-center">
          <ObjectStackIllustration />
        </div>

        <div className="flex flex-col gap-md min-w-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.25] tracking-tight text-white break-keep">
            <span className="block text-white">{content.main.lead}</span>
            <span
              className={cn(
                'block bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent',
              )}
            >
              {content.main.emphasis}
              <span className="text-white">{content.main.tail}</span>
            </span>
          </h3>

          <ul className="flex flex-col gap-2">
            {content.pills.map((pill) => {
              const Icon = pillIconMap[pill.iconName];
              return (
                <li
                  key={pill.text}
                  className={cn(
                    'flex items-start gap-3 rounded-xl border px-3 py-2',
                    'border-white/15 bg-white/5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg',
                      'border border-sky-400/30 bg-sky-400/10 text-sky-200',
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xsm sm:text-sm text-slate-100 leading-snug break-keep">
                    {pill.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ObjectStackIllustration = () => (
  <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56" aria-hidden="true">
    {/* Bottom layer */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 h-20 w-32 sm:w-40 rounded-xl border-2 border-sky-400/40 bg-sky-500/15 shadow-[0_0_24px_rgba(56,189,248,0.18)]" />
    {/* Middle layer */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-12 h-20 w-28 sm:w-36 rounded-xl border-2 border-cyan-300/50 bg-cyan-400/20 shadow-[0_0_24px_rgba(34,211,238,0.18)]" />
    {/* Top layer */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-20 h-20 w-24 sm:w-32 rounded-xl border-2 border-teal-300/60 bg-teal-400/25 shadow-[0_0_24px_rgba(45,212,191,0.18)]" />
    {/* Floating braces */}
    <span className="absolute left-1/2 -translate-x-1/2 top-2 font-mono font-bold text-2xl text-amber-200/90 drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]">
      {'{ }'}
    </span>
    {/* Mini pill on top stack */}
    <span className="absolute left-1/2 -translate-x-1/2 bottom-[5.75rem] inline-flex items-center gap-1 rounded-md border border-teal-300/60 bg-slate-950/70 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-teal-200">
      <LayersIcon className="h-3 w-3" />
      update
    </span>
  </div>
);
