import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { PersonaCard, RoadmapContent } from '../content';
import { PersonaIcon, personaIconByName } from '../icons';

type Props = { content: RoadmapContent['personas'] };

const Card = ({
  card,
  labels,
}: {
  card: PersonaCard;
  labels: { reason: string; path: string };
}) => {
  const t = toneTokens[card.tone];
  const Icon = personaIconByName[card.id];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <div className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            t.chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-md sm:text-lg font-bold tracking-tight break-keep', t.text)}>
          {card.title}
        </h3>
      </div>

      {/* 경로 flow */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.path}
        </span>
        <ol className="flex flex-wrap items-center gap-1.5">
          {card.path.map((node, i) => (
            <Fragment key={node}>
              <li>
                <span
                  className={cn(
                    'inline-block rounded-md border px-2 py-0.5 text-[11px] font-medium break-keep',
                    t.chip,
                  )}
                >
                  {node}
                </span>
              </li>
              {i < card.path.length - 1 && (
                <span aria-hidden="true" className="text-[var(--term-dim)] text-[10px]">
                  →
                </span>
              )}
            </Fragment>
          ))}
        </ol>
      </div>

      <div className="mt-auto flex flex-col gap-0.5 pt-sm border-t border-dashed border-[var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.reason}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.reason}
        </p>
      </div>
    </article>
  );
};

export const PersonaLearningPaths = ({ content }: Props) => {
  return (
    <section id="section-personas" aria-labelledby="heading-personas" className="space-y-lg">
      <SectionHeader
        id="personas"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<PersonaIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <Card card={card} labels={{ reason: content.reasonLabel, path: content.pathLabel }} />
          </li>
        ))}
      </ul>
    </section>
  );
};
