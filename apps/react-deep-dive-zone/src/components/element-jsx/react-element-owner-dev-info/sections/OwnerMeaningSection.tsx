import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  Code,
  type LucideIcon,
  MessageSquareWarning,
  Tag,
  User,
  Wrench,
} from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { OwnerInfoCard, ReactElementOwnerDevInfoContent } from '../content';

type Props = { content: ReactElementOwnerDevInfoContent['owner'] };

type DiagramStepId = ReactElementOwnerDevInfoContent['owner']['diagramSteps'][number]['id'];

const stepIcon: Record<DiagramStepId, LucideIcon> = {
  parent: User,
  jsx: Code,
  owner: Tag,
};

const cardIcon: Record<OwnerInfoCard['id'], LucideIcon> = {
  creator: User,
  warning: MessageSquareWarning,
  context: Wrench,
};

export const OwnerMeaningSection = ({ content }: Props) => (
  <section id="owner" aria-labelledby="heading-owner" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="owner"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Tag className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-stretch">
      <article
        className={cx(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          {content.diagramTitle}
        </span>

        <ol className="flex flex-col gap-1">
          {content.diagramSteps.map((step, idx) => {
            const t = toneTokens[step.tone];
            const Icon = stepIcon[step.id];
            return (
              <li key={step.id} className="flex flex-col">
                <article
                  className={cx(
                    'flex items-center gap-sm rounded-xl border p-sm',
                    'bg-[var(--term-bg)] border-[var(--term-border)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cx(
                      'inline-flex items-center justify-center w-9 h-9 rounded-lg border',
                      t.chip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <code className={cx('font-mono text-xsm font-bold tracking-tight', t.text)}>
                    {step.label}
                  </code>
                </article>
                {idx < content.diagramSteps.length - 1 && (
                  <span className="flex justify-center py-1" aria-hidden="true">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
                      <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </article>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <InfoCardView card={card} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const InfoCardView = ({ card }: { card: OwnerInfoCard }) => {
  const t = toneTokens[card.tone];
  const Icon = cardIcon[card.id];
  return (
    <article
      className={cx(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex items-center justify-center w-11 h-11 rounded-xl border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
