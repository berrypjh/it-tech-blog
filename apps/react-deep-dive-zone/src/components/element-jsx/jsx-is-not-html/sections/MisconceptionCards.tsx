import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { JsxIsNotHtmlContent, MisconceptionCard } from '../content';
import {
  BoxesIcon,
  CheckCircleIcon,
  HelpCircleIcon,
  MonitorIcon,
  NetworkIcon,
  XCircleIcon,
} from '../icons';

type Props = { content: JsxIsNotHtmlContent['misconception'] };

const sideIcon = {
  box: BoxesIcon,
  network: NetworkIcon,
  browser: MonitorIcon,
} as const;

export const MisconceptionCards = ({ content }: Props) => (
  <section
    id="misconception"
    aria-labelledby="heading-misconception"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="misconception"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: MisconceptionCard }) => {
  const SideIcon = sideIcon[card.iconName];
  const iconTone = toneTokens[card.iconTone];
  return (
    <article
      className={cn(
        'group relative flex flex-1 flex-col rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'overflow-hidden transition-all hover:-translate-y-0.5 hover:border-[var(--term-muted)]',
      )}
    >
      {/* 오해 영역 */}
      <div
        className={cn(
          'flex flex-col gap-2 p-md',
          'bg-rose-50/70 dark:bg-rose-950/30',
          'border-b border-dashed border-[var(--term-border)]',
        )}
      >
        <div className="flex items-start gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-full border',
              'border-rose-300/70 bg-rose-100 text-rose-700',
              'dark:border-rose-800/70 dark:bg-rose-950/60 dark:text-rose-300',
            )}
          >
            <XCircleIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span
              className={cn(
                'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                'border-rose-300/80 bg-rose-100 text-rose-700',
                'dark:border-rose-800/70 dark:bg-rose-950/60 dark:text-rose-300',
              )}
            >
              {card.badgeWrong}
            </span>
            <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
              {card.wrong}
            </p>
          </div>
        </div>
      </div>

      {/* 정확한 설명 영역 */}
      <div
        className={cn('flex flex-col gap-2 p-md flex-1', 'bg-emerald-50/40 dark:bg-emerald-950/20')}
      >
        <div className="flex items-start gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-full border',
              'border-emerald-300/70 bg-emerald-100 text-emerald-700',
              'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
            )}
          >
            <CheckCircleIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <span
              className={cn(
                'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                'border-emerald-300/80 bg-emerald-100 text-emerald-700',
                'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
              )}
            >
              {card.badgeRight}
            </span>
            <p className="text-sm leading-snug text-[var(--term-fg)] break-keep">{card.right}</p>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.note}
            </p>
          </div>
        </div>

        {/* 우측 하단 보조 일러스트 아이콘 */}
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute bottom-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-lg border',
            iconTone.chip,
            'opacity-70',
          )}
        >
          <SideIcon className="h-5 w-5" />
        </span>
      </div>
    </article>
  );
};
