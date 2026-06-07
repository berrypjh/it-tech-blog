import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { FreezeCard, ReactElementOwnerDevInfoContent } from '../content';
import { LockIcon, ShieldCheckIcon, UnlockIcon } from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['freeze'] };

const iconMap = {
  unlock: UnlockIcon,
  lock: LockIcon,
} as const;

export const ObjectFreezeSection = ({ content }: Props) => (
  <section aria-labelledby="heading-freeze" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="freeze"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LockIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-gradient-to-r from-teal-50 via-cyan-50 to-sky-50',
        'dark:from-teal-950/40 dark:via-cyan-950/40 dark:to-sky-950/40',
        'border border-teal-200/70 dark:border-teal-800/60',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/15 text-teal-700 dark:text-teal-300 shrink-0"
      >
        <ShieldCheckIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-teal-900 dark:text-teal-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

const CardView = ({ card }: { card: FreezeCard }) => {
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
      <header className="flex items-center gap-sm">
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
      </header>
      <CodePreviewPanel code={card.code} language="JS" />
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
