import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { PromiseVsErrorSplitContent } from '../content';
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  RotateCcwIcon,
  RouteIcon,
} from '../icons';

type Props = { content: PromiseVsErrorSplitContent['cta'] };

const isExternal = (href: string) => /^https?:\/\//.test(href);

const SecondaryButton = ({
  href,
  label,
  index,
}: {
  href: string;
  label: string;
  index: number;
}) => {
  const Icon = index === 0 ? RotateCcwIcon : GitBranchIcon;
  const external = isExternal(href);
  const baseClass = cn(
    'group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 w-full',
    'border-2 border-white/30 bg-white/10 text-white font-bold text-xsm',
    'transition-all motion-safe:hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
  );
  const inner = (
    <>
      <Icon aria-hidden="true" className="h-3.5 w-3.5 opacity-90" />
      <span className="break-keep">{label}</span>
      {external && (
        <ExternalLinkIcon
          aria-hidden="true"
          className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
        />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={baseClass}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={baseClass}>
      {inner}
    </Link>
  );
};

export const NextCTA = ({ content }: Props) => (
  <section
    aria-labelledby="cta-heading"
    className={cn(
      'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-700/60 bg-gradient-to-br from-blue-950 via-blue-900 to-violet-950',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* dot decoration */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-25 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
        backgroundSize: '20px 20px',
      }}
    />

    <div className="relative grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,320px)] items-center">
      {/* LEFT: route icon */}
      <div className="flex items-center gap-3 lg:flex-col lg:items-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl',
            'border-2 border-blue-300/60 bg-white/10 backdrop-blur-sm shadow-[0_4px_12px_rgba(59,130,246,0.3)]',
          )}
        >
          <RouteIcon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-100" />
        </span>
        <span
          aria-hidden="true"
          className="inline-flex items-center rounded-full bg-blue-950/50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200 border border-blue-700/60"
        >
          {content.number}
        </span>
      </div>

      {/* CENTER */}
      <div className="flex flex-col gap-2 min-w-0">
        <h2
          id="cta-heading"
          className="text-lg sm:text-xl lg:text-xxl font-bold leading-snug text-white break-keep"
        >
          {content.title}
        </h2>
        <p className="text-xsm sm:text-sm leading-relaxed text-blue-100/80 break-keep">
          {content.description}
        </p>
      </div>

      {/* RIGHT: next card + buttons */}
      <div className="flex flex-col gap-2 min-w-0">
        <Link
          href={content.nextHref}
          className={cn(
            'group flex flex-col gap-1 rounded-2xl border-2 px-4 py-3',
            'border-white bg-white text-blue-900',
            'shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_0_rgba(0,0,0,0.25)]',
            'transition-all motion-safe:hover:-translate-y-0.5',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
          )}
        >
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
            {content.nextLabel}
          </span>
          <span className="flex items-center justify-between gap-2">
            <span className="text-sm font-bold break-keep">{content.nextTitle}</span>
            <ArrowRightIcon
              aria-hidden="true"
              className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </span>
        </Link>
        {content.secondary.map((b, i) => (
          <SecondaryButton key={b.label} href={b.href} label={b.label} index={i} />
        ))}
      </div>
    </div>
  </section>
);
