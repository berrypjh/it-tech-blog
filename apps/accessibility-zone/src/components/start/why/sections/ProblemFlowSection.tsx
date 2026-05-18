import { ProblemFlowItem } from '../components/ProblemFlowItem';
import type { ImportanceContent } from '../content';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const InputErrorIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 12h4M16 10l2 4M18 10l-2 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StopIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const TrendDownIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path
      d="M3 7l6 7 4-4 8 8M14 18h7v-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartCrackIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path
      d="M12 20s-7-4.35-9.5-9C1 8.5 3 5 6.5 5c2 0 3 1 3.5 2l2 3-3 2 3 3-2 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 20s7-4.35 9.5-9C23 8.5 21 5 17.5 5c-2 0-3 1-3.5 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const icons: Record<number, React.ReactNode> = {
  1: <SearchIcon />,
  2: <InputErrorIcon />,
  3: <StopIcon />,
  4: <TrendDownIcon />,
  5: <HeartCrackIcon />,
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
