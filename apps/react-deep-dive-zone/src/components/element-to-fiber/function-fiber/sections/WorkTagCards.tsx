import { cn } from '@it-tech-blog/utils';

import { Component, Info, SquareFunction, Tag } from 'lucide-react';

import { GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import { WorkTagValueCard } from '../../../shared/worktag';
import type { FunctionClassComponentFiberContent } from '../content';

type Content = FunctionClassComponentFiberContent['workTags'];
type Props = { content: Content };

const cardStyle = {
  function: { tone: 'emerald', Icon: SquareFunction },
  class: { tone: 'violet', Icon: Component },
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

    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => {
        const { tone, Icon } = cardStyle[card.variant];
        return (
          <li key={card.id} className="flex">
            <WorkTagValueCard
              tone={tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              title={card.title}
              value={card.value}
            />
          </li>
        );
      })}
      <li className="flex md:col-span-2 xl:col-span-1">
        <InfoCard info={content.info} />
      </li>
    </ul>

    <div className="flex justify-end">
      <GithubButton href={content.githubHref} label={content.githubCta} />
    </div>
  </section>
);

const InfoCard = ({ info }: { info: Content['info'] }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone="sky" size="md">
          <Info className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cn('font-mono text-sm sm:text-md font-extrabold tracking-tight', t.text)}>
          {info.title}
        </h3>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {info.description}
      </p>
    </article>
  );
};
