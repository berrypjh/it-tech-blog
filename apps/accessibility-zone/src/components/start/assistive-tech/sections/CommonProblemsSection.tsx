import { AppWindow, BellRing, Heading, MousePointerClick, TextCursorInput } from 'lucide-react';

import { AccessibilityProblemCard } from '../components/AccessibilityProblemCard';
import type { AssistiveTechContent, ProblemCard } from '../content';

const iconClass = 'h-4.5 w-4.5';

const icons: Record<ProblemCard['id'], React.ReactNode> = {
  'icon-button': <MousePointerClick className={iconClass} aria-hidden="true" />,
  'no-label': <TextCursorInput className={iconClass} aria-hidden="true" />,
  heading: <Heading className={iconClass} aria-hidden="true" />,
  toast: <BellRing className={iconClass} aria-hidden="true" />,
  'modal-focus': <AppWindow className={iconClass} aria-hidden="true" />,
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
