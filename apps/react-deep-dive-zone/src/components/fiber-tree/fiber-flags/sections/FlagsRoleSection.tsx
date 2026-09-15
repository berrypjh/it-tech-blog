import { cx } from '@berrypjh/react-ui';
import { Anchor, Eye, Flag, Move, Pencil } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { EFFECT_NEUTRAL, flagBorder, flagText } from '../components/effectStyles';
import type { FiberFlagsContent, FlagMiniCard } from '../content';

type Props = { content: FiberFlagsContent['flagsRole'] };

const iconMap: Record<FlagMiniCard['id'], React.ComponentType<{ className?: string }>> = {
  placement: Move,
  update: Pencil,
  ref: Anchor,
  visibility: Eye,
};

export const FlagsRoleSection = ({ content }: Props) => (
  <section id="flags-role" aria-labelledby="heading-flags-role" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flags-role"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Flag className="h-5 w-5" aria-hidden="true" />}
    />

    <article
      className={cx(
        'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        toneTokens.emerald.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl border',
            EFFECT_NEUTRAL,
            toneTokens.emerald.text,
          )}
        >
          <Flag className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="flex flex-col min-w-0">
          <code
            className={cx('font-mono text-md font-bold tracking-tight', toneTokens.emerald.text)}
          >
            {content.mainTitle}
          </code>
          <p className="text-xsm font-bold text-[var(--term-muted)] break-keep">
            {content.mainDescription}
          </p>
        </div>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.examples.map((ex) => (
          <li key={ex.id}>
            <MiniCard card={ex} />
          </li>
        ))}
      </ul>
    </article>
  </section>
);

const MiniCard = ({ card }: { card: FlagMiniCard }) => {
  const Icon = iconMap[card.id];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        flagBorder[card.id],
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex items-center justify-center w-10 h-10 rounded-lg border',
          EFFECT_NEUTRAL,
          flagText[card.id],
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <code className={cx('font-mono text-xsm font-bold tracking-tight', flagText[card.id])}>
        {card.label}
      </code>
      <span className="text-[11.5px] font-medium text-[var(--term-muted)] break-keep">
        {card.meaning}
      </span>
    </article>
  );
};
