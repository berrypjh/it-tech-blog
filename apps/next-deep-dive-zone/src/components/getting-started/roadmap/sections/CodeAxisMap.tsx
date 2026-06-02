import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { AxisCard, RoadmapContent } from '../content';
import { AxisIcon, axisIconByName } from '../icons';

type Props = { content: RoadmapContent['axes'] };

const Card = ({ card, labels }: { card: AxisCard; labels: RoadmapContent['axes']['labels'] }) => {
  const t = toneTokens[card.tone];
  const Icon = axisIconByName[card.id];
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
        <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', t.text)}>{card.title}</h3>
      </div>

      {/* 경로 또는 키워드 */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {card.path ? labels.path : labels.keywords}
        </span>
        {card.path ? (
          <code className="block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
            {card.path}
          </code>
        ) : (
          <ul className="flex flex-wrap gap-1.5">
            {card.keywords?.map((k) => (
              <li key={k}>
                <code
                  className={cn(
                    'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                    t.chip,
                  )}
                >
                  {k}
                </code>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 대표 파일 */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.files}
        </span>
        <ul className="flex flex-wrap gap-1.5">
          {card.files.map((f) => (
            <li key={f}>
              <code className="inline-block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-1.5 py-0.5 font-mono text-[10.5px] text-[var(--term-muted)] [overflow-wrap:anywhere]">
                {f}
              </code>
            </li>
          ))}
        </ul>
      </div>

      {/* 역할 */}
      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{card.role}</p>

      {/* 읽기 질문 */}
      <div className={cn('mt-auto flex flex-col gap-0.5 rounded-md border p-sm', t.border)}>
        <span className={cn('text-[10px] uppercase tracking-wider font-bold', t.text)}>
          {labels.question}
        </span>
        <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {card.question}
        </p>
      </div>
    </article>
  );
};

export const CodeAxisMap = ({ content }: Props) => {
  return (
    <section id="section-axes" aria-labelledby="heading-axes" className="space-y-lg">
      <SectionHeader
        id="axes"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<AxisIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <Card card={card} labels={content.labels} />
          </li>
        ))}
      </ul>
    </section>
  );
};
