import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { WhyNotImmediateContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  RotateCcwIcon,
} from '../icons';

type Props = { content: WhyNotImmediateContent['cta'] };

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
    'group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 w-full',
    'border-2 border-white/30 bg-white/5 text-white font-bold text-xsm sm:text-sm',
    'transition-all motion-safe:hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
  );

  const inner = (
    <>
      <Icon aria-hidden="true" className="h-4 w-4 opacity-80" />
      <span className="break-keep">{label}</span>
      {external && (
        <ExternalLinkIcon
          aria-hidden="true"
          className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
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

export const SchedulerNextCTA = ({ content }: Props) => (
  <section
    aria-label="next-page"
    className={cn(
      'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-700/60 bg-gradient-to-br from-blue-950 via-blue-900 to-violet-950',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* dot decoration */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '20px 20px',
      }}
    />

    <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-md lg:gap-xl items-center">
      {/* LEFT: check */}
      <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full',
            'bg-emerald-500 text-white shadow-[0_4px_0_rgba(5,150,105,0.4)]',
          )}
        >
          <CheckCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.4} />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 hidden lg:inline">
          done
        </span>
      </div>

      {/* CENTER: question */}
      <div className="flex flex-col gap-2 min-w-0">
        <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-300">
          {content.eyebrow}
        </p>
        <h2 className="text-lg sm:text-xl lg:text-xxl font-bold leading-snug text-white break-keep">
          {content.mainText}
        </h2>
        <p className="text-xsm sm:text-sm leading-relaxed text-blue-100/80 break-keep">
          {content.description}
        </p>
      </div>

      {/* RIGHT: buttons */}
      <div className="flex flex-col gap-2 lg:min-w-[260px]">
        <Link
          href={content.primary.href}
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 w-full',
            'bg-white text-blue-900 font-bold text-sm sm:text-md whitespace-nowrap',
            'shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_0_rgba(0,0,0,0.25)]',
            'transition-all motion-safe:hover:-translate-y-0.5',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
          )}
        >
          <span className="break-keep">{content.primary.label}</span>
          <ArrowRightIcon
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
          />
        </Link>

        {content.secondary.map((b, i) => (
          <SecondaryButton key={b.label} href={b.href} label={b.label} index={i} />
        ))}
      </div>
    </div>
  </section>
);
