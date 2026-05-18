import { AssistiveTechnologyCard } from '../components/AssistiveTechnologyCard';
import type { AssistiveTechCard, AssistiveTechContent } from '../content';

const SpeakerIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path
      d="M15.5 8.5a5 5 0 010 7M19 5a9 9 0 010 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const KeyboardIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MagnifierPlusIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MicIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M5 11a7 7 0 0014 0M12 18v3M9 21h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SwitchIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
  </svg>
);

const icons: Record<AssistiveTechCard['id'], React.ReactNode> = {
  'screen-reader': <SpeakerIcon />,
  keyboard: <KeyboardIcon />,
  magnification: <MagnifierPlusIcon />,
  voice: <MicIcon />,
  switch: <SwitchIcon />,
};

export const AssistiveTechnologyTypesSection = ({
  content,
}: {
  content: AssistiveTechContent['types'];
}) => {
  return (
    <section
      aria-labelledby="assistive-tech-types-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-mdl flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          주요 기술
        </span>
        <h2
          id="assistive-tech-types-heading"
          className="text-xl font-bold text-text-default sm:text-xxl"
        >
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {content.cards.map((card) => (
          <AssistiveTechnologyCard key={card.id} card={card} icon={icons[card.id]} />
        ))}
      </div>
    </section>
  );
};
