import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import type { ReactVsReactDomContent, RoleCard } from '../content';
import { ArrowRightIcon, CheckCircleIcon, iconByName } from '../icons';

type Props = { content: ReactVsReactDomContent['hero'] };

/**
 * Hero 우측 비교 비주얼.
 * react 카드 → 중앙 연결 화살표 → react-dom 카드 구조.
 * 모바일에서는 세로 스택으로 자연 전환.
 */
export const HeroComparePair = ({ content }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md lg:gap-sm items-stretch">
      <RoleCardItem card={content.reactCard} />
      <Connector top={content.relationTopLine} bottom={content.relationBottomLine} />
      <RoleCardItem card={content.reactDomCard} />
    </div>
  );
};

type RoleCardItemProps = { card: RoleCard };

const RoleCardItem = ({ card }: RoleCardItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];
  const tintClass =
    card.tone === 'blue'
      ? 'bg-blue-50/70 dark:bg-blue-950/30'
      : 'bg-emerald-50/70 dark:bg-emerald-950/30';

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md sm:p-lg',
        'shadow-[0_3px_0_var(--term-border)]',
        tintClass,
        tone.border,
        'transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border',
            tone.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>
            {card.title}
          </h3>
          <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {card.subtitle}
          </p>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {card.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon
              className={cn('mt-0.5 h-4 w-4 shrink-0', tone.text)}
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm flex flex-wrap gap-1.5 border-t border-dashed border-[var(--term-border)]">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-medium',
              tone.chip,
            )}
          >
            <span
              aria-hidden="true"
              className={cn('inline-block w-1 h-1 rounded-full', tone.dot)}
            />
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

type ConnectorProps = { top: string; bottom: string };

const Connector = ({ top, bottom }: ConnectorProps) => (
  <div className="flex lg:flex-col items-center justify-center gap-2">
    <span
      aria-hidden="true"
      className="hidden lg:block w-px h-md border-l border-dashed border-[var(--term-border)]"
    />
    <div className="flex flex-col items-center gap-1 text-center text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
      <span>{top}</span>
      <span>{bottom}</span>
    </div>
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] rotate-90 lg:rotate-0"
    >
      <ArrowRightIcon className="h-4 w-4" />
    </span>
    <span
      aria-hidden="true"
      className="hidden lg:block w-px h-md border-l border-dashed border-[var(--term-border)]"
    />
  </div>
);
