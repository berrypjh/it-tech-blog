import { PrincipleCard } from '../components/PrincipleCard';
import type { IntroContent } from '../content';

const EyeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const KeyboardIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M7 17h10" />
  </svg>
);

const BulbIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 18h6M10 22h4" />
    <path d="M12 2a7 7 0 014 12.66V17h-8v-2.34A7 7 0 0112 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const icons = [
  <EyeIcon key="i1" />,
  <KeyboardIcon key="i2" />,
  <BulbIcon key="i3" />,
  <ShieldIcon key="i4" />,
];
const tones = ['primary', 'success', 'secondary', 'warning'] as const;

export const CorePrinciplesSection = ({ content }: { content: IntroContent['principles'] }) => {
  return (
    <section
      aria-labelledby="principles-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-mdl flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          핵심 개념
        </span>
        <h2 id="principles-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm text-text-light sm:text-sm">{content.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 xl:grid-cols-4">
        {content.cards.map((card, i) => (
          <PrincipleCard
            key={card.id}
            index={i}
            title={card.title}
            body={card.body}
            example={card.example}
            exampleLabel={content.exampleLabel}
            exampleAction={content.exampleAction}
            cardLabel={content.cardLabel}
            icon={icons[i]}
            tone={tones[i]}
          />
        ))}
      </div>
    </section>
  );
};
