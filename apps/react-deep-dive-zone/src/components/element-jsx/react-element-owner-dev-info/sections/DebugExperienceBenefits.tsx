import { FeatureCardGrid, type FeatureCardItem } from '../../../shared/FeatureCardGrid';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { DebugBenefit, ReactElementOwnerDevInfoContent } from '../content';
import { MessageIcon, PanelIcon, SearchIcon, SparklesIcon } from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['benefits'] };

const iconMap = {
  message: MessageIcon,
  search: SearchIcon,
  panel: PanelIcon,
} as const;

const toItem = (card: DebugBenefit): FeatureCardItem => {
  const Icon = iconMap[card.iconName];
  return { ...card, icon: <Icon className="h-6 w-6" /> };
};

export const DebugExperienceBenefits = ({ content }: Props) => (
  <section id="benefits" aria-labelledby="heading-benefits" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="benefits"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <FeatureCardGrid items={content.cards.map(toItem)} />
  </section>
);
