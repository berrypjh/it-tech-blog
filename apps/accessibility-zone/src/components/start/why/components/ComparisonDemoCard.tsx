type Props = {
  title: string;
  beforeLabel: string;
  afterLabel: string;
  beforeVisual: React.ReactNode;
  afterVisual: React.ReactNode;
  helper: string;
};

const CrossIcon = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M6 18l12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
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

export const ComparisonDemoCard = ({
  title,
  beforeLabel,
  afterLabel,
  beforeVisual,
  afterVisual,
  helper,
}: Props) => {
  return (
    <article className="flex h-full flex-col gap-md rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm">
      <h3 className="text-sm font-bold leading-snug text-text-default">{title}</h3>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
        <div className="flex flex-col gap-md">
          <div className="flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide text-text-error">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-rounded bg-error-er100 text-text-error dark:bg-error-er900/40"
              aria-hidden="true"
            >
              <CrossIcon />
            </span>
            {beforeLabel}
          </div>
          <div className="flex min-h-[7.5rem] flex-1 items-center justify-center rounded-md border border-stroke-default/70 bg-background-default/40 p-md">
            {beforeVisual}
          </div>
        </div>

        <div className="flex flex-col gap-md">
          <div className="flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide text-text-success">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-rounded bg-success-su100 text-text-success dark:bg-success-su900/40"
              aria-hidden="true"
            >
              <CheckIcon />
            </span>
            {afterLabel}
          </div>
          <div className="flex min-h-[7.5rem] flex-1 items-center justify-center rounded-md border border-stroke-success/40 bg-success-su100/20 p-md dark:bg-success-su900/20">
            {afterVisual}
          </div>
        </div>
      </div>

      <p className="rounded-md bg-background-default/50 px-sm py-2 text-[0.6875rem] leading-relaxed text-text-light">
        {helper}
      </p>
    </article>
  );
};
