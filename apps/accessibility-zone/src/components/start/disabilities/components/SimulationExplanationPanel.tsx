import type { DisabilitiesContent, SimulationMode } from '../content';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
    <path d="M12 4l9 16H3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 11v4M12 18v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TipIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M9 18h6M10 22h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M12 2a7 7 0 014 12.66V17h-8v-2.34A7 7 0 0112 2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

type Props = {
  mode: SimulationMode;
  labels: DisabilitiesContent['simulator']['explanation'];
};

export const SimulationExplanationPanel = ({ mode, labels }: Props) => {
  return (
    <div className="flex h-full flex-col gap-mdl">
      <section>
        <h3 className="mb-sm flex items-center gap-1.5 text-sm font-bold text-text-default">
          <span
            aria-hidden="true"
            className="flex h-5 w-5 items-center justify-center rounded-rounded bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40"
          >
            <WarningIcon />
          </span>
          {labels.difficultyTitle}
        </h3>
        <ul className="flex flex-col gap-1.5">
          {mode.difficulties.map((line, i) => (
            <li
              key={i}
              className="flex items-start gap-2 rounded-md border border-stroke-default/60 bg-background-default/30 px-sm py-2 text-xsm leading-relaxed text-text-default"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-rounded bg-stroke-default"
                aria-hidden="true"
              />
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-sm flex items-center gap-1.5 text-sm font-bold text-text-default">
          <span
            aria-hidden="true"
            className="flex h-5 w-5 items-center justify-center rounded-rounded bg-success-su100 text-text-success dark:bg-success-su900/40"
          >
            <CheckIcon />
          </span>
          {labels.improvementTitle}
        </h3>
        <ul className="flex flex-col gap-1.5">
          {mode.improvements.map((line, i) => (
            <li
              key={i}
              className="flex items-start gap-2 rounded-md border border-stroke-success/30 bg-success-su100/30 px-sm py-2 text-xsm leading-relaxed text-text-default dark:bg-success-su900/20"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-rounded bg-background-success text-text-contrastText"
              >
                <CheckIcon />
              </span>
              {line}
            </li>
          ))}
        </ul>
      </section>

      <aside
        aria-label={labels.tipLabel}
        className="mt-auto flex items-start gap-2 rounded-md border border-primary-pr200/60 bg-primary-pr100/40 p-sm"
      >
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-rounded bg-background-primary text-text-contrastText"
        >
          <TipIcon />
        </span>
        <div>
          <p className="text-xxsm font-extraBold uppercase tracking-wide text-text-primary">
            {labels.tipLabel}
          </p>
          <p className="text-xsm leading-snug text-text-default">{labels.tipLine1}</p>
          <p className="text-xsm leading-snug text-text-default">{labels.tipLine2}</p>
        </div>
      </aside>
    </div>
  );
};
