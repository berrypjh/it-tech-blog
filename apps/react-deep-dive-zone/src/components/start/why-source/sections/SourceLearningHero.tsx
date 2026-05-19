import { FlowDiagram } from '../components/FlowDiagram';
import type { WhySourceContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { content: WhySourceContent['hero'] };

export const SourceLearningHero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* 프롬프트 라인 */}
      <p className="mb-md text-xxsm text-[var(--term-muted)] tabular-nums">
        <span className="text-[var(--term-accent)] font-bold">$</span> cat{' '}
        <span className="text-[var(--term-fg)]">react-internals/why-read.md</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)] gap-xl lg:gap-2xl items-center">
        {/* 좌측 텍스트 */}
        <div className="flex flex-col gap-md">
          <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-xxsm text-[var(--term-muted)]">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
              aria-hidden="true"
            />
            {content.badge}
          </span>

          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-[2.875rem] font-bold leading-[1.15] tracking-tight text-[var(--term-fg)]"
          >
            <span className="block">{content.title.lead}</span>
            <span className="block text-[var(--term-accent)]">{content.title.accent}</span>
            <span className="block">{content.title.tail}</span>
          </h1>

          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[52ch]">
            {content.description}
          </p>

          <div className="mt-sm flex flex-col sm:flex-row gap-sm">
            <a
              href="#section-questions"
              className="group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md bg-[var(--term-accent)] text-[var(--term-bg)] text-xsm font-bold transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
            >
              {content.primaryCta}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#section-first-code"
              className="group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)] text-xsm font-bold transition-all hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
            >
              {content.secondaryCta}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* 우측 다이어그램 */}
        <div id="hero-flow" className="order-first lg:order-none">
          <FlowDiagram
            categories={content.flowCategories}
            stages={content.flowStages}
            loop={content.flowLoop}
          />
        </div>
      </div>
    </section>
  );
};
