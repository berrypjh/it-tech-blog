import { cx } from '@berrypjh/react-ui';
import { Leaf, Lightbulb, Repeat, Trash2, Workflow } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LifecycleCard, PassiveEffectsContent } from '../content';

type Props = { content: PassiveEffectsContent['lifecycle'] };

const iconMap: Record<LifecycleCard['iconName'], typeof Leaf> = {
  leaf: Leaf,
  trash: Trash2,
};

export const PassiveMountUnmountSection = ({ content }: Props) => (
  <section
    id="passive-lifecycle"
    aria-labelledby="heading-passive-lifecycle"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="passive-lifecycle"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <LifecycleCardView card={content.mount} />
        <CenterSwap />
        <LifecycleCardView card={content.unmount} />
      </div>

      <aside
        className={cx(
          'mt-md flex items-start gap-sm rounded-lg border-2 p-md',
          toneTokens.sky.fill.border,
          toneTokens.sky.fill.bg,
        )}
      >
        <ToneIconBox tone="sky" size="sm" className="mt-0.5 shrink-0">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <p
          className={cx(
            'text-xsm sm:text-sm leading-relaxed break-keep font-bold',
            toneTokens.sky.fill.text,
          )}
        >
          {content.insight}
        </p>
      </aside>
    </article>
  </section>
);

const CenterSwap = () => {
  const t = toneTokens.sky;
  return (
    <div aria-hidden="true" className={cx('flex items-center justify-center py-1 md:py-0', t.text)}>
      <span
        className={cx(
          'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <Repeat className="h-5 w-5" aria-hidden="true" />
      </span>
    </div>
  );
};

const LifecycleCardView = ({ card }: { card: LifecycleCard }) => {
  const Icon = iconMap[card.iconName];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone={card.tone}>
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <div className="flex flex-col">
          <h3 className={cx('text-sm sm:text-md font-bold leading-tight', t.fill.text)}>
            {card.title}
          </h3>
          {card.subtitle && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {card.subtitle}
            </span>
          )}
        </div>
      </header>

      <span
        className={cx(
          'inline-flex items-center self-start gap-1.5 rounded-md border px-2 py-1 text-[10px] font-mono uppercase tracking-wider font-bold',
          t.chip,
        )}
      >
        <span aria-hidden="true" className={cx('inline-block h-1.5 w-1.5 rounded-full', t.dot)} />
        {card.pill}
      </span>

      <ul className="flex flex-col gap-2 mt-auto">
        {card.items.map((item, idx) => (
          <li
            key={item}
            className={cx(
              'flex items-start gap-2 rounded-md border bg-[var(--term-bg)] p-sm',
              t.border,
            )}
          >
            <span
              aria-hidden="true"
              className={cx(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
                t.chip,
              )}
            >
              {idx + 1}
            </span>
            <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
