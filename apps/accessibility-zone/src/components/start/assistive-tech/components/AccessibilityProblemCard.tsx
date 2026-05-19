import type { ProblemCard } from '../content';

type Props = {
  card: ProblemCard;
  icon: React.ReactNode;
  problemLabel: string;
  solutionLabel: string;
};

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" aria-hidden="true">
    <path d="M12 4l9 16H3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 11v4M12 18v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" aria-hidden="true">
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AccessibilityProblemCard = ({ card, icon, problemLabel, solutionLabel }: Props) => {
  return (
    <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm transition-all hover:-translate-y-0.5 hover:border-stroke-primary hover:shadow-md">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-md bg-error-er100 text-text-error"
      >
        {icon}
      </span>

      <h3 className="whitespace-pre-line text-sm font-bold leading-snug text-text-default">
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>

      <div className="mt-auto flex flex-col gap-md border-t border-stroke-default/60 pt-sm">
        <div>
          <p className="flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide text-text-error">
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-rounded bg-error-er100 text-text-error"
            >
              <WarningIcon />
            </span>
            {problemLabel}
          </p>
          <p className="mt-0.5 text-xsm leading-snug text-text-default">{card.problem}</p>
        </div>
        <div>
          <p className="flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide text-text-success">
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-rounded bg-success-su100 text-text-success"
            >
              <CheckIcon />
            </span>
            {solutionLabel}
          </p>
          <p className="mt-0.5 text-xsm leading-snug text-text-default">{card.solution}</p>
        </div>
      </div>
    </article>
  );
};
