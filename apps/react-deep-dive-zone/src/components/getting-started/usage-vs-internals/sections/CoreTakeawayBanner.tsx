import { SectionHeader } from '../../../shared/SectionHeader';
import type { UsageVsInternalsContent } from '../content';
import { CheckCircleIcon, LightbulbIcon, QuoteIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['takeaway'] };

export const CoreTakeawayBanner = ({ content }: Props) => {
  return (
    <section id="section-takeaway" aria-labelledby="heading-takeaway" className="space-y-md">
      <SectionHeader
        id="takeaway"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<LightbulbIcon className="h-5 w-5" />}
      />

      <div className="relative rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)] p-md sm:p-lg lg:p-xl shadow-[0_2px_0_var(--term-border)] overflow-hidden">
        {/* 배경 장식 점선 */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full text-[var(--term-accent)] opacity-[0.08]"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="takeaway-grid"
              x="0"
              y="0"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <path d="M22 0H0v22" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#takeaway-grid)" />
        </svg>

        <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-md">
          {/* 좌측 quote 아이콘 */}
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]"
          >
            <QuoteIcon className="h-5 w-5" />
          </span>

          {/* 중앙 메시지 */}
          <div className="flex-1 min-w-0 text-center">
            {content.lines.map((line, i) => (
              <p
                key={i}
                className="text-sm sm:text-md lg:text-lg font-bold leading-snug break-keep"
              >
                {line}
              </p>
            ))}
          </div>

          {/* 우측 check */}
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]"
          >
            <CheckCircleIcon className="h-6 w-6" />
          </span>
        </div>
      </div>
    </section>
  );
};
