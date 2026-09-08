import { cn } from '@it-tech-blog/utils';

import { FileText, Gauge, Link2, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { JsxTransformFlowContent } from '../content';

type Props = { content: JsxTransformFlowContent['react19'] };

const iconMap = {
  link: Link2,
  gauge: Gauge,
  fileText: FileText,
} as const;

export const React19TransformReasons = ({ content }: Props) => (
  <section aria-labelledby="heading-react19" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="react19"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Zap className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="flex items-center gap-sm">
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
        />
        {content.smallBadge}
      </span>
    </div>

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-md font-bold tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
