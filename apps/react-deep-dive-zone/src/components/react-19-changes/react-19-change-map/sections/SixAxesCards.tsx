import { cx } from '@berrypjh/react-ui';
import {
  Activity,
  Code,
  FileText,
  Layers,
  Lightbulb,
  Loader,
  type LucideIcon,
  RefreshCw,
  Server,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LayerId, React19ChangeMapContent } from '../content';

type Props = { content: React19ChangeMapContent['axes'] };

const axisIcon: Record<LayerId, LucideIcon> = {
  update: RefreshCw,
  render: Loader,
  element: Code,
  dom: FileText,
  server: Server,
  priority: Activity,
};

export const SixAxesCards = ({ content }: Props) => (
  <section id="axes" aria-labelledby="heading-axes" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="axes"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.cards.map((card) => {
        const Icon = axisIcon[card.id];
        return (
          <ToneCardItem
            key={card.id}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.num}
            badge={card.features}
          >
            <div className="flex min-w-0 flex-col gap-2">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[card.tone].text,
                )}
              >
                {card.title}
              </h3>
              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                {card.question}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
