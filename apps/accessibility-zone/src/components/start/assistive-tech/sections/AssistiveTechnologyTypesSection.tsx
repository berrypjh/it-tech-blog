import { CircleDot, Keyboard, Mic, Volume2, ZoomIn } from 'lucide-react';

import { AssistiveTechnologyCard } from '../components/AssistiveTechnologyCard';
import type { AssistiveTechCard, AssistiveTechContent } from '../content';

const iconClass = 'h-4.5 w-4.5';

const icons: Record<AssistiveTechCard['id'], React.ReactNode> = {
  'screen-reader': <Volume2 className={iconClass} aria-hidden="true" />,
  keyboard: <Keyboard className={iconClass} aria-hidden="true" />,
  magnification: <ZoomIn className={iconClass} aria-hidden="true" />,
  voice: <Mic className={iconClass} aria-hidden="true" />,
  switch: <CircleDot className={iconClass} aria-hidden="true" />,
};

export const AssistiveTechnologyTypesSection = ({
  content,
}: {
  content: AssistiveTechContent['types'];
}) => {
  return (
    <section
      aria-labelledby="assistive-tech-types-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          주요 기술
        </span>
        <h2
          id="assistive-tech-types-heading"
          className="text-xl font-bold text-text-default sm:text-xxl"
        >
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {content.cards.map((card) => (
          <AssistiveTechnologyCard key={card.id} card={card} icon={icons[card.id]} />
        ))}
      </div>
    </section>
  );
};
