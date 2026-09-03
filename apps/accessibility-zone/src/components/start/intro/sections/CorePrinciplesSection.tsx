import { Eye, Keyboard, Lightbulb, ShieldCheck } from 'lucide-react';

import { PrincipleCard } from '../components/PrincipleCard';
import type { IntroContent } from '../content';

const iconClass = 'h-5 w-5';

const icons = [
  <Eye key="i1" className={iconClass} aria-hidden="true" />,
  <Keyboard key="i2" className={iconClass} aria-hidden="true" />,
  <Lightbulb key="i3" className={iconClass} aria-hidden="true" />,
  <ShieldCheck key="i4" className={iconClass} aria-hidden="true" />,
];
const tones = ['primary', 'success', 'secondary', 'warning'] as const;

export const CorePrinciplesSection = ({ content }: { content: IntroContent['principles'] }) => {
  return (
    <section
      aria-labelledby="principles-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          핵심 개념
        </span>
        <h2 id="principles-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm text-text-light sm:text-sm">{content.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 xl:grid-cols-4">
        {content.cards.map((card, i) => (
          <PrincipleCard
            key={card.id}
            index={i}
            title={card.title}
            body={card.body}
            example={card.example}
            exampleLabel={content.exampleLabel}
            exampleAction={content.exampleAction}
            cardLabel={content.cardLabel}
            icon={icons[i]}
            tone={tones[i]}
          />
        ))}
      </div>
    </section>
  );
};
