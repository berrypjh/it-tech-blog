import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type {
  EnqueueConcurrentHookUpdateContent,
  FourElement,
  FourElementIconName,
} from '../content';
import {
  BoxIcon,
  DatabaseIcon,
  FileTextIcon,
  FlagIcon,
  LayersIcon,
  SquareDashedIcon,
} from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['elements'] };

const iconMap: Record<FourElementIconName, typeof BoxIcon> = {
  squareDashed: SquareDashedIcon,
  database: DatabaseIcon,
  fileText: FileTextIcon,
  flag: FlagIcon,
};

export const FourElementsSection = ({ content }: Props) => (
  <section id="elements" aria-labelledby="heading-elements" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="elements"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <Card element={card} />
        </li>
      ))}
    </ul>
  </section>
);

const Card = ({ element }: { element: FourElement }) => {
  const Icon = iconMap[element.iconName];
  const t = toneTokens[element.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg w-full',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span aria-hidden="true" className={cn('block h-2.5 w-2.5 rounded-full', t.dot)} />
      </header>

      <h3
        className={cn(
          'inline-flex w-fit items-center rounded-lg border px-2.5 py-1 font-mono text-sm sm:text-md font-bold',
          'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        <span className="text-amber-300">{element.title}</span>
      </h3>

      <p className={cn('text-xsm sm:text-sm font-bold leading-snug break-keep', t.text)}>
        {element.question}
      </p>

      <p className="text-xxsm sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {element.body}
      </p>
    </article>
  );
};
