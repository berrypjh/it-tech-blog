import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { JsxIsNotHtmlContent } from '../content';

type Props = { content: JsxIsNotHtmlContent['summary'] };

export const JsxCoreSummary = ({ content }: Props) => (
  <section aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <div className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center min-w-[2.25rem] px-2 py-1',
          'rounded-md text-xxsm font-bold tabular-nums tracking-wider',
          'bg-sky-600 text-white',
          'dark:bg-sky-500 dark:text-slate-950',
        )}
      >
        {content.badge}
      </span>
      <span className="text-xxsm uppercase tracking-wider text-[var(--term-muted)] font-mono">
        {content.eyebrow}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)] translate-y-[-0.15em]"
      />
    </div>

    <div
      className={cn(
        'relative overflow-hidden rounded-3xl px-md sm:px-lg lg:px-xl py-lg lg:py-xl',
        'bg-gradient-to-br from-teal-500 via-sky-600 to-indigo-700 text-white',
        'shadow-[0_8px_24px_-12px_rgba(15,23,42,0.4)]',
      )}
    >
      {/* decorative dots */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.85)_0_1px,transparent_1.5px),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.7)_0_1px,transparent_1.5px),radial-gradient(circle_at_72%_78%,rgba(255,255,255,0.6)_0_1px,transparent_1.5px),radial-gradient(circle_at_24%_72%,rgba(255,255,255,0.7)_0_1px,transparent_1.5px)] bg-[length:240px_240px]"
      />
      <h2 id="heading-summary" className="sr-only">
        {content.title}
      </h2>

      <div className="relative flex flex-col gap-md items-center text-center">
        <p className="text-lg sm:text-xl lg:text-xxl font-bold leading-snug tracking-tight break-keep">
          {content.line1Before}
          <span className="underline decoration-white/70 decoration-2 underline-offset-4">
            {content.line1Accent1}
          </span>
          {content.line1Middle}
          <span className="underline decoration-white/70 decoration-2 underline-offset-4">
            {content.line1Accent2}
          </span>
          {content.line1After}
        </p>
        <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug tracking-tight break-keep">
          {content.line2Before}
          <span className="bg-white/15 px-2 py-0.5 rounded-md ring-1 ring-white/40">
            {content.line2Accent}
          </span>
          {content.line2After}
        </p>

        <ul
          aria-label="JSX 핵심 흐름"
          className="mt-sm flex flex-wrap items-center justify-center gap-2"
        >
          {content.pills.map((pill, idx) => (
            <li key={pill.id} className="flex items-center gap-2">
              <PillView label={pill.label} tone={pill.tone} />
              {idx < content.pills.length - 1 && (
                <span aria-hidden="true" className="text-white/60 font-mono text-xsm">
                  ×
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const PillView = ({ label, tone }: { label: string; tone: keyof typeof toneTokens }) => {
  // 흰 배경 베이스 pill — tone color는 dot으로만 표현
  const t = toneTokens[tone];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-slate-900 px-2.5 py-1 text-[11px] sm:text-xsm font-bold shadow-sm">
      <span aria-hidden="true" className={cn('inline-block w-1.5 h-1.5 rounded-full', t.dot)} />
      {label}
    </span>
  );
};
