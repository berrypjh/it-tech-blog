import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { JsxTransformFlowContent, ReasonCard } from '../content';
import { FileTextIcon, GaugeIcon, LinkIcon, ZapIcon } from '../icons';

type Props = { content: JsxTransformFlowContent['react19'] };

const iconMap = {
  link: LinkIcon,
  gauge: GaugeIcon,
  fileText: FileTextIcon,
} as const;

export const React19TransformReasons = ({ content }: Props) => (
  <section aria-labelledby="heading-react19" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="react19"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ZapIcon className="h-5 w-5" />}
    />

    <div className="flex items-center gap-sm">
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider',
          'border-sky-300/80 bg-sky-50 text-sky-700',
          'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
        )}
      >
        <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
        {content.smallBadge}
      </span>
    </div>

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <ReasonCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ReasonCardView = ({ card }: { card: ReasonCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
