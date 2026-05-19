import { StepSectionHeader } from '../components/StepSectionHeader';
import type { UsageVsInternalsContent } from '../content';
import { CheckCircleIcon, QuoteIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['takeaway'] };

export const CoreTakeawayBanner = ({ content }: Props) => {
  return (
    <section id="section-takeaway" aria-labelledby="heading-takeaway" className="space-y-md">
      <StepSectionHeader id="takeaway" num={content.sectionNum} title={content.title} />

      <div className="relative rounded-lg border border-sky-500/40 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white p-md sm:p-lg lg:p-xl shadow-[0_4px_0_var(--term-border)] overflow-hidden">
        {/* 배경 장식 점선 */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-25"
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
              <path d="M22 0H0v22" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#takeaway-grid)" />
        </svg>

        <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-md">
          {/* 좌측 quote 아이콘 */}
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white"
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
            className="inline-flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-emerald-400/30 backdrop-blur-sm border border-emerald-300/40 text-white shadow-[0_0_24px_rgba(16,185,129,0.45)]"
          >
            <CheckCircleIcon className="h-6 w-6" />
          </span>
        </div>
      </div>
    </section>
  );
};
