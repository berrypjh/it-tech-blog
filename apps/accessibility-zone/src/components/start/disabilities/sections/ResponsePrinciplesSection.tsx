import { PrincipleSummaryCard } from '../components/PrincipleSummaryCard';
import type { DisabilitiesContent } from '../content';

export const ResponsePrinciplesSection = ({
  content,
}: {
  content: DisabilitiesContent['principles'];
}) => {
  return (
    <section
      aria-labelledby="principles-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            04
          </span>
          대응 원칙
        </span>
        <h2 id="principles-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {content.cards.map((card) => (
          <PrincipleSummaryCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
