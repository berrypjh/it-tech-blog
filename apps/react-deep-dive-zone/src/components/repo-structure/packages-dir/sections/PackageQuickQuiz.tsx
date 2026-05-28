import { SectionHeader } from '../../../shared/SectionHeader';
import { QuizAccordionCard } from '../../repo-overview/components/QuizAccordionCard';
import type { PackagesDirectoryContent } from '../content';
import { CheckCircleIcon } from '../icons';

type Props = { content: PackagesDirectoryContent['quiz'] };

export const PackageQuickQuiz = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quiz" className="space-y-md">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckCircleIcon className="h-5 w-5" />}
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
