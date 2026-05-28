import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { ClientServerCard, ReactDomContent } from '../content';
import { InfoIcon, LightbulbIcon, reactDomIcon } from '../icons';

type Props = { content: ReactDomContent['clientServer'] };

export const ClientServerSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-client-server" className="space-y-md">
      <SectionHeader
        id="client-server"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<reactDomIcon.network className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        {content.cards.map((card) => (
          <ClientServerCardView key={card.id} card={card} />
        ))}
      </div>

      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-sky-300/80 bg-sky-50 text-sky-900',
          'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-sky-600 dark:text-sky-300">
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

const ClientServerCardView = ({ card }: { card: ClientServerCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = reactDomIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        tone.border,
        tone.borderHover,
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>{card.name}</h3>
      </header>

      <ul
        className={cn(
          'flex flex-col gap-1 rounded-lg border px-md py-2 font-mono',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        {card.items.map((item) => (
          <li key={item} className={cn('flex items-center gap-2 text-xsm leading-snug', tone.text)}>
            <span
              aria-hidden="true"
              className={cn('inline-block w-1 h-1 rounded-full', tone.dot)}
            />
            <span className="truncate">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <aside className={cn('flex items-start gap-sm rounded-lg border p-md', tone.chip, 'mt-auto')}>
        <span aria-hidden="true" className={cn('shrink-0 mt-0.5', tone.text)}>
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">{card.info}</p>
      </aside>
    </article>
  );
};
