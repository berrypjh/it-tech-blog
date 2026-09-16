import { Compass, Layers, Lightbulb, type LucideIcon, Settings2 } from 'lucide-react';

import { DownArrow } from '../../../shared/icon';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneChoiceCard } from '../../../shared/tone';
import type { ChoiceId, UseReducerSharedContent } from '../content';

type Props = { content: UseReducerSharedContent['choosing'] };

const choiceIcon: Record<ChoiceId, LucideIcon> = {
  simple: Layers,
  complex: Settings2,
};

export const ChoosingBetweenThem = ({ content }: Props) => (
  <section id="choosing" aria-labelledby="heading-choosing" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="choosing"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Compass className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.choices.map((choice) => {
        const Icon = choiceIcon[choice.id];
        return (
          <li key={choice.id} className="flex">
            <ToneChoiceCard
              tone={choice.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              question={choice.question}
              lead={<DownArrow />}
              resultTone={choice.resultTone}
              result={choice.result}
              detail={
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {choice.detail}
                </p>
              }
            />
          </li>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
