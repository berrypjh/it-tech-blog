import { Group, ShieldCheck, Tag } from 'lucide-react';

import { GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { WorkTagValueCard } from '../../../shared/worktag';
import type { FragmentModeFiberContent } from '../content';

type Props = { content: FragmentModeFiberContent['workTags'] };

const cardStyle = {
  fragment: { tone: 'violet', Icon: Group },
  mode: { tone: 'emerald', Icon: ShieldCheck },
} as const;

export const WorkTagCards = ({ content }: Props) => (
  <section id="work-tags" aria-labelledby="heading-work-tags" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="work-tags"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Tag className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => {
        const { tone, Icon } = cardStyle[card.variant];
        return (
          <li key={card.id} className="flex">
            <WorkTagValueCard
              tone={tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              title={card.title}
              subtitle={card.subtitle}
              value={card.value}
              description={card.description}
            />
          </li>
        );
      })}
    </ul>

    <div className="flex justify-end">
      <GithubButton href={content.githubHref} label={content.githubCta} />
    </div>
  </section>
);
