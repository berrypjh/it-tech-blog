import { ClipboardList, FileText, ShieldCheck } from 'lucide-react';

import type { AssistiveTechContent, TakeawayCard } from '../content';

const iconClass = 'h-4.5 w-4.5';

const icons: Record<TakeawayCard['id'], React.ReactNode> = {
  understanding: <FileText className={iconClass} aria-hidden="true" />,
  structure: <ClipboardList className={iconClass} aria-hidden="true" />,
  experience: <ShieldCheck className={iconClass} aria-hidden="true" />,
};

const toneBg: Record<TakeawayCard['id'], string> = {
  understanding: 'bg-primary-pr100 text-text-primary',
  structure: 'bg-secondary-se100 text-text-secondary',
  experience: 'bg-success-su100 text-text-success',
};

export const KeyTakeawaysSection = ({
  content,
}: {
  content: AssistiveTechContent['takeaways'];
}) => {
  return (
    <section
      aria-labelledby="takeaways-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            07
          </span>
          핵심 정리
        </span>
        <h2 id="takeaways-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md lg:grid-cols-3">
        {content.cards.map((card) => (
          <article
            key={card.id}
            className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-default/40 p-lg"
          >
            <span
              aria-hidden="true"
              className={`flex h-10 w-10 items-center justify-center rounded-md ${toneBg[card.id]}`}
            >
              {icons[card.id]}
            </span>
            <h3 className="text-sm font-bold text-text-default sm:text-md">{card.title}</h3>
            <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-lg text-center text-xsm leading-relaxed text-text-light sm:text-sm">
        {content.footer}
      </p>
    </section>
  );
};
