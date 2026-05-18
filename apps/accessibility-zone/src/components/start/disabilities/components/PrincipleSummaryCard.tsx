import type { PrincipleCard } from '../content';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PrincipleSummaryCard = ({ card }: { card: PrincipleCard }) => {
  return (
    <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-success/30 bg-success-su100/30 p-mdl shadow-sm transition-all hover:-translate-y-0.5 hover:border-stroke-success hover:shadow-md focus-within:ring-2 focus-within:ring-stroke-primary focus-within:ring-offset-2 dark:bg-success-su900/20">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-rounded bg-background-success text-text-contrastText shadow-sm"
      >
        <CheckIcon />
      </span>

      <h3 className="whitespace-pre-line text-sm font-bold leading-snug text-text-default sm:text-md">
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>
    </article>
  );
};
