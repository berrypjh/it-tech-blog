import { FeatureCardGrid, type FeatureCardItem } from '../../../shared/FeatureCardGrid';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { BenefitCard, ReactElementRefReact19Content } from '../content';
import { CodeIcon, LinkIcon, PackageIcon, SparklesIcon } from '../icons';

type Props = { content: ReactElementRefReact19Content['benefits'] };

const iconMap = {
  code: CodeIcon,
  link: LinkIcon,
  package: PackageIcon,
} as const;

const toItem = (card: BenefitCard): FeatureCardItem => {
  const Icon = iconMap[card.iconName];
  return { ...card, icon: <Icon className="h-6 w-6" /> };
};

export const RefBenefits = ({ content }: Props) => (
  <section aria-labelledby="heading-benefits" className="space-y-md scroll-mt-xl">
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
