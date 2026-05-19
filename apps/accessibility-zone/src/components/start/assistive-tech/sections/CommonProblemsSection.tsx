import { AccessibilityProblemCard } from '../components/AccessibilityProblemCard';
import type { AssistiveTechContent, ProblemCard } from '../content';

const IconButtonIssue = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const LabelIssue = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="3" y="8" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M7 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const HeadingIssue = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path
      d="M5 4v16M11 4v16M5 12h6M16 18l3-3-3-3M16 12l3-3-3-3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ToastIssue = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M9 12h6M3 18l3-2M21 18l-3-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ModalFocusIssue = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="20" r="2.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const icons: Record<ProblemCard['id'], React.ReactNode> = {
  'icon-button': <IconButtonIssue />,
  'no-label': <LabelIssue />,
  heading: <HeadingIssue />,
  toast: <ToastIssue />,
  'modal-focus': <ModalFocusIssue />,
};

export const CommonProblemsSection = ({
  content,
}: {
  content: AssistiveTechContent['problems'];
}) => {
  return (
    <section
      aria-labelledby="problems-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            05
          </span>
          흔한 문제
        </span>
        <h2 id="problems-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {content.cards.map((card) => (
          <AccessibilityProblemCard
            key={card.id}
            card={card}
            icon={icons[card.id]}
            problemLabel={content.problemLabel}
            solutionLabel={content.solutionLabel}
          />
        ))}
      </div>
    </section>
  );
};
