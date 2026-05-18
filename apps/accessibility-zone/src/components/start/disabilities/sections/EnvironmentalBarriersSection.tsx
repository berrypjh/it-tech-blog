import { SituationalBarrierCard } from '../components/SituationalBarrierCard';
import type { BarrierCard, DisabilitiesContent } from '../content';

const SunlightScene = () => (
  <svg viewBox="0 0 120 70" className="h-full w-full" aria-hidden="true">
    <circle cx="100" cy="20" r="10" fill="rgb(var(--ds-warning-wa400-rgb))" />
    <g stroke="rgb(var(--ds-warning-wa500-rgb))" strokeWidth="2" strokeLinecap="round">
      <path d="M100 5v6M100 29v6M85 20h6M109 20h6M89 9l4 4M107 27l4 4M89 31l4-4M107 13l4-4" />
    </g>
    <rect x="32" y="20" width="28" height="42" rx="3" fill="rgb(var(--ds-neutral-ne700-rgb))" />
    <rect x="35" y="24" width="22" height="32" rx="1" fill="rgb(var(--ds-warning-wa200-rgb))" />
    <circle cx="46" cy="60" r="1.5" fill="rgb(var(--ds-neutral-ne500-rgb))" />
    <path
      d="M64 38c4-6 10-8 18-8"
      stroke="rgb(var(--ds-warning-wa300-rgb))"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const SubwayScene = () => (
  <svg viewBox="0 0 120 70" className="h-full w-full" aria-hidden="true">
    <line
      x1="10"
      y1="10"
      x2="110"
      y2="10"
      stroke="rgb(var(--ds-neutral-ne500-rgb))"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M40 10v18a4 4 0 008 0V20"
      stroke="rgb(var(--ds-neutral-ne600-rgb))"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="60" cy="30" r="6" fill="rgb(var(--ds-primary-pr300-rgb))" />
    <rect x="52" y="36" width="16" height="22" rx="2" fill="rgb(var(--ds-primary-pr500-rgb))" />
    <rect x="74" y="32" width="14" height="22" rx="2" fill="rgb(var(--ds-neutral-ne800-rgb))" />
    <rect x="76" y="34" width="10" height="16" rx="1" fill="rgb(var(--ds-primary-pr200-rgb))" />
  </svg>
);

const NoisyScene = () => (
  <svg viewBox="0 0 120 70" className="h-full w-full" aria-hidden="true">
    <circle cx="30" cy="38" r="10" fill="rgb(var(--ds-secondary-se300-rgb))" />
    <circle cx="55" cy="32" r="10" fill="rgb(var(--ds-primary-pr300-rgb))" />
    <circle cx="80" cy="40" r="10" fill="rgb(var(--ds-warning-wa300-rgb))" />
    <rect x="86" y="14" width="28" height="20" rx="3" fill="rgb(var(--ds-neutral-ne700-rgb))" />
    <path d="M92 24l6-4v8z" fill="rgb(var(--ds-background-surface-rgb))" />
    <g stroke="rgb(var(--ds-error-er500-rgb))" strokeWidth="2" strokeLinecap="round">
      <path d="M104 18l8 12M112 18l-8 12" />
    </g>
  </svg>
);

const InjuryScene = () => (
  <svg viewBox="0 0 120 70" className="h-full w-full" aria-hidden="true">
    <rect x="14" y="36" width="48" height="22" rx="3" fill="rgb(var(--ds-neutral-ne400-rgb))" />
    <path d="M14 40h48M14 48h48" stroke="rgb(var(--ds-neutral-ne500-rgb))" strokeWidth="1" />
    <g
      fill="rgb(var(--ds-warning-wa200-rgb))"
      stroke="rgb(var(--ds-warning-wa600-rgb))"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M70 24c0-4 4-6 8-6s8 2 8 6v18l4 6h-24l4-6V24z" />
    </g>
    <g stroke="rgb(var(--ds-background-surface-rgb))" strokeWidth="3" strokeLinecap="round">
      <path d="M70 32h16M70 38h16M70 44h16" />
    </g>
  </svg>
);

const FatigueScene = () => (
  <svg viewBox="0 0 120 70" className="h-full w-full" aria-hidden="true">
    <circle cx="40" cy="26" r="10" fill="rgb(var(--ds-warning-wa300-rgb))" />
    <path d="M30 36h20l6 24H24z" fill="rgb(var(--ds-warning-wa400-rgb))" />
    <path
      d="M32 22q4 -4 8 0M44 22q4 -4 8 0"
      stroke="rgb(var(--ds-warning-wa700-rgb))"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <rect
      x="64"
      y="20"
      width="40"
      height="40"
      rx="3"
      fill="rgb(var(--ds-neutral-ne100-rgb))"
      stroke="rgb(var(--ds-neutral-ne500-rgb))"
      strokeWidth="1.5"
    />
    <path
      d="M70 30h28M70 36h22M70 42h28M70 48h18"
      stroke="rgb(var(--ds-neutral-ne400-rgb))"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="34" cy="14" r="2" fill="rgb(var(--ds-neutral-ne500-rgb))" />
    <circle cx="40" cy="10" r="2" fill="rgb(var(--ds-neutral-ne400-rgb))" />
    <circle cx="46" cy="14" r="2" fill="rgb(var(--ds-neutral-ne500-rgb))" />
  </svg>
);

const scenes: Record<BarrierCard['id'], React.ReactNode> = {
  sunlight: <SunlightScene />,
  subway: <SubwayScene />,
  noisy: <NoisyScene />,
  injury: <InjuryScene />,
  fatigue: <FatigueScene />,
};

export const EnvironmentalBarriersSection = ({
  content,
}: {
  content: DisabilitiesContent['barriers'];
}) => {
  return (
    <section
      aria-labelledby="barriers-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-mdl flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            03
          </span>
          환경 제약
        </span>
        <h2 id="barriers-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {content.cards.map((card) => (
          <SituationalBarrierCard key={card.id} card={card} illustration={scenes[card.id]} />
        ))}
      </div>
    </section>
  );
};
