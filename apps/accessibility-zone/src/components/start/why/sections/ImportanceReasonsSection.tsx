import { ImportanceReasonCard } from '../components/ImportanceReasonCard';
import type { ImportanceContent } from '../content';

const SmileIcon = () => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
  </svg>
);

const PeopleIcon = () => (
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
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 19c.5-3.5 3-5 6-5s5.5 1.5 6 5" />
    <path d="M14 19c.4-2.5 2-4 4-4s3.5 1.2 4 4" />
  </svg>
);

const ShieldCheckIcon = () => (
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

const ChartIcon = () => (
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
    <path d="M3 21h18" />
    <rect x="5" y="12" width="3" height="7" />
    <rect x="10.5" y="8" width="3" height="11" />
    <rect x="16" y="5" width="3" height="14" />
    <circle cx="20" cy="4" r="2" />
  </svg>
);

const icons: Record<string, React.ReactNode> = {
  ux: <SmileIcon />,
  inclusion: <PeopleIcon />,
  quality: <ShieldCheckIcon />,
  business: <ChartIcon />,
};

export const ImportanceReasonsSection = ({
  content,
}: {
  content: ImportanceContent['reasons'];
}) => {
  return (
    <section
      aria-labelledby="why-reasons-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          왜 중요한가
        </span>
        <h2 id="why-reasons-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm text-text-light sm:text-sm">{content.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 xl:grid-cols-4">
        {content.cards.map((card) => (
          <ImportanceReasonCard
            key={card.id}
            card={card}
            icon={icons[card.id]}
            detailCta={content.detailCta}
          />
        ))}
      </div>
    </section>
  );
};
