import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementKeySeparatedContent, SeparationCard } from '../content';
import { ArrowRightLeftIcon, CheckCircleIcon, FileTextIcon, KeyIcon } from '../icons';

type Props = { content: ReactElementKeySeparatedContent['separation'] };

const iconMap = {
  document: FileTextIcon,
  key: KeyIcon,
} as const;

export const KeyPropsSeparation = ({ content }: Props) => (
  <section aria-labelledby="heading-separation" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="separation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ArrowRightLeftIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <CardView card={content.cards[0]} />

      {/* Center badge (desktop, 카드 사이 전용 컬럼) */}
      <div aria-hidden="true" className="hidden lg:flex items-center justify-center -mx-2">
        <span
          className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-full text-center shrink-0',
            'bg-[var(--term-bg)] border-2 border-[var(--term-border)] shadow-md',
            'text-[10px] font-extrabold text-[var(--term-fg)] tracking-tight whitespace-pre-line leading-tight',
          )}
        >
          {content.centerBadge}
        </span>
      </div>

      <CardView card={content.cards[1]} />
    </div>

    {/* mobile center badge */}
    <div className="flex justify-center lg:hidden -mt-2" aria-hidden="true">
      <span
        className={cn(
          'inline-flex items-center justify-center px-3 py-1 rounded-full',
          'bg-[var(--term-bg)] border-2 border-[var(--term-border)] shadow-md',
          'text-[10px] font-extrabold text-[var(--term-fg)] tracking-tight',
        )}
      >
        {content.centerBadge.replace('\n', ' ')}
      </span>
    </div>
  </section>
);

const CardView = ({ card }: { card: SeparationCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            toneTokens[card.tone].chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <code
            className={cn('font-mono text-md font-bold tracking-tight', toneTokens[card.tone].text)}
          >
            {card.title}
          </code>
          <span className="text-[11px] text-[var(--term-muted)] font-mono">{card.short}</span>
        </div>
      </header>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>

      <ul className="flex flex-col gap-1.5 mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        {card.checks.map((check) => (
          <li key={check} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0 mt-0.5"
            >
              <CheckCircleIcon className="h-3 w-3" />
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{check}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
