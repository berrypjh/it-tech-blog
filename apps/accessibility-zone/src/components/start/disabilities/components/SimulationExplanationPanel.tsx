import { Check, Lightbulb, TriangleAlert } from 'lucide-react';

import type { DisabilitiesContent, SimulationMode } from '../content';

type Props = {
  mode: SimulationMode;
  labels: DisabilitiesContent['simulator']['explanation'];
};

export const SimulationExplanationPanel = ({ mode, labels }: Props) => {
  return (
    <div className="flex h-full flex-col gap-lg">
      <section>
        <h3 className="mb-sm flex items-center gap-1.5 text-sm font-bold text-text-default">
          <span
            aria-hidden="true"
            className="flex h-5 w-5 items-center justify-center rounded-rounded bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40"
          >
            <TriangleAlert className="h-3 w-3" />
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
            <Check className="h-3 w-3" strokeWidth={3} />
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
                <Check className="h-3 w-3" strokeWidth={3} />
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
          <Lightbulb className="h-3.5 w-3.5" />
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
