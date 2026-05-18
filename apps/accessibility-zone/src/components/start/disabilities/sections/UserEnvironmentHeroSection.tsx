import { UserEnvironmentHeroIllustration } from '../components/UserEnvironmentHeroIllustration';
import type { DisabilitiesContent } from '../content';

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const UserEnvironmentHeroSection = ({
  content,
}: {
  content: DisabilitiesContent['hero'];
}) => {
  return (
    <section
      aria-labelledby="disabilities-hero-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl lg:p-xxl"
    >
      <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-[1fr_1.08fr] lg:gap-xxl">
        <div className="flex flex-col items-start gap-sml">
          <span className="inline-flex items-center gap-1.5 rounded-rounded border border-stroke-primary/30 bg-primary-pr100 px-2.5 py-1 text-xxsm font-semiBold text-text-primary dark:bg-primary-pr900/40">
            <span aria-hidden="true">📘</span>
            시작하기 · 3/5단계
          </span>
          <h1
            id="disabilities-hero-heading"
            className="text-3xl font-extraBold leading-tight tracking-tight text-text-default sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h1>

          <p className="text-md font-semiBold leading-snug text-text-default sm:text-lg">
            {content.leadLine1}
          </p>
          <p className="text-xsm leading-relaxed text-text-light sm:text-sm">{content.leadLine2}</p>

          <div className="mt-sm flex w-full flex-col gap-sm sm:w-auto sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-background-primary px-mdl py-sml text-xsm font-semiBold text-text-contrastText shadow-sm transition-colors hover:bg-primary-pr700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
            >
              {content.primaryCta}
              <ArrowRightIcon />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-stroke-default bg-background-surface px-mdl py-sml text-xsm font-semiBold text-text-default transition-colors hover:border-stroke-primary hover:bg-primary-pr100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2 dark:hover:bg-primary-pr900/30"
            >
              <PlayIcon />
              {content.secondaryCta}
            </button>
          </div>
        </div>

        <div className="order-first lg:order-none">
          <UserEnvironmentHeroIllustration hero={content} />
        </div>
      </div>
    </section>
  );
};
