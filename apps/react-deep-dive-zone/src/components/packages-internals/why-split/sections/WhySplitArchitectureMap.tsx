import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneBadge } from '../../../start/_shared/ToneBadge';
import { toneTokens } from '../../../start/_shared/tones';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import type { WhySplitContent } from '../content';
import { MapIcon } from '../icons';

type Props = {
  content: WhySplitContent['fullMap'];
  architecture: WhySplitContent['architecture'];
  sectionId: string;
};

export const WhySplitArchitectureMap = ({ content, architecture, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-architecture"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="architecture"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.3fr)_minmax(0,_1fr)] gap-md items-stretch">
        {/* 좌측 보조 카드 */}
        <ul className="flex flex-col gap-md order-2 lg:order-1">
          {architecture.leftCards.map((card) => {
            const tone = toneTokens[card.tone];
            return (
              <li key={card.id}>
                <article
                  className={cn(
                    'flex h-full flex-col gap-2 rounded-xl border p-md',
                    'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                    'border-[var(--term-border)] transition-colors',
                    tone.borderHover,
                  )}
                >
                  <ToneBadge tone={card.tone}>{card.title}</ToneBadge>
                  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {card.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        {/* 중앙 다이어그램 */}
        <div className="order-1 lg:order-2">
          <ArchitectureDiagram
            mainFlow={architecture.mainFlow}
            side={architecture.side}
            flowLabel={content.flowLabel}
            sideLabel={content.sideLabel}
            a11yFlow={content.a11yFlow}
          />
        </div>

        {/* 우측 설명 카드 */}
        <ul className="flex flex-col gap-md order-3">
          {architecture.rightCards.map((card) => {
            const tone = toneTokens[card.tone];
            return (
              <li key={card.id}>
                <article
                  className={cn(
                    'group flex h-full flex-col gap-1.5 rounded-xl border p-md',
                    'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                    'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
                    tone.borderHover,
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn('inline-block w-1.5 h-1.5 rounded-full', tone.dot)}
                    />
                    <h3 className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>
                      {card.name}
                    </h3>
                  </span>
                  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {card.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
