import type { AssistiveTechContent, TakeawayCard } from '../content';

const DocIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="6" y="4" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="9" y="2" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M9 12h6M9 16h6M9 8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const icons: Record<TakeawayCard['id'], React.ReactNode> = {
  understanding: <DocIcon />,
  structure: <ClipboardIcon />,
  experience: <ShieldCheckIcon />,
};

const toneBg: Record<TakeawayCard['id'], string> = {
  understanding: 'bg-primary-pr100 text-text-primary',
  structure: 'bg-secondary-se100 text-text-secondary',
  experience: 'bg-success-su100 text-text-success',
};

export const KeyTakeawaysSection = ({
  content,
}: {
  content: AssistiveTechContent['takeaways'];
}) => {
  return (
    <section
      aria-labelledby="takeaways-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            07
          </span>
          핵심 정리
        </span>
        <h2 id="takeaways-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md lg:grid-cols-3">
        {content.cards.map((card) => (
          <article
            key={card.id}
            className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-default/40 p-lg"
          >
            <span
              aria-hidden="true"
              className={`flex h-10 w-10 items-center justify-center rounded-md ${toneBg[card.id]}`}
            >
              {icons[card.id]}
            </span>
            <h3 className="text-sm font-bold text-text-default sm:text-md">{card.title}</h3>
            <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-lg text-center text-xsm leading-relaxed text-text-light sm:text-sm">
        {content.footer}
      </p>
    </section>
  );
};
