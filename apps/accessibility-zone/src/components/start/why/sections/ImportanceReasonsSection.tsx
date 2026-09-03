import { ChartColumnIncreasing, ShieldCheck, Smile, Users } from 'lucide-react';

import { ImportanceReasonCard } from '../components/ImportanceReasonCard';
import type { ImportanceContent } from '../content';

const iconClass = 'h-5 w-5';

const icons: Record<string, React.ReactNode> = {
  ux: <Smile className={iconClass} aria-hidden="true" />,
  inclusion: <Users className={iconClass} aria-hidden="true" />,
  quality: <ShieldCheck className={iconClass} aria-hidden="true" />,
  business: <ChartColumnIncreasing className={iconClass} aria-hidden="true" />,
};

export const ImportanceReasonsSection = ({
  content,
}: {
  content: ImportanceContent['reasons'];
}) => {
  return (
    <section
      aria-labelledby="why-reasons-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          왜 중요한가
        </span>
        <h2 id="why-reasons-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm text-text-light sm:text-sm">{content.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 xl:grid-cols-4">
        {content.cards.map((card) => (
          <ImportanceReasonCard
            key={card.id}
            card={card}
            icon={icons[card.id]}
            detailCta={content.detailCta}
          />
        ))}
      </div>
    </section>
  );
};
