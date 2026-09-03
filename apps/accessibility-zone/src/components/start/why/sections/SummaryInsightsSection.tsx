import { Check, FileText, Sparkles } from 'lucide-react';

import type { ImportanceContent } from '../content';

const SummaryCard = ({ summary }: { summary: ImportanceContent['summary'] }) => (
  <article className="flex h-full flex-col gap-md rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm">
    <header className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40">
        <FileText className="h-4.5 w-4.5" aria-hidden="true" />
      </span>
      <h3 className="text-md font-bold text-text-default">{summary.title}</h3>
    </header>

    <ul className="space-y-2">
      {summary.bullets.map((b, i) => (
        <li
          key={i}
          className="flex items-start gap-2 rounded-md border border-stroke-default/60 bg-background-default/30 px-sm py-2"
        >
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-rounded bg-success-su100 text-text-success dark:bg-success-su900/40"
          >
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="text-xsm leading-relaxed text-text-default">{b}</span>
        </li>
      ))}
    </ul>
  </article>
);

const ThreeInsightsCard = ({ insights }: { insights: ImportanceContent['insights'] }) => (
  <article className="flex h-full flex-col gap-md rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm">
    <header className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary-se100 text-text-secondary dark:bg-secondary-se900/40">
        <Sparkles className="h-4.5 w-4.5" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h3 className="text-md font-bold text-text-default">{insights.title}</h3>
    </header>

    <ol className="flex flex-col gap-2">
      {insights.items.map((line, i) => (
        <li
          key={i}
          className="flex items-start gap-3 rounded-md border border-stroke-default/60 bg-background-default/30 px-sm py-2.5"
        >
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-rounded bg-background-primary text-xxsm font-bold text-text-contrastText"
          >
            {i + 1}
          </span>
          <span className="text-xsm leading-relaxed text-text-default">{line}</span>
        </li>
      ))}
    </ol>
  </article>
);

export const SummaryInsightsSection = ({
  summary,
  insights,
}: {
  summary: ImportanceContent['summary'];
  insights: ImportanceContent['insights'];
}) => {
  return (
    <section
      aria-labelledby="summary-insights-heading"
      className="grid grid-cols-1 gap-md lg:grid-cols-2"
    >
      <h2 id="summary-insights-heading" className="sr-only">
        {summary.title}
      </h2>
      <SummaryCard summary={summary} />
      <ThreeInsightsCard insights={insights} />
    </section>
  );
};
