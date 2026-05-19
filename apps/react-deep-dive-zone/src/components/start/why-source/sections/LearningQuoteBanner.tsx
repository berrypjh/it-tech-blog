import type { WhySourceContent } from '../content';
import { QuoteIcon } from '../icons';

type Props = { content: WhySourceContent['quote'] };

export const LearningQuoteBanner = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quote">
      <h2 id="heading-quote" className="sr-only">
        {content.lines.join(' ')}
      </h2>

      <blockquote
        cite=""
        className="relative rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-lg sm:p-xl text-center overflow-hidden"
      >
        {/* 상단 프롬프트 라벨 */}
        <p className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] mb-md">
          {'//'} {content.eyebrow}
        </p>

        <QuoteIcon className="mx-auto h-8 w-8 text-[var(--term-accent)]/70 mb-sm" />

        <div className="mx-auto max-w-[60ch] flex flex-col gap-1">
          {content.lines.map((line, i) => (
            <p
              key={i}
              className="text-md sm:text-lg lg:text-xl font-bold leading-snug tracking-tight text-[var(--term-fg)] break-keep"
            >
              {line}
            </p>
          ))}
        </div>

        {/* 좌우 큰 따옴표 장식 */}
        <span
          aria-hidden="true"
          className="absolute top-md left-md text-4xl text-[var(--term-border)] font-serif leading-none select-none"
        >
          “
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-md right-md text-4xl text-[var(--term-border)] font-serif leading-none select-none"
        >
          ”
        </span>
      </blockquote>
    </section>
  );
};
