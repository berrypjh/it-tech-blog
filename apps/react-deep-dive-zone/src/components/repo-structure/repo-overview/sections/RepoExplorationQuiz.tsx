import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { QuizAccordionCard } from '../components/QuizAccordionCard';
import type { RepoOverviewContent } from '../content';
import { HelpCircleIcon } from '../icons';

type Props = { content: RepoOverviewContent['quiz'] };

export const RepoExplorationQuiz = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quiz" className="space-y-md">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <QuizAccordionCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};
