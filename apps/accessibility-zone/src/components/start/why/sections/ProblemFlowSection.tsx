import { CircleMinus, HeartCrack, Search, TextCursorInput, TrendingDown } from 'lucide-react';

import { ProblemFlowItem } from '../components/ProblemFlowItem';
import type { ImportanceContent } from '../content';

const iconClass = 'h-4 w-4';

const icons: Record<number, React.ReactNode> = {
  1: <Search className={iconClass} aria-hidden="true" />,
  2: <TextCursorInput className={iconClass} aria-hidden="true" />,
  3: <CircleMinus className={iconClass} aria-hidden="true" />,
  4: <TrendingDown className={iconClass} aria-hidden="true" />,
  5: <HeartCrack className={iconClass} aria-hidden="true" />,
};

export const ProblemFlowSection = ({ content }: { content: ImportanceContent['problem'] }) => {
  return (
    <section
      aria-labelledby="problem-flow-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <div className="grid grid-cols-1 gap-lg lg:grid-cols-[0.4fr_0.6fr] lg:gap-xl">
        <header className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
              03
            </span>
            문제 흐름
          </span>
          <h2 id="problem-flow-heading" className="text-xl font-bold text-text-default sm:text-xxl">
            {content.title}
          </h2>
          <p className="text-xsm leading-relaxed text-text-light sm:text-sm">
            {content.description}
          </p>
        </header>

        <ol className="flex flex-col">
          {content.steps.map((step, i) => (
            <ProblemFlowItem
              key={step.index}
              step={step}
              icon={icons[step.index]}
              isLast={i === content.steps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
