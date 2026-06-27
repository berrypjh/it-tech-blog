import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EntryRouteCard, ReactPackageContent } from '../content';
import { ChevronRightIcon, ExternalLinkIcon, reactPackageIcon } from '../icons';

type Props = { content: ReactPackageContent['routes'] };

export const ApiEntryRoutes = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-routes" className="space-y-md scroll-mt-2xl">
      <SectionBadgeHeader
        id="routes"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ChevronRightIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <EntryRouteCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const EntryRouteCardView = ({ card }: { card: EntryRouteCard }) => {
  const t = toneTokens[card.tone];
  const Icon = reactPackageIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.border,
      )}
    >
      {/* 아이콘 + API 이름 */}
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3
          className={cn('text-md sm:text-lg font-bold font-mono tracking-tight truncate', t.text)}
        >
          {card.api}
        </h3>
      </header>

      {/* 진입 → 내부 파일 경로 */}
      <div
        className={cn(
          'inline-flex flex-wrap items-center gap-1.5 rounded-lg border p-2 font-mono text-[11px]',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span className="text-[var(--term-muted)] truncate">{card.route.from}</span>
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          →
        </span>
        <span className={cn('font-bold truncate', t.text)}>{card.route.to}</span>
      </div>

      {/* 설명 */}
      <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
        {card.description}
      </p>

      {/* CTA */}
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group/cta inline-flex items-center justify-center gap-2 px-md py-2 rounded-md border border-[var(--term-border)] text-xsm font-bold',
          'transition-colors mt-auto hover:bg-[var(--term-surface)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          t.text,
        )}
      >
        {card.buttonLabel}
        <span className="sr-only">(새 창에서 열림)</span>
        <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
      </a>
    </article>
  );
};
