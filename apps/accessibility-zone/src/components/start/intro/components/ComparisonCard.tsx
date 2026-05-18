import { cn } from '@it-tech-blog/utils';

type Props = {
  index: number;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  beforeVisual: React.ReactNode;
  afterVisual: React.ReactNode;
  beforeNote: string;
  afterNote: string;
};

const CrossIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M6 18l12-12" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12l4 4L19 7" />
  </svg>
);

export const ComparisonCard = ({
  index,
  title,
  beforeLabel,
  afterLabel,
  beforeVisual,
  afterVisual,
  beforeNote,
  afterNote,
}: Props) => {
  return (
    <article className="flex h-full flex-col gap-md rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm">
      <header className="flex items-start gap-sml">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-rounded bg-background-primary text-xsm font-bold text-text-contrastText">
          {index + 1}
        </span>
        <h3 className="text-sm font-bold leading-snug text-text-default">{title}</h3>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 sm:divide-x sm:divide-stroke-default sm:gap-0">
        <div className="flex flex-col gap-sml pb-md sm:pb-0 sm:pr-lg">
          <div className="flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide text-text-error">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-rounded bg-error-er100 text-text-error"
              aria-hidden="true"
            >
              <CrossIcon />
            </span>
            {beforeLabel}
          </div>
          <div
            className={cn(
              'flex min-h-[5rem] items-center rounded-md border border-stroke-default/70 bg-background-default/40 p-sml',
            )}
          >
            {beforeVisual}
          </div>
          <p className="text-[0.6875rem] leading-relaxed text-text-error">{beforeNote}</p>
        </div>

        <div className="flex flex-col gap-sml border-t border-stroke-default pt-md sm:border-t-0 sm:pl-lg sm:pt-0">
          <div className="flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide text-text-success">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-rounded bg-success-su100 text-text-success"
              aria-hidden="true"
            >
              <CheckIcon />
            </span>
            {afterLabel}
          </div>
          <div className="flex min-h-[5rem] items-center rounded-md border border-stroke-success/40 bg-success-su100/30 p-sml">
            {afterVisual}
          </div>
          <p className="text-[0.6875rem] leading-relaxed text-text-success">{afterNote}</p>
        </div>
      </div>
    </article>
  );
};
