import { SectionHeader } from '../../../shared/section';
import { QuizAccordionCard } from '../../repo-overview/components/QuizAccordionCard';
import type { SharedContent } from '../content';
import { CircleHelpIcon } from '../icons';

type Props = { content: SharedContent['quiz'] };

export const SharedQuickQuiz = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quiz" className="space-y-md">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CircleHelpIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <QuizAccordionCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};
