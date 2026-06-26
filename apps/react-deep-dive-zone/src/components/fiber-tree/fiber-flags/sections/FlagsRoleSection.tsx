import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberFlagsContent, FlagMiniCard } from '../content';
import { AnchorIcon, EyeIcon, FlagIcon, LightbulbIcon, MoveIcon, PencilIcon } from '../icons';

type Props = { content: FiberFlagsContent['flagsRole'] };

const iconMap: Record<FlagMiniCard['id'], React.ComponentType<{ className?: string }>> = {
  placement: MoveIcon,
  update: PencilIcon,
  ref: AnchorIcon,
  visibility: EyeIcon,
};

export const FlagsRoleSection = ({ content }: Props) => (
  <section id="flags-role" aria-labelledby="heading-flags-role" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flags-role"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FlagIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        toneTokens.emerald.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl border',
            toneTokens.emerald.chip,
          )}
        >
          <FlagIcon className="h-6 w-6" />
        </span>
        <div className="flex flex-col min-w-0">
          <code
            className={cn('font-mono text-md font-bold tracking-tight', toneTokens.emerald.text)}
          >
            {content.mainTitle}
          </code>
          <p className="text-xsm font-bold text-[var(--term-muted)] break-keep">
            {content.mainDescription}
          </p>
        </div>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {content.examples.map((ex) => (
          <li key={ex.id}>
            <MiniCard card={ex} />
          </li>
        ))}
      </ul>
    </article>

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
  </section>
);

const MiniCard = ({ card }: { card: FlagMiniCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.id];
  return (
    <article
      className={cn(
        'flex flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-flex items-center justify-center w-9 h-9 rounded-lg border', t.chip)}
      >
        <Icon className="h-4 w-4" />
      </span>
      <code className={cn('font-mono text-xsm font-bold tracking-tight', t.text)}>
        {card.label}
      </code>
      <span className="text-[11.5px] font-medium text-[var(--term-muted)] break-keep">
        {card.meaning}
      </span>
    </article>
  );
};
