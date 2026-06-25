import type { ComponentType, SVGProps } from 'react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import type { ToneKey } from '../../../shared/tones';
import type { ComparePoint, TestCodeContent } from '../content';
import { CodeIcon, FlaskIcon, QuoteIcon } from '../icons';

type Props = { content: TestCodeContent['comparison'] };

export const WhyTestsMatterComparison = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-comparison" className="space-y-md">
      <SectionHeader
        id="comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <CompareCardItem
          tone="sky"
          icon={CodeIcon}
          title={content.leftTitle}
          items={content.leftItems}
        />
        <CompareVs />
        <CompareCardItem
          tone="amber"
          icon={FlaskIcon}
          title={content.rightTitle}
          items={content.rightItems}
        />
      </div>

      <SectionNote icon={<QuoteIcon className="h-4 w-4" />}>{content.quote}</SectionNote>
    </section>
  );
};

type CardProps = {
  tone: ToneKey;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  items: ComparePoint[];
};

const CompareCardItem = ({ tone, icon, title, items }: CardProps) => (
  <ToneDetailCard tone={tone} icon={icon} title={title} bullets={items.map((i) => i.text)} />
);
