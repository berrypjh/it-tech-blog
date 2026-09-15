import { cx } from '@berrypjh/react-ui';
import { Calculator, type LucideIcon, ShieldCheck, Sparkles, TreePine } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BenefitCard, JsxTransformFlowContent } from '../content';

type Props = { content: JsxTransformFlowContent['benefits'] };

const cardIcon: Record<BenefitCard['id'], LucideIcon> = {
  data: TreePine,
  'render-input': Calculator,
  devmode: ShieldCheck,
};

export const FunctionCallBenefits = ({ content }: Props) => (
  <section aria-labelledby="heading-benefits" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="benefits"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.id];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cx(
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
