import { ArrowRight, Keyboard, Volume1 } from 'lucide-react';

import { AssistiveTechnologyHeroIllustration } from '../components/AssistiveTechnologyHeroIllustration';
import type { AssistiveTechContent } from '../content';

export const AssistiveTechnologyHeroSection = ({
  content,
}: {
  content: AssistiveTechContent['hero'];
}) => {
  return (
    <section
      aria-labelledby="assistive-tech-hero-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl lg:p-2xl"
    >
      <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-[1fr_1.05fr] lg:gap-2xl">
        <div className="flex flex-col items-start gap-md">
          <span className="inline-flex items-center gap-1.5 rounded-rounded border border-stroke-primary/30 bg-primary-pr100 px-2.5 py-1 text-xxsm font-semiBold text-text-primary dark:bg-primary-pr900/40">
            <span aria-hidden="true">📘</span>
            시작하기 · 4/5단계
          </span>
          <h1
            id="assistive-tech-hero-heading"
            className="text-3xl font-extraBold leading-tight tracking-tight text-text-default sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h1>
          <p className="text-md font-semiBold leading-snug text-text-primary sm:text-lg">
            {content.lead}
          </p>
          <p className="text-xsm leading-relaxed text-text-light sm:text-sm">
            {content.description}
          </p>

          <div className="mt-sm flex w-full flex-col gap-sm sm:w-auto sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-background-primary px-lg py-md text-xsm font-semiBold text-text-contrastText shadow-sm transition-colors hover:bg-primary-pr700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
            >
              <Volume1 className="h-3.5 w-3.5" aria-hidden="true" />
              {content.primaryCta}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-stroke-default bg-background-surface px-lg py-md text-xsm font-semiBold text-text-default transition-colors hover:border-stroke-primary hover:bg-primary-pr100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
            >
              <Keyboard className="h-3.5 w-3.5" aria-hidden="true" />
              {content.secondaryCta}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="order-first lg:order-none">
          <AssistiveTechnologyHeroIllustration hero={content} />
        </div>
      </div>
    </section>
  );
};
