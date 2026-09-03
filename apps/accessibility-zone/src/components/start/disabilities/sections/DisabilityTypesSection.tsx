import { Accessibility, Brain, Clock, Ear, Eye, MapPin } from 'lucide-react';

import { DisabilityTypeCard } from '../components/DisabilityTypeCard';
import type { DisabilitiesContent, DisabilityTypeCard as Card } from '../content';

const iconClass = 'h-5 w-5';

const icons: Record<Card['id'], React.ReactNode> = {
  vision: <Eye className={iconClass} aria-hidden="true" />,
  hearing: <Ear className={iconClass} aria-hidden="true" />,
  motor: <Accessibility className={iconClass} aria-hidden="true" />,
  cognitive: <Brain className={iconClass} aria-hidden="true" />,
  temporary: <Clock className={iconClass} aria-hidden="true" />,
  situational: <MapPin className={iconClass} aria-hidden="true" />,
};

export const DisabilityTypesSection = ({ content }: { content: DisabilitiesContent['types'] }) => {
  return (
    <section
      aria-labelledby="disability-types-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          유형 분류
        </span>
        <h2
          id="disability-types-heading"
          className="text-xl font-bold text-text-default sm:text-xxl"
        >
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {content.cards.map((card) => (
          <DisabilityTypeCard key={card.id} card={card} icon={icons[card.id]} />
        ))}
      </div>
    </section>
  );
};
