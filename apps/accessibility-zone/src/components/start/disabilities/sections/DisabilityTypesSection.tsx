import { DisabilityTypeCard } from '../components/DisabilityTypeCard';
import type { DisabilitiesContent, DisabilityTypeCard as Card } from '../content';

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const EarIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path
      d="M7 11a5 5 0 0110 0c0 2-1 3-3 4s-2 2-2 4a2 2 0 01-4 0c0-4-1-4-1-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const WheelchairIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <circle cx="11" cy="3.5" r="1.6" fill="currentColor" />
    <path
      d="M10 7l-1 5h5l3 4M8 12v2a5 5 0 005 5h2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="11" cy="18" r="3.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path
      d="M9 4a3 3 0 00-3 3v1a3 3 0 00-2 3v1a3 3 0 002 3v1a3 3 0 003 3M15 4a3 3 0 013 3v1a3 3 0 012 3v1a3 3 0 01-2 3v1a3 3 0 01-3 3M9 4v18M15 4v18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 7v5l3.5 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path
      d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const icons: Record<Card['id'], React.ReactNode> = {
  vision: <EyeIcon />,
  hearing: <EarIcon />,
  motor: <WheelchairIcon />,
  cognitive: <BrainIcon />,
  temporary: <ClockIcon />,
  situational: <PinIcon />,
};

export const DisabilityTypesSection = ({ content }: { content: DisabilitiesContent['types'] }) => {
  return (
    <section
      aria-labelledby="disability-types-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-mdl flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          유형 분류
        </span>
        <h2
          id="disability-types-heading"
          className="text-xl font-bold text-text-default sm:text-xxl"
        >
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {content.cards.map((card) => (
          <DisabilityTypeCard key={card.id} card={card} icon={icons[card.id]} />
        ))}
      </div>
    </section>
  );
};
