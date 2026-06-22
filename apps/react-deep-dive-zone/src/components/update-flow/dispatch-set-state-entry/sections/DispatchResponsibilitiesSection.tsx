import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type {
  DispatchResponsibility,
  DispatchResponsibilityIconName,
  DispatchSetStateEntryContent,
} from '../content';
import { BoxIcon, FunctionSquareIcon, TargetIcon, ZapIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['responsibilities'] };

const iconMap: Record<DispatchResponsibilityIconName, typeof BoxIcon> = {
  target: TargetIcon,
  box: BoxIcon,
  zap: ZapIcon,
};

export const DispatchResponsibilitiesSection = ({ content }: Props) => (
  <section
    id="responsibilities"
    aria-labelledby="heading-responsibilities"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="responsibilities"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<FunctionSquareIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.number} className="flex">
          <Card card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const Card = ({ card }: { card: DispatchResponsibility }) => {
  const Icon = iconMap[card.iconName];
  const t = toneTokens[card.tone];
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
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-md font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>

      <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}>
        {card.title}
      </h3>

      {/* code chip */}
      <pre
        className={cn(
          'overflow-x-auto rounded-xl border px-3 py-2 font-mono text-xxsm sm:text-xsm leading-snug',
          'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        <code>{card.code}</code>
      </pre>

      <span
        aria-hidden="true"
        className="block h-px w-full bg-gradient-to-r from-transparent via-[var(--term-border)] to-transparent"
      />

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.body}
      </p>
    </article>
  );
};
